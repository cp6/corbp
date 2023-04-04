import React from "react";
import PaginationPage from "@/Components/PaginationPage";

export default function Pagination({data, showInfo = true}) {

    if (data.length === 0) {
        return (<p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
            Showing <span
            className="font-semibold text-gray-900 dark:text-white">1</span> to <span
            className="font-semibold text-gray-900 dark:text-white">1</span> of <span
            className="font-semibold text-gray-900 dark:text-white">0</span> Entries
        </p>);
    }

    return (
        <div className="flex flex-col mt-2">
            {(() => {
                if (showInfo) {
                    return (<p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
                        Showing <span
                        className="font-semibold text-gray-900 dark:text-white">{data.from}</span> to <span
                        className="font-semibold text-gray-900 dark:text-white">{data.to}</span> of <span
                        className="font-semibold text-gray-900 dark:text-white">{data.total}</span> Entries
                    </p>);
                }
            })()}
            <div className="inline-flex mt-2 xs:mt-0">
                <nav>
                    <ul className="inline-flex -space-x-px">
                        <li>
                            <a href={data.prev_page_url}
                               className={"px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>Previous</a>
                        </li>
                        {(() => {
                            if (data.current_page > 2) {
                                return (<PaginationPage url={"?page=" + (data.current_page - 2)}
                                                        label={data.current_page - 2}
                                                        active={false}/>)
                            }
                        })()}
                        {(() => {
                            if (data.prev_page_url !== null) {
                                return (<PaginationPage url={data.prev_page_url} label={data.current_page - 1}
                                                        active={false}/>)
                            }
                        })()}
                        <PaginationPage label={data.current_page} active={true}></PaginationPage>
                        {(() => {
                            if (data.next_page_url !== null) {
                                return (<PaginationPage url={data.next_page_url} label={data.current_page + 1}
                                                        active={false}/>)
                            }
                        })()}
                        {(() => {
                            if (data.current_page + 2 <= data.last_page) {
                                return (<PaginationPage url={"?page=" + (data.current_page + 2)}
                                                        label={data.current_page + 2}
                                                        active={false}/>)
                            }
                        })()}
                        {(() => {
                            if (data.current_page + 3 <= data.last_page) {
                                return (<PaginationPage url={"?page=" + (data.current_page + 3)}
                                                        label={data.current_page + 3}
                                                        active={false}/>)
                            }
                        })()}
                        <li>
                            <a href={data.next_page_url}
                               className={"px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
