import NavBar from "@/Components/NavBar";
import {Head} from "@inertiajs/react";

export default function MainLayout({auth, title, header, children}) {

    return (
        <>
            <Head title={title}/>
            <div className="min-h-screen bg-gray-200 dark:bg-slate-900">
                <NavBar auth={auth}></NavBar>

                {header && (
                    <header className="bg-gray-200 dark:bg-slate-900">
                        <div className="max-w-7xl mx-auto py-4 sm:py-8 px-2"><h1
                            className="font-semibold text-xl md:text-3xl text-gray-800 dark:text-gray-100 leading-tight">{header}</h1>
                        </div>
                    </header>
                )}

                <main>
                    <div className="py-4">
                        <div className="max-w-7xl mx-auto px-1 sm:px-2 space-y-4">
                            {children}
                        </div>
                    </div>
                </main>

            </div>
        </>
    );
}
