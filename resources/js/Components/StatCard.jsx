export default function StatCard({route, text = 'text', value = 123}) {
    return (
        <div className="w-full max-w-xs overflow-hidden rounded-md shadow-sm bg-gray-100 dark:bg-slate-700">
            <div className="py-5 text-center">
                <a href={route} className="block text-lg font-bold text-gray-800 dark:text-white" tabIndex="0"
                   role="link">{value}</a>
                <span className="text-sm text-gray-700 dark:text-gray-200">{text}</span>
            </div>
        </div>
    );
}
