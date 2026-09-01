import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from "@inertiajs/react";
import { useRef } from "react";

export default function ServiceEdit({ service }) {
    const fileInput = useRef(null);

    const { data, setData, post, processing, errors } = useForm({
        _method: "put",
        title: service?.title || "",
        description: service?.description || "",
        icon: null,
        category: service?.category || "",
        meta_title: service?.meta_title || "",
        meta_description: service?.meta_description || "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("service.update", service.id), {
            forceFormData: true,

            onSuccess: () => {
                if (fileInput.current) {
                    fileInput.current.value = "";
                }
            },
        });
    };

    if (!service) {
        return (
            <AuthenticatedLayout>
                <div className="max-w-4xl mx-auto p-8 text-center">
                    <p className="text-gray-500">
                        Service not found.
                    </p>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout header="Edit Service">
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto p-6 md:p-8 bg-white border rounded-xl shadow-sm">

                {/* PAGE TITLE */}
                <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
                    Edit Service
                </h1>

                <form onSubmit={submit} className="space-y-6">

                    {/* CURRENT ICON */}
                    <div className="flex justify-center">
                        {service.icon ? (
                            <img
                                src={`/storage/${service.icon}`}
                                alt={service.title || "Service Icon"}
                                className="w-28 h-28 object-contain border rounded-lg p-2 bg-gray-50"
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-lg text-gray-400 border">
                                No Image
                            </div>
                        )}
                    </div>

                    {/* ICON UPLOAD */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Update Icon (optional)
                        </label>

                        <input
                            ref={fileInput}
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setData("icon", e.target.files[0])
                            }
                            className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
                        />

                        {errors.icon && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.icon}
                            </p>
                        )}
                    </div>

                    {/* SERVICE TITLE */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Service Title
                        </label>

                        <input
                            type="text"
                            className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
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

                    {/* SERVICE CATEGORY */}
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
                            Description
                        </label>

                        <textarea
                            rows="6"
                            className="border p-2 w-full rounded text-justify focus:ring-2 focus:ring-blue-500"
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

                    {/* META TITLE */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Meta Title
                        </label>

                        <input
                            type="text"
                            className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
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

                    {/* META DESCRIPTION */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Meta Description
                        </label>

                        <textarea
                            rows="3"
                            className="border p-2 w-full rounded text-justify focus:ring-2 focus:ring-blue-500"
                            value={data.meta_description}
                            onChange={(e) =>
                                setData(
                                    "meta_description",
                                    e.target.value
                                )
                            }
                            placeholder="Enter meta description"
                        />

                        {errors.meta_description && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.meta_description}
                            </p>
                        )}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-8 py-2 rounded hover:opacity-90 disabled:opacity-60"
                        >
                            {processing
                                ? "Updating..."
                                : "Update Service"}
                        </button>

                        <Link
                            href={route("service")}
                            className="px-8 py-2 border rounded hover:bg-gray-100 text-center"
                        >
                            Cancel
                        </Link>

                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
