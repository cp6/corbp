import MainLayout from "@/Layouts/MainLayout";
import Pagination from "@/Components/Pagination";

export default function Show(props) {

    const media = props.media;

    console.log(media);

    return (
        <MainLayout auth={props.auth} title={'All images'} header={'All images'} media={false} subheader={'Page '+props.page}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">

                <div className="grid grid-cols-2">
                    <Pagination data={media}/>
                </div>
            </div>
        </MainLayout>
    );
}
