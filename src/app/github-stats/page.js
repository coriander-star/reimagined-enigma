// 从 GitHub API 获取提交数据（示例仓库：coriander-star/reimagined-enigma）
async function getCommits() {
  const response = await fetch(
    "https://api.github.com/repos/coriander-star/reimagined-enigma/commits",
    { next: { revalidate: 3600 }  // 每小时重新验证数据（确保SSR和客户端数据一致）

    }
  );
  
  if (!response.ok) throw new Error("获取提交数据失败");
  return response.json();
}

export default async function GitHubStatsPage() {
  try {
    const commits = await getCommits();
    
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">GitHub 统计</h1>
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