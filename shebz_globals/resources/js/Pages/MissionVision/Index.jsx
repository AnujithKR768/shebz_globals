import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

/* =====================================================
   TABLE BOX COMPONENT
===================================================== */
function TableBox({ title, items }) {
    const handleDelete = (id) => {
        if (confirm("Delete this record?")) {
            router.delete(route("missionvision.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    const rows = items?.data || [];

    return (
        <div className="bg-white shadow rounded-md overflow-hidden border">

            {/* TOP BAR */}
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-gray-800">{title}</h1>

                <Link
                    href={route("missionvision.create")}
                    className="bg-[#0025cc] text-white px-4 py-2 rounded-md hover:opacity-90"
                >
                    + Add
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
                        {rows.length > 0 ? (
                            rows.map((item, index) => (
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

                                    {/* IMAGE */}
                                    <td className="p-3">
                                        {item.image ? (
                                            <img
                                                src={`/storage/${item.image}`}
                                                alt="mission-vision"
                                                className="h-12 w-20 object-cover rounded border"
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

                                    {/* TITLE */}
                                    <td className="p-3 font-semibold text-gray-800">
                                        {item.title || "—"}
                                    </td>

                                    {/* DESCRIPTION */}
                                    <td className="p-3 text-gray-600">
                                        {(item.description || "").length > 80
                                            ? item.description.substring(0, 80) +
                                              "..."
                                            : item.description || "—"}
                                    </td>

                                    {/* EDIT */}
                                    <td className="p-3 text-center">
                                        <Link
                                            href={route(
                                                "missionvision.edit",
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
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
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
            {items && (
                <div className="flex justify-center gap-2 p-4 flex-wrap">

                    <button
                        disabled={!items.prev_page_url}
                        onClick={() =>
                            items.prev_page_url &&
                            router.visit(items.prev_page_url, {
                                preserveScroll: true,
                            })
                        }
                        className={`px-4 py-2 border rounded ${
                            items.prev_page_url
                                ? "bg-white hover:bg-gray-100"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        « Previous
                    </button>

                    <button
                        disabled={!items.next_page_url}
                        onClick={() =>
                            items.next_page_url &&
                            router.visit(items.next_page_url, {
                                preserveScroll: true,
                            })
                        }
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
    );
}

/* =====================================================
   MAIN PAGE
===================================================== */
export default function Index({ auth, missions, visions }) {
    return (
        <AuthenticatedLayout user={auth.user} header="Mission & Vision">
            <Head title="Mission & Vision" />

            <div className="max-w-7xl mx-auto space-y-10">
                <TableBox title="Mission List" items={missions} />
                <TableBox title="Vision List" items={visions} />
            </div>
        </AuthenticatedLayout>
    );
}
