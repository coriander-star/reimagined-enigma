import Link from 'next/link'; // 新增：导入Next.js的Link组件

export default function Navbar() {
    return (
        <nav className="bg-slate-800 text-white p-4 shadow-md">
           <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-xl font-bold hover:text-slate-300 transition-colors"> {/* 替换为Link */}
          作业平台
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-slate-300 transition-colors">首页</Link> {/* 替换为Link */}
          <Link href="/archive" className="hover:text-slate-300 transition-colors">归档</Link> {/* 替换为Link */}
          <Link href="/08.html" className="hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub 统计</Link> {/* 修改链接 */}
        </div>
      </div>
    </nav>
  );
}
