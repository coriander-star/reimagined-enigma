"use client"; // 标记为客户端组件，支持状态管理和事件交互
import React, { useState } from 'react'; // 引入useState Hook

export default function HomeworkCard({ title, content, deadline }) {
  // 声明收藏状态（初始为未收藏）
  const [isFavorited, setIsFavorited] = useState(false);
  
  // 切换收藏状态的事件处理函数
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    // 悬停阴影加深：使用hover:shadow-lg + transition-shadow
    <div className="bg-white rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">截止日期：{deadline}</span>
        <div className="flex gap-2">
          {/* 收藏按钮（根据状态切换样式） */}
          <button 
            onClick={toggleFavorite}
            className={`px-4 py-2 rounded-md transition-transform hover:scale-105 ${
              isFavorited 
                ? 'bg-rose-500 text-white'  // 已收藏状态样式
                : 'bg-gray-100 text-gray-700'  // 未收藏状态样式
            }`}
          >
            {isFavorited ? '❤️ 已收藏' : '🤍 收藏'}
          </button>
          {/* 原有查看详情按钮 */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md transition-transform hover:scale-105">
            查看详情
          </button>
        </div>
      </div>
    </div>
  );
}