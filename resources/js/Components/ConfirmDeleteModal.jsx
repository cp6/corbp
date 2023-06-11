import React from 'react';

const ConfirmDeleteModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-black dark:text-gray-100">Confirm Delete</h2>
                <p className="mb-4 text-black dark:text-gray-100">Are you sure you want to delete this item?</p>
                <div className="flex justify-end">
                    <button
                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mr-2"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg"
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
