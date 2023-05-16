import MainLayout from "@/Layouts/MainLayout";
import ImageCard from "@/Components/ImageCard";
import {format} from "date-fns";
import {HiCalendar, HiCamera, HiCog, HiExclamationCircle, HiGlobe, HiTag} from "react-icons/hi";
import {asset} from "@/Helpers";

export default function Show(props) {

    const media = props.media;
    const tags_amount = media.tags.length;

    const location_text = (media.location !== null) ? <a href={route('locations.show', media.location.slug)}>{media.location.name}</a> : '';
    const sub_location_text = (media.sub_location !== null) ? <a href={route('locations.show', media.sub_location_id)}>{media.sub_location.name}</a> : '';

    return (
        <MainLayout auth={props.auth} title={media.title_desc.title} header={media.title_desc.title} media={true} media_id={media.id}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <ImageCard>
                    <div className={'grid grid-cols-12'}>
                        <div className={'col-span-12 mb-2'}>
                            <a href={asset(media.directory.name, media.id, media.extension)}><img className={'w-full rounded-md'} src={asset(media.directory.name, media.id, media.extension, 'MEDIUM')}
                                                           title={media.title_desc.title} alt={media.title_desc.title}/></a>
                        </div>
                        <div className={'col-span-12 md:col-span-4 text-start ml-2'}>
                            <p className={'text-gray-700 dark:text-gray-300'}><HiGlobe className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{location_text} {sub_location_text}</p>
                        </div>
                        <div className={'col-span-12 md:col-span-4 text-center'}>
                            <p className={'text-gray-700 dark:text-gray-300'}></p>
                        </div>
                        <div className={'col-span-12 md:col-span-4 md:text-end'}>
                            <p className={'text-gray-700 dark:text-gray-300 mr-2'}><HiCalendar className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{format(new Date(media.exif.captured_at), 'do LLLL yyyy hh:mm:ss a ')}</p>
                        </div>
                        <div className={'col-span-12 md:col-span-6 text-start ml-2'}>
                            <p className={'text-gray-700 dark:text-gray-300'}><HiCamera className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{media.exif.device.name} with {media.exif.lens.name}</p>
                        </div>
                        <div className={'col-span-12 md:col-span-6 md:text-end'}>
                            <p className={'text-gray-700 dark:text-gray-300 mr-2'}><HiCog className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{media.exif.f_stop_raw} {media.exif.focal_length}mm {media.exif.shutter_speed_raw} ISO {media.exif.iso}</p>
                        </div>
                        <div className={'col-span-12'}>
                            <p className={'text-gray-700 dark:text-gray-300 ml-2'}><HiExclamationCircle className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{media.title_desc.description}</p>
                        </div>
                        <div className={'col-span-12'}>
                            <p className={'text-gray-700 dark:text-gray-300 ml-2'}><HiTag className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>
                                <span
                                    className={'text-gray-800 dark:text-gray-200 italic hover:text-gray-900 hover:dark:text-gray-100'}>
                    {media.tags.map((tag, i) => <a key={tag.id}
                                             href={route('tag.show', tag.tag.slug)}>{tag.tag.name}{i === tags_amount - 1 ? '.' : ', '}</a>
                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                </ImageCard>
            </div>
        </MainLayout>
    );
}
