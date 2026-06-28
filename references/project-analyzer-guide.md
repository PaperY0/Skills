# Project Analyzer — 项目分析器指南

PRES 的 Phase -1。在一切教学之前，必须先分析项目。

---

## 分析流程

### Step 1：扫描 package.json

读取 `dependencies` 和 `devDependencies`，识别所有依赖。

```bash
cat package.json | grep -E "dependencies|devDependencies"
```

### Step 2：分类映射

| 依赖关键词 | 分类 | 重要度规则 |
|-----------|------|-----------|
| react, vue, angular, svelte, next, nuxt | 前端框架 | 有则 ⭐⭐⭐⭐⭐ |
| express, fastify, koa, nest, hono | 后端框架 | 有则 ⭐⭐⭐⭐ |
| typescript | 类型系统 | 有则 ⭐⭐⭐⭐⭐ |
| dexie, prisma, mongoose, typeorm, drizzle | 数据库/ORM | 有则 ⭐⭐⭐⭐ |
| zustand, redux, pinia, mobx, valtio | 状态管理 | 有则 ⭐⭐⭐⭐ |
| tailwind, bootstrap, mui, antd, chakra | UI/CSS | 有则 ⭐⭐⭐ |
| zod, yup, joi | 数据校验 | 有则 ⭐⭐⭐ |
| openai, anthropic, deepseek | AI 服务 | 有则 ⭐⭐⭐⭐⭐ |
| vite, webpack, turbopack | 构建工具 | 有则 ⭐⭐⭐ |
| express (in server dir) | 后端服务 | 有则 ⭐⭐⭐⭐ |

### Step 3：扫描目录结构

```
types/     → TypeScript 类型定义
lib/db/    → 数据库层
stores/    → 状态管理
hooks/     → 业务逻辑
components/→ UI 组件
server/    → 后端服务
```

### Step 4：输出项目画像

```
============
项目画像
============
前端：<框架名> (⭐⭐⭐⭐⭐)
后端：<框架名> (⭐⭐⭐⭐)
数据库：<数据库名> (⭐⭐⭐⭐)
状态管理：<方案名> (⭐⭐⭐⭐)
UI：<CSS方案> (⭐⭐⭐)
AI：<AI服务> (⭐⭐⭐⭐⭐)
构建：<构建工具> (⭐⭐⭐)
校验：<校验库> (⭐⭐⭐)
类型：TypeScript (⭐⭐⭐⭐⭐)
```

### Step 5：生成能力树

根据项目画像 + `references/ability-tree-guide.md` 的映射规则，生成 `<学习文件夹>/ABILITY-TREE.md`。

---

## 动态课程生成规则

### 第一阶段（固定）：系统认知
```
Lesson 01：项目到底是怎么运行的？
Lesson 02：整个目录为什么这样分？
Lesson 03：页面之间是怎么跳转的？
Lesson 04：数据到底流向哪里？
```
**任何项目前4课不变。** 先建立全局认知。

### 后续阶段（动态）：根据项目画像排序

按**重要度 ⭐**从高到低排列：

```
⭐⭐⭐⭐⭐ → 最先教
⭐⭐⭐⭐   → 第二批
⭐⭐⭐     → 第三批
⭐⭐       → 最后教
```

### 映射示例

**某 React+AI 全栈项目画像排序：**
```
React ⭐⭐⭐⭐⭐ → 第二阶段：理解 React
TypeScript ⭐⭐⭐⭐⭐ → 第三阶段：理解 TypeScript
AI Service ⭐⭐⭐⭐⭐ → 第四阶段：理解 AI 系统
Database ⭐⭐⭐⭐ → 第五阶段：理解数据层
State Mgmt ⭐⭐⭐⭐ → 第六阶段：理解状态管理
Backend ⭐⭐⭐⭐ → 第七阶段：理解后端
CSS ⭐⭐⭐ → 第八阶段：理解样式系统
```

**Next.js + Prisma 项目画像排序：**
```
Next.js ⭐⭐⭐⭐⭐ → 第二阶段
TypeScript ⭐⭐⭐⭐⭐ → 第三阶段
Prisma ⭐⭐⭐⭐ → 第四阶段
PostgreSQL ⭐⭐⭐⭐ → 第五阶段
Redis ⭐⭐⭐ → 第六阶段
Docker ⭐⭐⭐ → 第七阶段
```

---

## 常见技术栈组合的默认课程顺序

| 项目类型 | 课程顺序 |
|---------|---------|
| React + Express + AI | 系统认知 → React → TS → AI → DB → Store → Express → UI |
| Next.js + Prisma | 系统认知 → Node → Next.js → Prisma → SQL → Auth → Deploy |
| Vue + NestJS | 系统认知 → Vue → TS → NestJS → DB → Store → Deploy |
| Flutter + Firebase | 系统认知 → Dart → Flutter → Firebase → Auth → Deploy |
| Electron + React | 系统认知 → Node → Electron → React → IPC → Deploy |
| Chrome Extension | 系统认知 → Manifest → Content Script → Background → Popup → Storage |
| AI Agent + MCP | 系统认知 → LLM → Tool Use → MCP → Agent Loop → Eval |
