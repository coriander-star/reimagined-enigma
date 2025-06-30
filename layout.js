export default function GitHubStatsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          // 新增：侧边栏
          <div className="lg:w-1/4 bg-white p-4 rounded-lg shadow-md h-fit sticky top-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">GitHub 仓库信息</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium text-gray-700">仓库名称:</span> reimagined-enigma</p>
              <p><span className="font-medium text-gray-700">所有者:</span> coriander-star</p>
              <p><span className="font-medium text-gray-700">描述:</span> Web前端设计开发课程作业</p>
            </div>
            <div className="mt-6">
              <a 
                href="https://github.com/coriander-star/reimagined-enigma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                查看仓库
              </a>
            </div>
          </div>
          
          // 主内容区域
          <div className="lg:w-3/4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}