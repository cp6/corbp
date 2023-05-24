import {HiExclamationCircle} from "react-icons/hi/index.js";

export default function DescLine({desc}) {
    {
        if (desc !== null) {
            return (
                <p className={'text-gray-700 dark:text-gray-300 ml-2'}><HiExclamationCircle
                    className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{desc}</p>
            )
        }
    }
}
