import MainLayout from "@/Layouts/MainLayout";

export default function Show(props) {
    return (
        <MainLayout auth={props.auth} title={props.location.name} header={props.location.name}>

        </MainLayout>
    );
}
