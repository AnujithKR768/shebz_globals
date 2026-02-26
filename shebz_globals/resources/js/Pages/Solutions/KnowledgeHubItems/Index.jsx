import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, items }) {
    const safeItems = items?.data || [];

    const del = (id) => {
        if (confirm("Delete this Knowledge Hub Item?")) {
            router.delete(route("knowledgehubitem.admin.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Knowledge Hub Items">
            <Head title="Knowledge Hub Items" />

            <div className="max-w-7xl mx-auto bg-white shadow rounded-md overflow-hidden border">

                {/* TOP BAR */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        Knowledge Hub Items List
                    </h1>

                    <Link
                        href={route("knowledgehubitem.admin.create")}
                        className="bg-[#0025cc] text-white px-4 py-2 rounded-md hover:opacity-90 w-full sm:w-auto text-center"
                    >
                        + Add Item
                    </Link>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0025cc] text-white text-sm">
                                <th className="p-3 text-left">S.No</th>
                                <th className="p-3 text-left">Hub</th>
                                <th className="p-3 text-left">Text</th>
                                <th className="p-3 text-left">Position</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Edit</th>
                                <th className="p-3 text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {safeItems.length > 0 ? (
                                safeItems.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-gray-50 text-sm"
                                    >
                                        {/* S.NO */}
                                        <td className="p-3">
                                            {(items.current_page - 1) *
                                                items.per_page +
                                                index +
                                                1}
                                        </td>

                                        {/* HUB */}
                                        <td className="p-3 font-semibold">
                                            {item.knowledge_hub?.title || "-"}
                                        </td>

                                        {/* TEXT */}
                                        <td className="p-3 text-gray-700 max-w-xs truncate">
                                            {item.text || "-"}
                                        </td>

                                        {/* POSITION */}
                                        <td className="p-3">
                                            {item.position ?? "-"}
                                        </td>

                                        {/* STATUS */}
                                        <td className="p-3">
                                            {item.is_active ? (
                                                <span className="text-green-700 font-semibold">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="text-gray-500">
                                                    Inactive
                                                </span>
                                            )}
                                        </td>

                                        {/* EDIT */}
                                        <td className="p-3 text-center">
                                            <Link
                                                href={route(
                                                    "knowledgehubitem.admin.edit",
                                                    item.id
                                                )}
                                                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                            >
                                                Edit
                                            </Link>
                                        </td>

                                        {/* DELETE */}
                                        <td className="p-3 text-center">
                                            <button
                                                onClick={() => del(item.id)}
                                                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
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
                                        className="p-6 text-center text-gray-500"
                                    >
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}
                {items?.links?.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 p-4">
                        {items.links.map((link, i) => (
                            <button
                                key={i}
                                disabled={!link.url}
                                onClick={() =>
                                    link.url && router.visit(link.url, { preserveScroll: true })
                                }
                                className={`px-4 py-2 border rounded text-sm ${
                                    link.active
                                        ? "bg-[#0025cc] text-white"
                                        : "bg-white hover:bg-gray-100"
                                } ${
                                    !link.url
                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        : ""
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
