export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 dark:text-gray-300 mb-2 mt-2 md:mt-0` + className}>
            {value ? value : children}
        </label>
    );
}
