import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from "@inertiajs/react";
import { useRef } from "react";

export default function Service({ services }) {
    const fileInput = useRef(null);

    const { data, setData, post, processing, reset, errors } = useForm({
        icon: null,
        title: "",
        description: "",
    });

    const { delete: destroy } = useForm();

    const submit = (e) => {
        e.preventDefault();

        if (!data.icon) {
            alert("Please select an image");
            return;
        }

        post(route("service.store"), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                if (fileInput.current) {
                    fileInput.current.value = "";
                }
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-7xl mx-auto p-6">

                <h1 className="text-2xl font-bold mb-6">Our Services</h1>

                {/* ADD FORM */}
                <form
                    onSubmit={submit}
                    className="bg-white p-6 rounded-lg border space-y-4 mb-10"
                >
                    <input
                        ref={fileInput}
                        type="file"
                        accept="image/*"
                        onChange={(e) => setData("icon", e.target.files[0])}
                        className="border p-2 w-full"
                    />
                    {errors.icon && <p className="text-red-600">{errors.icon}</p>}

                    <input
                        type="text"
                        placeholder="Service Title"
                        className="border p-2 w-full"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    {errors.title && <p className="text-red-600">{errors.title}</p>}

                    <textarea
                        rows="4"
                        placeholder="Service Description"
                        className="border p-2 w-full text-justify"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {errors.description && (
                        <p className="text-red-600">{errors.description}</p>
                    )}

                    <button
                        disabled={processing}
                        className="bg-[#0025cc] text-white px-6 py-2 rounded disabled:opacity-50"
                    >
                        {processing ? "Uploading..." : "Add Service"}
                    </button>
                </form>

                {/* TABLE */}
                <div className="bg-white rounded-lg border overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#0025cc] text-white">
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Icon</th>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Edit</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {services.data.map((service) => (
                                <tr key={service.id} className="border-t">
                                    <td className="px-4 py-2">{service.id}</td>

                                    <td className="px-4 py-2">
                                        <img
                                            src={`/storage/${service.icon}`}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </td>

                                    <td className="px-4 py-2 font-semibold">
                                        {service.title}
                                    </td>

                                    <td className="px-4 py-2 text-justify">
                                        {service.description}
                                    </td>

                                    <td className="px-4 py-2 text-center">
                                        <Link
                                            href={route("service.edit", service.id)}
                                            className="bg-green-600 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </Link>
                                    </td>

                                    <td className="px-4 py-2 text-center">
                                        <button
                                            onClick={() =>
                                                confirm("Delete service?") &&
                                                destroy(route("service.destroy", service.id))
                                            }
                                            className="bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* PAGINATION */}
                    {services.links.length > 3 && (
                        <div className="flex flex-wrap gap-2 justify-center mt-6">
                            {services.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || "#"}
                                    preserveScroll
                                    className={`px-4 py-2 rounded border text-sm ${
                                        link.active
                                            ? "bg-[#0025cc] text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
                                    } ${!link.url && "opacity-50 cursor-not-allowed"}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
