import React from 'react';
import { Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Swal from 'sweetalert2';

export default function index({ auth, posts = [] }) {

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this question!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/blog/delete/${id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "The question has been deleted successfully.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    },
                });
            }
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Blog"
        >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Blog List
                    </h2>

                    <Link
                        href="/blog/create"
                        className="bg-[#0025cc] hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium"
                    >
                        + Add Blog
                    </Link>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead className="bg-[#0025cc] text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">S.No</th>
                            <th className="px-4 py-3 text-left">Image</th>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Content</th>
                            <th className="px-4 py-3 text-center">Edit</th>
                            <th className="px-4 py-3 text-center">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <tr
                                    key={post.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="px-4 py-4">
                                        {index + 1}
                                    </td>

                                    <td className="px-4 py-4">
                                        {post.image && (
                                            <img
                                                src={`/storage/${post.image}`}
                                                alt={post.title}
                                                className="w-16 h-12 rounded object-cover"
                                            />
                                        )}
                                    </td>

                                    <td className="px-4 py-4 font-semibold">
                                        {post.title}
                                    </td>

                                    <td className="px-4 py-4 max-w-md truncate">
                                        {post.content}
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <Link
                                            href={`/blog/${post.id}/edit`}
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                                        >
                                            Edit
                                        </Link>
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center py-8 text-gray-500"
                                >
                                    No blog posts found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
