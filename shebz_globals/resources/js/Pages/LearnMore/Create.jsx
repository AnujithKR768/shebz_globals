import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        top_image: null,

        hero_title: "",
        hero_paragraph1: "",
        hero_paragraph2: "",

        expertise_title: "Our Expertise",
        expertise_items: [
            "Global Safety Product & Solution Audits",
            "Website & Application Development for Safety Companies",
            "EHS Dashboards and Safety Data Analytics",
            "Digital Marketing & Branding for Safety Businesses",
            "Industrial Safety Research & Product Design",
            "Remote Training & Coaching for Safety Professionals",
        ],

        why_title: "Why Choose SHEBZ Global?",
        why_description: "",

        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("learnmore.admin.store"), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

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
        <AuthenticatedLayout user={auth.user} header="Add Learn More">
            <Head title="Add Learn More" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Learn More Content
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    {/* IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Top Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files.length > 0) {
                                    setData("top_image", e.target.files[0]);
                                }
                            }}
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.top_image && (
                            <p className="text-red-600 text-sm">
                                {errors.top_image}
                            </p>
                        )}
                    </div>

                    {/* HERO TITLE */}
                    <input
                        value={data.hero_title}
                        onChange={(e) =>
                            setData("hero_title", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                        placeholder="Hero Title"
                    />

                    {/* PARA 1 */}
                    <textarea
                        rows="4"
                        value={data.hero_paragraph1}
                        onChange={(e) =>
                            setData("hero_paragraph1", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                        placeholder="Paragraph 1"
                    />

                    {/* PARA 2 */}
                    <textarea
                        rows="4"
                        value={data.hero_paragraph2}
                        onChange={(e) =>
                            setData("hero_paragraph2", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                        placeholder="Paragraph 2"
                    />

                    {/* EXPERTISE TITLE */}
                    <input
                        value={data.expertise_title}
                        onChange={(e) =>
                            setData("expertise_title", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                    />

                    {/* EXPERTISE ITEMS */}
                    <div className="space-y-3">
                        {data.expertise_items.map((item, index) => (
                            <div key={index} className="flex gap-2">
                                <input
                                    value={item}
                                    onChange={(e) =>
                                        updateItem(index, e.target.value)
                                    }
                                    className="w-full border rounded-md px-4 py-2"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeItem(index)}
                                    className="bg-red-600 text-white px-3 rounded"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={addItem}
                        className="bg-[#0025cc] text-white px-4 py-2 rounded"
                    >
                        + Add Item
                    </button>

                    {/* WHY */}
                    <input
                        value={data.why_title}
                        onChange={(e) =>
                            setData("why_title", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                    />

                    <textarea
                        rows="5"
                        value={data.why_description}
                        onChange={(e) =>
                            setData("why_description", e.target.value)
                        }
                        className="w-full border rounded-md px-4 py-2"
                    />

                    {/* STATUS */}
                    <select
                        value={data.is_active ? 1 : 0}
                        onChange={(e) =>
                            setData("is_active", e.target.value === "1")
                        }
                        className="w-full border rounded-md px-4 py-2"
                    >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>

                    {/* SEO */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            SEO
                        </label>

                        <input
                            type="text"
                            value={data.meta_title}
                            onChange={(e) =>
                                setData("meta_title", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                            placeholder="Meta Title"
                        />

                        {errors.meta_title && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.meta_title}
                            </p>
                        )}
                    </div>

                    <div>
                        <textarea
                            rows="3"
                            value={data.meta_description}
                            onChange={(e) =>
                                setData("meta_description", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                            placeholder="Meta Description"
                        />

                        {errors.meta_description && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.meta_description}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-between pt-4">
                        <Link href={route("learnmore.admin.index")}>
                            ← Back
                        </Link>

                        <button
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md"
                        >
                            {processing ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
