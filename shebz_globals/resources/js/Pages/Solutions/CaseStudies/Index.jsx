import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, items }) {
    const del = (id) => {
        if (confirm("Delete this Case Study?")) {
            router.delete(route("casestudy.admin.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    const rows = items?.data ?? [];

    return (
        <AuthenticatedLayout user={auth.user} header="Case Studies">
            <Head title="Case Studies" />

            <div className="max-w-6xl mx-auto bg-white shadow rounded-md overflow-hidden border">
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center p-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        Case Studies & Highlights
                    </h1>

                    <Link
                        href={route("casestudy.admin.create")}
                        className="bg-[#0025cc] text-white px-4 py-2 rounded-md hover:opacity-90 text-center"
                    >
                        + Add Case Study
                    </Link>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0025cc] text-white text-sm">
                                <th className="p-3 text-left">S.No</th>
                                <th className="p-3 text-left">Text</th>
                                <th className="p-3 text-left">Position</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Edit</th>
                                <th className="p-3 text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows.length > 0 ? (
                                rows.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-gray-50 text-sm"
                                    >
                                        {/* SERIAL */}
                                        <td className="p-3 whitespace-nowrap">
                                            {(items.current_page - 1) *
                                                items.per_page +
                                                index +
                                                1}
                                        </td>

                                        {/* TEXT */}
                                        <td className="p-3 text-gray-800 max-w-xs">
                                            <div className="line-clamp-3">
                                                {item.text}
                                            </div>
                                        </td>

                                        {/* POSITION */}
                                        <td className="p-3 whitespace-nowrap">
                                            {item.position}
                                        </td>

                                        {/* STATUS */}
                                        <td className="p-3 whitespace-nowrap">
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
                                        <td className="p-3 text-center whitespace-nowrap">
                                            <Link
                                                href={route(
                                                    "casestudy.admin.edit",
                                                    item.id
                                                )}
                                                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                            >
                                                Edit
                                            </Link>
                                        </td>

                                        {/* DELETE */}
                                        <td className="p-3 text-center whitespace-nowrap">
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
                                        colSpan="6"
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
                {items?.links && items.links.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 p-4">
                        {items.links.map((link, i) => (
                            <button
                                key={i}
                                disabled={!link.url}
                                onClick={() =>
                                    link.url && router.visit(link.url)
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
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
