"use client";

import { FiCheck, FiX } from "react-icons/fi";

export default function SuccessMessage({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-60 flex items-end justify-center bg-black/40 p-4 sm:items-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-xl">
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <FiCheck size={26} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-gray-900">
                    Report Submitted
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    We have received your delivery issue. Our support team will
                    review the order and contact you with the next steps.
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 h-12 w-full rounded-2xl bg-black text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                    Done
                </button>
            </div>
        </div>
    );
}