import {HiTag} from "react-icons/hi";

export default function TagsLoop({tags}) {
    {
        const tags_amount = tags.length;

        if (tags_amount > 0) {

            return (
                <p className={'text-gray-700 dark:text-gray-300 ml-2'}>
                    <HiTag className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>
                    <span
                        className={'text-gray-800 dark:text-gray-200 italic hover:text-gray-900 hover:dark:text-gray-100'}>
                    {tags.map((tag, i) => <a key={tag.id}
                                             href={route('tag.show', tag.tag.slug)}>{tag.tag.name}{i === tags_amount - 1 ? '.' : ', '}</a>
                    )}
                                </span>
                </p>
            );

        }
    }
}
