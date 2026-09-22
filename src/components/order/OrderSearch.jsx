"use client";

import { useState } from "react";
import {
    FiArrowRight,
    FiPackage,
    FiSearch,
    FiShield,
    FiTruck,
} from "react-icons/fi";

export default function OrderSearch({ orders, onTrackOrder }) {
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const enteredId = orderId.trim();

        if (!enteredId) {
            setError("Please enter your order ID.");
            return;
        }

        const foundOrder = onTrackOrder(enteredId);

        if (!foundOrder) {
            setError("We couldn't find an order with that ID.");
        }
    };

    return (
        <main className="min-h-screen bg-[#f5f7f9]">
            <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-6">

                {/* Header */}
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                            <FiPackage size={20} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-950">
                                Trackly
                            </p>

                            <p className="text-xs text-gray-500">
                                Order tracking
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200">
                        <FiShield size={14} />
                        Secure
                    </div>
                </header>

                {/* Hero */}
                <section className="flex flex-1 flex-col justify-center py-12">
                    <div className="mb-7">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                            <FiTruck size={27} />
                        </div>

                        <p className="mb-2 text-sm font-semibold text-gray-500">
                            DELIVERY TRACKING
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950">
                            Where is your
                            <br />
                            order?
                        </h1>

                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            Enter your order ID and get the latest delivery status,
                            estimated arrival, and tracking details.
                        </p>
                    </div>

                    {/* Search Card */}
                    <div className="rounded-3xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
                        <label
                            htmlFor="orderId"
                            className="mb-2 block text-sm font-semibold text-gray-800"
                        >
                            Order ID
                        </label>

                        <div className="relative">
                            <FiSearch
                                size={19}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="orderId"
                                type="text"
                                value={orderId}
                                onChange={(event) => {
                                    setOrderId(event.target.value);
                                    setError("");
                                }}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        handleSubmit();
                                    }
                                }}
                                placeholder="e.g. ORD-94821"
                                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-sm font-medium text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                            />
                        </div>

                        {error && (
                            <p className="mt-3 rounded-xl bg-red-50 px-3 py-2.5 text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={!orderId.trim()}
                            className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-black text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                        >
                            Track Order
                            <FiArrowRight size={18} />
                        </button>

                        <p className="mt-3 text-center text-xs text-gray-400">
                            Example:{" "}
                            <button
                                onClick={() => {
                                    setOrderId("ORD-94821");
                                    setError("");
                                }}
                                className="font-semibold text-gray-600 hover:text-gray-900"
                            >
                                ORD-94821
                            </button>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}