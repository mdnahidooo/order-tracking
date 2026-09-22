import { FiPackage } from "react-icons/fi";

export default function LoadingState() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f5f7f9]">
            <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <FiPackage size={22} />
                </div>

                <p className="mt-4 text-sm font-medium text-gray-600">
                    Loading orders...
                </p>
            </div>
        </main>
    );
}