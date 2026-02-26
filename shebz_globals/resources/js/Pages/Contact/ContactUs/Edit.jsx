import React from "react";
import { useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ content }) {
    const { data, setData, put, processing, errors } = useForm({
        page_title: content.page_title || "",
        page_description: content.page_description || "",
        map_embed_url: content.map_embed_url || "",

        // ✅ NEW RIGHT SECTION
        right_title: content.right_title || "",
        right_description: content.right_description || "",

        email: content.email || "",
        website: content.website || "",
        head_office: content.head_office || "",

        whatsapp_number: content.whatsapp_number || "",
        whatsapp_text: content.whatsapp_text || "",

        linkedin_url: content.linkedin_url || "",

        why_title: content.why_title || "",
        why_description: content.why_description || "",

        why_points: content.why_points || [],

        is_active: content.is_active || false,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("contact-content.update", content.id));
    };

    const addPoint = () => {
        setData("why_points", [...data.why_points, ""]);
    };

    const removePoint = (index) => {
        const updated = [...data.why_points];
        updated.splice(index, 1);
        setData("why_points", updated);
    };

    return (
        <AuthenticatedLayout header="Edit Contact Content">
            <div className="max-w-5xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">
                        Edit Contact Page Content
                    </h1>

                    <Link
                        href={route("contact-content.index")}
                        className="text-blue-700 font-semibold"
                    >
                        Back
                    </Link>
                </div>

                <form
                    onSubmit={submit}
                    className="bg-white border rounded-xl shadow p-6 space-y-4"
                >
                    {/* PAGE TITLE */}
                    <div>
                        <label className="font-semibold">Page Title</label>
                        <input
                            className="w-full border p-2 rounded"
                            value={data.page_title}
                            onChange={(e) =>
                                setData("page_title", e.target.value)
                            }
                        />
                        {errors.page_title && (
                            <p className="text-red-600 text-sm">
                                {errors.page_title}
                            </p>
                        )}
                    </div>

                    {/* PAGE DESCRIPTION */}
                    <div>
                        <label className="font-semibold">Page Description</label>
                        <textarea
                            className="w-full border p-2 rounded"
                            rows={4}
                            value={data.page_description}
                            onChange={(e) =>
                                setData("page_description", e.target.value)
                            }
                        />
                    </div>

                    {/* MAP */}
                    <div>
                        <label className="font-semibold">Map Embed URL</label>
                        <input
                            className="w-full border p-2 rounded"
                            value={data.map_embed_url}
                            onChange={(e) =>
                                setData("map_embed_url", e.target.value)
                            }
                        />
                    </div>

                    {/* ✅ RIGHT SECTION */}
                    <div className="border rounded-lg p-4 bg-gray-50">
                        <h2 className="font-bold mb-3 text-gray-800">
                            Right Section (Dynamic Text)
                        </h2>

                        <div className="mb-3">
                            <label className="font-semibold">Right Title</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={data.right_title}
                                onChange={(e) =>
                                    setData("right_title", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="font-semibold">
                                Right Description
                            </label>
                            <textarea
                                className="w-full border p-2 rounded"
                                rows={3}
                                value={data.right_description}
                                onChange={(e) =>
                                    setData("right_description", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* CONTACT DETAILS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label className="font-semibold">Email</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Website</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={data.website}
                                onChange={(e) =>
                                    setData("website", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Head Office</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={data.head_office}
                                onChange={(e) =>
                                    setData("head_office", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* WHATSAPP + LINKEDIN */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label className="font-semibold">
                                WhatsApp Number
                            </label>
                            <input
                                className="w-full border p-2 rounded"
                                value={data.whatsapp_number}
                                onChange={(e) =>
                                    setData("whatsapp_number", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="font-semibold">LinkedIn URL</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={data.linkedin_url}
                                onChange={(e) =>
                                    setData("linkedin_url", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold">
                            WhatsApp Message Text
                        </label>
                        <textarea
                            className="w-full border p-2 rounded"
                            rows={2}
                            value={data.whatsapp_text}
                            onChange={(e) =>
                                setData("whatsapp_text", e.target.value)
                            }
                        />
                    </div>

                    {/* WHY SECTION */}
                    <div>
                        <label className="font-semibold">Why Title</label>
                        <input
                            className="w-full border p-2 rounded"
                            value={data.why_title}
                            onChange={(e) =>
                                setData("why_title", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Why Description</label>
                        <textarea
                            className="w-full border p-2 rounded"
                            rows={3}
                            value={data.why_description}
                            onChange={(e) =>
                                setData("why_description", e.target.value)
                            }
                        />
                    </div>

                    {/* WHY POINTS */}
                    <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="font-semibold">Why Points</h2>
                            <button
                                type="button"
                                onClick={addPoint}
                                className="bg-gray-900 text-white px-3 py-1 rounded"
                            >
                                + Add
                            </button>
                        </div>

                        {data.why_points.map((point, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    className="w-full border p-2 rounded"
                                    value={point}
                                    onChange={(e) => {
                                        const updated = [...data.why_points];
                                        updated[index] = e.target.value;
                                        setData("why_points", updated);
                                    }}
                                />

                                <button
                                    type="button"
                                    onClick={() => removePoint(index)}
                                    className="text-red-600 font-bold"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* ACTIVE */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={data.is_active}
                            onChange={(e) =>
                                setData("is_active", e.target.checked)
                            }
                        />
                        Active
                    </label>

                    <button
                        disabled={processing}
                        className="w-full bg-blue-700 text-white py-2 rounded-lg"
                    >
                        {processing ? "Updating..." : "Update"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
