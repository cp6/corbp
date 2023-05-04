import MainLayout from "@/Layouts/MainLayout";
import ImageCard from "@/Components/ImageCard";

export default function Show(props) {

    const media = props.media;

    return (
        <MainLayout auth={props.auth} title={media.title_desc.title} header={media.title_desc.title} media={true}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                <div className={'grid grid-cols-12'}>
                    <div className={'col-span-12'}>
                        <ImageCard>
                            <a href={props.full_link}><img className={'w-full rounded-md'} src={props.medium_link}
                                                           title={media.title_desc.title} alt={media.title_desc.title}/></a>
                        </ImageCard>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
