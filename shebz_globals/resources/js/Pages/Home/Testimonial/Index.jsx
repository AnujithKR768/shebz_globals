import React from "react";
import { router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ testimonials = [] }) {

    // ✅ cache-buster helper (VERY IMPORTANT)
    const imgUrl = (path) =>
        path ? `/storage/${path}?v=${Date.now()}` : "";

    const deleteTestimonial = (id) => {
        if (confirm("Are you sure you want to delete this testimonial?")) {
            router.delete(route("dashboard.testimonials.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="p-8">

                <h1 className="text-2xl font-bold mb-6">
                    Testimonials Dashboard
                </h1>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <table className="min-w-full border-collapse">

                        <thead className="bg-[#0025cc] text-white">
                            <tr>
                                <th className="p-4 text-left">S.No</th>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Designation</th>
                                <th className="p-4 text-left">Message</th>
                                <th className="p-4 text-center">Image</th>
                                <th className="p-4 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {testimonials.length > 0 ? (
                                testimonials.map((item, index) => (
                                    <tr key={item.id} className="border-t hover:bg-gray-50">

                                        {/* S.No */}
                                        <td className="p-4">
                                            {index + 1}
                                        </td>

                                        {/* Name */}
                                        <td className="p-4 font-medium">
                                            {item?.name || "-"}
                                        </td>

                                        {/* Designation */}
                                        <td className="p-4">
                                            {item?.designation || "-"}
                                        </td>

                                        {/* Message */}
                                        <td className="p-4 max-w-xs truncate">
                                            {item?.message || "-"}
                                        </td>

                                        {/* Image */}
                                        <td className="p-4 text-center">
                                            {item?.image ? (
                                                <img
                                                    src={imgUrl(item.image)}
                                                    alt={item.name}
                                                    className="w-10 h-10 rounded-full object-cover mx-auto border"
                                                />
                                            ) : (
                                                <span className="text-gray-400 text-sm">
                                                    No Image
                                                </span>
                                            )}
                                        </td>

                                        {/* Action */}
                                        <td className="p-4 text-center">
                                            <button
                                                onClick={() => deleteTestimonial(item.id)}
                                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                            >
                                                Delete
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-6 text-center text-gray-500">
                                        No testimonials found.
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
