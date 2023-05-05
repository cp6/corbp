import MainLayout from "@/Layouts/MainLayout";
import ImageCard from "@/Components/ImageCard";
import {format} from "date-fns";

export default function Show(props) {

    const media = props.media;

    const location = (media.location !== null) ? media.location.name : '';
    const sub_location = (media.sub_location !== null) ? media.sub_location.name : '';

    return (
        <MainLayout auth={props.auth} title={media.title_desc.title} header={media.title_desc.title} media={true}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <ImageCard>
                    <div className={'grid grid-cols-12'}>
                        <div className={'col-span-12 mb-2'}>
                            <a href={props.full_link}><img className={'w-full rounded-md'} src={props.medium_link}
                                                           title={media.title_desc.title} alt={media.title_desc.title}/></a>
                        </div>
                        <div className={'col-span-12 md:col-span-4 text-start ml-2'}>
                            <p className={'text-gray-700 dark:text-gray-300'}>{location} {sub_location}</p>
                        </div>
                        <div className={'col-span-12 md:col-span-4 text-center'}>
                            <p className={'text-gray-700 dark:text-gray-300'}>SAMPLE</p>
                        </div>
                        <div className={'col-span-12 md:col-span-4 md:text-end'}>
                            <p className={'text-gray-700 dark:text-gray-300 mr-2'}>{format(new Date(media.exif.captured_at), 'do LLLL yyyy hh:mm:ss a ')}</p>
                        </div>
                    </div>
                </ImageCard>
            </div>
        </MainLayout>
    );
}
