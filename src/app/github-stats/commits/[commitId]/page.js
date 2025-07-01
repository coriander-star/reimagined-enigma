// 获取单次提交详情（增强错误提示）
async function getCommitDetails(commitId) {
  const response = await fetch(
    `https://api.github.com/repos/coriander-star/reimagined-enigma/commits/${commitId}`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    const errorMessage = response.status === 403 
      ? "GitHub API速率限制，请稍后再试" 
      : response.status === 404 
        ? "未找到该提交记录" 
        : "获取提交详情失败";
    throw new Error(errorMessage);
  }
  return response.json();
}

export default async function CommitDetailPage({ params }) {
  try {
    const commit = await getCommitDetails(params.commitId);
    const utcDate = new Date(commit.commit.author.date).toISOString();

    // 新增：计算文件变更统计
    const stats = {
      additions: commit.stats.additions,
      deletions: commit.stats.deletions,
      totalChanges: commit.stats.total
    };

    return (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-800 max-w-3xl">
              {commit.commit.message.split("\n")[0]}
            </h1>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                +{stats.additions}
              </span>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                -{stats.deletions}
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {commit.commit.message.split("\n")[0]}
          </h1>
          <div className="text-sm text-gray-600 mb-6">
            作者：{commit.commit.author.name} · 
            时间：{utcDate} {/* 使用UTC标准时间格式 */}
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">提交说明</h3>
          <pre className="text-gray-700 whitespace-pre-wrap mb-6">
            {commit.commit.message}
          </pre>
          <h3 className="text-lg font-medium text-gray-800 mb-3">变更文件</h3>
          <ul className="space-y-2">
            {commit.files.map((file) => (
              <li key={file.filename} className="text-gray-600">
                {file.status === "modified" ? "✏️" : 
                 file.status === "added" ? "➕" : 
                 file.status === "renamed" ? "🔄" : 
                 file.status === "deleted" ? "➖" : "❓"} 
                {file.filename}
              </li>
            ))}
          </ul>
        </div>
        
        // 新增：文件变更统计图表
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">变更统计</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">新增</span>
                <span className="text-sm font-medium text-green-600">{stats.additions} 行</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${(stats.additions / stats.totalChanges) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">删除</span>
                <span className="text-sm font-medium text-red-600">{stats.deletions} 行</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-red-600 h-2.5 rounded-full" 
                  style={{ width: `${(stats.deletions / stats.totalChanges) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div className="container mx-auto p-4 text-red-500">{error.message}</div>;
  }
}