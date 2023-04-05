import MainLayout from "@/Layouts/MainLayout";
import {usePage} from "@inertiajs/react";

export default function Dashboard(props) {

    const auth = usePage().props.auth;

    return (
        <MainLayout auth={auth} title={'Home'} header={'corbp'}>
            <div className={'grid md:grid-cols-8'}>
            <div className={'col-span-4'}>
                <h1 className={'md:text-xl text-gray-900 dark:text-gray-100'}>There are {props.count} media files uploaded</h1>
                <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Most recent uploads</h1>
                <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random locations</h1>
                <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random devices</h1>
                <h1 className={'md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random tags</h1>
            </div>
            </div>
        </MainLayout>
    );
}
