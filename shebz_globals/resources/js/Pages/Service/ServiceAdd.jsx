import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function ServiceAdd() {
    const fileInput = useRef(null);
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, reset, errors } = useForm({
        icon: null,
        title: "",
        description: "",
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
