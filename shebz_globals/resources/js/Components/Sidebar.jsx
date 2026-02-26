import { Link } from '@inertiajs/react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 p-4 min-h-screen">
            <ul className="space-y-2">
                <li>
                    <Link href="/service" className="block p-2 rounded hover:bg-gray-200">
                        Services
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
