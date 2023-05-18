import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import ResponseText from "@/Components/ResponseText";
import {slugify} from "@/Helpers";
import BackButton from "@/Components/BackButton";

export default function Edit(props) {

    const auth = props.auth;
    const response = props.response;
    const resource = props.resource;

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        name: resource.name,
        short_name: resource.short_name || '',
        slug: resource.slug || '',
        brand: resource.brand || '',
        model: resource.model || ''
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('device.update', resource.id));
    };


    return (
        <MainLayout auth={auth} title={'Edit device ' + resource.name} header={'Edit device: ' + resource.name}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <BackButton text={'Back to device'} link={route('device.show', resource.slug)}/>
                <Card>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2'}>

                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="name" value="Device name"/>
                                <TextInput
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="short_name" value="Short name"/>
                                <TextInput
                                    value={data.short_name}
                                    onChange={(e) => setData('short_name', e.target.value)}
                                />
                                <InputError message={errors.short_name}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="slug" value="Slug"/>
                                <TextInput
                                    value={data.slug}
                                    onChange={(e) => setData('slug', slugify(e.target.value))}
                                />
                                <InputError message={errors.slug}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="brand" value="Brand"/>
                                <TextInput
                                    value={data.brand}
                                    onChange={(e) => setData('brand', e.target.value)}
                                />
                                <InputError message={errors.area}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="model" value="Model"/>
                                <TextInput
                                    value={data.model}
                                    onChange={(e) => setData('model', e.target.value)}
                                />
                                <InputError message={errors.model}/>
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
