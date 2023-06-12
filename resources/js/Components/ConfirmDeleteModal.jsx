import React from 'react';

const ConfirmDeleteModal = ({ isOpen, onCancel, onConfirm, itemType }) => {
    return (
        <div className={`fixed inset-0 bottom-80 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl">
                <h2 className="text-xl font-bold tracking-wide mb-4 text-black dark:text-gray-100">Confirm Delete</h2>
                <p className="mb-6 text-black dark:text-gray-100">Are you sure you want to delete this {itemType}?</p>
                <div className="flex justify-end">
                    <button
                        className="text-gray-700 bg-gray-200 hover:bg-gray-300 py-1.5 px-5 rounded-md mr-6"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-800 text-white py-1.5 px-5 rounded-md"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
