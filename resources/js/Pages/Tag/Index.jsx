import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {usePage} from "@inertiajs/react";
import CreateButton from "@/Components/CreateButton";

export default function Index(props) {
    const auth = usePage().props.auth;
    return (
        <MainLayout auth={auth} title={'Tags'} header={'Tags'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<CreateButton text={'Add a tag'} link={route('tag.create')}/>);
                        }
                    })()
                }
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 sm:gap-4">
                    <p className={'text-gray-800 dark:text-gray-400'}>You have {props.tags.length} tags</p>
                </div>
            </div>
        </MainLayout>
    );
}
