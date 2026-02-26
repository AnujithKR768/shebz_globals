import React, { useState } from "react";
import { useForm, Link } from "@inertiajs/react";

export default function Create() {

    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        designation: "",
        message: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        // VERY IMPORTANT for file upload
        post(route("testimonials.store"), {
            forceFormData: true,
        });
    };

    // image change handler with preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Add Testimonial
                </h2>

                <form onSubmit={submit} className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData("name", e.target.value)}
                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-3 outline-none transition"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Designation */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Designation
                        </label>
                        <input
                            type="text"
                            value={data.designation}
                            onChange={e => setData("designation", e.target.value)}
                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-3 outline-none transition"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Message
                        </label>
                        <textarea
                            rows="4"
                            value={data.message}
                            onChange={e => setData("message", e.target.value)}
                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-3 outline-none transition"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Image (Optional)
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50"
                        />

                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image}
                            </p>
                        )}

                        {/* Preview */}
                        {preview && (
                            <div className="mt-4 flex justify-center">
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="w-20 h-20 rounded-full object-cover border shadow"
                                />
                            </div>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center pt-4">

                        <Link
                            href={route("home")}
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="px-8 py-3 bg-[#0025cc] text-white rounded-lg hover:bg-blue-800 transition shadow-md disabled:opacity-50"
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}
