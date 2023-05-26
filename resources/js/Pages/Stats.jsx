import MainLayout from "@/Layouts/MainLayout";
import {usePage} from "@inertiajs/react";
import StatCard from "@/Components/StatCard";

export default function Dashboard(props) {

    const auth = usePage().props.auth;

    return (
        <MainLayout auth={auth} title={'Stats'} header={'Stats'}>
            <div className={'grid grid-cols-1 md:grid-cols-6 gap-2'}>
                <StatCard text={'Images'} value={props.stats.total}/>
                <StatCard text={'Size MB'} value={props.stats.total_size / 1000 / 1000}/>
                <StatCard text={'Oldest'} value={props.stats.first_upload}/>
                <StatCard text={'Newest'} value={props.stats.latest_upload}/>
                <StatCard text={'Recent'} value={props.stats.oldest_image}/>
                <StatCard text={'First'} value={props.stats.newest_image}/>
            </div>
        </MainLayout>
    );
}
