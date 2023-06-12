import React from "react";
import {HiOutlineTrash} from "react-icons/hi/index.js";

export default function DeleteButton({onClick, text}) {
    return (
        <span onClick={onClick} className="text-white bg-red-600 hover:bg-red-800 hover:cursor-pointer focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
            <HiOutlineTrash className={'inline mr-1 mb-1 text-white'}/>
            {text}</span>
    );
}
