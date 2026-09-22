import { FiMapPin, FiTruck } from "react-icons/fi";

export default function DeliveryDetails({ order }) {
    return (
        <section className="mt-4 rounded-3xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">
                Delivery Details
            </h2>

            <div className="mt-5 space-y-5">
                {/* Address */}
                <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                        <FiMapPin size={18} />
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                            Shipping Address
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                            {order.shippingAddress.name}
                        </p>

                        <p className="mt-1 text-sm leading-5 text-gray-500">
                            {order.shippingAddress.address}
                            <br />
                            {order.shippingAddress.city},{" "}
                            {order.shippingAddress.postalCode}
                        </p>
                    </div>
                </div>

                {/* Shipping */}
                <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                        <FiTruck size={18} />
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                            Shipping Method
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                            {order.shippingMethod}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Carrier: {order.carrier}
                        </p>

                        {order.trackingNumber && (
                            <p className="mt-1 text-sm text-gray-500">
                                Tracking: {order.trackingNumber}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}