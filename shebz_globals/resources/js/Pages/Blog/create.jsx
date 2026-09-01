import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import BlogEditor from "@/Components/BlogEditor";

export default function Create({ auth }) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: null,
        meta_title: "",
        meta_description: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleContentChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            content: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files[0] || null,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({});

        router.post("/blog/store", formData, {
            forceFormData: true,

            onError: (errors) => {
                setErrors(errors);

                Swal.fire({
                    icon: "error",
                    title: "Validation Error",
                    text: "Please check the form and correct the errors.",
                    confirmButtonColor: "#0025cc",
                });
            },

            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Blog post created successfully.",
                    confirmButtonColor: "#0025cc",
                    timer: 2000,
                    showConfirmButton: false,
                });
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Create Blog"
        >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Create Blog
                    </h2>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="p-6"
                >

                    {/* Title */}
                    <div className="mb-5">
                        <label
                            htmlFor="title"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Blog Title
                        </label>

                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter blog title"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.title
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                        />

                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>


                    {/* Blog Content */}
                    <div className="mb-6">

                        <label className="block text-gray-700 font-medium mb-2">
                            Blog Content
                        </label>

                        <BlogEditor
                            value={formData.content}
                            onChange={handleContentChange}
                        />

                        {errors.content && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.content}
                            </p>
                        )}

                    </div>


                    {/* Featured Image */}
                    <div className="mb-6">

                        <label
                            htmlFor="image"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Blog Image
                        </label>

                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            className={`w-full px-4 py-2 border rounded-md bg-white ${
                                errors.image
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                        />

                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image}
                            </p>
                        )}

                    </div>


                    {/* Meta Title */}
                    <div className="mb-5">

                        <label
                            htmlFor="meta_title"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Meta Title
                        </label>

                        <input
                            type="text"
                            id="meta_title"
                            name="meta_title"
                            value={formData.meta_title}
                            onChange={handleInputChange}
                            placeholder="Enter SEO meta title"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.meta_title
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                        />

                        {errors.meta_title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.meta_title}
                            </p>
                        )}

                    </div>


                    {/* Meta Description */}
                    <div className="mb-5">

                        <label
                            htmlFor="meta_description"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Meta Description
                        </label>

                        <textarea
                            id="meta_description"
                            name="meta_description"
                            value={formData.meta_description}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Enter SEO meta description"
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.meta_description
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                        />

                        {errors.meta_description && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.meta_description}
                            </p>
                        )}

                    </div>


                    {/* Buttons */}
                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="bg-[#0025cc] hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium"
                        >
                            Create Blog
                        </button>

                        <button
                            type="button"
                            onClick={() => router.visit("/blog")}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md font-medium"
                        >
                            Cancel
                        </button>

                    </div>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}
