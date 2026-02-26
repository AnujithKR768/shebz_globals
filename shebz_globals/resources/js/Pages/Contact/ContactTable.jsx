import React from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

export default function ContactTable({ contactlist,auth }) {
    const deleteMessage = (id) => {
        if (confirm("Are you sure you want to delete this message?")) {
            router.delete(route("contact-list.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Contact Messages">
            <div className="bg-white rounded-lg border overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-[#0025cc] text-white">
                        <tr>
                            <th className="px-4 py-2">S.No</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Message</th>
                            <th className="px-4 py-2">Action</th> {/* ✅ NEW */}
                        </tr>
                    </thead>

                    <tbody>
                        {contactlist.data.length > 0 ? (
                            contactlist.data.map((contact, index) => (
                                <tr key={contact.id} className="border-t">
                                    {/* SERIAL NUMBER */}
                                    <td className="px-4 py-2">
                                        {(contactlist.current_page - 1) *
                                            contactlist.per_page +
                                            index +
                                            1}
                                    </td>

                                    <td className="px-4 py-2 font-semibold">
                                        {contact.name}
                                    </td>

                                    <td className="px-4 py-2">{contact.email}</td>

                                    <td
                                        className="px-4 py-2 text-sm text-justify max-w-md"
                                        title={contact.message}
                                    >
                                        {contact.message?.length > 100
                                            ? contact.message.slice(0, 100) + "..."
                                            : contact.message || "-"}
                                    </td>

                                    {/* ✅ DELETE BUTTON */}
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => deleteMessage(contact.id)}
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
                                    colSpan="5"
                                    className="px-4 py-6 text-center text-gray-500"
                                >
                                    No contacts found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* PAGINATION */}
                {contactlist.last_page > 1 && (
                    <div className="flex flex-wrap gap-2 justify-center my-6">
                        {contactlist.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                preserveScroll
                                className={`px-4 py-2 rounded border text-sm ${
                                    link.active
                                        ? "bg-[#0025cc] text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                } ${!link.url && "opacity-50 pointer-events-none"}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
