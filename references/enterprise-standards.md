# 企业开发规范

学到一定程度后，代码不仅要"能跑"，还要"跑得规范"。这部分内容会在相关课程中按需引用。

---

## 为什么规范重要？

### 生活类比：外卖店
- 没有规范：食材随便放、订单随手记、出餐随心做 → 每天都乱
- 有规范：食材分区、订单系统、出餐标准流程 → 人再多也不乱

### 代码项目同理
- `utils1.ts` `utils2.ts` `utils_new.ts` `utils_final.ts` → 谁知道用哪个？
- `src/lib/dateUtils.ts` → 每个人都找得到

---

## 目录结构规范

### ✅ 企业推荐
```
src/
  types/        ← 数据类型
  lib/          ← 工具库
    db/          ← 数据库
    ai/          ← AI 客户端
    validation/  ← 校验
  stores/       ← 状态管理
  hooks/        ← 自定义 Hook
  components/   ← UI 组件
  utils/        ← 通用工具函数
  data/         ← 静态数据
  styles/       ← 样式
```

### ❌ 不推荐
```
src/
  utils1.ts
  utils2.ts
  utils_new.ts
  utils_final.ts
  components/
    Button.tsx
    button2.tsx
    button-new.tsx
```

---

## 文件命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件文件 | PascalCase | `DashboardPage.tsx` |
| 工具文件 | camelCase | `dateUtils.ts` |
| 类型文件 | camelCase | `profile.ts` |
| Store文件 | camelCase + Store | `userStore.ts` |
| Hook文件 | use + PascalCase | `useAnalyzeChat.ts` |
| 样式文件 | kebab-case | `globals.css` |
| 配置文件 | kebab-case 或 固定名 | `vite.config.ts` |

---

## 变量命名规范

### ✅ 好命名
```typescript
const currentUser = ...
const chatMessages = ...
const isLoading = ...
const handleSaveProfile = ...
```

### ❌ 坏命名
```typescript
const data = ...       // 什么数据？
const arr = ...        // 什么数组？
const flag = ...       // 什么标记？
const handleClick = ... // 点了什么？
```

名字要能回答"这是什么"和"用来做什么"。

---

## Git 提交规范

### 格式
```
<类型>: <简短描述>

<详细说明（可选）>
```

### 类型
- `feat`: 新功能
- `fix`: 修 Bug
- `refactor`: 重构（不改变功能）
- `style`: 样式修改
- `docs`: 文档
- `chore`: 杂项

### 示例
```
feat: 添加女生资料保存功能

- 创建 girlProfileRepository
- ProfileSetupPage 接入 Repository
- 刷新后数据正常保留
```

---

## 代码注释规范

### ✅ 好注释
```typescript
// 从数据库加载当前用户（按创建时间取最新一条）
const user = await userProfileRepository.getCurrent();
```

### ❌ 坏注释
```typescript
// 加载用户
const user = await userProfileRepository.getCurrent();
```

好注释回答"为什么这样做"而不是"做了什么"。代码本身已经说了"做了什么"。

---

## 错误处理规范

```typescript
// ✅ 企业写法：有 try-catch，有日志，有用户提示
try {
  await saveProfile(data);
  showToast('保存成功');
} catch (error) {
  console.error('[ProfileSetup] 保存失败:', error);
  showToast('保存失败，请稍后重试');
}

// ❌ 裸写：出错了用户啥也不知道
await saveProfile(data);
```

---

## TypeScript 严格模式

### 为什么企业开启 strict？
- `strictNullChecks`：防止"可能是空但你没检查"的 Bug
- `noImplicitAny`：防止"忘记写类型"的代码
- 这些设置能帮 AI 更好地理解你的代码意图

### 典型 TypeScript 项目配置示例
```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
```

---

## 前后端分离原则

```
✅ 正确的分离：
Frontend (React)  ←→  Backend (Express)  ←→  AI API
显示界面              处理业务              提供智能

❌ 不推荐：
Frontend 直接调 AI API
→ API Key 泄露
→ Prompt 被抄走
→ 无法加缓存/限流
```

---

## 环境变量管理

```
✅ 正确：
// .env.local（不提交到 Git，在 .gitignore 里）
VITE_AI_API_BASE=http://localhost:3001

// 代码里
const apiBase = import.meta.env.VITE_AI_API_BASE;

❌ 错误：
const apiBase = "http://localhost:3001"; // 写死了，换环境要改代码
```
