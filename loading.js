// ... existing code ...
export default function Loading() {
  return (
    <div className="container mx-auto p-4 h-64 flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600">正在加载GitHub数据...</p>
    </div>
  );
}
// ... existing code ...