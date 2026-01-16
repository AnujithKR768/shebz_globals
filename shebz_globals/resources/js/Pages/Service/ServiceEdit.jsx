import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from "@inertiajs/react";

export default function ServiceEdit({ service }) {
    const { data, setData, post, processing, errors } = useForm({
        title: service.title || "",
        description: service.description || "",
        icon: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("service.update", service.id), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto p-8 bg-white border rounded-xl shadow-sm">

                <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
                    Edit Service
                </h1>

                <form onSubmit={submit} className="space-y-6">

                    {/* CURRENT ICON */}
                    <div className="flex justify-center">
                        <img
                            src={`/storage/${service.icon}`}
                            alt="Service Icon"
                            className="w-28 h-28 object-contain border rounded-lg p-2"
                        />
                    </div>

                    {/* ICON UPLOAD */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Update Icon (optional)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData("icon", e.target.files[0])}
                            className="border p-2 w-full rounded"
                        />
                        {errors.icon && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.icon}
                            </p>
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
                            onChange={(e) => setData("title", e.target.value)}
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
                            Description
                        </label>
                        <textarea
                            rows="6"
                            className="border p-2 w-full rounded text-justify"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex justify-center gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-8 py-2 rounded hover:opacity-90 disabled:opacity-60"
                        >
                            {processing ? "Updating..." : "Update Service"}
                        </button>

                        <Link
                            href={route("service")}
                            className="px-8 py-2 border rounded hover:bg-gray-100"
                        >
                            Cancel
                        </Link>
                    </div>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}
