"use client";

import { useState } from "react";
import {
    FiAlertCircle,
    FiCheck,
    FiPackage,
    FiX,
} from "react-icons/fi";

export default function ReportIssueModal({
    isOpen,
    onClose,
    order,
    onSuccess,
}) {
    const [selectedIssue, setSelectedIssue] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const issues = [
        {
            id: "not_received",
            label: "I didn't receive the package",
            icon: <FiPackage size={18} />,
        },
        {
            id: "wrong_location",
            label: "Package was left in the wrong place",
            icon: <FiAlertCircle size={18} />,
        },
        {
            id: "damaged",
            label: "Package arrived damaged",
            icon: <FiAlertCircle size={18} />,
        },
    ];

    if (!isOpen) {
        return null;
    }

    const handleSubmit = () => {
        if (!selectedIssue) {
            return;
        }

        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setSelectedIssue("");
            onSuccess();
        }, 700);
    };

    const handleClose = () => {
        setSelectedIssue("");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                            <FiAlertCircle size={21} />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-gray-900">
                            Report Delivery Issue
                        </h2>

                        <p className="mt-1 text-sm leading-5 text-gray-500">
                            Tell us what happened with order {order.id}.
                        </p>
                    </div>

                    <button
                        onClick={handleClose}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                        aria-label="Close"
                    >
                        <FiX size={19} />
                    </button>
                </div>

                {/* Issue Options */}
                <div className="mt-6 space-y-3">
                    {issues.map((issue) => {
                        const isSelected = selectedIssue === issue.id;

                        return (
                            <button
                                key={issue.id}
                                onClick={() => setSelectedIssue(issue.id)}
                                className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${isSelected
                                        ? "border-black bg-gray-50"
                                        : "border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isSelected
                                            ? "bg-black text-white"
                                            : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {isSelected ? (
                                        <FiCheck size={18} />
                                    ) : (
                                        issue.icon
                                    )}
                                </div>

                                <p className="text-sm font-semibold text-gray-800">
                                    {issue.label}
                                </p>
                            </button>
                        );
                    })}
                </div>

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    disabled={!selectedIssue || submitting}
                    className="mt-5 h-12 w-full rounded-2xl bg-black text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                >
                    {submitting ? "Submitting..." : "Submit Report"}
                </button>

                <button
                    onClick={handleClose}
                    className="mt-2 h-12 w-full rounded-2xl text-sm font-semibold text-gray-500 transition hover:bg-gray-50"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}