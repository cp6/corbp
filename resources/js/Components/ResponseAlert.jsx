export default function ResponseAlert({type, text}) {
    if (type === 'success') {
        return (
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                 role="alert">
                {text}
            </div>
        );
    } else if (type === 'failure') {
        return (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                 role="alert">
                {text}
            </div>
        );
    } else if (type === 'warning') {
        return (
            <div
                className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                role="alert">
                {text}
            </div>
        );
    } else {
        return (<div className={'py-6'}></div>);
    }

}
