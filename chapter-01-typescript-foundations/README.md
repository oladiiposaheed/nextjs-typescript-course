# 📘 Chapter 1 — TypeScript Foundations

The first chapter of the **Next.js + TypeScript: Zero to Hero** course.

Learn TypeScript essentials and apply them to a real Next.js project.

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
└── mini-project/                          ← User Directory app
    └── reference-files/                   ← Backup copy of live code
        ├── home.tsx
        ├── page.tsx
        ├── types.ts
        ├── UserCard.tsx
        ├── UserList.tsx
        └── UserStats.tsx
```

---

## 🛠️ Mini Project — User Directory

A typed CRUD app built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

### Features

| Feature            | Description                                    |
| ------------------ | ---------------------------------------------- |
| 📊 **Stats**       | Total / Active / Inactive counts — update live |
| 🔍 **Search**      | Filter users by name (case-insensitive)        |
| ➕ **Add User**    | Name, email, role dropdown, active checkbox    |
| ❌ **Remove User** | One-click remove from the list                 |

### Live URL

After running `npm run dev`, visit:

```
http://localhost:3000/chapter-01
```

### Files

| File                           | Purpose                               |
| ------------------------------ | ------------------------------------- |
| `app/chapter-01/page.tsx`      | Main page — holds all state and logic |
| `app/chapter-01/types.ts`      | The `User` interface                  |
| `app/chapter-01/UserCard.tsx`  | Displays one user + Remove button     |
| `app/chapter-01/UserList.tsx`  | Loops through users, renders cards    |
| `app/chapter-01/UserStats.tsx` | Reusable stats box                    |

---

## 🎬 Video Demo

A 3-minute walkthrough explaining how the User Directory works and why I built it this way.

**📺 Watch:** _(link coming soon — will be added after recording)_

### Recording Notes

Recorded with **Zoom** → uploaded to **YouTube** → shared on **LinkedIn**.

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

## 📖 How to Use This Chapter

### Study the concepts

Read each file in `concepts/` in order. Each one has:

- A concept explanation
- Working code
- Comments on every line
- A Next.js page version

### Build the mini project

1. Copy the reference files into `app/chapter-01/`
2. Run `npm run dev`
3. Visit `http://localhost:3000/chapter-01`

---

## ✅ Chapter Checklist

- [x] All 7 concepts studied
- [x] 20+ reference files created
- [x] Mini project built (User Directory)
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
