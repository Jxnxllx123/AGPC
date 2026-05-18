// =========================================================
// 📅 EVENTS UI SYSTEM (FIXED + CENTERED SWIPER)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  loadEvents();

  // IMPORTANT: wait for DOM injection before Swiper init
  requestAnimationFrame(() => {
    initUpcomingSwiper();
    initPastSwiper();
  });
});


// =========================================================
// 📌 LOAD EVENTS
// =========================================================
function loadEvents() {
  const now = new Date();

  const upcoming = document.getElementById("upcoming-events");
  const past = document.getElementById("past-events");

  if (upcoming) upcoming.innerHTML = "";
  if (past) past.innerHTML = "";

  EVENTS.forEach(event => {
    const eventDate = new Date(event.startDate);

    let finalEvent = event;

    // handle recurring FIRST
    if (event.type === "recurring") {
      finalEvent = getNextOccurrence(event);
    }

    // classify correctly
    if (new Date(finalEvent.startDate) >= now) {
      renderEvent(finalEvent, "upcoming-events");
    } else {
      renderEvent(finalEvent, "past-events", true);
    }
  });
}


// =========================================================
// 📌 RENDER EVENT CARD
// =========================================================
function renderEvent(event, containerId, isPast = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const start = new Date(event.startDate);

  const dateText = start.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  });

  const timeText =
    (event.startTime && event.endTime)
      ? formatTimeRange(event.startTime, event.endTime)
      : "";

  const dateLine = timeText ? `${dateText} • ${timeText}` : dateText;

  container.innerHTML += `
    <div class="swiper-slide">
      <div class="event-card">

        ${event.flyer ? `
          <div class="event-flyer">
            <img src="${event.flyer}">
          </div>
        ` : ""}

        <div class="event-info">
          <h5 class="mb-1">${event.title[currentLang]}</h5>
          <p class="text-muted mb-2">${dateLine}</p>

          <a class="btn btn-outline-primary btn-sm"
            onclick='openEventGallery("${event.id}")'>
            ${isPast
              ? (currentLang === "zh" ? "查看相册" : "View Gallery")
              : (currentLang === "zh" ? "了解更多" : "Learn More")}
          </a>
        </div>

      </div>
    </div>
  `;
}


// =========================================================
// 🎠 SWIPER CORE (REUSABLE)
// =========================================================
function initCenteredSwiper(selector, {
  slidesPerView = 1,
  spaceBetween = 24,
  minLoopSlides = 2
} = {}) {

  const el = document.querySelector(selector);
  if (!el) return;

  const count = el.querySelectorAll(".swiper-slide").length;

  return new Swiper(selector, {
    loop: count > minLoopSlides,
    centeredSlides: true,

    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,

    navigation: {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`,
    },

    pagination: {
      el: `${selector} .swiper-pagination`,
      clickable: true,
    },

    watchOverflow: true,
    observer: true,
    observeParents: true
  });
}


// =========================================================
// 🟣 UPCOMING EVENTS (BIG FLYERS)
// =========================================================
function initUpcomingSwiper() {
  new Swiper(".upcoming-events-swiper", {
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 20,

    loop: document.querySelectorAll("#upcoming-events .swiper-slide").length > 1,

    navigation: {
      nextEl: ".upcoming-events-swiper .swiper-button-next",
      prevEl: ".upcoming-events-swiper .swiper-button-prev",
    },

    pagination: {
      el: ".upcoming-events-swiper .swiper-pagination",
      clickable: true,
    },
  });
}


// =========================================================
// 🔵 PAST EVENTS (SMALL CARDS)
// =========================================================
function initPastSwiper() {
  initCenteredSwiper(".past-events-swiper", {
    slidesPerView: 1.9,
    spaceBetween: 20,
    minLoopSlides: 2
  });
}


// =========================================================
// 🔁 RECURRING EVENTS
// =========================================================
function getNextOccurrence(event) {
  let date = new Date(event.startDate);
  const now = new Date();

  while (date < now) {
    if (event.recurrence === "weekly") {
      date.setDate(date.getDate() + 7);
    }
    if (event.recurrence === "monthly") {
      date.setMonth(date.getMonth() + 1);
    }
  }

  return { ...event, startDate: date.toISOString() };
}


// =========================================================
// ⏰ TIME FORMAT
// =========================================================
function formatTimeRange(start, end) {
  const format = (time) => {
    const [h, m] = time.split(":").map(Number);
    const suffix = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour}:${m.toString().padStart(2, "0")} ${suffix}`;
  };

  return `${format(start)} – ${format(end)}`;
}


// =========================================================
// 🖼️ EVENT GALLERY MODAL
// =========================================================
let currentGallery = [];
let currentIndex = 0;

function openEventGallery(eventId) {
  const event = EVENTS.find(e => e.id === eventId);
  if (!event || !event.gallery?.length) return;

  currentGallery = event.gallery;
  currentIndex = 0;

  renderGallery();

  const modal = new bootstrap.Modal(
    document.getElementById("galleryModal")
  );
  modal.show();
}

function renderGallery() {
  const mainImg = document.getElementById("mainGalleryImage");
  const strip = document.getElementById("thumbnailStrip");

  if (!mainImg || !strip) return;

  mainImg.src = currentGallery[currentIndex];
  strip.innerHTML = "";

  currentGallery.forEach((img, index) => {
    strip.innerHTML += `
      <img src="${img}"
        onclick="switchImage(${index})"
        style="
          width:70px;
          height:70px;
          object-fit:cover;
          cursor:pointer;
          border:2px solid ${index === currentIndex ? 'white' : 'transparent'};
          opacity:${index === currentIndex ? '1' : '0.6'};
          border-radius:8px;">
    `;
  });
}

function switchImage(index) {
  currentIndex = index;
  renderGallery();
}