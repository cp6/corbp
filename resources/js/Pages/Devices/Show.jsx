import MainLayout from "@/Layouts/MainLayout";
import EditButton from "@/Components/EditButton";
import Pagination from "@/Components/Pagination";
import {asset} from "@/Helpers";

export default function Show(props) {

    return (
        <MainLayout auth={props.auth} title={props.device.name} header={props.device.name} response={props.response}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<EditButton text={'Edit device'} link={route('device.edit', props.device.slug)}/>);
                        }
                    })()
                }
                {
                    (() => {
                        if (props.media.data.length > 0) {
                            return (<div className="grid gap-2 grid-cols-12 sm:gap-4">{props.media.data.map(media =>
                                <div key={media.id} className={'col-span-6 md:col-span-3'}>
                                    <a href={route('media.show', media.id)}><img
                                        src={asset(media.media.directory.name, media.media.id, media.media.extension, 'SMALL')}
                                        alt={media.media.title_desc.title + ' image'} title={'view ' + media.media.title_desc.title}
                                        className="rounded-md"/></a>
                                </div>
                            )}</div>);
                        } else {
                            return (<p className={'text-gray-600 dark:text-gray-400'}>No images found for this device</p>);
                        }
                    })()
                }
                <div className="grid grid-cols-2">
                    <Pagination data={props.media}/>
                </div>
            </div>
        </MainLayout>
    );
}
