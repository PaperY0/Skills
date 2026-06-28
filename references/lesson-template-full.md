# PRES 9 阶段课程模板（不可修改核心模板）

每课必须同时生成 `.md` + `.html` 两个文件。

---

```
Lesson XX：<课程标题>
预计时间：XX 分钟

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
① WHY — 建立问题
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

今天只解决一个问题：
"为什么 ____ 不能直接 ____？"

必须包含：
- 一句问题陈述
- 一个真实项目的 Bug 场景（违反原则的灾难后果）
- 预计时间

示例：
"今天的问题：为什么页面不能直接操作数据库？
如果 ProfilePage 直接访问 db.userProfiles.put()……
以后数据库换成 PostgreSQL，100 多个页面全部要改。
所以中间需要一层「仓库管理员」——Repository。"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
② INTUITION — 建立直觉
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

完全不讲代码。

- 一句话解释（Repository = 仓库管理员）
- 完整生活故事（超市/餐厅/快递站/银行/微信群……）
- ASCII 流程图：
  顾客 → 仓库管理员 → 仓库
  你不能自己进仓库翻，你告诉管理员"拿可乐"，他进去拿

目标：不写一行代码，但用户脑子里已经有了模型。


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
③ CONTEXT — 项目定位
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

回到具体项目。

必须回答：
- 它在项目哪个文件？（具体路径）
- 它在数据流中的位置（ASCII 标注）
- 为什么它被放在这里（架构原因）
- 删掉它会怎样？

示例：
  Lumi 项目：
  ProfilePage → ProfileRepository → IndexedDB
  文件：src/lib/db/repositories/userProfileRepo.ts


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
④ CODE — 代码认知 ⭐⭐⭐⭐⭐（占整课 50% 时间）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

目标不是"讲代码"，而是"建立代码识别能力"。6 个子步骤：

① 最小可运行样例
  先给"没有它"的版本（2-3行），再给"有它"的版本（2-3行）。
  去掉所有抽象、泛型、错误处理。
  ```ts
  // 没有 Repository
  const user = await db.userProfiles.get(1)
  // 有 Repository
  const user = await profileRepository.getProfile()
  ```

② 本体长什么样
  给出最小结构，如：
  ```ts
  class ProfileRepository {
    async getProfile() { return db.userProfiles.get(1) }
  }
  ```

③ 调用流程（ASCII + 对应代码）
  UI → profileRepository.getProfile()
     → Repository → async getProfile()
     → Database → db.userProfiles.get()
     → 返回 user

④ 左右对比
  左侧：没有 Repository（到处散落 db.xxx）
  右侧：有 Repository（统一通过 Repository）
  一眼看出区别。

⑤ 去项目里找
  打开 src/lib/db/repositories/userProfileRepo.ts
  "你现在看到的就是刚刚那个最小版，只是企业版多了一些容错。"

⑥ 企业版为什么长这样
  为什么用 findById 而不是 get？企业规范 vs 必须。


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⑤ PRINCIPLE — 底层原理
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

为什么它能工作？不是"怎么写"，是"为什么"。

- Repository 为什么能解耦？
- 为什么中间加一层就能隔离变化？
- 这和设计模式中的"依赖倒置"有什么关系？

用大白话解释底层机制。


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⑥ TRANSFER — 能力迁移
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- 其他技术栈中的同类概念：
  Java → DAO (Data Access Object)
  Python → ORM Repository
  Flutter → Repository Pattern
  只是名字不同，结构完全一样。

- 什么时候**不用**它：
  小项目（<5个页面）→ 直接 Page→DB 就够了
  原型/MVP → 快速验证，不需要分层
  培养设计判断力。


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⑦ AI PERSPECTIVE — AI 辅助开发视角 ⭐
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- 🤖 AI 默认会怎么写？
  Claude/Cursor 可能会直接生成：
  ```ts
  const user = await db.userProfiles.get(1)
  ```
  因为 AI 默认选最短路径。

- ⚠️ 为什么企业不能这样？
  数据库换了全改、无法统一加校验、无法复用。

- ✅ 正确的 Prompt 怎么写？
  "请通过 userProfileRepository 访问用户数据"
  "不要直接在组件里调用 db.xxx"
  "遵循项目现有的 Repository 模式"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⑧ CHECK — 认知检测
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

统一 5 题（嵌入 quiz 组件，引用 quiz.css + quiz.js）：

1. 概念题：为什么需要 Repository？（场景判断题）
2. 流程图题：画出 Page→Repository→DB 的数据流
3. 代码识别题：下面哪段代码用了 Repository 模式？
4. 后果推理题：如果删掉 Repository 层，项目会发生什么？
5. AI 约束题：正确的 Prompt 是哪一句？

每题 4 选项，即时反馈 + 总分评级。


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⑨ GROW — 成长地图 + Code Radar
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

今天以前：看到 Repository → 害怕、不知道是什么

今天以后：
  ✅ 能认出来（看到 class XXXRepository 就知道）
  ✅ 能修改（会改 Repository 里的方法）
  ✅ 能设计（知道什么时候加 Repository，什么时候不用）

Code Radar 识别特征：
  class XXXRepository
  findById() / save() / update() / delete()
  db.xxx.get() / db.xxx.put()
  文件路径包含 repositories/
```
