import React from "react";

export default function PaginationPage({url, label, active}) {
    if (active) {
        return (
            <li>
                <a href={url} aria-current="page"
                   className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{label}</a>
            </li>
        );
    } else {
        return (
            <li>
                <a href={url}
                   className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{label}</a>
            </li>
        );
    }
}
