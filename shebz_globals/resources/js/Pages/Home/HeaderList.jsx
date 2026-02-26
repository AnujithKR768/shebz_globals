import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function HeaderList({ auth, items }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this header?")) {
            router.delete(route("homeheader.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Header Content">
            <Head title="Header Content" />

            <div className="max-w-7xl mx-auto bg-white shadow rounded-md overflow-hidden border">

                {/* TOP BAR */}
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        Header List
                    </h1>

                    <Link
                        href={route("homeheader.create")}
                        className="bg-[#0025cc] text-white px-4 py-2 rounded-md hover:opacity-90"
                    >
                        + Add Header
                    </Link>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0025cc] text-white text-sm">
                                <th className="p-3 text-left">S.No</th>
                                <th className="p-3 text-left">Image</th>
                                <th className="p-3 text-left">Title</th>
                                <th className="p-3 text-left">Description</th>
                                <th className="p-3 text-center">Edit</th>
                                <th className="p-3 text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {(items?.data || []).map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="border-b hover:bg-gray-50 text-sm"
                                >
                                    {/* S.No */}
                                    <td className="p-3">
                                        {(items.current_page - 1) * items.per_page + index + 1}
                                    </td>

                                    {/* Image */}
                                    <td className="p-3">
                                        {item.background_image ? (
                                            <img
                                                src={`/storage/${item.background_image}`}
                                                alt="image"
                                                className="h-10 w-14 object-contain rounded"
                                            />
                                        ) : (
                                            <span className="text-gray-400">No Image</span>
                                        )}
                                    </td>

                                    {/* Title */}
                                    <td className="p-3 font-semibold text-gray-800">
                                        {item.hero_title}
                                    </td>

                                    {/* Description */}
                                    <td className="p-3 text-gray-600">
                                        {(item.hero_paragraph1 || "").length > 100
                                            ? item.hero_paragraph1.substring(0, 100) + "..."
                                            : item.hero_paragraph1}
                                    </td>

                                    {/* Edit */}
                                    <td className="p-3 text-center">
                                        <Link
                                            href={route("homeheader.edit", item.id)}
                                            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                        >
                                            Edit
                                        </Link>
                                    </td>

                                    {/* Delete */}
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {(items?.data || []).length === 0 && (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center text-gray-500">
                                        No Header Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}
                {items && (
                    <div className="flex justify-center gap-2 p-4">
                        <button
                            disabled={!items.prev_page_url}
                            onClick={() => router.visit(items.prev_page_url)}
                            className={`px-4 py-2 border rounded ${
                                items.prev_page_url
                                    ? "bg-white hover:bg-gray-100"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            « Previous
                        </button>

                        {Array.from({ length: items.last_page }, (_, i) => i + 1).map(
                            (page) => (
                                <button
                                    key={page}
                                    onClick={() => router.visit(`${items.path}?page=${page}`)}
                                    className={`px-4 py-2 border rounded ${
                                        page === items.current_page
                                            ? "bg-[#0025cc] text-white"
                                            : "bg-white hover:bg-gray-100"
                                    }`}
                                >
                                    {page}
                                </button>
                            )
                        )}

                        <button
                            disabled={!items.next_page_url}
                            onClick={() => router.visit(items.next_page_url)}
                            className={`px-4 py-2 border rounded ${
                                items.next_page_url
                                    ? "bg-white hover:bg-gray-100"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            Next »
                        </button>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
