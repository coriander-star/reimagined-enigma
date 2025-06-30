// 从 GitHub API 获取提交数据（示例仓库：coriander-star/reimagined-enigma）
async function getCommits() {
  const response = await fetch(
    "https://api.github.com/repos/coriander-star/reimagined-enigma/commits",
    { 
      next: { revalidate: 3600 },  // 每小时重新验证数据（确保SSR和客户端数据一致）
      headers: { 'Accept': 'application/vnd.github.v3+json' }  // 指定GitHub API版本
    }
  );
  
  if (!response.ok) throw new Error("获取提交数据失败");
  return response.json();
}

export default async function GitHubStatsPage() {
  try {
    const commits = await getCommits();
    // 新增：统计信息
    const stats = {
      totalCommits: commits.length,
      firstCommit: commits[commits.length - 1],
      lastCommit: commits[0]
    };

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">GitHub 统计</h1>
        
        // 新增：统计卡片
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-600 text-sm font-medium">总提交数</h3>
            <p className="text-2xl font-bold text-indigo-600">{stats.totalCommits}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-600 text-sm font-medium">首次提交</h3>
            <p className="text-gray-800 font-medium">{new Date(stats.firstCommit.commit.author.date).toLocaleDateString()}</p>
            <p className="text-gray-600 text-sm">{stats.firstCommit.commit.author.name}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-600 text-sm font-medium">最近提交</h3>
            <p className="text-gray-800 font-medium">{new Date(stats.lastCommit.commit.author.date).toLocaleDateString()}</p>
            <p className="text-gray-600 text-sm">{stats.lastCommit.commit.author.name}</p>
          </div>
        </div>
        <div className="space-y-4">
          {commits.map((commit) => (
            <div 
              key={commit.sha}
              className="bg-white rounded-lg shadow-md p-4 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-medium text-gray-800">
                {commit.commit.message.split("\n")[0]}
              </h3>
              <div className="text-sm text-gray-600 mt-2">
                作者：{commit.commit.author.name} · 
                时间：{new Date(commit.commit.author.date).toISOString()} {/* 统一UTC格式 */}
              </div>
              <Link 
                href={`/github-stats/commits/${commit.sha}`}
                className="text-blue-600 hover:text-blue-800 mt-3 inline-block"
              >
                查看详情 →
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div className="container mx-auto p-4 text-red-500">{error.message}</div>;
  }
}