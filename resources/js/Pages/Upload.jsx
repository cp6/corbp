import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import {useEffect, useState} from "react";
import ProgressBar from "@/Components/ProgressBar";

export default function Upload() {

    const auth = usePage().props.auth;
    const response = usePage().props.response;
    const locations = usePage().props.locations;
    const upload_size = usePage().props.upload_size;
    const files_upload = usePage().props.files_upload;

    const {data, setData, post, errors, processing, recentlySuccessful} = useForm({
        location_id: '',
        files: [],
    });

    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(null);
    const [uploadCompletedCount, setUploadCompletedCount] = useState(0);
    const [uploadCount, setUploadCount] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        post(route('upload.handle'), {
            onStart: (startEvent) => {
                setUploading(true);
            },
            onFinish: (finishEvent) => {
                setUploading(false);
            }
        });
    };

    async function getUploadProgressValue() {
        const result = await axios.get(route('upload.progress'));
        return await result.data;
    }

    useEffect(() => {
            let interval;
            const config = {'Cache-Control': 'no-cache'};
            if (uploading) {
                interval = setInterval(() => {
                    getUploadProgressValue().then((the_response) => {
                        setUploadProgress(the_response.progress);
                        setUploadCompletedCount(the_response.completed_files);
                        setUploadCount(the_response.total_files);
                    })
                }, 500);
            } else if (!uploading) {
                setUploadProgress(null);
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }, [uploading]
    );


    return (
        <MainLayout auth={auth} title={'Upload'} header={'Upload media files'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <Card>
                    <p className={'text-yellow-600 dark:text-yellow-400'}>Your max file upload size
                        is <b>{upload_size}</b> and max files in single
                        request is <b>{files_upload}</b>.</p>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className={'grid grid-cols-1 md:grid-cols-6 md:gap-4 mb-2'}>
                            <div className={'col-span-6 md:col-span-3'}>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image
                                    files</label>
                                <input
                                    type="file"
                                    name="files"
                                    multiple={true}
                                    onChange={(e) =>
                                        setData("files", e.target.files)
                                    }
                                    className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                                <span className="text-red-600">
                                {errors.files}
                            </span>
                            </div>
                            <div className={'col-span-6 md:col-span-3'}>
                                <div className="mb-2 block">
                                    <InputLabel htmlFor="location_id" value="Location"/>
                                </div>
                                <select onChange={(e) => setData('location_id', e.target.value)}
                                        name="location_id"
                                        value={data.location_id}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value=''>None</option>
                                    {locations.map(location => <option key={location.id}
                                                                       value={location.id}>{location.name}</option>)}
                                </select>
                            </div>
                            <div className={'col-span-1 md:col-span-6'}>
                            <ProgressBar progress={uploadProgress} completed={uploadCompletedCount} toBeCompleted={uploadCount}></ProgressBar>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={processing} className={'mt-4 px-6'}>Upload</PrimaryButton>
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
