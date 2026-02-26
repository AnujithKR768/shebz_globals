import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, items }) {
    const del = (id) => {
        if (confirm("Delete this Story?")) {
            router.delete(route("aboutstory.admin.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="About Story">
            <Head title="About Story" />

            <div className="max-w-7xl mx-auto bg-white shadow rounded-md overflow-hidden border">

                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        About Story List
                    </h1>

                    <Link
                        href={route("aboutstory.admin.create")}
                        className="bg-[#0025cc] text-white px-4 py-2 rounded-md"
                    >
                        + Add Story
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0025cc] text-white text-sm">
                                <th className="p-3 text-left">S.No</th>
                                <th className="p-3 text-left">Image</th>
                                <th className="p-3 text-left">Heading</th>
                                <th className="p-3 text-left">Title</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Edit</th>
                                <th className="p-3 text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items?.data?.length > 0 ? (
                                items.data.map((item, index) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-50 text-sm">
                                        <td className="p-3">
                                            {(items.current_page - 1) * items.per_page + index + 1}
                                        </td>

                                        <td className="p-3">
                                            {item.image ? (
                                                <img
                                                    src={`/storage/${item.image}?v=${Date.now()}`}
                                                    className="h-12 w-20 object-cover rounded border"
                                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                                />
                                            ) : (
                                                <span className="text-gray-400">No Image</span>
                                            )}
                                        </td>

                                        <td className="p-3 font-semibold">{item.heading}</td>
                                        <td className="p-3">{item.title}</td>

                                        <td className="p-3">
                                            {item.is_active ? (
                                                <span className="text-green-700 font-semibold">Active</span>
                                            ) : (
                                                <span className="text-gray-500">Inactive</span>
                                            )}
                                        </td>

                                        <td className="p-3 text-center">
                                            <Link
                                                href={route("aboutstory.admin.edit", item.id)}
                                                className="bg-green-600 text-white px-4 py-1 rounded"
                                            >
                                                Edit
                                            </Link>
                                        </td>

                                        <td className="p-3 text-center">
                                            <button
                                                onClick={() => del(item.id)}
                                                className="bg-red-600 text-white px-4 py-1 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="p-6 text-center text-gray-500">
                                        No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
