import MainLayout from "@/Layouts/MainLayout";
import {usePage} from "@inertiajs/react";
import Card from "@/Components/Card";

export default function Dashboard(props) {

    const auth = usePage().props.auth;

    return (
        <MainLayout auth={auth} title={'Home'} header={'corbp'}>
            <div className={'grid md:grid-cols-8'}>
                <div className={'col-span-4'}>
                    <h1 className={'md:text-xl text-gray-900 dark:text-gray-100'}>There are {props.count} media files
                        uploaded</h1>
                    <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Most recent uploads</h1>
                    <div className="grid gap-2 grid-cols-3 sm:grid-cols-12 sm:gap-4">
                        {props.latest.map(media =>
                            <div key={media.id} className={'col-span-4'}>
                                <a href={route('media.show', media.id)}><img src={media.asset_small} alt={media.title_desc.title + ' image'} className=""/></a>
                            </div>
                        )}
                    </div>
                    <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random locations</h1>
                    <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random devices</h1>
                    <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random tags</h1>
                </div>
            </div>
        </MainLayout>
    );
}
