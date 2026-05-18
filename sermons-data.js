// =========================================================
// 📖 SERMONS DATABASE — STAFF EDITS HERE ONLY
// =========================================================
//
// HOW TO ADD A NEW SERMON:
// 1. Copy one sermon object below (the { ... } block)
// 2. Paste it inside the sermons array, separated by commas
// 3. Change the title, pastor, date, language, and video URL
//
// NOTES:
// - Date format can be "8 Sept 2024" or any consistent readable format
// - lang values: "en" for English, "zh" for Chinese, "both" for bilingual
// - video must be a valid YouTube embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID"
//
// IMPORTANT:
//  Keep commas between items
//  Do NOT edit anything outside { }
//  Leave video empty "" if not uploaded yet
//
// =========================================================

console.log("SERMONS LOADED");

window.SERMONS = [
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "12/09/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "信心行走",                       // Sermon title in Chinese
    pastor: "John 牧师",                    // Name of the preacher in Chinese
    date: "18/09/2024",                    // Date of the sermon (keep same format)
    time: "09:00 - 10:30",
    lang: "zh",                            // Language: "zh" (Chinese)
    video: "https://www.youtube.com/embed/ZH_VIDEO_ID"  // YouTube embed URL for Chinese sermon
  },
  {
    title: {
        en: "Combined Service: The Renewal brought by the Resurrection of the Lord",  // Sermon title for bilingual service
        zh: "主复活带来的更新",
    },
    pastor: { 
        en: "Pastor Chong Soon Fah",                // Preachers' names
        zh: "张仕华牧师",
    },
    date: "15/10/2026",                         // Date of the combined service
    time: "09:00 - 10:30",
    lang: "both",                                // Language: "both" means bilingual
    video: "https://www.youtube.com/embed/COMBINED_VIDEO_ID" // YouTube embed URL for bilingual sermon
  },
  // ⬆️ Add new sermons above this line ONLY ⬆️
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "15/07/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "14/10/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor Jay",                  // Name of the preacher
    date: "22/03/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "17/06/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "15/02/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor Jay",                  // Name of the preacher
    date: "01/09/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by tRUTH",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "09/07/2024",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/iG9CE55wbtY"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "15/12/2016",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/5qap5aO4i9A"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "27/05/2015",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/21X5lGlDOfg"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "15/12/2021",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ"  // YouTube embed URL
  },

  {
    title: "Upcoming Sermon Example",
    pastor: "Pastor John",
    date: "15/07/2020",  // Future date
    time: "09:00 - 10:30",
    lang: "zh",
    video: "https://www.youtube.com/embed/EN_VIDEO_ID" // No video yet
  },

  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "15/07/2019",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "14/10/2022",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor Jay",                  // Name of the preacher
    date: "22/03/2027",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  },
  {
    title: "Walking by Faith",              // Sermon title in English
    pastor: "Pastor John",                  // Name of the preacher
    date: "17/06/2023",                    // Date of the sermon (format: D MMM YYYY)
    time: "11:00 - 12:30",
    lang: "en",                            // Language: "en" (English)
    video: "https://www.youtube.com/embed/EN_VIDEO_ID"  // YouTube embed URL
  }

  //  ADD NEW SERMONS ABOVE THIS LINE ONLY
];

