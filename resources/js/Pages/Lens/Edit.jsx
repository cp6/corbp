import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import ResponseText from "@/Components/ResponseText";
import {slugify} from "@/Helpers";

export default function Edit(props) {

    const auth = props.auth;
    const response = props.response;
    const resource = props.resource;

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        name: resource.name,
        short_name: resource.short_name || '',
        slug: resource.slug || '',
        brand: resource.brand || '',
        model: resource.model || '',
        min_mm: resource.min_mm || '',
        max_mm: resource.max_mm || '',
        min_aperture: resource.min_aperture || '',
        max_aperture: resource.max_aperture || ''
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('lens.update', resource.id));
    };

    return (
        <MainLayout auth={auth} title={'Edit lens ' + resource.name} header={'Edit lens: ' + resource.name}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
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
                                    onChange={(e) => setData('slug',  slugify(e.target.value))}
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
                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2'}>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="min_mm" value="min mm"/>
                                <TextInput
                                    type={'number'}
                                    value={data.min_mm}
                                    onChange={(e) => setData('min_mm', e.target.value)}
                                />
                                <InputError message={errors.min_mm}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="max_mm" value="max mm"/>
                                <TextInput
                                    type={'number'}
                                    value={data.max_mm}
                                    onChange={(e) => setData('max_mm', e.target.value)}
                                />
                                <InputError message={errors.max_mm}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="min_aperture" value="min aperture"/>
                                <TextInput
                                    type={'number'}
                                    value={data.min_aperture}
                                    onChange={(e) => setData('min_aperture', e.target.value)}
                                />
                                <InputError message={errors.min_aperture}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel htmlFor="max_aperture" value="max aperture"/>
                                <TextInput
                                    type={'number'}
                                    value={data.max_aperture}
                                    onChange={(e) => setData('max_aperture', e.target.value)}
                                />
                                <InputError message={errors.max_aperture}/>
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
