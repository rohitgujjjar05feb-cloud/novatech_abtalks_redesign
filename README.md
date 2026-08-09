# Team Novatech — ABTalks Mobile-First Redesign

A mobile-first redesign of the **ABTalks 60-Day Coding Challenge Platform**, built for the ViCODATHON challenge.

The experience is designed around the reality that college students often use the platform on their phones, especially late at night after college. The redesign focuses on clarity, motivation, progress visibility, and a simple daily proof-of-work workflow.

---

## 🚀 Live Demo

**Production URL:**

PASTE_YOUR_FINAL_VERCEL_URL_HERE

---

## 📦 GitHub Repository

**Repository:**

PASTE_YOUR_PUBLIC_GITHUB_REPOSITORY_URL_HERE

---

## 🎯 Project Overview

ABTalks helps Indian college students build consistency through a **60-day coding challenge**.

Each challenge day encourages students to:

- Build something
- Make a GitHub commit
- Share their progress through a LinkedIn post
- Maintain a visible learning streak

This redesign turns those requirements into a focused mobile-first experience that makes the student's daily progress easy to understand and act on.

---

## ✨ Key Features

### Landing Page

- Clear introduction to the 60-day challenge
- Strong value proposition
- Mobile-first visual hierarchy
- Clear call-to-action
- Motivational challenge framing

### Student Dashboard

- Current streak
- Challenge progress
- Weekly consistency
- Today's challenge
- Proof-of-work status
- Achievements
- Leaderboard standing
- Streak Shield concept
- Empty-profile state
- First-day state
- Missed-day recovery state

### Challenge Day

- Day-specific challenge brief
- Learning objective
- Build requirements
- Interactive checklist
- GitHub repository/commit proof
- LinkedIn post proof
- Submission validation
- Completion feedback
- Next-day progression

---

## 💡 Thoughtful UX Idea

### Streak Shield

Missing a day should not make a student feel that their entire learning journey has failed.

The redesign introduces a **Streak Shield** concept that gives students a recovery mechanism while keeping their learning history visible.

The goal is to encourage students to continue instead of abandoning the challenge after one missed day.

---

## 📱 Mobile-First Design

The interface is designed primarily for a **390px mobile viewport**, as specified by the ABTalks challenge.

The design focuses on:

- Compact cards
- Readable typography
- Touch-friendly buttons
- Clear hierarchy
- Mobile navigation
- Responsive layouts
- Minimal cognitive load
- Easy daily proof submission

Desktop layouts are treated as a secondary responsive experience.

---

## 🧪 Real-World States

The dashboard handles multiple realistic student states:

### First Day

A student who has not started the challenge sees a clear starting experience rather than an artificial streak or progress value.

### Active Challenge

Students who are actively participating see their current streak, progress, achievements, and today's task.

### Missed Day

A missed day provides a recovery-focused experience instead of forcing the student to restart.

### Empty Profile

Students without a completed profile do not see misleading challenge progress or streak information.

---

## 🗺️ Route Map

The three required routes are:

```text
/
/dashboard
/day/12
