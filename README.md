# SkillShowcase Explore

## 📝 Project Overview

**SkillShowcase Explore** is a dynamic, portfolio-style feed that lets users explore tech profiles shared by peers. Think of it like a community-driven LinkedIn feed, where developers showcase their **projects**, **certifications**, **internships**, and **coding ranks** in a visually engaging and interactive way.

Users can:
- View different types of tech-related achievements.
- Like and save posts for future reference.
- Use filters like “Most Liked” or “Projects” to personalize their browsing.
- Search for specific posts using the search bar.

> It’s built with performance and interactivity in mind — perfect for student communities or tech clubs looking to highlight their talent pool.

---

## 🛠 Tech Stack Used

| Technology     | Purpose                              |
|----------------|---------------------------------------|
| **React.js**   | Frontend framework                    |
| **Tailwind CSS** | Utility-first styling               |
| **Lucide Icons** | UI icons for interactions (like, save) |
| **React Router** | Navigation between pages             |
| **Vite**       | Lightning-fast dev environment        |
| **Dummy Data (JSON)** | Temporary post/feed content     |

---

## ✨ Key Features

### 🧑‍💻 Tech Feed
- Scrollable grid of tech posts.
- Each card shows title, type, tags, link, and interaction icons.

### ❤️ Like & Save
- Like or Save posts with visual feedback (red heart, black bookmark).
- Saves state locally for demo purposes.

### 🔍 Search Bar
- Real-time filtering of posts by title.

### 🎯 Filter Panel
- Buttons for quick filtering (Most Liked, Projects, etc.) – UI ready for logic integration.

### 🧑 Profile Dropdown
- Click on the profile image to toggle a dropdown with navigation options.

### 📊 Sidebar Highlights
- Leaderboard of top users.
- List of top projects and top skills.

### 🪄 DragBall Effect
- Interactive background animation using the custom `DragBall` component (purely visual).

---

## 🕓 Submission Note

> 🛠 This project is currently in MVP (Minimum Viable Product) stage. Further improvements may include:
> - Backend integration
> - User authentication
> - Post creation form
> - Pagination or infinite scrolling

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/skillshowcase-explore.git
cd skillshowcase-explore
npm install
npm run dev
