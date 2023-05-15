import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import {usePage} from "@inertiajs/react";
import CreateButton from "@/Components/CreateButton";

export default function Index(props) {
    const auth = usePage().props.auth;

    const tags = props.tags;

    const tags_amount = tags.length;

    return (
        <MainLayout auth={auth} title={'Image tags'} header={'Image tags'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<CreateButton text={'Add a tag'} link={route('tag.create')}/>);
                        }
                    })()
                }
                {
                    (() => {
                        if (tags_amount > 0) {
                            return (<Card>
                          <span
                              className={'text-gray-800 dark:text-gray-200 italic hover:text-gray-900 hover:dark:text-gray-100'}>
                    {tags.map((tag, i) => <a key={tag.id}
                                             href={route('tag.show', tag.slug)}>{tag.name}{i === tags_amount - 1 ? '.' : ', '}</a>
                    )}
                                </span>
                            </Card>);
                        }
                    })()
                }
            </div>
        </MainLayout>
    );
}
