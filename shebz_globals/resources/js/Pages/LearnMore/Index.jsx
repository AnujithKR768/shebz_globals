import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, items }) {
    const del = (id) => {
        if (confirm("Delete this record?")) {
            router.delete(route("learnmore.admin.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Learn More Content">
            <Head title="Learn More Content" />

            <div className="max-w-7xl mx-auto bg-white shadow rounded-md overflow-hidden border">

                {/* TOP BAR */}
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        Learn More List
                    </h1>

                    <Link
                        href={route("learnmore.admin.create")}
                        className="bg-[#0025cc] text-white px-4 py-2 rounded-md hover:opacity-90"
                    >
                        + Add Learn More
                    </Link>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0025cc] text-white text-sm">
                                <th className="p-3 text-left">S.No</th>
                                <th className="p-3 text-left">Image</th>
                                <th className="p-3 text-left">Hero Title</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Edit</th>
                                <th className="p-3 text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items?.data?.length > 0 ? (
                                items.data.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-gray-50 text-sm"
                                    >
                                        {/* S.No */}
                                        <td className="p-3">
                                            {(items.current_page - 1) *
                                                items.per_page +
                                                index +
                                                1}
                                        </td>

                                        {/* Image */}
                                        <td className="p-3">
                                            {item.top_image ? (
                                                <img
                                                    src={`/storage/${item.top_image}?v=${Date.now()}`}
                                                    className="h-12 w-20 object-cover rounded border"
                                                    alt="img"
                                                    onError={(e) =>
                                                        (e.currentTarget.style.display =
                                                            "none")
                                                    }
                                                />
                                            ) : (
                                                <span className="text-gray-400">
                                                    No Image
                                                </span>
                                            )}
                                        </td>

                                        {/* Hero Title */}
                                        <td className="p-3 font-semibold text-gray-800">
                                            {item.hero_title || "No Title"}
                                        </td>

                                        {/* Status */}
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

                                        {/* Edit */}
                                        <td className="p-3 text-center">
                                            <Link
                                                href={route(
                                                    "learnmore.admin.edit",
                                                    item.id
                                                )}
                                                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                            >
                                                Edit
                                            </Link>
                                        </td>

                                        {/* Delete */}
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
                                        colSpan="6"
                                        className="p-6 text-center text-gray-500"
                                    >
                                        No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}
                {items?.links && (
                    <div className="flex justify-center gap-2 p-4 flex-wrap">
                        {items.links.map((link, i) => (
                            <button
                                key={i}
                                disabled={!link.url}
                                onClick={() =>
                                    link.url &&
                                    router.visit(link.url, {
                                        preserveScroll: true,
                                    })
                                }
                                className={`px-4 py-2 border rounded transition ${
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
