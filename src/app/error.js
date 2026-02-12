'use client';

export default function Error({ error, reset }) {
    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center bg-white text-slate-900 p-8">
            <h2 className="text-2xl font-bold mb-4">Something went wrong within the page!</h2>
            <pre className="p-4 bg-slate-100 rounded text-red-500 text-sm mb-4 max-w-2xl overflow-auto border border-red-200">
                {error?.message || 'Unknown error'}
            </pre>
            <button
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
