'use client'; // 错误组件必须为客户端组件

export default function Error({ error, reset }) {
  return (
    <div className="container mx-auto p-4 text-red-500">
      <h2>出错了！</h2>
      <p>{error.message}</p>
      <button 
        onClick={reset} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition-transform hover:scale-105"
      >
        重试
      </button>
    </div>
  );
}