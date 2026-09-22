"use client";

import { useState } from "react";
import {
    FiAlertCircle,
    FiHelpCircle,
} from "react-icons/fi";

import SupportModal from "@/components/ui/SupportModal";
import ReportIssueModal from "@/components/ui/ReportIssueModal";
import SuccessMessage from "@/components/ui/SuccessMessage";

export default function NextStep({ order }) {
    const [supportOpen, setSupportOpen] = useState(false);
    const [reportOpen, setReportOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);

    const isDelayed = order.state === "delayed";
    const isNotReceived = order.state === "delivered_not_received";
    const isUnavailable = order.state === "tracking_unavailable";

    const handlePrimaryAction = () => {
        if (isNotReceived) {
            setReportOpen(true);
            return;
        }

        setSupportOpen(true);
    };

    const handleReportSuccess = () => {
        setReportOpen(false);
        setSuccessOpen(true);
    };

    return (
        <>
            <section className="mt-4 mb-6 rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                        {isDelayed || isNotReceived ? (
                            <FiAlertCircle size={19} />
                        ) : (
                            <FiHelpCircle size={19} />
                        )}
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-gray-900">
                            {isDelayed
                                ? "Need help with this delay?"
                                : isNotReceived
                                    ? "Package not received?"
                                    : isUnavailable
                                        ? "Tracking isn't available yet"
                                        : "Need help with your order?"}
                        </h2>

                        <p className="mt-1 text-sm leading-5 text-gray-500">
                            {isDelayed
                                ? "Our support team can help you with the updated delivery date."
                                : isNotReceived
                                    ? "Report the missing package so our team can investigate the delivery."
                                    : isUnavailable
                                        ? "Tracking details will appear automatically once your order ships."
                                        : "Our support team is available if you need assistance."}
                        </p>
                    </div>
                </div>

                {/* Primary Action */}
                <button
                    onClick={handlePrimaryAction}
                    className="mt-5 flex h-12 w-full items-center justify-center rounded-2xl bg-black text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                    {isDelayed
                        ? "Get Help With This Order"
                        : isNotReceived
                            ? "Report Missing Delivery"
                            : "Contact Support"}
                </button>

                {/* Secondary Action */}
                {isNotReceived && (
                    <button
                        onClick={() => setSupportOpen(true)}
                        className="mt-2 h-12 w-full rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        Contact Support
                    </button>
                )}
            </section>

            {/* Support Modal */}
            <SupportModal
                isOpen={supportOpen}
                onClose={() => setSupportOpen(false)}
                order={order}
            />

            {/* Report Modal */}
            <ReportIssueModal
                isOpen={reportOpen}
                onClose={() => setReportOpen(false)}
                order={order}
                onSuccess={handleReportSuccess}
            />

            {/* Success Message */}
            <SuccessMessage
                isOpen={successOpen}
                onClose={() => setSuccessOpen(false)}
            />
        </>
    );
}