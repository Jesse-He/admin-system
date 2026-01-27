# 后台管理系统

一个基于 Vite + React + TypeScript 的单页后台系统，包含首页、气象服务、低空经济、信息公开、关于我们等页面模块，并使用 Ant Design 构建基础布局与组件。

## 技术栈
- Vite
- React 18
- TypeScript 5
- React Router 6
- Ant Design 5

## 目录结构
- `src/layout/MainLayout.tsx`：全局布局（侧边栏导航 + 顶部栏）
- `src/pages/Home.tsx`：首页（信息综合展示平台）
- `src/pages/WeatherService.tsx`：气象服务
- `src/pages/LowAltitudeEconomy.tsx`：低空经济
- `src/pages/InformationDisclosure.tsx`：信息公开
- `src/pages/AboutUs.tsx`：关于我们
- `src/App.tsx`：路由配置
- `src/main.tsx`：应用入口
- `vite.config.ts`：Vite 配置

## 本地运行（推荐）
前置要求：已安装 Node.js（建议 LTS，≥ 18）

```bash
cd admin-system
npm install
npm run dev
```
启动后访问：`http://localhost:5173`

## 使用 Docker 运行
如本地未安装 Node.js，可使用容器化方式：

```bash
cd admin-system
docker-compose up --build
```
启动后访问：`http://localhost:5173`

## 可用脚本
- `npm run dev`：启动开发服务器
- `npm run build`：打包生产构建
- `npm run preview`：本地预览打包结果

## 常见问题
- `zsh: command not found: npm`：请安装 Node.js 并重启终端后重试。
- `command not found: docker`：请安装 Docker Desktop 后重试，或改用本地 Node.js 运行。

## License
MIT
