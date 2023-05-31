import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-200 dark:bg-slate-900">
            <div>
                <Link href={route('home')}>
                    <h1 className={'text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 tracking-wider'}>corbp</h1>
                </Link>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-100 dark:bg-slate-700 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
