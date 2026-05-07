function destinationPhotos(folder, fileBase, extension = "jpg") {
  return Array.from({ length: 5 }, (_, index) => {
    const number = index + 1;
    return {
      src: `assets/${folder}/${fileBase}-${number}.${number === 5 && extension === "jpeg5" ? "jpeg" : "jpg"}`,
      alt: `${fileBase.replaceAll("-", " ")} photo ${number}`
    };
  });
}

const destinationPlaces = [
  {
    name: "Dal Lake",
    tag: "Shikara rides, houseboats, floating life",
    detail: "Dal Lake is the heart of Srinagar and one of Kashmir's most recognizable experiences. The story here should feel calm and cinematic: shikaras moving across the water, houseboats lined along the lake, reflections at sunset, floating markets, and the everyday rhythm of Srinagar on water.",
    media: destinationPhotos("dal-lake", "dal-lake")
  },
  {
    name: "Gulmarg",
    tag: "Meadows, gondola, snow views",
    detail: "Gulmarg is Kashmir's high meadow, famous for the gondola, winter snow, pine slopes, and summer grasslands. It works beautifully for reels because every turn gives a moving frame: horses, cable cars, forest edges, and wide mountain backdrops.",
    media: destinationPhotos("gulmarg", "gulmarg")
  },
  {
    name: "Pahalgam",
    tag: "Lidder River, valleys, pine forests",
    detail: "Pahalgam feels calm and cinematic, with the Lidder River running beside pine forests and open valley roads. It is ideal for family travel, quiet walks, pony rides, and day trips toward Aru, Betaab Valley, and Chandanwari.",
    media: destinationPhotos("pahalgam", "pahalgam")
  },
  {
    name: "Sonmarg",
    tag: "Golden meadow, glaciers, mountain roads",
    detail: "Sonmarg is the meadow of gold, sitting on the road toward high mountain passes and glacier views. The landscape is sharp, bright, and dramatic, making it perfect for big wide shots, reels, and photo stories with a strong explorer mood.",
    media: destinationPhotos("sonmarg", "sonmarg", "jpeg5")
  },
  {
    name: "Doodhpathri",
    tag: "Rolling meadows and quiet streams",
    detail: "Doodhpathri is peaceful and less crowded, with green slopes, open picnic spaces, and cold streams cutting through the valley. It is the kind of place where the story should feel slow, clean, and personal.",
    media: destinationPhotos("doodhpathri", "doodhpathri")
  },
  {
    name: "Nishat Garden",
    tag: "Mughal garden, Zabarwan views, Dal side walks",
    detail: "Nishat Garden is one of Srinagar's most graceful Mughal gardens, set beside Dal Lake with the Zabarwan mountains behind it. It brings a heritage mood to the page: terraces, fountains, chinar shade, flowers, and classic Kashmir garden views.",
    media: destinationPhotos("nishat-garden", "nishat-garden")
  },
  {
    name: "Tulip Garden",
    tag: "Spring colors below the Zabarwan range",
    detail: "The Tulip Garden is Srinagar's spring showpiece, known for rows of bright flowers opening under the Zabarwan mountains. It is perfect for colorful stories, couple photos, family travel frames, and seasonal Kashmir reels.",
    media: destinationPhotos("tulip-garden", "tulip-garden")
  },
  {
    name: "Betab Valley",
    tag: "River scenes and green valley frames",
    detail: "Betab Valley is one of Pahalgam's most photogenic stops, with river water, mountain walls, and landscaped green areas. It is easy for visitors to understand visually, so the caption can guide them on when to visit and what to expect.",
    media: destinationPhotos("betab-valley", "betab-valley")
  },
  {
    name: "Aharbal Waterfall",
    tag: "Waterfall, forest road, South Kashmir escape",
    detail: "Aharbal Waterfall is a powerful South Kashmir location with rushing water, forested surroundings, and a fresh mountain atmosphere. It gives the profile a more adventurous feel and works well as both a post carousel and a fast-moving reel.",
    media: destinationPhotos("aharbal-waterfall", "aharbal")
  },
  {
    name: "Kokarnag",
    tag: "Springs, gardens, trout streams",
    detail: "Kokarnag is known for its clear springs, garden setting, and peaceful South Kashmir feel. It is a gentle destination for families and nature lovers, with water, greenery, and relaxed walking spaces.",
    media: destinationPhotos("kokarnag", "kokarnag")
  },
  {
    name: "Verinag",
    tag: "Historic spring, gardens, southern Kashmir",
    detail: "Verinag is known for its historic spring and garden setting, surrounded by mountain calm. It gives the page a graceful story: water, stone, heritage, and the quieter side of South Kashmir.",
    media: destinationPhotos("verinag", "verinag")
  },
  {
    name: "Ladakh",
    tag: "High-altitude extension from the Kashmir route",
    detail: "Ladakh adds a high-altitude explorer chapter to the travel collection, with open roads, dramatic mountains, monasteries, and wide Himalayan landscapes. It can sit as a special extension for visitors planning Kashmir with Ladakh.",
    media: destinationPhotos("ladakh", "ladakh")
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const icon = (name) => `<i data-lucide="${name}"></i>`;
const username = "Explore_with_Jasif";

let selectedFiles = [];
let activeSlides = {};

const suggestions = [
  { name: "Kashmir Dream Holidays", note: "Official tour brand", image: "assets/popular-packages/family Fun Tour.png" },
  { name: "Family Fun Tour", note: "Popular package", image: "assets/popular-packages/family Fun Tour.png" },
  { name: "Romantic Kashmir", note: "Honeymoon package", image: "assets/popular-packages/romantic kashmir.jpg" },
  { name: "Snow Adventure", note: "Winter package", image: "assets/popular-packages/snow adventure.jpg" },
  { name: "Jasif Explorer", note: "Personal Kashmir stories", image: "assets/dal-lake/dal-lake-1.jpg" }
];

const heroPhotos = Array.from({ length: 7 }, (_, index) => ({
  src: `assets/hero/hero-${index + 1}.jpg`,
  alt: `Explore With Jasif hero photo ${index + 1}`
}));

const pinnedPlaces = [
  {
    place: "Tulip Garden",
    date: "April 2019",
    detail: "Tulip Garden is Kashmir's spring color festival, set below the Zabarwan range in Srinagar. This pinned post is about the first bloom feeling: bright rows of tulips, cool mountain air, family photos, couple frames, and the short seasonal window when the garden becomes one of the most beautiful places in Kashmir.",
    base: destinationPlaces.find((place) => place.name === "Tulip Garden")
  },
  {
    place: "Dal Lake",
    date: "October 2020",
    detail: "Dal Lake is the soul of Srinagar: shikara rides, houseboats, floating markets, and chinar reflections across the water. This post is for visitors who want a calm Kashmir start, with sunset frames, lake life, and the classic Srinagar experience.",
    base: destinationPlaces.find((place) => place.name === "Dal Lake")
  },
  {
    place: "Gulmarg",
    date: "January 2021",
    detail: "Gulmarg is Kashmir's snow and meadow icon, known for gondola views, pine forests, ski slopes, and wide mountain scenery. It is one of the strongest winter posts on the profile and a must-save stop for snow lovers.",
    base: destinationPlaces.find((place) => place.name === "Gulmarg")
  },
  {
    place: "Pahalgam",
    date: "June 2022",
    detail: "Pahalgam brings together the Lidder River, pine forests, valley roads, and peaceful family travel. This post shows the softer side of Kashmir, where every turn feels made for slow walks, pony rides, and relaxed scenic days.",
    base: destinationPlaces.find((place) => place.name === "Pahalgam")
  },
  {
    place: "Sonmarg",
    date: "May 2023",
    detail: "Sonmarg is the meadow of gold, with glacier routes, high mountain roads, and dramatic Himalayan scenery. It is perfect for explorer-style content because the landscape feels open, sharp, and cinematic.",
    base: destinationPlaces.find((place) => place.name === "Sonmarg")
  },
  {
    place: "Ladakh",
    date: "August 2024-2025",
    detail: "Ladakh is the high-altitude extension from the Kashmir route, with blue lakes, open roads, dry mountains, and a completely different Himalayan mood. This post is for travelers who want Kashmir with a bigger adventure chapter.",
    base: destinationPlaces.find((place) => place.name === "Ladakh")
  },
  {
    place: "Aharbal Waterfall",
    date: "March 2026",
    detail: "Aharbal Waterfall is one of South Kashmir's most powerful nature escapes. The sound of water, forest road, snow-fed stream, and fresh mountain air make it a strong explorer post and a beautiful day-trip idea.",
    base: destinationPlaces.find((place) => place.name === "Aharbal Waterfall")
  }
];

const pinnedPosts = pinnedPlaces.map((place, index) => {
  const localPhotos = place.base.media.map((photo, photoIndex) => ({
    ...photo,
    alt: `${place.place} pinned photo ${photoIndex + 1}`
  }));
  const media = [...localPhotos, heroPhotos[index], heroPhotos[(index + 2) % heroPhotos.length]].slice(0, 7);
  return {
    id: index + 1,
    type: index % 3 === 2 ? "reel" : "post",
    pinned: true,
    place: place.place,
    tag: `${place.date} · pinned Kashmir post`,
    detail: place.detail,
    caption: `${place.place}, Kashmir - ${place.detail}`,
    media,
    likes: 18400 + index * 1320,
    comments: 120 + index * 23,
    time: place.date
  };
});

const destinationPosts = destinationPlaces.map((place, index) => ({
  id: 100 + index + 1,
  type: index % 4 === 1 ? "reel" : "post",
  pinned: false,
  place: place.name,
  tag: place.tag,
  detail: place.detail,
  caption: `${place.name}, Kashmir - ${place.detail}`,
  media: place.media,
  likes: 9800 + index * 940,
  comments: 84 + index * 19,
  time: `${2019 + (index % 8)}`
}));

let posts = [...pinnedPosts, ...destinationPosts];

function formatNumber(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return String(value);
}

function getMedia(post, index = 0) {
  return Array.isArray(post.media) ? post.media[index] || post.media[0] : { src: post.media, alt: post.caption };
}

function mediaTag(post, index = 0, autoplay = false) {
  const media = getMedia(post, index);
  const isVideo = media.fileType?.startsWith("video");
  if (isVideo) {
    return `<video src="${media.src}" ${autoplay ? "autoplay muted loop playsinline controls" : "muted loop playsinline"}></video>`;
  }
  return `<img src="${media.src}" alt="${media.alt || post.caption}">`;
}

function storyCover(post) {
  return getMedia(post, 0).src;
}

function renderStories() {
  $("#storiesStrip").innerHTML = posts.map((post) => `
    <div class="story">
      <button data-story="${post.id}">
        <span class="story-ring"><img src="${storyCover(post)}" alt="${post.place} story"></span>
        <span>${post.place}</span>
      </button>
    </div>
  `).join("");
}

function renderCarousel(post) {
  const slide = activeSlides[post.id] || 0;
  const total = Array.isArray(post.media) ? post.media.length : 1;
  return `
    <div class="carousel">
      <button class="media-frame" data-open="${post.id}" aria-label="Open ${post.place} post">${mediaTag(post, slide)}</button>
      ${total > 1 ? `
        <button class="carousel-arrow left" data-slide="${post.id}" data-direction="-1" aria-label="Previous photo">${icon("chevron-left")}</button>
        <button class="carousel-arrow right" data-slide="${post.id}" data-direction="1" aria-label="Next photo">${icon("chevron-right")}</button>
        <div class="carousel-count">${slide + 1}/${total}</div>
        ${post.pinned ? `<div class="pinned-label">${icon("pin")} Pinned</div>` : ""}
        <div class="carousel-dots">${post.media.map((_, index) => `<span class="${index === slide ? "active" : ""}"></span>`).join("")}</div>
      ` : ""}
    </div>
  `;
}

function renderFeed() {
  $("#feed").innerHTML = posts.slice(0, 12).map((post) => `
    <article class="post" data-post-id="${post.id}">
      <header class="post-header">
        <span class="avatar small"></span>
        <div>
          <strong>${username}</strong>
          <span>${post.place}, Kashmir</span>
        </div>
        <span>· ${post.time}</span>
        <button aria-label="More options">${icon("more-horizontal")}</button>
      </header>
      ${renderCarousel(post)}
      <div class="post-actions">
        <button class="like-button" data-like="${post.id}" aria-label="Like">${icon("heart")}</button>
        <button aria-label="Comment">${icon("message-circle")}</button>
        <button aria-label="Share">${icon("send")}</button>
        <button aria-label="Save">${icon("bookmark")}</button>
      </div>
      <p class="likes"><strong>${formatNumber(post.likes)} likes</strong></p>
      <p class="caption"><strong>${username}</strong>${post.caption}</p>
      <p class="place-tag">${post.tag}</p>
      <p class="comments">View all ${formatNumber(post.comments)} comments</p>
      <span class="time">${post.time}</span>
    </article>
  `).join("");
}

function renderSuggestions() {
  $("#suggestions").innerHTML = suggestions.map((item) => `
    <div class="suggestion">
      <img class="suggestion-thumb" src="${item.image}" alt="${item.name}">
      <div><strong>${item.name}</strong><span>${item.note}</span></div>
      <button>View</button>
    </div>
  `).join("");
}

function renderGrid(target, list = posts) {
  $(target).innerHTML = list.map((post, index) => `
    <button class="tile ${index === 1 || index === 7 ? "wide" : ""}" data-kind="${post.media.length} photos" data-open="${post.id}" aria-label="Open ${post.place}">
      ${mediaTag(post, 0)}
      <span class="tile-title">${post.place}</span>
      ${post.pinned ? `<span class="pinned-label">${icon("pin")} Pinned</span>` : ""}
      <span class="tile-overlay"><span>${icon("heart")} ${formatNumber(post.likes)}</span><span>${icon("images")} ${post.media.length}</span></span>
    </button>
  `).join("");
}

function renderReels() {
  const reels = posts.filter((post) => post.type === "reel").concat(posts.filter((post) => post.type !== "reel").slice(0, 2));
  $("#reelsStack").innerHTML = reels.map((post) => `
    <article class="reel-card" data-post-id="${post.id}">
      ${mediaTag(post, 0, true)}
      <div class="reel-info">
        <strong>@${username} · ${post.place}</strong>
        <p>${post.tag}</p>
      </div>
      <div class="reel-actions">
        <button data-like="${post.id}" aria-label="Like reel">${icon("heart")}<span>${formatNumber(post.likes)}</span></button>
        <button aria-label="Comment">${icon("message-circle")}<span>${formatNumber(post.comments)}</span></button>
        <button aria-label="Share">${icon("send")}</button>
        <button aria-label="More">${icon("more-horizontal")}</button>
      </div>
    </article>
  `).join("");
}

function renderSearch(query = "") {
  const normalized = query.trim().toLowerCase();
  const result = posts.filter((post) => !normalized || post.place.toLowerCase().includes(normalized) || post.caption.toLowerCase().includes(normalized) || post.tag.toLowerCase().includes(normalized));
  $("#searchResults").innerHTML = result.map((post) => `
    <button class="result-row" data-open="${post.id}">
      <img src="${storyCover(post)}" alt="">
      <span><strong>${post.place}</strong><br>${post.tag}</span>
    </button>
  `).join("");
}

function renderActivity() {
  $("#activityList").innerHTML = posts.slice(0, 7).map((post, index) => `
    <div class="activity-row">
      <span class="avatar small"></span>
      <span><strong>${suggestions[index % suggestions.length].name}</strong> liked your ${post.place} carousel. <span class="comments">${post.time}</span></span>
    </div>
  `).join("");
}

function renderProfileStats() {
  $("#postCount").textContent = posts.length;
}

function renderAll() {
  renderStories();
  renderFeed();
  renderSuggestions();
  renderGrid("#exploreGrid");
  renderGrid("#profileGrid");
  renderReels();
  renderSearch($("#searchInput")?.value || "");
  renderActivity();
  renderProfileStats();
  window.lucide?.createIcons?.();
}

function switchView(viewName) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewName));
  $$("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === viewName));
  location.hash = viewName;
}

function openViewer(postId, startSlide = 0) {
  const post = posts.find((item) => item.id === Number(postId));
  if (!post) return;
  const total = post.media.length;
  const current = Math.max(0, Math.min(startSlide, total - 1));
  $("#viewerContent").innerHTML = `
    <div class="viewer-media">
      ${mediaTag(post, current, true)}
      ${total > 1 ? `
        <button class="carousel-arrow left viewer-nav" data-viewer-slide="${post.id}" data-current="${current}" data-direction="-1" aria-label="Previous photo">${icon("chevron-left")}</button>
        <button class="carousel-arrow right viewer-nav" data-viewer-slide="${post.id}" data-current="${current}" data-direction="1" aria-label="Next photo">${icon("chevron-right")}</button>
        <div class="carousel-count">${current + 1}/${total}</div>
      ` : ""}
    </div>
    <aside class="viewer-side">
      <header class="profile-row"><span class="avatar small"></span><div><strong>${username}</strong><span>${post.place}, Kashmir</span></div></header>
      <div class="viewer-caption"><strong>${post.place}</strong><br>${post.detail}</div>
      <footer>
        <div class="post-actions">
          <button data-like="${post.id}" aria-label="Like">${icon("heart")}</button>
          <button aria-label="Comment">${icon("message-circle")}</button>
          <button aria-label="Share">${icon("send")}</button>
          <button aria-label="Save">${icon("bookmark")}</button>
        </div>
        <p class="likes"><strong>${formatNumber(post.likes)} likes</strong></p>
      </footer>
    </aside>
  `;
  if (!$("#viewerModal").open) $("#viewerModal").showModal();
  window.lucide?.createIcons?.();
}

function openStory(postId, slide = 0) {
  const post = posts.find((item) => item.id === Number(postId));
  if (!post) return;
  const current = (slide + post.media.length) % post.media.length;
  $("#viewerContent").innerHTML = `
    <div class="story-viewer">
      <div class="story-bars">${post.media.map((_, index) => `<span class="${index <= current ? "active" : ""}"></span>`).join("")}</div>
      ${mediaTag(post, current, true)}
      <div class="story-caption">
        <strong>${post.place}</strong>
        <span>${post.tag}</span>
      </div>
      <button class="story-tap left" data-story-slide="${post.id}" data-current="${current}" data-direction="-1" aria-label="Previous story"></button>
      <button class="story-tap right" data-story-slide="${post.id}" data-current="${current}" data-direction="1" aria-label="Next story"></button>
    </div>
  `;
  if (!$("#viewerModal").open) $("#viewerModal").showModal();
  window.lucide?.createIcons?.();
}

function createUploadedPost(event) {
  event.preventDefault();
  if (!selectedFiles.length) return;
  const type = $("#postType").value;
  const placeName = $("#placeInput").value.trim() || "Kashmir";
  const caption = $("#captionInput").value.trim() || `${placeName}, Kashmir - a new explorer update from Jasif.`;
  posts = [{
    id: Date.now(),
    type,
    place: placeName,
    tag: "New Kashmir upload",
    detail: caption,
    caption,
    media: selectedFiles.slice(0, 7).map((file, index) => ({
      src: URL.createObjectURL(file),
      alt: `${placeName} upload ${index + 1}`,
      fileType: file.type
    })),
    likes: 0,
    comments: 0,
    time: "Just now"
  }, ...posts];
  selectedFiles = [];
  $("#fileInput").value = "";
  $("#placeInput").value = "";
  $("#captionInput").value = "";
  $("#uploadPreview").innerHTML = "";
  $("#uploadModal").close();
  switchView(type === "reel" ? "reels" : "profile");
  renderAll();
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const uploadButton = event.target.closest("[data-action='open-upload']");
  const openButton = event.target.closest("[data-open]");
  const likeButton = event.target.closest("[data-like]");
  const storyButton = event.target.closest("[data-story]");
  const slideButton = event.target.closest("[data-slide]");
  const viewerSlideButton = event.target.closest("[data-viewer-slide]");
  const storySlideButton = event.target.closest("[data-story-slide]");

  if (viewButton) switchView(viewButton.dataset.view);
  if (uploadButton) $("#uploadModal").showModal();
  if (openButton) openViewer(openButton.dataset.open, activeSlides[openButton.dataset.open] || 0);
  if (storyButton) openStory(storyButton.dataset.story);
  if (slideButton) {
    const post = posts.find((item) => item.id === Number(slideButton.dataset.slide));
    const total = post.media.length;
    const next = ((activeSlides[post.id] || 0) + Number(slideButton.dataset.direction) + total) % total;
    activeSlides[post.id] = next;
    renderFeed();
  }
  if (viewerSlideButton) {
    const next = Number(viewerSlideButton.dataset.current) + Number(viewerSlideButton.dataset.direction);
    openViewer(viewerSlideButton.dataset.viewerSlide, next);
  }
  if (storySlideButton) {
    const next = Number(storySlideButton.dataset.current) + Number(storySlideButton.dataset.direction);
    openStory(storySlideButton.dataset.storySlide, next);
  }
  if (likeButton) {
    const post = posts.find((item) => item.id === Number(likeButton.dataset.like));
    if (post && !likeButton.classList.contains("liked")) post.likes += 1;
    likeButton.classList.toggle("liked");
    renderFeed();
    renderReels();
    window.lucide?.createIcons?.();
  }
});

$("#viewerModal").addEventListener("click", (event) => {
  if (event.target.id === "viewerModal" || event.target.closest(".viewer-close")) $("#viewerModal").close();
});

$("#searchInput").addEventListener("input", (event) => renderSearch(event.target.value));

$("#fileInput").addEventListener("change", (event) => {
  selectedFiles = [...event.target.files].slice(0, 7);
  if (!selectedFiles.length) return;
  $("#uploadPreview").innerHTML = selectedFiles.map((file) => {
    const source = URL.createObjectURL(file);
    return file.type.startsWith("video")
      ? `<video src="${source}" controls muted></video>`
      : `<img src="${source}" alt="Upload preview">`;
  }).join("");
});

$("#sharePost").addEventListener("click", createUploadedPost);

window.addEventListener("hashchange", () => {
  const next = location.hash.replace("#", "") || "home";
  if ($(`#${next}`)) switchView(next);
});

renderAll();
switchView(location.hash.replace("#", "") || "home");
