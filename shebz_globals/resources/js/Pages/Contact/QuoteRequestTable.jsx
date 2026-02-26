import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Link, router } from "@inertiajs/react";

export default function QuoteRequestsTable({ quoteRequests,auth }) {
    const deleteRequest = (id) => {
        if (confirm("Are you sure you want to delete this quote request?")) {
            router.delete(route("quote-requests.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Quote Requests">
            <div className="bg-white rounded-lg border overflow-x-auto">
                {/* TABLE */}
                <table className="w-full">
                    <thead className="bg-[#0025cc] text-white">
                        <tr>
                            <th className="px-4 py-2">S.No</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Company</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Service</th>
                            <th className="px-4 py-2">Message</th>
                            <th className="px-4 py-2">Action</th> {/* ✅ NEW */}
                        </tr>
                    </thead>

                    <tbody>
                        {quoteRequests.data.length > 0 ? (
                            quoteRequests.data.map((request, index) => (
                                <tr key={request.id} className="border-t">
                                    {/* SERIAL NUMBER */}
                                    <td className="px-4 py-2">
                                        {(quoteRequests.current_page - 1) *
                                            quoteRequests.per_page +
                                            index +
                                            1}
                                    </td>

                                    <td className="px-4 py-2 font-semibold">
                                        {request.name}
                                    </td>

                                    <td className="px-4 py-2">{request.email}</td>

                                    <td className="px-4 py-2">
                                        {request.company || "-"}
                                    </td>

                                    <td className="px-4 py-2">
                                        {request.phone || "-"}
                                    </td>

                                    <td className="px-4 py-2">{request.service}</td>

                                    {/* MESSAGE (TRUNCATED) */}
                                    <td
                                        className="px-4 py-2 text-sm text-justify max-w-md"
                                        title={request.message}
                                    >
                                        {request.message
                                            ? request.message.slice(0, 120) +
                                              (request.message.length > 120
                                                  ? "..."
                                                  : "")
                                            : "-"}
                                    </td>

                                    {/* ✅ DELETE BUTTON */}
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => deleteRequest(request.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="8"
                                    className="px-4 py-6 text-center text-gray-500"
                                >
                                    No quote requests found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* PAGINATION */}
                {quoteRequests.last_page > 1 && (
                    <div className="flex flex-wrap gap-2 justify-center my-6">
                        {quoteRequests.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                preserveScroll
                                className={`px-4 py-2 rounded border text-sm ${
                                    link.active
                                        ? "bg-[#0025cc] text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                } ${
                                    !link.url && "opacity-50 pointer-events-none"
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
