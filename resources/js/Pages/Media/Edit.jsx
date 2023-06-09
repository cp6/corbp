import React from "react";
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
import {HiArrowLongLeft} from "react-icons/all";
import DeleteButton from "@/Components/DeleteButton";

export default function Edit(props) {

    const auth = props.auth;
    const response = props.response;
    const resource = props.media;
    const tags_assigned = props.media.tags;
    const locations = props.locations;
    const tags = props.tags;

    const [baseSubLocationId, setSaseSubLocationId] = React.useState((resource.sub_location !== null) ? resource.sub_location.id : null);
    const [baseSubLocationName, setSaseSubLocationName] = React.useState((resource.sub_location !== null) ? resource.sub_location.name : 'None');

    const [subLocations, setSubLocations] = React.useState([]);

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        slug: resource.slug || '',
        location_id: resource.location_id || '',
        sub_location_id: resource.sub_location_id || '',
        title: resource.title_desc.title || '',
        description: resource.title_desc.description || '',
        tag1: (typeof tags_assigned[0] !== 'undefined') ? tags_assigned[0].tag_id : '',
        tag2: (typeof tags_assigned[1] !== 'undefined') ? tags_assigned[1].tag_id : '',
        tag3: (typeof tags_assigned[2] !== 'undefined') ? tags_assigned[2].tag_id : '',
        tag4: (typeof tags_assigned[3] !== 'undefined') ? tags_assigned[3].tag_id : '',
        tag5: (typeof tags_assigned[4] !== 'undefined') ? tags_assigned[4].tag_id : '',
        tag6: (typeof tags_assigned[5] !== 'undefined') ? tags_assigned[5].tag_id : ''
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('media.update', resource.id));
    };

    const titleToSlug = () => {
        setData('slug', slugify(data.title));
    };

    const fetchSubLocations = event => {
        setData('location_id', event.target.value)

        if (event.target.value !== '') {

            fetch(route('api.sub-location.show', event.target.value), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + auth.user.api_token
                }
            }).then(response => response.json())
                .then(response => {
                    setSubLocations(response);
                });

        }
    };

    return (
        <MainLayout auth={auth} title={'Edit media ' + resource.title_desc.title}
                    header={'Edit: ' + resource.title_desc.title}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <BackButton text={'Back to media'} link={route('media.show', resource.id)}/>
                <DeleteButton text={'Delete image'} link={route('media.show', resource.id)}/>
                <Card>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className={'grid grid-cols-1 md:grid-cols-8 md:gap-4 mb-2'}>
                            <div className={'col-span-1 md:col-span-3'}>
                                <InputLabel htmlFor="slug" value="Slug"/>
                                <TextInput
                                    value={data.slug}
                                    onChange={(e) => setData('slug', slugify(e.target.value))}
                                    required={true}
                                />
                                <InputError message={errors.slug}/>
                            </div>
                            <div className={'col-span-1 md:col-span-1'}>
                                <InputLabel value="Title to slug"/>
                                <HiArrowLongLeft
                                    className="h-6 w-6 mt-2 text-gray-600 dark:text-white inline hover:cursor-pointer"
                                    onClick={titleToSlug}
                                    title={'Convert title into slug'}/>
                            </div>
                            <div className={'col-span-1 md:col-span-4'}>
                                <InputLabel htmlFor="title" value="Title"/>
                                <TextInput
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                <InputError message={errors.title}/>
                            </div>
                            <div className={'col-span-1 md:col-span-8'}>
                                <InputLabel htmlFor="description" value="Description"/>
                                <TextInput
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description}/>
                            </div>
                            <div className={'col-span-1 md:col-span-4'}>
                                <InputLabel htmlFor="location_id" value="Location"/>
                                <select onChange={fetchSubLocations}
                                        name="location_id"
                                        value={data.location_id}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''>None</option>
                                    {locations.map(location => <option key={location.id}
                                                                       value={location.id}>{location.name}</option>)}
                                </select>
                                <InputError message={errors.location_id}/>
                            </div>
                            <div className={'col-span-1 md:col-span-4'}>
                                <InputLabel htmlFor="sub_location_id" value="Sub location"/>
                                <select onChange={(e) => setData('sub_location_id', e.target.value)}
                                        name="sub_location_id"
                                        value={data.sub_location_id}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    {(() => {
                                        if (baseSubLocationId === null) {
                                            return (
                                                <option value=''>None</option>
                                            )
                                        } else {
                                            return (
                                                <>
                                                    <option value=''>None</option>
                                                    <option value={baseSubLocationId}>{baseSubLocationName}</option>
                                                </>
                                            )
                                        }
                                    })()}
                                    {subLocations.map(sub_location => <option key={sub_location.id}
                                                                              value={sub_location.id}>{sub_location.name}</option>)}
                                </select>
                                <InputError message={errors.sub_location_id}/>
                            </div>
                        </div>
                        <p className={'font-medium text-sm text-gray-700 dark:text-gray-300 mt-1 md:mt-0'}>Tags</p>
                        <div className={'grid grid-cols-1 md:grid-cols-12 md:gap-4 mb-2'}>
                            <div className={'col-span-1 md:col-span-2 mb-2'}>
                                <select onChange={(e) => setData('tag1', e.target.value)}
                                        name="tag1"
                                        value={data.tag1}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''></option>
                                    {tags.map(tag => <option key={tag.id}
                                                             value={tag.id}>{tag.name}</option>)}
                                </select>
                                <InputError message={errors.tag1}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2 mb-2'}>
                                <select onChange={(e) => setData('tag2', e.target.value)}
                                        name="tag2"
                                        value={data.tag2}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''></option>
                                    {tags.map(tag => <option key={tag.id}
                                                             value={tag.id}>{tag.name}</option>)}
                                </select>
                                <InputError message={errors.tag2}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2 mb-2'}>
                                <select onChange={(e) => setData('tag3', e.target.value)}
                                        name="tag3"
                                        value={data.tag3}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''></option>
                                    {tags.map(tag => <option key={tag.id}
                                                             value={tag.id}>{tag.name}</option>)}
                                </select>
                                <InputError message={errors.tag3}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2 mb-2'}>
                                <select onChange={(e) => setData('tag4', e.target.value)}
                                        name="tag4"
                                        value={data.tag4}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''></option>
                                    {tags.map(tag => <option key={tag.id}
                                                             value={tag.id}>{tag.name}</option>)}
                                </select>
                                <InputError message={errors.tag4}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2 mb-2'}>
                                <select onChange={(e) => setData('tag5', e.target.value)}
                                        name="tag5"
                                        value={data.tag5}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''></option>
                                    {tags.map(tag => <option key={tag.id}
                                                             value={tag.id}>{tag.name}</option>)}
                                </select>
                                <InputError message={errors.tag5}/>
                            </div>
                            <div className={'col-span-1 md:col-span-2 mb-2'}>
                                <select onChange={(e) => setData('tag6', e.target.value)}
                                        name="tag6"
                                        value={data.tag6}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''></option>
                                    {tags.map(tag => <option key={tag.id}
                                                             value={tag.id}>{tag.name}</option>)}
                                </select>
                                <InputError message={errors.tag6}/>
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
