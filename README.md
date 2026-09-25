# FitLog - Daily Workout Tracker & Planner 🏋️‍♂️

A modern, high-performance web application built to help fitness enthusiasts organize, plan, and track their daily workouts. Designed with a dark neon aesthetic, **FitLog** delivers a seamless user experience with real-time UI updates and persistent state management.

---

## 🚀 Live Demo

🔗 **Live Link:** [fit-log-workout-theta.vercel.app](https://fit-log-workout-theta.vercel.app/)

---

## 🛠️ Technologies Used

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Icons:** Lucide React
- **Notifications:** React Toastify
- **Deployment:** Vercel

---

## ✨ Key Features

1. **Interactive Plan & Saved Management**
   - Easily switch between **Today's Plan** and **Saved Workouts**.
   - Track exercise routines with dedicated tabs and smooth dynamic state updates.

2. **Smart 5-Lift Daily Cap Enforcement**
   - Prevents overtraining by capping **Today's Plan** at a maximum of 5 workouts.
   - Includes real-time capacity checks (`5/5 Plan Full`) with visual button disabling and warning toasts.

3. **Hydration-Safe `localStorage` Persistence**
   - Persists workout plans locally so data survives page refreshes.
   - Built using lazy state initialization and `useSyncExternalStore` to completely eliminate Next.js SSR hydration mismatch errors.

4. **Dynamic Sorting & Filtering**
   - Sort exercises instantly across active tabs by **Duration**, **Calories Burned**, or **Rating**.

5. **Polished Dark/Neon Aesthetic**
   - Styled with a dark glassmorphic design and neon-green accents (`#a3e635`).
   - Features a sticky blur navbar, animated global loading screen, custom 404 page, and instant toast feedback for completing or deleting exercises.

---
