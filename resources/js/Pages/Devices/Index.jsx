import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {usePage} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

export default function Index(props) {
    const auth = usePage().props.auth;
    return (
        <MainLayout auth={auth} title={'Devices'} header={'Devices'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-6 sm:gap-4">
                    {props.devices.data.map(device =>
                        <a key={device.id} href={route('device.show', device.slug)}>
                            <Card>
                                <h1 className={'font-semibold text-gray-800 dark:text-white'}>{device.name}</h1>
                                <h3 className={'text-gray-700 dark:text-gray-300'}>{device.brand}</h3>
                            </Card>
                        </a>
                    )}
                </div>
                <div className="grid grid-cols-2">
                    <Pagination data={props.devices}/>
                </div>
            </div>
        </MainLayout>
    );
}
