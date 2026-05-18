// =========================================================
// 📅 EVENTS DATABASE — STAFF EDITS HERE ONLY
// =========================================================
//
// HOW TO ADD EVENT:
// 1. Copy one event
// 2. Paste ABOVE the line
// 3. Edit details
//
// =========================================================

console.log("EVENTS LOADED");

window.EVENTS = [
  {
    id: "monthly-prayer",
    title: {
      en: "Prayer Gathering",
      zh: "祷告聚会"
    },
    startDate: "2026-02-13",
    startTime: "20:00",
    endTime: "21:00",
    type: "recurring",
    recurrence: "monthly"
  },

  {
    id: "youth-fellowship",
    title: {
      en: "Youth Fellowship",
      zh: "青年团契"
    },
    startDate: "2026-02-07",
    startTime: "16:00",
    endTime: "18:00",
    type: "recurring",
    recurrence: "weekly",
    skipFifthSaturday: true
  },

  {
    id: "christmas-2025",
    title: {
      en: "Christmas Service",
      zh: "圣诞节"
    },
    startDate: "2025-12-25T10:00",
    startTime: "17:30",
    endTime: "20:00",
    type: "major",
    archiveDurationDays: 270,
    flyer: "Images/Events/Christmas 2025 (1).jpg",

    gallery: [
    "Images/Events/Christmas 2025 (1).jpg",
    "Images/Events/Christmas 2025 (2).jpg",
    "Images/Events/Christmas 2025 (3).jpg",
    "Images/Events/Christmas 2025 (4).jpg",
    "Images/Events/Christmas 2025 (5).jpg",
    "Images/Events/Christmas 2025 (6).jpg",
    "Images/Events/Christmas 2025 (7).jpg",
    "Images/Events/Christmas 2025 (8).jpg",
    ]
  },

  {
    id: "AGPC 78th anniversary-2025",
    title: {
      en: "AGPC 78th Anniversary",
      zh: "嘉恩堂 78th 周年纪念"
    },
    startDate: "2025-11-02T10:00",
    startTime: "09:00",
    endTime: "10:30",
    type: "major",
    archiveDurationDays: 270,
    flyer: "Images/Events/AGPC 78 (3).jpg",

    gallery: [
    "Images/Events/AGPC 78 (3).jpg",
    "Images/Events/AGPC 78 (2).jpg",
    "Images/Events/AGPC 78 (1).jpg"
    ]
  },

  {
    id: "AGPC Camp-2024",
    title: {
      en: "AGPC Church Camp 2024",
      zh: "嘉恩堂家庭营 2024"
    },
    startDate: "2024-06-06T10:00",
    startTime: "09:00",
    endTime: "17:30",
    type: "major",
    archiveDurationDays: 270,
    flyer: "Images/Events/Church Camp 2024.jpg",

    gallery: [
    "Images/Events/Church Camp 2024.jpg"
    ]
  },

  {
    id: "christmas-2025",
    title: {
      en: "Christmas Service",
      zh: "圣诞节"
    },
    startDate: "2025-12-25T10:00",
    startTime: "17:30",
    endTime: "20:00",
    type: "major",
    archiveDurationDays: 270,
    flyer: "Images/Events/Christmas 2025 (1).jpg",

    gallery: [
    "Images/Events/Christmas 2025 (1).jpg",
    "Images/Events/Christmas 2025 (2).jpg",
    "Images/Events/Christmas 2025 (3).jpg",
    "Images/Events/Christmas 2025 (4).jpg",
    "Images/Events/Christmas 2025 (5).jpg",
    "Images/Events/Christmas 2025 (6).jpg",
    "Images/Events/Christmas 2025 (7).jpg",
    "Images/Events/Christmas 2025 (8).jpg",
    ]
  },

  {
    id: "AGPC 78th anniversary-2025",
    title: {
      en: "AGPC 78th Anniversary",
      zh: "嘉恩堂 78th 周年纪念"
    },
    startDate: "2025-11-02T10:00",
    startTime: "09:00",
    endTime: "10:30",
    type: "major",
    archiveDurationDays: 270,
    flyer: "Images/Events/AGPC 78 (3).jpg",

    gallery: [
    "Images/Events/AGPC 78 (3).jpg",
    "Images/Events/AGPC 78 (2).jpg",
    "Images/Events/AGPC 78 (1).jpg"
    ]
  },

  {
    id: "AGPC Camp-2025",
    title: {
      en: "AGPC Church Camp 2025",
      zh: "嘉恩堂家庭营 2025"
    },
    startDate: "2026-06-06T10:00",
    startTime: "09:00",
    endTime: "17:30",
    type: "major",
    archiveDurationDays: 270,
    flyer: "Images/Events/Church Camp 2024.jpg",

    gallery: [
    "Images/Events/Church Camp 2024.jpg"
    ]
  }

  // ⬆️ ADD NEW EVENTS ABOVE THIS LINE ONLY ⬆️
];