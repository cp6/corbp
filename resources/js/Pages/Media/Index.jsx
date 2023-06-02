import MainLayout from "@/Layouts/MainLayout";
import Pagination from "@/Components/Pagination";
import {asset} from "@/Helpers";

export default function Show(props) {

    const media = props.media;

    return (
        <MainLayout auth={props.auth} title={'All images'} header={'All images'} media={false} subheader={'Page '+ media.current_page}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <div className="grid gap-2 grid-cols-12 sm:gap-4">
                    {media.data.map(media =>
                        <div key={media.id} className={'col-span-6 md:col-span-3'}>
                            <a href={route('media.show', media.id)}><img src={asset(media.directory.name, media.id, media.extension, 'SMALL')} alt={media.title_desc.title + ' image'} title={'view ' + media.title_desc.title} className="rounded-md"/></a>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2">
                    <Pagination data={media}/>
                </div>
            </div>
        </MainLayout>
    );
}
