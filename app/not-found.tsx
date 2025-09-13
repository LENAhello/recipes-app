import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-2 text-gray-600">
                Sorry, the recipe you’re looking for doesn’t exist 🍳
            </p>

            <Link
                href="/recipes"
                className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-700 transition"
            >
                Go back to All Recipes
            </Link>
        </div>
    );
}
