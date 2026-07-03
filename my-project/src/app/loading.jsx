export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50">

      <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="mt-6 text-2xl font-bold text-green-700">
        Loading...
      </h2>

    </div>
  );
}