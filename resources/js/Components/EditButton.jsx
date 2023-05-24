import React from "react";
import {HiPencil} from "react-icons/hi/index.js";

export default function EditButton({link, text}) {
    return (
        <a href={link}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <HiPencil className={'inline mr-1 mb-1 text-white'}/>
            {text}</a>
    );
}
