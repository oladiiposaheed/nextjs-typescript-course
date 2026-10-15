# 📘 Chapter 1 — TypeScript Foundations

The first chapter of the **Next.js + TypeScript: Zero to Hero** course.

Learn TypeScript essentials and apply them to a real Next.js project.

---

## 🎯 Mini Project — TeamHub

**TeamHub** is a small **team management dashboard** that lets you add, search, and remove team members with full TypeScript type safety.

### Purpose

In simple terms, TeamHub helps you keep track of your team members. Instead of writing names and details in a notebook or spreadsheet, you use a clean web app that:

- Adds new members with one click
- Searches for members by name as you type
- Removes members instantly
- Shows live counts of how many are active and inactive

### Why I Built It

I built TeamHub to **master TypeScript fundamentals** inside a real Next.js app. Every prop, state, and function is fully typed — which means TypeScript catches my mistakes while I code, not when the app breaks for users.

### What It Demonstrates

| Goal                        | How                                            |
| --------------------------- | ---------------------------------------------- |
| Learn TypeScript interfaces | The `User` type defines every member's shape   |
| Learn typed props           | Every component receives typed data            |
| Learn typed state           | `useState<User[]>` knows exactly what it holds |
| Learn CRUD operations       | Create, Read, Delete members                   |
| Learn data flow             | Page → List → Card pattern                     |
| Learn Next.js App Router    | File-based routing with `/chapter-01`          |

---

## 🎯 What You'll Learn

| #   | Concept      | File                           |
| --- | ------------ | ------------------------------ |
| 1.1 | Basic Types  | `concepts/01-basic-types.ts`   |
| 1.2 | Interfaces   | `concepts/02-interfaces.ts`    |
| 1.3 | Union Types  | `concepts/03-union-types.ts`   |
| 1.4 | Generics     | `concepts/04-generics.ts`      |
| 1.5 | Async/Await  | `concepts/05-async-await.ts`   |
| 1.6 | Typing Props | `concepts/06-typing-props.tsx` |
| 1.7 | Typing State | `concepts/07-typing-state.tsx` |

---

## 📂 Folder Structure

```
chapter-01-typescript-foundations/
│
├── README.md                              ← This file
│
├── concepts/                              ← Learning files
│   ├── 01-basic-types.ts
│   ├── 01b-basic-types-in-page.tsx
│   ├── 02-interfaces.ts
│   ├── 02b-interfaces-in-page.tsx
│   ├── 03-union-types.ts
│   ├── 03b-union-types-in-page.tsx
│   ├── 04-generics.ts
│   ├── 04b-generics-in-page.tsx
│   ├── 05-async-await.ts
│   ├── 05b-async-in-page.tsx
│   ├── 05c-fetch-users.ts
│   ├── 05c-fetch-users-in-page.tsx
│   ├── 05d-fetch-users-display.tsx
│   ├── 06-typing-props.tsx
│   ├── 06b-typing-props-optional.tsx
│   ├── 06c-typing-props-default.tsx
│   ├── 06d-typing-props-children.tsx
│   ├── 07-typing-state.tsx
│   └── 07b-typing-state-array.tsx
│
└── mini-project/                          ← TeamHub app
    └── reference-files/                   ← Backup copy of live code
        ├── home.tsx
        ├── page.tsx
        ├── types.ts
        ├── UserCard.tsx
        ├── UserList.tsx
        └── UserStats.tsx
```

---

## 🛠️ Features

| Feature                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| 📊 **Stats Dashboard** | Live counts of Total, Active, and Inactive members    |
| 🔍 **Search**          | Filter members by name as you type (case-insensitive) |
| ➕ **Add Member**      | Name, email, role dropdown, active checkbox           |
| ❌ **Remove Member**   | One-click removal from the list                       |

---

## 🚀 Live URL

After running `npm run dev`, visit:

```
http://localhost:3000/chapter-01
```

---

## 🧠 Skills Demonstrated

| Skill                 | Where Used                           |
| --------------------- | ------------------------------------ |
| TypeScript interfaces | `User` in `types.ts`                 |
| Literal union types   | `role: 'admin' \| 'user' \| 'guest'` |
| Typed React props     | All components                       |
| Typed event handlers  | `onRemove: (id: number) => void`     |
| Typed state           | `useState<User[]>`                   |
| Optional props        | `children?: ReactNode`               |
| Default props         | `count = 0`                          |
| Immutable updates     | `setUsers([...users, newUser])`      |
| Array methods         | `.filter()`, `.map()`                |
| Next.js App Router    | File-based routing                   |
| Client Components     | `'use client'` directive             |
| Tailwind CSS          | Styling throughout                   |

---

### Build TeamHub

1. Copy the reference files into `app/chapter-01/`
2. Run `npm run dev`
3. Visit `http://localhost:3000/chapter-01`

---

## 🎬 Video Demo

A 3-minute walkthrough explaining how TeamHub works and why I built it this way.

**📺 Watch:** _(link coming soon)_

### Recording Notes

Recorded with **Zoom** → uploaded to **YouTube** → shared on **LinkedIn**.

---

## ✅ Chapter Checklist

- [x] All 7 concepts studied
- [x] 20+ reference files created
- [x] TeamHub mini project built
- [ ] Video demo recorded and linked

---

## ⏭️ What's Next

**Chapter 2 — React + TypeScript Refresher**

Continues with:

- Forms with TypeScript
- Context API
- Custom Hooks
- useReducer

---

## 🔗 Related Links

- [Main Repository README](../../README.md)
- [Chapter 0 — Setup](../chapter-00-setup/)
- [Chapter 2 — React + TS](../chapter-02-react-typescript/)

---

**Built with ❤️ by Saheed Oladiipo — Chapter 1 complete.**
