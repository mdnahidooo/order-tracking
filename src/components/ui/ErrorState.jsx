import { FiAlertCircle } from "react-icons/fi";

export default function ErrorState({ message }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f5f7f9] px-5">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                    <FiAlertCircle size={22} />
                </div>

                <h1 className="mt-4 text-lg font-bold text-gray-900">
                    Something went wrong
                </h1>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    {message}
                </p>
            </div>
        </main>
    );
}