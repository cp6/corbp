import MainLayout from "@/Layouts/MainLayout";
import {usePage} from "@inertiajs/react";

export default function Dashboard() {

    const auth = usePage().props.auth;

    return (
        <MainLayout auth={auth} title={'Stats'} header={'Stats'}>

        </MainLayout>
    );
}
