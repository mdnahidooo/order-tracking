"use client";

import { FiArrowLeft } from "react-icons/fi";

import StatusHero from "./StatusHero";
import DeliveryTimeline from "./DeliveryTimeline";
import OrderSummary from "./OrderSummary";
import DeliveryDetails from "./DeliveryDetails";
import NextStep from "./NextStep";

export default function OrderTracking({ order, onBack }) {
    return (
        <main className="min-h-screen bg-[#f5f7f9]">
            <div className="mx-auto w-full max-w-md px-4 py-5">

                {/* Back */}
                <button
                    onClick={onBack}
                    className="mb-5 flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-gray-900"
                >
                    <FiArrowLeft size={18} />
                    Search another order
                </button>

                {/* Status */}
                <StatusHero order={order} />

                {/* Timeline */}
                <DeliveryTimeline timeline={order.timeline} />

                {/* Product */}
                <OrderSummary product={order.product} />

                {/* Delivery Details */}
                <DeliveryDetails order={order} />

                {/* Next Action */}
                <NextStep order={order} />
            </div>
        </main>
    );
}