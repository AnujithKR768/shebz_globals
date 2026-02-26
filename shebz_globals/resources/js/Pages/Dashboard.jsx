import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

export default function Dashboard({ auth, stats, quoteChart, contactChart }) {
    return (
        <AuthenticatedLayout user={auth.user} header="Dashboard">
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto space-y-6">

                {/* ✅ WELCOME */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h1 className="text-2xl font-bold">Welcome Shebz Global</h1>
                </div>

                {/* ✅ STATS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
                        <h3 className="text-sm text-gray-500">Total Users</h3>
                        <p className="text-3xl font-bold text-gray-800">
                            {stats.users}
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
                        <h3 className="text-sm text-gray-500">Quote Requests</h3>
                        <p className="text-3xl font-bold text-gray-800">
                            {stats.quoteRequests}
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-600">
                        <h3 className="text-sm text-gray-500">Contact Messages</h3>
                        <p className="text-3xl font-bold text-gray-800">
                            {stats.contacts}
                        </p>
                    </div>
                </div>

                {/* GRAPHS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Quote Requests BAR Chart */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-4">
                            Quote Requests
                        </h2>

                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={quoteChart}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis allowDecimals={false} />
                                    <Tooltip />
                                    <Bar dataKey="total" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Contact Messages BAR Chart */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-4">
                            Contact Messages
                        </h2>

                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={contactChart}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis allowDecimals={false} />
                                    <Tooltip />
                                    <Bar dataKey="total" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
