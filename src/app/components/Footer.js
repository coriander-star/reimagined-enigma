//页脚将显示最近7天的编码时长统计，格式为 Xh Ym ，数据每7天自动更新。
//- 使用 useEffect 钩子在组件挂载时调用WakaTime API
//解析返回的JSON数据计算总编码时长（小时和分钟）
// 处理API请求错误并显示友好提示
// 应用基础样式确保页脚在页面底部居中显示
"use client"; 
import { useEffect, useState } from 'react';

export default function Footer() {
  const [codingTime, setCodingTime] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodingTime = async () => {
      try {
        const apiKey = process.env.WAKATIME_API_KEY;
        const username = process.env.NEXT_PUBLIC_WAKATIME_USERNAME || 'current';
        const response = await fetch('/api/wakatime');

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch coding time');
        }

        const data = await response.json();
        const totalSeconds = data.data.total_seconds;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        setCodingTime(`${hours}h ${minutes}m`);
      } catch (err) {
        setError('无法获取编码时长数据');
        console.error('WakaTime API error:', err);
      }
    };

    fetchCodingTime();
  }, []);

  return (
    <footer style={{
      width: '100%',
      padding: '1rem',
      textAlign: 'center',
      borderTop: '1px solid #eaeaea',
      marginTop: '2rem',
    }}>
      <p>总编码时长: {error || codingTime || '加载中...'}</p>
      <p style={{
        fontSize: '0.875rem',
        color: '#666',
        marginTop: '0.5rem',
      }}>
        数据来源: WakaTime
      </p>
    </footer>
  );
}