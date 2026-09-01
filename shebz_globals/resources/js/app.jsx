import '../css/app.css';
import './bootstrap';

import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import ReactGA from "react-ga4";

ReactGA.initialize("G-6BHNVLCHGH");

router.on("navigate", (event) => {
    ReactGA.send({
        hitType: "pageview",
        page: event.detail.page.url,
    });
});

const appName = import.meta.env.VITE_APP_NAME || 'Shebz Globals';

createInertiaApp({
    title: (title) => title,

    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },

    progress: {
        color: '#4B5563',
    },
});
