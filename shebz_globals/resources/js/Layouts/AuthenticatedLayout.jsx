import { Link } from '@inertiajs/react';

export default function AuthenticatedLayout({ user, header, children }) {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">

                {/* LOGO */}
                <div className="h-16 flex items-center px-6 border-b">
                   <Link href="/dashboard">
                   <img
                        src="/favicon.png"
                        alt="Shebz Globals"
                        className="h-8 w-8 mr-2"
                    />
                   </Link>
                   <Link href="/dashboard">
                   <span className="text-lg font-semibold text-gray-800">
                        Shebz Globals
                    </span></Link>

                </div>

                {/* NAV LINKS */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-[#0025cc] hover:text-white font-medium"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/service"
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-[#0025cc] hover:text-white font-medium"
                    >
                        Services
                    </Link>
                </nav>
            </aside>

            {/* MAIN AREA */}
            <div className="flex-1 flex flex-col">

                {/* TOP BAR */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {header}
                    </h2>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-700">
                            {user?.name}
                        </span>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-sm text-red-600 hover:underline"
                        >
                            Logout
                        </Link>
                    </div>
                </header>

                {/* PAGE CONTENT */}
                <main className="flex-1 p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}
