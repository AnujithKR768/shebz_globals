import React from "react";
import { Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ServiceTable({ services }) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = (id) => {
        if (!id) return;

        if (confirm("Are you sure you want to delete this service?")) {
            destroy(route("service.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    const hasData = services?.data?.length > 0;

    return (
        <AuthenticatedLayout header="Services">

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Service List
                    </h2>

                    <Link
                        href="/services/create"
                        className="bg-[#0025cc] hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium"
                    >
                        + Add Service
                    </Link>
                </div>

                {/* TABLE WRAPPER */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">
                        <thead className="bg-[#0025cc] text-white text-sm">
                            <tr>
                                <th className="px-4 py-3 text-left">S.No</th>
                                <th className="px-4 py-3 text-left">Icon</th>
                                <th className="px-4 py-3 text-left">Title</th>
                                <th className="px-4 py-3 text-left">Category</th>
                                <th className="px-4 py-3 text-left">Description</th>
                                <th className="px-4 py-3 text-center">Edit</th>
                                <th className="px-4 py-3 text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {hasData ? (
                                services.data.map((service, index) => (
                                    <tr
                                        key={service.id}
                                        className="border-t hover:bg-gray-50 text-sm"
                                    >
                                        {/* S.NO */}
                                        <td className="px-4 py-3">
                                            {(services.current_page - 1) *
                                                services.per_page +
                                                index +
                                                1}
                                        </td>

                                        {/* ICON */}
                                        <td className="px-4 py-3">
                                            {service.icon ? (
                                                <img
                                                    src={`/storage/${service.icon}`}
                                                    alt={service.title || "Service"}
                                                    className="w-10 h-10 object-contain"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <span className="text-gray-400 text-xs">
                                                    No Image
                                                </span>
                                            )}
                                        </td>

                                        {/* TITLE */}
                                        <td className="px-4 py-3 font-semibold text-gray-800">
                                            {service.title || "—"}
                                        </td>

                                        {/* CATEGORY */}
                                        <td className="px-4 py-3">
                                            {service.category ? (
                                                <span
                                                    className="
                                                        inline-block
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        bg-blue-100
                                                        text-blue-700
                                                        text-xs
                                                        font-semibold
                                                        whitespace-nowrap
                                                    "
                                                >
                                                    {service.category}
                                                </span>
                                            ) : (
                                                <span className="text-gray-400 text-xs">
                                                    Not Set
                                                </span>
                                            )}
                                        </td>

                                        {/* DESCRIPTION */}
                                        <td className="px-4 py-3 text-gray-600 max-w-xs">
                                            <div className="line-clamp-3">
                                                {service.description
                                                    ? service.description.length > 120
                                                        ? service.description.slice(0, 120) + "..."
                                                        : service.description
                                                    : "—"}
                                            </div>
                                        </td>

                                        {/* EDIT */}
                                        <td className="px-4 py-3 text-center">
                                            <Link
                                                href={route(
                                                    "service.edit",
                                                    service.id
                                                )}
                                                className="
                                                    bg-green-600
                                                    hover:bg-green-700
                                                    text-white
                                                    px-3
                                                    py-1
                                                    rounded
                                                    text-sm
                                                "
                                            >
                                                Edit
                                            </Link>
                                        </td>

                                        {/* DELETE */}
                                        <td className="px-4 py-3 text-center">
                                            <button
                                                disabled={processing}
                                                onClick={() =>
                                                    handleDelete(service.id)
                                                }
                                                className="
                                                    bg-red-600
                                                    hover:bg-red-700
                                                    text-white
                                                    px-3
                                                    py-1
                                                    rounded
                                                    text-sm
                                                    disabled:opacity-50
                                                "
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No services found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}
                {services?.last_page > 1 && (
                    <div className="flex flex-wrap gap-2 justify-center my-6 px-4">
                        {services.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                preserveScroll
                                className={`px-4 py-2 rounded border text-sm transition ${
                                    link.active
                                        ? "bg-[#0025cc] text-white border-[#0025cc]"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                } ${!link.url ? "opacity-50 pointer-events-none" : ""}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
