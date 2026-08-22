// =========================================================
// 📅 EVENTS UI SYSTEM
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  loadEvents();

  // Wait for events to be inserted before initializing Swiper
  requestAnimationFrame(() => {
    initUpcomingSwiper();
  });
});


// =========================================================
// 📌 LOAD UPCOMING EVENTS
// =========================================================

function loadEvents() {

  const now = new Date();
  const upcoming = document.getElementById("upcoming-events");

  if (!upcoming) return;

  upcoming.innerHTML = "";

  EVENTS.forEach(event => {

    let finalEvent = event;

    // Handle recurring events
    if (event.type === "recurring") {
      finalEvent = getNextOccurrence(event);
    }

    // Only show upcoming events
    if (new Date(finalEvent.startDate) >= now) {
      renderEvent(finalEvent);
    }

  });
}


// =========================================================
// 📌 RENDER EVENT CARD
// =========================================================

function renderEvent(event) {

  const container = document.getElementById("upcoming-events");

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

  const dateLine = timeText
    ? `${dateText} • ${timeText}`
    : dateText;

  container.innerHTML += `
    <div class="swiper-slide">

      <div class="event-card">

        ${event.flyer ? `
          <div class="event-flyer">
            <img src="${event.flyer}" alt="${event.title[currentLang]}">
          </div>
        ` : ""}

        <div class="event-info">

          <h5 class="mb-1">
            ${event.title[currentLang]}
          </h5>

          ${event.subtitle ? `
            <p class="event-subtitle mb-1">
              ${event.subtitle[currentLang]}
            </p>
          ` : ""}

          <p class="text-muted mb-2">
            ${dateLine}
          </p>

          ${event.gallery?.length ? `
            <a class="btn btn-outline-primary btn-sm"
               onclick='openEventGallery("${event.id}")'>

              ${currentLang === "zh"
                ? "了解更多"
                : "Learn More"}

            </a>
          ` : ""}

        </div>

      </div>

    </div>
  `;
}


// =========================================================
// 🎠 UPCOMING EVENTS SWIPER
// =========================================================

function initUpcomingSwiper() {

  const slideCount =
    document.querySelectorAll(
      "#upcoming-events .swiper-slide"
    ).length;

  new Swiper(".upcoming-events-swiper", {

    slidesPerView: 1.3,

    centeredSlides: true,

    spaceBetween: 20,

    loop: slideCount > 1,

    navigation: {
      nextEl: ".upcoming-events-swiper .swiper-button-next",
      prevEl: ".upcoming-events-swiper .swiper-button-prev",
    },

    pagination: {
      el: ".upcoming-events-swiper .swiper-pagination",
      clickable: true,
    },

    observer: true,
    observeParents: true,

    watchOverflow: true

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

  return {
    ...event,
    startDate: date.toISOString()
  };
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


// =========================================================
// 🖼️ RENDER GALLERY
// =========================================================

function renderGallery() {

  const mainImg =
    document.getElementById("mainGalleryImage");

  const strip =
    document.getElementById("thumbnailStrip");

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
             border:2px solid ${index === currentIndex ? "white" : "transparent"};
             opacity:${index === currentIndex ? "1" : "0.6"};
             border-radius:8px;
           ">
    `;

  });
}


// =========================================================
// 🖼️ SWITCH GALLERY IMAGE
// =========================================================

function switchImage(index) {

  currentIndex = index;

  renderGallery();

}
