import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useRef, useState } from "react";
import { BiCategory } from "react-icons/bi";

export default function ServiceAdd() {
    const fileInput = useRef(null);
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, reset, errors } = useForm({
        icon: null,
        title: "",
        Category: "",
        description: "",
        meta_title: "",
        meta_description: "",
    });

    /* =====================================================
       HANDLE FILE CHANGE
    ===================================================== */
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("icon", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    /* =====================================================
       SUBMIT
    ===================================================== */
    const submit = (e) => {
        e.preventDefault();

        if (!data.icon) {
            alert("Please select an image");
            return;
        }

        post(route("service.store"), {
            forceFormData: true,
            preserveScroll: true,

            onSuccess: () => {
                reset();
                setPreview(null);

                if (fileInput.current) {
                    fileInput.current.value = "";
                }
            },
        });
    };

    return (
        <AuthenticatedLayout header="Add Service">
            <Head title="Add Service" />

            <div className="max-w-4xl mx-auto p-6">

                {/* PAGE TITLE */}
                <h1 className="text-2xl font-bold mb-6">
                    Add New Service
                </h1>

                {/* FORM */}
                <form
                    onSubmit={submit}
                    className="bg-white p-6 rounded-lg border space-y-5"
                >

                    {/* ICON */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Service Icon
                        </label>

                        <input
                            ref={fileInput}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border p-2 w-full"
                        />

                        {errors.icon && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.icon}
                            </p>
                        )}

                        {/* IMAGE PREVIEW */}
                        {preview && (
                            <div className="mt-3">
                                <p className="text-xs text-gray-500 mb-1">
                                    Preview:
                                </p>
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="h-24 w-24 object-contain border rounded"
                                />
                            </div>
                        )}
                    </div>

                    {/* TITLE */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Service Title
                        </label>

                        <input
                            type="text"
                            className="border p-2 w-full rounded"
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                            placeholder="Enter service title"
                        />

                        {errors.title && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/* CATEGORY */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Service Category
                        </label>

                        <select
                            value={data.category}
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                            className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Category</option>
                            <option value="Website">Website</option>
                            <option value="SEO">SEO</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Socialmedia">Social Media</option>
                        </select>

                        {errors.category && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.category}
                            </p>
                        )}
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Service Description
                        </label>

                        <textarea
                            rows="4"
                            className="border p-2 w-full rounded text-justify"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            placeholder="Enter service description"
                        />

                        {errors.description && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* META  */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Meta Title
                        </label>

                        <input
                            type="text"
                            className="border p-2 w-full rounded"
                            value={data.meta_title}
                            onChange={(e) =>
                                setData("meta_title", e.target.value)
                            }
                            placeholder="Enter meta title"
                        />

                        {errors.meta_title && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.meta_title}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Meta Description
                        </label>

                        <textarea
                            rows="3"
                            className="border p-2 w-full rounded text-justify"
                            value={data.meta_description}
                            onChange={(e) =>
                                setData("meta_description", e.target.value)
                            }
                            placeholder="Enter meta description"
                        />

                        {errors.meta_description && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.meta_description}
                            </p>
                        )}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-between items-center pt-4">

                        <Link
                            href={route("service")}
                            className="text-gray-600 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
                        >
                            {processing ? "Uploading..." : "Add Service"}
                        </button>

                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
