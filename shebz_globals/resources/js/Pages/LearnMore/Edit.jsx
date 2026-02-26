import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const { data, setData, processing, errors } = useForm({
        top_image: null,

        hero_title: item?.hero_title || "",
        hero_paragraph1: item?.hero_paragraph1 || "",
        hero_paragraph2: item?.hero_paragraph2 || "",

        expertise_title: item?.expertise_title || "Our Expertise",
        expertise_items: item?.expertise_items || [],

        why_title: item?.why_title || "Why Choose SHEBZ Global?",
        why_description: item?.why_description || "",

        is_active: item?.is_active ? true : false,
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("learnmore.admin.update", item.id),
            { _method: "put", ...data },
            {
                forceFormData: true,
                preserveScroll: true,
            }
        );
    };

    // ✅ expertise handlers
    const updateItem = (index, value) => {
        const updated = [...data.expertise_items];
        updated[index] = value;
        setData("expertise_items", updated);
    };

    const addItem = () => {
        setData("expertise_items", [...data.expertise_items, ""]);
    };

    const removeItem = (index) => {
        const updated = [...data.expertise_items];
        updated.splice(index, 1);
        setData("expertise_items", updated);
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Learn More">
            <Head title="Edit Learn More" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">

                {/* CURRENT IMAGE */}
                {item?.top_image && (
                    <img
                        src={`/storage/${item.top_image}?v=${Date.now()}`}
                        className="h-28 w-full object-cover rounded-md border"
                        alt="current"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                )}

                <form onSubmit={submit} className="space-y-6 mt-6">

                    {/* IMAGE */}
                    <div>
                        <label className="font-semibold">Change Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setData("top_image", e.target.files[0])
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* HERO TITLE */}
                    <div>
                        <label className="font-semibold">Hero Title</label>
                        <input
                            value={data.hero_title}
                            onChange={(e) =>
                                setData("hero_title", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* HERO PARAGRAPH 1 */}
                    <div>
                        <label className="font-semibold">Hero Paragraph 1</label>
                        <textarea
                            rows="3"
                            value={data.hero_paragraph1}
                            onChange={(e) =>
                                setData("hero_paragraph1", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* HERO PARAGRAPH 2 */}
                    <div>
                        <label className="font-semibold">Hero Paragraph 2</label>
                        <textarea
                            rows="3"
                            value={data.hero_paragraph2}
                            onChange={(e) =>
                                setData("hero_paragraph2", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* EXPERTISE TITLE */}
                    <div>
                        <label className="font-semibold">Expertise Title</label>
                        <input
                            value={data.expertise_title}
                            onChange={(e) =>
                                setData("expertise_title", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* EXPERTISE ITEMS */}
                    <div>
                        <label className="font-semibold block mb-2">
                            Expertise Items
                        </label>

                        {data.expertise_items.map((itemValue, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    value={itemValue}
                                    onChange={(e) =>
                                        updateItem(index, e.target.value)
                                    }
                                    className="flex-1 border rounded-md px-4 py-2"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeItem(index)}
                                    className="bg-red-500 text-white px-3 rounded"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addItem}
                            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
                        >
                            + Add Item
                        </button>
                    </div>

                    {/* WHY TITLE */}
                    <div>
                        <label className="font-semibold">Why Title</label>
                        <input
                            value={data.why_title}
                            onChange={(e) =>
                                setData("why_title", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* WHY DESCRIPTION */}
                    <div>
                        <label className="font-semibold">Why Description</label>
                        <textarea
                            rows="4"
                            value={data.why_description}
                            onChange={(e) =>
                                setData("why_description", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* STATUS */}
                    <div>
                        <label className="font-semibold">Status</label>
                        <select
                            value={data.is_active ? "1" : "0"}
                            onChange={(e) =>
                                setData("is_active", e.target.value === "1")
                            }
                            className="w-full border rounded-md px-4 py-2"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    {/* ACTION */}
                    <div className="flex justify-between pt-4">
                        <Link href={route("learnmore.admin.index")}>
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
