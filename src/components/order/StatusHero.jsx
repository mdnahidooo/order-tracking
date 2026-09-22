import {
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiTruck,
} from "react-icons/fi";

export default function StatusHero({ order }) {
    const getIcon = () => {
        if (order.state === "delayed") {
            return <FiAlertCircle size={24} />;
        }

        if (order.state === "delivered_not_received") {
            return <FiAlertCircle size={24} />;
        }

        if (order.state === "tracking_unavailable") {
            return <FiClock size={24} />;
        }

        if (order.status === "delivered") {
            return <FiCheckCircle size={24} />;
        }

        return <FiTruck size={24} />;
    };

    return (
        <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    {getIcon()}
                </div>

                <div className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                    {order.id}
                </div>
            </div>

            <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Current Status
                </p>

                <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-950">
                    {order.statusLabel}
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                    {order.statusMessage}
                </p>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Estimated Delivery
                </p>

                <p className="mt-2 font-semibold text-gray-900">
                    {order.estimatedDelivery.date}
                </p>

                {order.estimatedDelivery.time && (
                    <p className="mt-1 text-sm text-gray-500">
                        {order.estimatedDelivery.time}
                    </p>
                )}
            </div>
        </section>
    );
}