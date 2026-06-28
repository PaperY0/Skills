# 项目可视化详细制作指南

当 PLS Skill 需要对一个项目进行可视化时，遵循以下指南。

---

## 可视化目标

让零基础学习者在 10 分钟内通过一张图/一个页面，理解项目完整结构。

---

## 输出物（两个文件，缺一不可）

| 文件 | 用途 | 位置 |
|------|------|------|
| `PROJECT_ARCHITECTURE.md` | Markdown 文档，适合阅读和 Git 提交 | 项目根目录 |
| `project-viz.html` | 交互式可视化 Web 页面，浏览器直接打开 | 项目根目录 |

---

## Step 1：项目侦察

1. 扫描根目录文件（package.json, config文件等），确定技术栈
2. 扫描 src/ 下所有文件，构建完整文件清单
3. 识别关键架构模式：types/ → stores/ → repositories/ → hooks/ → server/

---

## Step 2：生成 Markdown 架构文档（PROJECT_ARCHITECTURE.md）

参见 SKILL.md 中"核心功能一"的 Step 1-4：
- 项目文件树（ASCII，每个文件带功能概括）
- 数据流图（多条链路）
- 技术栈清单表（含"为什么选它"）
- 按层分组说明书

---

## Step 3：生成交互式 Web 页面（project-viz.html）

### 准备工作

1. 读取 skill 的 `assets/viz-template.html` 获取完整 HTML/CSS/JS 模板
2. 替换模板中的占位符为项目实际数据

### 🎨 配色规则（重要）

**HTML 页面的背景色调必须匹配项目本身的配色，不能用无关色调。**
- 读取项目的 `App.tsx`、`globals.css`、`tailwind.css` 等样式文件
- 提取项目的 `background` 渐变色、`accent`/主色
- 映射到 HTML 的 `:root` 变量中：
  - `body background` ← 项目的页面背景渐变色
  - `--accent` ← 项目的主强调色（按钮、链接）
  - `--accent2` ← 项目的次要强调色
  - `--glass-bg` ← 项目主色 + 透明度（毛玻璃效果）
  - `--shadow-*` ← 项目主色的淡色变体
- 例如 Lumi 项目是暖玫瑰色调 → CSS 用 `#FDF8F4`、`#c8607a` 等暖色系

### 模板占位符清单

| 占位符 | 替换内容 |
|--------|---------|
| `__PROJECT_TITLE__` | 项目标题（如 "🌸 Lumi AI 恋爱助手"） |
| `__PROJECT_TAGLINE__` | 一句话描述 |
| `__PROJECT_NAME__` | 项目短名（用于弹窗等处） |
| `__STATS__` | 5 个 `<div class="stat">` 统计卡片 HTML |
| `__FILE_TREE_DATA__` | JS 数组，每个节点 `{name, type:'file'\|'folder', ext?, desc, children?}` |
| `__TECH_STACK_DATA__` | JS 数组 `[{name, role, analogy, why, badge}]` |
| `__FLOW_SECTIONS__` | 数据流图的 `<div class="flow-section">` HTML 片段 |
| `__LAYERS_DATA__` | 架构层的 `<div class="layer">` HTML 片段 |
| `__ROUTES_DATA__` | 页面路由的 HTML 片段 |
| `__LAYER_MAP__` | JS 对象 `{layerName: searchKeyword}`，用于层点击跳转 |
| `__ANALOGY_FUNCTION_BODY__` | `getAnalogy()` 函数体，根据文件名返回类比文字 |
| `__CONSEQUENCE_FUNCTION_BODY__` | `getConsequence()` 函数体 |
| `__WHEN_FUNCTION_BODY__` | `getWhen()` 函数体 |

### FILE_TREE_DATA 格式

**每个节点必须包含 `analogy`、`consequence`、`when` 三个专属字段。禁止所有文件用相同的兜底文案。**

```javascript
const FILE_TREE = [
  {name:'Lumi', type:'folder', desc:'项目描述', analogy:'', consequence:'', when:'', children:[
    {name:'package.json', type:'file', ext:'json', desc:'项目身份证',
     analogy:'就像超市的营业执照——证明这个项目是谁的、用什么材料做的',
     consequence:'npm install 无法运行，所有依赖找不到，项目等于白纸',
     when:'要加新的第三方库时'},
    {name:'src', type:'folder', desc:'前端源代码', analogy:'', consequence:'', when:'', children:[
      {name:'main.tsx', type:'file', ext:'tsx', desc:'应用启动入口',
       analogy:'就像商场的总电闸——推开它，整个商场亮起来',
       consequence:'整个应用无法启动，浏览器白屏',
       when:'要改应用的启动配置时'},
      // ...每个文件都带专属 analog/consequence/when
    ]}
  ]}
];
```

**ext 字段取值**：`ts`、`tsx`、`css`、`json`、`env`、`md`、`other`

**生成规则**：
- `analogy`：根据文件所在层级写生活类比。types/ → 图纸/合同类，db/ → 仓库/货架类，stores/ → 公告栏/广播类，hooks/ → 套餐/流程类，components/ → 乐高/家具类，server/ → 后厨/金库类，utils/ → 工具箱类
- `consequence`：写"如果删掉/改坏这个文件会发生什么"，具体到功能层面
- `when`：写"什么时候需要改这个文件"，给出可操作的场景

### TECH_STACK_DATA 格式

```javascript
const TECH_STACK = [
  {name:'React 18', role:'构建页面UI', analogy:'乐高积木', why:'组件化，生态最大', badge:'frontend'},
  // badge: 'frontend' | 'backend' | 'database' | 'tooling' | 'ai' | 'validation'
];
```

### 三个分析函数（已改为读节点字段）

模板中 `getAnalogy(node)` / `getConsequence(node)` / `getWhen(node)` 现在**直接读取节点自带字段**：
- `return node.analogy || '暂无类比信息'`
- `return node.consequence || '暂无后果分析'`
- `return node.when || '暂无修改指引'`

**不再使用 `n.includes()` 关键词匹配**。FILE_TREE 生成时就必须为每个节点填充专属的 `analogy` / `consequence` / `when` 字段。

### 生成后验证

生成 HTML 后验证：
- [ ] 浏览器直接打开能正常显示
- [ ] 5 个 Tab 都能正常切换
- [ ] 文件树可以展开/折叠
- [ ] 搜索过滤功能正常
- [ ] 点击文件弹出详情弹窗
- [ ] 键盘快捷键可用（Ctrl+1~5）
- [ ] 手机端布局正常

---

## 可视化文件输出位置

**所有学习文件放在项目旁边的独立文件夹，不污染项目目录。**

```
<项目所在目录>/PLS-learning/<项目名>/
├── PROJECT_ARCHITECTURE.md   ← Markdown 架构文档
├── project-viz.html          ← 交互式可视化页面
├── lessons/                  ← 课程文件
├── code-reviews/             ← 代码阅读文件
├── MISSION.md                ← 学习目标
├── NOTES.md                  ← 用户偏好
├── COURSE-PLAN.md            ← 课程计划
└── LEARNING-RECORDS/         ← 学习记录
```

**绝对不要把学习文件放到项目的 `src/`、`server/` 等业务目录里。**
