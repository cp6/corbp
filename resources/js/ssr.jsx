import {createInertiaApp} from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'
import route from "ziggy-js";
import { Ziggy } from '@/ziggy'

const appName = 'corbp';

createServer(page => {

    createInertiaApp({

        title: (title) => `${title} - ${appName}`,
        page,
        render: ReactDOMServer.renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
            return pages[`./Pages/${name}.jsx`]
        },
        setup: ({App, props}) => {

            global.route = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config);

            return <App {...props} />

        }

    })
})
