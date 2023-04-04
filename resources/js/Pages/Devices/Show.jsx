import MainLayout from "@/Layouts/MainLayout";

export default function Show(props) {
    return (
        <MainLayout auth={props.auth} title={props.device.name} header={props.device.name}>

        </MainLayout>
    );
}
