'use client'; // 错误组件必须为客户端组件

export default function Error({ error, reset }) {
  // 跟踪重试次数
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  // 自动重试机制
  useEffect(() => {
    if (retryCount < maxRetries) {
      const timer = setTimeout(() => {
        setRetryCount(prev => prev + 1);
        reset();
      }, 3000); // 3秒后自动重试

      return () => clearTimeout(timer);
    }
  }, [retryCount, reset]);

  return (
    <div className="container mx-auto p-4 h-64 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">出错了！</h2>
      <p className="text-gray-600 mb-6 max-w-md">{error.message}</p>
      <button 
        onClick={reset} 
        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        重试
      </button>
      {retryCount > 0 && retryCount < maxRetries && (
        <p className="text-sm text-gray-500 mt-4">{`${maxRetries - retryCount}秒后自动重试...`}</p>
      )}
    </div>
  );
}