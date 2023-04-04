import React from "react";
import PaginationPage from "@/Components/PaginationPage";

export default function Pagination({data}) {
    return (
        <div className="flex flex-col">
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
      Showing <span className="font-semibold text-gray-900 dark:text-white">{data.from}</span> to <span
                className="font-semibold text-gray-900 dark:text-white">{data.to}</span> of <span
                className="font-semibold text-gray-900 dark:text-white">{data.total}</span> Entries
  </p>
            <div className="inline-flex mt-2 xs:mt-0">
                <nav aria-label="Page navigation example">

                    <ul className="inline-flex -space-x-px">
                        <li>
                            <a href={data.prev_page_url}
                               className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        {(() => {
                            if (data.prev_page_url !== null) {
                                return (<PaginationPage url={data.prev_page_url} label={data.current_page - 1}
                                                        active={false}></PaginationPage>)
                            }
                        })()}
                        <PaginationPage label={data.current_page} active={true}></PaginationPage>
                        {(() => {
                            if (data.next_page_url !== null) {
                                return (<PaginationPage url={data.next_page_url} label={data.current_page + 1}
                                                        active={false}></PaginationPage>)
                            }
                        })()}
                        <li>
                            <a href={data.next_page_url}
                               className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
