import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import {HiDownload} from "react-icons/hi";
import NavLink from "@/Components/NavLink";

export default function Index({auth, response, locations}) {

    return (
        <MainLayout auth={auth} title={'Locations'} header={'Locations'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (auth.user !== null) {
                            return (<a href={route('locations.create')} className={'text-blue-500 text-sm'}>Create
                                location</a>);
                        }
                    })()
                }
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-6 sm:gap-4">
                    {locations.map(location =>
                        <a key={location.id} href={route('locations.show', location.slug)}>
                            <Card>
                                <h1 className={'font-semibold text-gray-800 dark:text-white'}>{location.name} <span
                                    className={'font-light text-gray-500 dark:text-gray-400'}>{location.media_count}</span>
                                </h1>
                                <h3 className={'text-gray-700 dark:text-gray-300'}>{location.state}</h3>
                            </Card>
                        </a>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
