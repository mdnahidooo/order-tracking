export default function EmptyState({ message = "No order data found." }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
            <p className="text-sm font-medium text-gray-500">{message}</p>
        </div>
    );
}