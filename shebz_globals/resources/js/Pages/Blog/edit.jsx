import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import BlogEditor from "@/Components/BlogEditor";

export default function Edit({ auth, post }) {
    const [formData, setFormData] = useState({
        title: post.title || "",
        meta_title: post.meta_title || "",
        meta_description: post.meta_description || "",
        content: post.content || "",
        image: null,
    });

    const [errors, setErrors] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Input Change
    |--------------------------------------------------------------------------
    */

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /*
    |--------------------------------------------------------------------------
    | Blog Editor Change
    |--------------------------------------------------------------------------
    */

    const handleContentChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            content: value,
        }));
    };

    /*
    |--------------------------------------------------------------------------
    | Image Change
    |--------------------------------------------------------------------------
    */

    const handleFileChange = (e) => {
        const { name, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files[0] || null,
        }));
    };

    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({});

        Swal.fire({
            title: "Update Blog?",
            text: "Are you sure you want to update this blog post?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#0025cc",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, update it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (!result.isConfirmed) {
                return;
            }

            router.post(
                `/blog/update/${post.id}`,
                {
                    ...formData,
                    _method: "PUT",
                },
                {
                    forceFormData: true,

                    onError: (errors) => {
                        setErrors(errors);

                        Swal.fire({
                            title: "Error!",
                            text: "Please check the form and correct the errors.",
                            icon: "error",
                            confirmButtonColor: "#0025cc",
                        });
                    },

                    onSuccess: () => {
                        Swal.fire({
                            title: "Updated!",
                            text: "Blog post updated successfully.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    },
                }
            );
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Cancel
    |--------------------------------------------------------------------------
    */

    const handleCancel = () => {
        router.visit("/blog");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Edit Blog"
        >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Edit Blog
                    </h2>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="p-6"
                >

                    {/* =====================================================
                        BLOG TITLE
                    ====================================================== */}

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


                    {/* =====================================================
                        BLOG CONTENT
                    ====================================================== */}

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


                    {/* =====================================================
                        CURRENT IMAGE
                    ====================================================== */}

                    {post.image && (
                        <div className="mb-5">

                            <label className="block text-gray-700 font-medium mb-2">
                                Current Image
                            </label>

                            <img
                                src={`/storage/${post.image}`}
                                alt={post.title}
                                className="w-32 h-32 object-cover rounded-md border"
                            />

                        </div>
                    )}


                    {/* =====================================================
                        CHANGE IMAGE
                    ====================================================== */}

                    <div className="mb-6">

                        <label
                            htmlFor="image"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Change Image
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

                        <p className="text-gray-500 text-sm mt-1">
                            Leave empty to keep the current image.
                        </p>

                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image}
                            </p>
                        )}

                    </div>


                    {/* =====================================================
                        META TITLE
                    ====================================================== */}

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
                            maxLength={255}
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


                    {/* =====================================================
                        META DESCRIPTION
                    ====================================================== */}

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
                            maxLength={500}
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


                    {/* =====================================================
                        BUTTONS
                    ====================================================== */}

                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="bg-[#0025cc] hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium"
                        >
                            Update Blog
                        </button>

                        <button
                            type="button"
                            onClick={handleCancel}
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
