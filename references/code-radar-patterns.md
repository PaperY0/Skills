# 代码雷达 — 常见技术栈识别特征速查表

每节课的⑭步骤使用。目标是培养"眼睛自动识别"的能力。

---

## Repository 模式

```
识别特征：
  class XXXRepository
  findById(id) / findAll() / save(data) / update(id,data) / delete(id)
  db.xxx.get() / db.xxx.put() / db.xxx.where()
  async 函数返回数据库查询结果
  import { db } from '../database'
```

## Store / 状态管理

### Zustand
```
识别特征：
  import { create } from 'zustand'
  create((set, get) => ({ ... }))
  useXxxStore()  // 命名惯例
  getState() / setState()
```

### Redux
```
识别特征：
  createSlice / configureStore
  useSelector / useDispatch
  dispatch(action)
```

### Pinia (Vue)
```
识别特征：
  defineStore('xxx', { ... })
  useXxxStore()
```

---

## React 组件

```
识别特征：
  import React from 'react' / import { useState, useEffect } from 'react'
  function Xxx() { return ( <div>...</div> ) }
  const [state, setState] = useState(initialValue)
  useEffect(() => { ... }, [deps])
  export default function / export default ComponentName
  .tsx 文件扩展名
```

---

## TypeScript 类型定义

```
识别特征：
  interface Xxx { ... }
  type Xxx = { ... }
  export type / export interface
  .ts 文件扩展名（非 .tsx）
  import type { Xxx } from './types'
```

---

## Express 后端

```
识别特征：
  import express from 'express'
  const app = express()
  app.get/post/put/delete('/path', handler)
  app.listen(port, () => { ... })
  router.get/post(...)
  res.json(data) / res.status(200).json(...)
```

---

## IndexedDB / Dexie.js

```
识别特征：
  import Dexie from 'dexie'
  class XxxDB extends Dexie { ... }
  this.version(N).stores({ ... })
  db.xxx.put(data) / db.xxx.get(id) / db.xxx.where(...)
```

---

## Zod 校验

```
识别特征：
  import { z } from 'zod'
  z.object({ ... }) / z.string() / z.number() / z.array(...)
  XxxSchema.parse(data) / XxxSchema.safeParse(data)
```

---

## TailwindCSS

```
识别特征：
  className="flex items-center gap-4 bg-white rounded-lg p-6"
  大量简写 CSS 类名直接写在 HTML 属性中
  tailwind.config 文件
```

---

## Vite 构建

```
识别特征：
  import.meta.env.VITE_XXX
  vite.config.ts
  npm run dev → 启动 vite
```

---

## Prisma ORM

```
识别特征：
  import { PrismaClient } from '@prisma/client'
  prisma.xxx.findMany() / prisma.xxx.create() / prisma.xxx.update()
  schema.prisma 文件
```

---

## Next.js

```
识别特征：
  app/ 或 pages/ 目录
  export default function Page() { ... }
  'use client' 指令
  getServerSideProps / generateMetadata
```

---

## AI / LLM 调用

```
识别特征：
  import OpenAI from 'openai'
  client.chat.completions.create({ ... })
  messages: [{ role: 'system'|'user'|'assistant', content: '...' }]
  temperature / max_tokens / stream
  API_KEY 环境变量
```
