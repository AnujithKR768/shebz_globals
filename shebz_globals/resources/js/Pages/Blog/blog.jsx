import React from "react";
import AppLayout from "../Layout/AppLayout";
import { Link, Head } from "@inertiajs/react";

export default function Blog({ blogs = [] }) {
    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6">

                <Head>
                    <title>Blog</title>
                </Head>

                {/* Page Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0025cc] mb-10">
                    Articles
                </h1>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="
                                group
                                bg-white
                                rounded-2xl
                                overflow-hidden
                                border border-gray-200
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-xl
                                hover:border-[#0025cc]
                            "
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden h-52">

                                {blog.image && (
                                    <img
                                        src={`/storage/${blog.image}`}
                                        alt={blog.title}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                        "
                                    />
                                )}

                                {/* Overlay */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-black/0
                                        group-hover:bg-black/10
                                        transition-all
                                        duration-300
                                    "
                                ></div>

                            </div>

                            {/* Card Content */}
                            <div className="p-5">

                                {/* Date */}
                                <p className="text-sm text-gray-400 mb-3">
                                    {blog.created_at
                                        ? new Date(blog.created_at).toLocaleDateString(
                                              "en-US",
                                              {
                                                  month: "numeric",
                                                  day: "numeric",
                                                  year: "numeric",
                                              }
                                          )
                                        : ""}
                                </p>

                                {/* Title */}
                                <h2
                                    className="
                                        text-lg
                                        font-semibold
                                        text-gray-900
                                        leading-snug
                                        mb-4
                                        line-clamp-2
                                        transition-colors
                                        duration-300

                                    "
                                >
                                    {blog.title}
                                </h2>

                                {/* Content */}
                                <p
                                    className="
                                        text-sm
                                        text-gray-600
                                        leading-relaxed
                                        line-clamp-3
                                        mb-6
                                    "
                                >
                                    {blog.content}
                                </p>

                                {/* Read Insight */}
                                <Link
                                    href={`/blog/details/${blog.id}`}
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-[#42b6ed]
                                        font-semibold
                                        text-sm
                                        transition-all
                                        duration-300

                                    "
                                >
                                    Read insight
                                    <span
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    >
                                        →
                                    </span>
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>

                {/* No Blogs */}
                {blogs.length === 0 && (
                    <div className="text-center py-16 text-gray-500">
                        No articles available.
                    </div>
                )}

            </div>
        </div>
    );
}

Blog.layout = (page) => <AppLayout>{page}</AppLayout>;
