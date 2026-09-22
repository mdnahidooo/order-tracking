import Image from "next/image";

export default function OrderSummary({ product }) {
    return (
        <section className="mt-4 rounded-3xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">
                Order Summary
            </h2>

            <div className="mt-4 flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-5 text-gray-900">
                        {product.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                        {product.category}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                            Qty: {product.quantity}
                        </p>

                        <p className="text-sm font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}