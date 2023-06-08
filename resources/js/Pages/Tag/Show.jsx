import MainLayout from "@/Layouts/MainLayout";
import {asset} from "@/Helpers";
import EditButton from "@/Components/EditButton";
import Pagination from "@/Components/Pagination";

export default function Show(props) {

    const media = props.media.data;

    return (
        <MainLayout auth={props.auth} title={props.resource.name + ' tagged images'}
                    header={props.resource.name} subheader={'Tagged images'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<EditButton text={'Edit tag'} link={route('tag.edit', props.resource.slug)}/>);
                        }
                    })()
                }
                {
                    (() => {
                        if (media.length > 0) {
                            return (<div className="grid gap-2 grid-cols-12 sm:gap-4">{media.map(med =>
                                <div key={med.id} className={'col-span-6 md:col-span-3'}>
                                    <a href={route('media.show', med.media.id)}><img
                                        src={asset(med.media.directory.name, med.media.id, med.media.extension, 'SMALL')}
                                        alt={med.media.title_desc.title + ' image'}
                                        title={'view ' + med.media.title_desc.title} className="rounded-md"/></a>
                                </div>
                            )}</div>);
                        } else {
                            return (<p className={'text-gray-600 dark:text-gray-400'}>No images found for this tag</p>);
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
