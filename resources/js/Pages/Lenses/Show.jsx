import MainLayout from "@/Layouts/MainLayout";

export default function Show(props) {
    return (
        <MainLayout auth={props.auth} title={props.lense.name} header={props.lense.name}>

        </MainLayout>
    );
}
