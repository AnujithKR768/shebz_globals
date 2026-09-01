import React, {
    useRef,
    useCallback,
    useMemo,
} from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function BlogEditor({
    value,
    onChange,
}) {
    const quillRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | Image Upload Handler
    |--------------------------------------------------------------------------
    */

    const imageHandler = useCallback(() => {
        const input = document.createElement("input");

        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");

        input.click();

        input.onchange = async () => {
            const file = input.files?.[0];

            if (!file) {
                return;
            }

            const uploadData = new FormData();

            uploadData.append("image", file);

            try {
                /*
                |--------------------------------------------------------------------------
                | Get CSRF Token
                |--------------------------------------------------------------------------
                */

                const csrfToken = document
                    .querySelector(
                        'meta[name="csrf-token"]'
                    )
                    ?.getAttribute("content");

                if (!csrfToken) {
                    throw new Error(
                        "CSRF token not found."
                    );
                }

                /*
                |--------------------------------------------------------------------------
                | Upload Image
                |--------------------------------------------------------------------------
                */

                const response = await fetch(
                    "/blog/content-image",
                    {
                        method: "POST",

                        headers: {
                            "X-CSRF-TOKEN":
                                csrfToken,

                            Accept:
                                "application/json",
                        },

                        body: uploadData,

                        credentials: "same-origin",
                    }
                );

                /*
                |--------------------------------------------------------------------------
                | Read Response
                |--------------------------------------------------------------------------
                */

                const responseText =
                    await response.text();

                let data;

                try {
                    data =
                        JSON.parse(
                            responseText
                        );
                } catch {
                    console.error(
                        "Server response:",
                        responseText
                    );

                    throw new Error(
                        `Server returned status ${response.status}`
                    );
                }

                /*
                |--------------------------------------------------------------------------
                | Check Response
                |--------------------------------------------------------------------------
                */

                if (!response.ok) {
                    console.error(
                        "Image upload failed:",
                        data
                    );

                    throw new Error(
                        data.message ||
                            "Image upload failed."
                    );
                }

                /*
                |--------------------------------------------------------------------------
                | Check URL
                |--------------------------------------------------------------------------
                */

                if (!data.url) {
                    throw new Error(
                        "Image URL was not returned by the server."
                    );
                }

                /*
                |--------------------------------------------------------------------------
                | Get Quill Editor
                |--------------------------------------------------------------------------
                */

                const editor =
                    quillRef.current?.getEditor();

                if (!editor) {
                    throw new Error(
                        "Quill editor not found."
                    );
                }

                /*
                |--------------------------------------------------------------------------
                | Insert Image
                |--------------------------------------------------------------------------
                */

                const range =
                    editor.getSelection(true);

                editor.insertEmbed(
                    range.index,
                    "image",
                    data.url
                );

                editor.setSelection(
                    range.index + 1
                );

            } catch (error) {
                console.error(
                    "Image upload error:",
                    error
                );

                alert(
                    error.message ||
                        "Unable to upload image."
                );
            }
        };
    }, []);


    /*
    |--------------------------------------------------------------------------
    | Quill Modules
    |--------------------------------------------------------------------------
    */

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [
                        {
                            header: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                false,
                            ],
                        },
                    ],

                    [
                        "bold",
                        "italic",
                        "underline",
                        "strike",
                    ],

                    [
                        {
                            color: [],
                        },
                        {
                            background: [],
                        },
                    ],

                    [
                        {
                            list: "ordered",
                        },
                        {
                            list: "bullet",
                        },
                    ],

                    [
                        {
                            align: [],
                        },
                    ],

                    [
                        "blockquote",
                        "link",
                        "image",
                    ],

                    [
                        "clean",
                    ],
                ],

                handlers: {
                    image: imageHandler,
                },
            },
        };
    }, [imageHandler]);


    /*
    |--------------------------------------------------------------------------
    | Allowed Formats
    |--------------------------------------------------------------------------
    */

    const formats = useMemo(() => {
        return [
            "header",

            "bold",
            "italic",
            "underline",
            "strike",

            "color",
            "background",

            "list",
            "bullet",

            "align",

            "blockquote",

            "link",
            "image",
        ];
    }, []);


    /*
    |--------------------------------------------------------------------------
    | Editor
    |--------------------------------------------------------------------------
    */

    return (
        <div className="blog-editor">

            <ReactQuill
                ref={quillRef}
                theme="snow"

                value={value || ""}

                onChange={onChange}

                modules={modules}

                formats={formats}

                placeholder="Write your blog content..."
            />

        </div>
    );
}
