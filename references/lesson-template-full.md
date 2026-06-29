# PRES 7步 Ability Engine 完整模板

> 🚫 **位置**：`<项目所在目录>/PRES-learning/<项目名>/lessons/`，绝不可写入项目文件夹内。
> 🚫 **格式**：每课必须同时生成 `.md` + `.html` 两个物理文件，缺一不可。
> 🚫 **禁止**：绝不可只在对话中输出课程内容，必须写入磁盘。

每个 Ability 严格按 7 步执行。同时生成 `.md` + `.html` 两个文件。

---

```
Lesson XX：<Ability 名称>
预计时间：XX 分钟

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 · Mission — 获得能力
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"今天不是学习 <技术名>。
 今天获得「能够识别/理解/设计 XX」的能力。"

示例：
"今天不是学习 Repository。
今天获得「能够识别 Repository」的能力。"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 · Problem — 第一性原理
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

不是"是什么"，是"为什么"。

为什么世界需要 XX？
没有它会怎样？给出真实 Bug 场景（灾难后果）。

示例：Repository
"如果 ProfilePage 直接访问 db.userProfiles.put()……
以后数据库换成 PostgreSQL，100 多个页面全部要改。
中间需要一层「仓库管理员」隔离变化。"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 · Understand — 建立脑模型
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

零代码。5 层递进：

① 一句话解释（Repository = 仓库管理员）
② 生活例子（超市顾客→管理员→仓库，你不能自己进仓库翻）
③ 完整故事（一个真实流程，前后对比）
④ ASCII 流程图

  顾客 → 仓库管理员 → 仓库
  你告诉管理员"拿可乐"→ 他进去找 → 拿出来给你

⑤ 工作原理（大白话：管理员为什么能让仓库不乱）


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 · Project — 项目定位
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

回到具体项目。5 问：

- 它在项目哪个文件？（具体路径）
- 负责什么？（一句话职责）
- 为什么放在这里？（架构原因）
- 删掉会怎样？（具体后果）
- 数据怎么流？（ASCII 标注经过哪些文件）

示例：Lumi — src/lib/db/repositories/userProfileRepo.ts
ProfilePage → userStore → userProfileRepo → db.userProfiles


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 · Code — 代码认知（占整课 50%）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7 子步骤：

① 最小代码（3行，有它 vs 没有它）
② 企业代码（项目实际代码的核心结构）
③ 左右对比（无 XX 散落各处 vs 有 XX 统一入口）
④ 调用链（ASCII 箭头 + 对应每一段的真实代码）
⑤ 去项目里找（打开真实文件，企业版 vs 最小版对比）
⑥ AI 为什么写成这样（Claude 默认生成什么？为什么不够？）
⑦ 企业为什么这样设计（规范 vs 必须，历史原因）


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6 · Think — 架构思维 ⭐核心判断力
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

跳出代码，建立 CTO 视角的工程价值观。
从「四大架构视角」中抽取 2-3 个进行深度剖析：

1. 【⚖️ 权衡视角】为了实现 XX，企业在这里牺牲了什么？什么时候绝对不要这么写？
2. 【💣 爆炸半径】如果这部分代码报错，会牵连哪些模块？它是如何做隔离的？
3. 【📈 演进推演】如果数据量大 100 倍，这行代码哪里会先崩？
4. 【🤖 AI 协作】这个设计对 AI 友好吗？如果让 AI 接手，你会怎么下达 Prompt 防御指令？

每个深奥的架构模式，必须用生活常识类比。


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 7 · Output — 输出训练 ⭐最重要
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4 层输出，每课至少完成 4 层。嵌入 quiz 组件。

① Teach Back（费曼讲解）
  "请用普通人听得懂的话解释 XX。不能出现这些词：<禁用术语列表>"

② Recognition（代码识别 — Code Radar）
  给三段代码，问"哪个是 XX？为什么？"

③ Transfer（能力迁移）
  "如果这是 Flutter → 叫什么？Spring → 叫什么？Python → 叫什么？"

④ Creation（创造设计）
  "新需求：订单功能。你会怎么设计 XX？不用写代码，画图。"

嵌入 quiz：5 题（概念 + 识别 + 定位 + 推理 + AI约束）
引用 quiz.css + quiz.js，data-quiz-id="L<NN>"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 8 · Persist — 状态持久化
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

本课结束后，必须更新 `PRES-learning/<项目名>/LEARNING-RECORDS/.pres-state.json`：

1. 将本课对应 Ability 的 `progress` 更新为 100（或部分完成值）。
2. 根据用户在 Teach Back / Recognition / quiz 中的表现，更新 `user_profile.weak_points`。
3. 将 `current_mission` 更新为下一节课的标题。
4. 更新 `last_updated` 时间戳。

示例：
```json
{
  "progress": {
    "react-app": 100
  },
  "user_profile": {
    "weak_points": ["对 useEffect 依赖数组理解不深"],
    "strengths": ["能用生活类比解释组件"],
    "preferred_pace": "normal"
  },
  "current_mission": "L02 · Express 后端骨架",
  "last_updated": "2026-06-29T12:00:00.000Z"
}
```
```

> ⚠️ **生成检查**：本课是否同时存在 `.md` 和 `.html` 两个物理文件？
> 二者缺一则本课未完成。文件路径是否在 `PRES-learning/` 下？不在则放错位置。
>
> **📐 HTML 结构检查清单（每课必须逐项确认）**：
> - [ ] 本课 HTML 使用 hero + 7 glass-card + quiz + footer 结构
> - [ ] 引用了 `../assets/lesson-styles.css` + `../assets/quiz.css` + `../assets/quiz.js`
> - [ ] 7 个 STEP 全部使用 `<div class="glass-card">`
> - [ ] 每步头部使用 `<div class="step-header">` + `<div class="step-title">`
> - [ ] STEP 6 讨论了 2-3 个架构视角（权衡/爆炸半径/演进/AI协作）
> - [ ] quiz 的 `data-quiz-id` 格式正确，且包含 `data-correct` + `data-explanation`
> - [ ] 已生成/更新 `LEARNING-RECORDS/.pres-state.json`
> - [ ] 文件路径在 `PRES-learning/<项目名>/lessons/` 下，未污染项目源码
> - [ ] STEP 7 所有参考答案用 `.reveal-answer` + `.reveal-btn` 包裹，默认隐藏
> - [ ] MD 中答案用 `<details><summary>` 标签包裹

## STEP 7 答案隐藏强制规范

**HTML 中所有参考答案必须用以下结构包裹（禁止直接暴露）**：

```html
<div class="reveal-answer">
  <button class="reveal-btn" onclick="revealAnswer(this)">💡 点击查看答案</button>
  <div class="reveal-content">
    <!-- 答案内容：blockquote / table / p / pre 等 -->
  </div>
</div>
```

**MD 中所有参考答案必须用 `<details>` 标签包裹**：

```html
<details><summary>点我查看答案</summary>

答案内容...

</details>
```

**适用范围**：Teach Back 参考范例、Recognition 代码雷达答案、Transfer 表格中的迁移映射列、Creation 设计参考方案。
