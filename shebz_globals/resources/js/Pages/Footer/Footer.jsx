import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Footer() {
    return (
        <AuthenticatedLayout>
        <div className="flex">
            <div className="flex-grow p-6">
                <h1 className="text-2xl font-bold mb-4">Footer</h1>
                <p>Details about the footer offered by Shebz Global Safety Solutions.</p>
            </div>
        </div>
        </AuthenticatedLayout>
    )
}
