import './switcher';
import './bootstrap';
import '../css/app.css';

import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {hydrateRoot} from "react-dom";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'corbp';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        hydrateRoot(el, <App {...props} />)
    },
    progress: {
        color: '#4B5563',
    },
});

