import MainLayout from "@/Layouts/MainLayout";
import EditButton from "@/Components/EditButton";

export default function Show(props) {
    return (
        <MainLayout auth={props.auth} title={props.device.name} header={props.device.name} response={props.response}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<EditButton text={'Edit device'} link={route('device.edit', props.device.slug)}/>);
                        }
                    })()
                }
            </div>
        </MainLayout>
    );
}
