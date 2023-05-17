import NavBar from "@/Components/NavBar";
import {Head} from "@inertiajs/react";
import ResponseAlert from "@/Components/ResponseAlert";
import EditButton from "@/Components/EditButton";

export default function MainLayout({auth, title, header, children, response = null, media = false, media_id = null}) {

    return (
        <>
            <Head title={title}/>
            <div className="min-h-screen bg-gray-200 dark:bg-slate-900">
                <NavBar auth={auth}></NavBar>
                {(() => {
                    if (media && header) {
                        return (
                            <div className="max-w-7xl mx-auto px-1 sm:px-2 space-y-4">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 md:col-span-10 py-4 sm:py-6 px-2"><h1
                                        className="font-semibold text-xl md:text-3xl text-gray-800 dark:text-gray-100 leading-tight mb-2">{header}</h1>
                                        {response !== null ? <ResponseAlert type={response.type} text={response.message}></ResponseAlert> : ""}
                                    </div>
                                    <div className="col-span-12 md:col-span-2 sm:py-6 md:mt-2 md:text-end">
                                        {
                                            (() => {
                                                if (auth.user !== null) {
                                                    return (<EditButton text={'Edit media'} link={route('media.edit', media_id)}/>);
                                                }
                                            })()
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (!media && header) {
                        return (
                            <header className="bg-gray-200 dark:bg-slate-900">
                                <div className="max-w-7xl mx-auto py-4 sm:py-8 px-2"><h1
                                    className="font-semibold text-xl md:text-3xl text-gray-800 dark:text-gray-100 leading-tight mb-2">{header}</h1>
                                    {response !== null ? <ResponseAlert type={response.type}
                                                                        text={response.message}></ResponseAlert> : ""}
                                </div>
                            </header>
                        );
                    } else {
                        return ('<div></div>');
                    }
                })()}

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
