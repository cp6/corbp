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
        name: '',
        state: 'Victoria',
        area: '',
        postcode: '',
        lat: '',
        lon: '',
        country: 'Australia',
        country_code: 'AUS',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('locations.store'));
    };

    const callGeoApi = () => {

        fetch(route('api.geo.query'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + auth.user.api_token
            },
            body: JSON.stringify({
                'location': data.name + ", " + data.state + ", " + data.country
            })
        }).then(response => response.json())
            .then(response => {
                setData(data => ({...data, country: response.data[0].country}));
                setData(data => ({...data, country_code: response.data[0].country_code}));
                setData(data => ({...data, lat: response.data[0].latitude}));
                setData(data => ({...data, lon: response.data[0].longitude}));
                setData(data => ({...data, area: response.data[0].administrative_area}));
                setData(data => ({...data, state: response.data[0].region}));
            });
    };

    return (
        <MainLayout auth={auth} title={'Add location'} header={'Add a location'} response={response}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <Card>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2'}>

                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="name" value="Location name"/>
                                <TextInput
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="area" value="Area"/>
                                <TextInput
                                    value={data.area}
                                    onChange={(e) => setData('area', e.target.value)}
                                />
                                <InputError message={errors.area}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="state" value="State"/>
                                <TextInput
                                    value={data.state}
                                    onChange={(e) => setData('state', e.target.value)}
                                />
                                <InputError message={errors.state}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="postcode" value="Postcode"/>
                                <TextInput
                                    type={'number'}
                                    value={data.postcode}
                                    onChange={(e) => setData('postcode', e.target.value)}
                                />
                                <InputError message={errors.postcode}/>
                            </div>

                        </div>

                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4'}>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="country" value="Country"/>
                                <TextInput
                                    value={data.country}
                                    onChange={(e) => setData('country', e.target.value)}
                                    required
                                />
                                <InputError message={errors.country}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="country_code" value="Country code"/>
                                <TextInput
                                    value={data.country_code}
                                    onChange={(e) => setData('country_code', e.target.value)}
                                />
                                <InputError message={errors.country_code}/>
                            </div>
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
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel value="Fetch GEO data & fill"/>
                                <HiDownload
                                    className="h-6 w-6 mt-2 text-gray-600 dark:text-white inline hover:cursor-pointer"
                                    onClick={callGeoApi}
                                    title={'Fetch GEO data from location name field'}/>
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
