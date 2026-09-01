import React from "react";
import AppLayout from "../Layout/AppLayout";
import { Link, Head } from "@inertiajs/react";

export default function Details({ post }) {
    return (
        <>
            <Head>
                <title>{post?.meta_title || "Blog"}</title>

                <meta
                    name="description"
                    content={post?.meta_description || ""}
                />
            </Head>

            <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">

                {/* Back to Blog */}
                <div className="mb-10">
                    <Link
                        href="/Blog"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-[#42b6ed]
                            hover:text-[#0025cc]
                            font-semibold
                            text-sm
                            transition
                        "
                    >
                        ← Back to Blog
                    </Link>
                </div>

                {/* Blog Title */}
                <div className="max-w-4xl mx-auto text-center">

                    <h1
                        className="
                            text-3xl
                            md:text-4xl
                            lg:text-5xl
                            font-bold
                            text-[#202938]
                            leading-tight
                            mb-10
                        "
                    >
                        {post?.title}
                    </h1>

                </div>

                {/* Featured Image */}
                {post?.image && (
                    <div
                        className="
                            max-w-5xl
                            mx-auto
                            mb-12
                            overflow-hidden
                            rounded-2xl
                            shadow-sm
                            bg-gray-100
                        "
                    >
                        <img
                            src={`/storage/${post.image}`}
                            alt={post?.title || "Blog image"}
                            className="
                                block
                                w-full
                                h-auto
                                object-contain
                            "
                        />
                    </div>
                )}

                {/* Blog Content */}
                <article
                    className="
                        blog-content
                        max-w-4xl
                        mx-auto
                        text-gray-700
                        text-base
                        md:text-lg
                        leading-8
                    "
                    dangerouslySetInnerHTML={{
                        __html: post?.content || "",
                    }}
                />

            </div>
        </>
    );
}

Details.layout = (page) => (
    <AppLayout>{page}</AppLayout>
);
