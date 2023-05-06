import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import ResponseText from "@/Components/ResponseText";

export default function Edit(props) {

    const auth = props.auth;
    const response = props.response;
    const resource = props.media;

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        slug: resource.slug || '',
        title: resource.title_desc.title || '',
        description: resource.title_desc.description || '',
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('media.update', resource.id));
    };

    return (
        <MainLayout auth={auth} title={'Edit media ' + resource.title_desc.title} header={'Edit: ' + resource.title_desc.title}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <Card>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2'}>
                            <div className={'col-span-1 md:col-span-2'}>
                                <InputLabel htmlFor="slug" value="Slug"/>
                                <TextInput
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                    required={true}
                                />
                                <InputError message={errors.slug}/>
                            </div>
                            <div className={'col-span-1 md:col-span-4'}>
                                <InputLabel htmlFor="title" value="Title"/>
                                <TextInput
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                <InputError message={errors.title}/>
                            </div>
                            <div className={'col-span-1 md:col-span-6'}>
                                <InputLabel htmlFor="description" value="Description"/>
                                <TextInput
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description}/>
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
