import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import {HiDownload} from "react-icons/hi/index.js";
import ResponseText from "@/Components/ResponseText";
import {slugify} from "@/Helpers";

export default function Edit(props) {
    const auth = usePage().props.auth;
    const response = props.response;
    const resource = props.resource;

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        location_id: resource.location_id,
        name: resource.name,
        slug: resource.slug,
        lat: resource.lat || '',
        lon: resource.lon || '',
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('sub-location.update', resource.id));
    };

    const handleChange = (event) => {
        const name = event.target.value;
        setData(data => ({...data, name: name, slug: slugify(name)}));
    };

    return (
        <MainLayout auth={auth} title={'Edit sub location ' + resource.name} header={'Edit sub location: ' + resource.name} subheader={resource.location.name}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <Card>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2'}>

                            <div className={'col-span-1 md:col-span-2 mt-1'}>

                                <InputLabel htmlFor="location_id" value="Location"/>
                                <select onChange={(e) => setData('location_id', e.target.value)}
                                        name="location_id"
                                        value={data.location_id}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value={''}>Choose one</option>
                                    {props.locations.map(location => <option key={location.id}
                                                                             value={location.id}>{location.name}</option>)}
                                </select>
                                <InputError message={errors.location_id}/>
                            </div>

                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="name" value="Sub location name"/>
                                <TextInput
                                    value={data.name}
                                    onChange={handleChange}
                                    required
                                />
                                <InputError message={errors.name}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="slug" value="Slug"/>
                                <TextInput
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                />
                                <InputError message={errors.slug}/>
                            </div>

                        </div>

                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4'}>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="lat" value="LAT"/>
                                <TextInput
                                    value={data.lat}
                                    onChange={(e) => setData('lat', e.target.value)}
                                />
                                <InputError message={errors.lat}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="lon" value="LON"/>
                                <TextInput
                                    type={'number'}
                                    value={data.lon}
                                    onChange={(e) => setData('lon', e.target.value)}
                                />
                                <InputError message={errors.lon}/>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={processing} className={'mt-4 px-6'}>Update</PrimaryButton>
                            <ResponseText recentlySuccessful={recentlySuccessful} response={response}></ResponseText>
                        </div>

                    </form>
                </Card>
            </div>
        </MainLayout>
    );
}
