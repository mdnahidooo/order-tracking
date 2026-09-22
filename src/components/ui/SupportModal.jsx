"use client";

import { FiHeadphones, FiMessageCircle, FiPhone, FiX } from "react-icons/fi";

export default function SupportModal({ isOpen, onClose, order }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-800">
                            <FiHeadphones size={20} />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-gray-900">
                            Contact Support
                        </h2>

                        <p className="mt-1 text-sm leading-5 text-gray-500">
                            Need help with order {order.id}? Choose how you would like to contact our support team.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                        aria-label="Close"
                    >
                        <FiX size={19} />
                    </button>
                </div>

                {/* Support Options */}
                <div className="mt-6 space-y-3">
                    <button className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 p-4 text-left transition hover:bg-gray-50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                            <FiMessageCircle size={18} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                Live Chat
                            </p>

                            <p className="mt-0.5 text-xs text-gray-500">
                                Chat with our support team
                            </p>
                        </div>
                    </button>

                    <button className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 p-4 text-left transition hover:bg-gray-50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                            <FiPhone size={18} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                Call Support
                            </p>

                            <p className="mt-0.5 text-xs text-gray-500">
                                Speak with a support specialist
                            </p>
                        </div>
                    </button>
                </div>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="mt-5 h-12 w-full rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                    Close
                </button>
            </div>
        </div>
    );
}