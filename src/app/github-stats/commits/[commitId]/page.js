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
    // 统一时间格式化为UTC字符串（避免服务端/客户端时区差异）
    const utcDate = new Date(commit.commit.author.date).toISOString();

    return (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
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
      </div>
    );
  } catch (error) {
    // 确保服务端和客户端渲染相同的错误信息
    return <div className="container mx-auto p-4 text-red-500">{error.message}</div>;
  }
}