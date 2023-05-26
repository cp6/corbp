import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <MainLayout
            auth={auth}
            header={'Profile'} subheader={'Update your profile'}
        >
            <Head title="Profile" />

            <div className="py-4">
                    <div className="p-4 sm:p-8 rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 mb-4">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 mb-4">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 mb-4">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
        </MainLayout>
    );
}
