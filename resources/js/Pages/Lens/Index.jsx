import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

export default function Index(props) {
    const auth = usePage().props.auth;
    return (
        <MainLayout auth={auth} title={'Lens'} header={'Lens'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 sm:gap-4">
                    {props.lens.data.map(lense =>
                        <a key={lense.id} href={route('lens.show', lense.slug)}>
                            <Card>
                                <h1 className={'font-semibold text-gray-800 dark:text-white'}>{lense.name} <span
                                    className={'font-light text-gray-500 dark:text-gray-400'}>{lense.media_count}</span>
                                </h1>
                                <h3 className={'text-gray-700 dark:text-gray-300'}>{lense.state}</h3>
                            </Card>
                        </a>
                    )}
                </div>
                <div className="grid grid-cols-2">
                    <Pagination data={props.lens}/>
                </div>
            </div>
        </MainLayout>
    );
}
