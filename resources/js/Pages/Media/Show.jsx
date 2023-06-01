import MainLayout from "@/Layouts/MainLayout";
import ImageCard from "@/Components/ImageCard";
import {asset} from "@/Helpers";
import ExifLine from "@/Components/ExifLine";
import DescLine from "@/Components/DescLine";
import DeviceLine from "@/Components/DeviceLine";
import DateLine from "@/Components/DateLine";
import LocationLine from "@/Components/LocationLine";
import TagsLoop from "@/Components/TagsLoop";
import SimilarImagesLoop from "@/Components/SimilarImagesLoop";

export default function Show(props) {

    const media = props.media;

    return (
        <MainLayout auth={props.auth} title={media.title_desc.title} header={media.title_desc.title} media={true} media_id={media.id}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <ImageCard>
                    <div className={'grid grid-cols-12'}>
                        <div className={'col-span-12 mb-2'}>
                            <a href={asset(media.directory.name, media.id, media.extension)}><img className={'w-full rounded-md'} src={asset(media.directory.name, media.id, media.extension, 'MEDIUM')}
                                                           title={media.title_desc.title} alt={media.title_desc.title}/></a>
                        </div>
                        <div className={'col-span-12 md:col-span-4 text-start md:ml-2'}>
                            <LocationLine data={media}/>
                        </div>
                        <div className={'col-span-12 md:col-span-4 text-center'}>
                            <p className={'text-gray-700 dark:text-gray-300'}></p>
                        </div>
                        <div className={'col-span-12 md:col-span-4 md:text-end'}>
                            <DateLine date={media.exif.captured_at}/>
                        </div>
                        <div className={'col-span-12 md:col-span-6 text-start md:ml-2'}>
                            <DeviceLine device={media.exif} />
                        </div>
                        <div className={'col-span-12 md:col-span-6 md:text-end'}>
                            <ExifLine exif={media.exif}/>
                        </div>
                        <div className={'col-span-12'}>
                            <DescLine desc={media.title_desc.description}/>
                        </div>
                        <div className={'col-span-12'}>
                            <TagsLoop tags={media.tags}/>
                        </div>
                    </div>
                </ImageCard>
                {(() => {
                    if (props.similar.length > 0) {
                        return (<div>
                            <h3 className={'font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100 tracking-wide mb-2'}>Similar images</h3>
                                <SimilarImagesLoop current_id={props.media.id} similar={props.similar} />
                        </div>)
                    }
                })()}
            </div>
        </MainLayout>
    );
}
