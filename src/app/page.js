import Navbar from "./components/Navbar.js";
import HomeworkCard from "./components/HomeworkCard.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4">
        {/* 页面标题 */}
        <h1 className="text-2xl font-bold text-rose-700 bg-pink-50 text-center py-4 rounded-lg shadow-md mb-8">
          Web前端设计开发课程作业
        </h1>

        {/* 响应式作业列表：手机1列，平板2列，桌面3列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <HomeworkCard
            title="HTML语义化实践"
            content="使用HTML5标签完成博客页面结构，包含header、nav、article等元素"
            deadline="2025-7-2"
          />
          <HomeworkCard
            title="CSS响应式布局"
            content="通过媒体查询+Flexbox实现手机/桌面端不同布局效果"
            deadline="2025-7-2"
          />
          <HomeworkCard
            title="JavaScript交互开发"
            content="实现图片轮播组件，包含自动播放和手动切换功能"
            deadline="2025-7-2"
          />
        </div>

        {/* 作业提交表单（含聚焦渐变边框） */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">作业提交</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">作业标题</label>
              <input
                type="text"
                placeholder="请输入作业标题"
                // 聚焦渐变边框：自定义border-image + transition
                className="mt-1 block w-full rounded-md border-2 border-gray-200 focus:border-rose-500/30 focus:border-gradient-to-r focus:from-rose-500 focus:to-violet-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">作业描述</label>
              <textarea
                rows="4"
                placeholder="请输入作业详细描述"
                className="mt-1 block w-full rounded-md border-2 border-gray-200 focus:border-rose-500/30 focus:border-gradient-to-r focus:from-rose-500 focus:to-violet-500 transition-colors"
              />
            </div>
            <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-md transition-transform hover:scale-105">
              提交作业
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
