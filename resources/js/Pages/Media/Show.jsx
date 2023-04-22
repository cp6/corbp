import MainLayout from "@/Layouts/MainLayout";

export default function Show(props) {
    return (
        <MainLayout auth={props.auth} title={props.media.title} header={props.media.title}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">

            </div>
        </MainLayout>
    );
}
