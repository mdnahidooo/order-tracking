import { FiCheck } from "react-icons/fi";

export default function DeliveryTimeline({ timeline }) {
    return (
        <section className="mt-4 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900">
                    Delivery Progress
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Follow your order from confirmation to delivery.
                </p>
            </div>

            <div>
                {timeline.map((item, index) => {
                    const isLast = index === timeline.length - 1;

                    return (
                        <div key={`${item.label}-${index}`} className="flex">
                            {/* Timeline Icon + Line */}
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.completed
                                            ? "bg-black text-white"
                                            : "bg-gray-100 text-gray-400"
                                        }`}
                                >
                                    {item.completed ? (
                                        <FiCheck size={16} />
                                    ) : (
                                        <div className="h-2 w-2 rounded-full bg-current" />
                                    )}
                                </div>

                                {!isLast && (
                                    <div
                                        className={`my-1 w-px flex-1 ${item.completed ? "bg-black" : "bg-gray-200"
                                            }`}
                                    />
                                )}
                            </div>

                            {/* Timeline Content */}
                            <div className="ml-4 min-h-17.5 pb-5">
                                <div className="flex items-center gap-2">
                                    <p
                                        className={`text-sm font-semibold ${item.current
                                                ? "text-gray-950"
                                                : item.completed
                                                    ? "text-gray-700"
                                                    : "text-gray-400"
                                            }`}
                                    >
                                        {item.label}
                                    </p>

                                    {item.current && (
                                        <span className="rounded-full bg-black px-2 py-0.5 text-[10px] font-semibold text-white">
                                            Current
                                        </span>
                                    )}
                                </div>

                                <p className="mt-1 text-xs text-gray-400">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}