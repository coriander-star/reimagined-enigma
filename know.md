## 整理知识点

### 组件导入
- 使用`import`语句导入外部组件`Navbar`，路径为`./components/Navbar.js`，确保了正确的相对路径引用。

### 函数组件定义
- 通过`export default function`定义默认导出的函数组件`Home`，符合React/Next.js的组件定义规范。

### JSX结构
- 组件返回嵌套的JSX结构，外层为`div`元素，内部包含子组件`Navbar`和内容容器`div`，体现了组件的组合特性。

### Tailwind CSS应用
- 使用多个Tailwind CSS类进行样式控制：
  - `min-h-screen`：设置最小高度为视口高度。
  - `container mx-auto`：容器水平居中。
  - `p-4`：四周内边距为1rem（16px）。
  - `text-rose-700`：文字颜色为玫瑰色700度。
  - `bg-pink-50`：背景色为粉色50度。
  - `text-center`：文字居中对齐。
  - `py-4`：上下内边距为1rem。
  - `rounded-lg`：较大的圆角边框。
  - `shadow-md`：中等阴影效果。
  - `text-gray-600`：灰色文字600度。
  - `mt-4`：顶部外边距为1rem。