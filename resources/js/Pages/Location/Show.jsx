import MainLayout from "@/Layouts/MainLayout";
import {asset} from "@/Helpers";
import EditButton from "@/Components/EditButton";

export default function Show(props) {
    return (
        <MainLayout auth={props.auth} title={props.location.name + ' images'} header={props.location.name}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<EditButton text={'Edit location'} link={route('locations.edit', props.location.slug)}/>);
                        }
                    })()
                }
                <div className="grid gap-2 grid-cols-12 sm:gap-4">
                    {props.media.map(media =>
                        <div key={media.id} className={'col-span-6 md:col-span-3'}>
                            <a href={route('media.show', media.id)}><img src={asset(media.directory.name, media.id, media.extension, 'SMALL')} alt={media.title_desc.title + ' image'} title={'view ' + media.title_desc.title} className="rounded-md"/></a>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
