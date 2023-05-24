import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import {HiDownload} from "react-icons/hi/index.js";

export default function Create(props) {
    const auth = usePage().props.auth;
    const response = props.response;

    const {data, setData, post, errors, processing, recentlySuccessful} = useForm({
        name: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('tag.store'));
    };

    return (
        <MainLayout auth={auth} title={'Add tag'} header={'Add a tag'} response={response}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <Card>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2'}>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="name" value="Tag name"/>
                                <TextInput
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name}/>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={processing} className={'mt-4 px-6'}>Create</PrimaryButton>

                            <Transition
                                show={recentlySuccessful}
                                duration={5}
                                enterFrom="opacity-0"
                                leaveTo="opacity-0"
                                className="transition ease-in-out duration-1000"
                            >
                                <p className=
                                       {
                                           (() => {
                                               if (response !== null) {
                                                   if (response.type === 'success') {
                                                       return ("text-sm text-green-500");
                                                   } else {
                                                       return ("text-sm text-red-500");
                                                   }
                                               }
                                           })()
                                       }
                                >{(response === null) ? null : response.message}</p>
                            </Transition>
                        </div>

                    </form>
                </Card>
            </div>
        </MainLayout>
    );
}
