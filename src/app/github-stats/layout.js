export default function GitHubStatsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50"> {/* 继承主页背景样式 */}
      {children}
    </div>
  );
}