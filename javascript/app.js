/* ============================================================
   KISHAN - TECH — Application Logic
   Views: welcome -> india-map -> agri -> season-select -> crops-list -> crop-detail
   ============================================================ */

const SEASON_META = {
  summer: {
    label: "Summer",
    icon: "☀️",
    tagline: "Hot & Sunny Season",
    desc: "Warm-season crops grown during the hot Indian summer (Feb–Jun). These heat-loving fruits and vegetables thrive in bright sunshine and well-drained soils.",
    bg: "assets/images/summer-bg.png",
    month: "February – June",
  },
  winter: {
    label: "Winter",
    icon: "❄️",
    tagline: "Cool Rabi Season",
    desc: "Cool-season (rabi) crops sown in winter (Oct–Mar) and harvested in spring. Cereals, oilseeds, pulses, spices and vegetables that love the chill.",
    bg: "assets/images/winter-bg.png",
    month: "October – March",
  },
  rain: {
    label: "Rain",
    icon: "🌧️",
    tagline: "Monsoon Kharif Season",
    desc: "Kharif crops sown with the southwest monsoon (Jun–Oct) and reliant on rainfall. Rice, millets, pulses, oilseeds, fibres and plantation crops flourish.",
    bg: "assets/images/rain-bg.png",
    month: "June – October",
  },
};

/* Map info text for each season zone */
const MAP_INFO = {
  all: {
    title: "All of India",
    text: "India grows crops in all three agricultural seasons. The north is famous for winter (rabi) wheat, the east and centre for monsoon (kharif) rice, and the hot south for summer fruits and vegetables.",
    crops: "🌾 Rice · 🌾 Wheat · 🌽 Maize · 🧶 Cotton · 🥭 Mango · 🌶️ Spices · 🍉 Watermelon",
  },
  summer: {
    title: "☀️ Summer Crops — South & Peninsular India",
    text: "Summer (Zaid) crops love the heat and long sunny days. They are grown widely across the southern peninsula and the drier western regions where temperatures soar from February to June.",
    crops: "🥭 Mango · 🍉 Watermelon · 🥒 Cucumber · 🌶️ Okra · 🍈 Muskmelon · 🎃 Pumpkin",
  },
  winter: {
    title: "❄️ Winter Crops — North & North-West India",
    text: "Winter (Rabi) crops are sown in the cool months of October to March. The fertile northern plains — Punjab, Haryana, Uttar Pradesh and Rajasthan — are the heartland of rabi farming in India.",
    crops: "🌾 Wheat · 🌼 Mustard · 🫘 Chickpea · 🥔 Potato · 🧄 Garlic · 🌿 Coriander",
  },
  rain: {
    title: "🌧️ Rain Crops — East, Central & NE India",
    text: "Kharif crops are sown with the southwest monsoon from June to October. The rain-fed eastern, central and northeastern regions — West Bengal, Bihar, Madhya Pradesh and the northeast — lead monsoon cultivation.",
    crops: "🌾 Rice · 🌽 Maize · 🧶 Cotton · 🫘 Soybean · 🥜 Groundnut · 🌾 Pearl Millet",
  },
};

/* Harvest festivals of India */
const FESTIVALS = [
  { icon: "🪁", name: "Makar Sankranti / Pongal / Lohri / Magh Bihu", month: "January", season: "winter", desc: "Celebrated across India under many names, this marks the end of winter and the start of the harvest season. Pongal in Tamil Nadu thanks the Sun God for a bountiful rice harvest, Lohri in Punjab celebrates the rabi crop, and Magh Bihu in Assam honours the winter harvest with community feasts." },
  { icon: "💐", name: "Basant Panchami / Saraswati Puja", month: "January–February", season: "winter", desc: "Welcoming the arrival of spring, Basant Panchami marks the blooming of mustard fields into golden yellow. Farmers worship the fields and pray for a prosperous harvest. The colour yellow dominates the celebrations." },
  { icon: "🌾", name: "Baisakhi / Vaisakhi", month: "April", season: "rain", desc: "The most important harvest festival of Punjab, Baisakhi celebrates the rabi harvest — especially wheat. Farmers dress in colourful attire, perform the energetic Bhangra and Gidda dances, and thank the land for its abundance." },
  { icon: "🎊", name: "Rongali Bihu (Bohag Bihu)", month: "April", season: "rain", desc: "The Assamese New Year and spring harvest festival, Rongali Bihu marks the beginning of the agricultural season. Young people perform the traditional Bihu dance, and communities feast on rice-based delicacies." },
  { icon: "🌸", name: "Baisakhi / Vishu / Poila Baisakh / Puthandu", month: "April", season: "summer", desc: "The New Year harvest festival across Kerala (Vishu), Bengal (Poila Baisakh) and Tamil Nadu (Puthandu). Vishu features the 'Vishu Kani' — an arrangement of harvest produce, flowers and gold viewed first thing in the morning for prosperity." },
  { icon: "🎭", name: "Onam", month: "August–September", season: "rain", desc: "Kerala's grand harvest festival, Onam celebrates the homecoming of the legendary King Mahabali. It features the magnificent flower carpet (Pookalam), the grand feast Onasadya served on banana leaves, and the snake boat races." },
  { icon: "🎋", name: "Nabanna / Nuakhai", month: "August–September", season: "rain", desc: "Nabanna in Bengal and Nuakhai in Odisha celebrate the new rice harvest of the monsoon season. Farmers offer the first grains of the new crop to the deity before eating — a ritual of gratitude for the kharif harvest." },
  { icon: "🌾", name: "Hareli / Karam", month: "August", season: "rain", desc: "Celebrated in Chhattisgarh and parts of central India, Hareli marks the beginning of the agricultural season. Farmers worship their farm tools and cattle, and sow seeds with prayers for a good monsoon harvest." },
  { icon: "🦚", name: "Pongal (Thai Pongal)", month: "January", season: "winter", desc: "The four-day Tamil harvest festival dedicated to the Sun God and cattle. On Mattu Pongal, decorated cattle are honoured for their role in farming. The sweet Pongal dish is cooked from the newly harvested rice in clay pots." },
  { icon: "🌟", name: "Gudi Padwa / Ugadi", month: "March–April", season: "summer", desc: "The New Year festival of Maharashtra (Gudi Padwa) and Karnataka, Andhra Pradesh and Telangana (Ugadi). It marks the end of the harvest season and the start of spring. A 'Gudi' flag of victory is hoisted, and neem-based dishes are eaten." },
];

let CROPS = null;        // {summer:[], winter:[], rain:[]}
let currentSeason = null;
let currentCrop = null;
let currentView = "welcome";

/* ----------  Data (embedded from data.js)  ---------- */
/* CROP_DATA is a global provided by assets/data.js (no JSON fetch) */

/* ----------  DOM helpers  ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};

/* ----------  Navigation (with browser Back support) ---------- */
/*
  Each in-app view is pushed to the browser history so that the browser Back
  button (and mouse back gesture / file:// Back) navigates back THROUGH the
  app views instead of leaving the site. A popstate handler replays the view.
*/
const VIEW_HISTORY = [];          // stack of view descriptors for back logic
const NAV_TAB_OF_VIEW = {         // which top-nav tab a view belongs to
  "welcome-view": "welcome",
  "season-view": "season",
  "agri-view": "agri",
  "india-map-view": "india-map",
};

function highlightNavTab(tabKey) {
  document.querySelectorAll(".nav-link").forEach(b => {
    b.classList.toggle("active", b.dataset.nav === tabKey);
  });
}

/* Build a descriptor for the current screen so we can return to it on Back */
function currentDescriptor() {
  return { view: currentView, season: currentSeason, crop: currentCrop ? currentCrop.name : null };
}

/* Show a view WITHOUT pushing history (used by popstate / initial load) */
function showView(id, opts) {
  opts = opts || {};
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const v = document.getElementById(id);
  v.classList.add("active");
  currentView = id;
  if (!opts.keepScroll) {
    /* For the welcome view, start at the top note (part 1) on first entry */
    if (id === "welcome-view") {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  updateCrumb();
  highlightNavTab(NAV_TAB_OF_VIEW[id] || "welcome");
}

/* Navigate to a view AND push a history entry (so Back returns inside the app) */
function navigate(id) {
  /* record where we came from */
  VIEW_HISTORY.push(currentDescriptor());
  showView(id);
  history.pushState({ view: id }, "", location.pathname + location.search);
}

/* popstate = browser Back / Forward: replay the previous app screen */
window.addEventListener("popstate", (e) => {
  const prev = VIEW_HISTORY.pop();
  if (!prev) {
    /* nothing in our stack -> go home rather than leave */
    showView("welcome-view");
    history.pushState({ view: "welcome-view" }, "", location.pathname + location.search);
    return;
  }
  if (prev.view === "crop-detail-view" && prev.season && prev.crop) {
    currentSeason = prev.season;
    const crop = CROPS[prev.season].find(c => c.name === prev.crop);
    if (crop) { currentCrop = crop; renderCropDetail(prev.season, crop); }
    showView("crop-detail-view", { keepScroll: true });
  } else if (prev.view === "crops-view" && prev.season) {
    currentSeason = prev.season; currentCrop = null;
    renderCropsList(prev.season);
    showView("crops-view", { keepScroll: true });
  } else {
    currentSeason = prev.season; currentCrop = null;
    showView(prev.view, { keepScroll: true });
  }
});

function goWelcome() { navigate("welcome-view"); currentSeason = null; currentCrop = null; }
function goSeasons() { navigate("season-view"); currentSeason = null; currentCrop = null; }
function goIndiaMap() { navigate("india-map-view"); currentSeason = null; currentCrop = null; }
function goAgri() { navigate("agri-view"); currentSeason = null; currentCrop = null; }
function goCrops(season) {
  currentSeason = season;
  renderCropsList(season);
  navigate("crops-view");
}
function goCropDetail(season, name) {
  const crop = CROPS[season].find(c => c.name === name);
  if (!crop) return;
  currentSeason = season; currentCrop = crop;
  renderCropDetail(season, crop);
  navigate("crop-detail-view");
}

function updateCrumb() {
  const c = $("#crumb-current");
  let trail = "";
  if (currentCrop) {
    trail = currentCrop.name;
  } else if (currentSeason) {
    trail = SEASON_META[currentSeason].label + " Crops";
  } else {
    const labels = {
      "season-view": "Seasons",
      "india-map-view": "India Crop Map",
      "agri-view": "Agriculture & Festivals",
      "crops-view": "Crops",
      "crop-detail-view": "Crop Detail",
    };
    trail = labels[currentView] || "Home";
  }
  c.textContent = trail;
}

/* ----------  India Map filtering  ---------- */
function filterMap(season) {
  // toggle active button
  document.querySelectorAll(".map-filter").forEach(b => b.classList.remove("active"));
  const btn = document.querySelector(`.map-filter[data-season="${season}"]`);
  if (btn) btn.classList.add("active");

  // highlight zones
  const zones = document.querySelectorAll(".map-zone");
  zones.forEach(z => {
    if (season === "all" || z.dataset.season === season) {
      z.classList.add("show");
    } else {
      z.classList.remove("show");
      z.classList.add("dim");
    }
  });
  // remove dim from shown ones
  zones.forEach(z => { if (z.classList.contains("show")) z.classList.remove("dim"); });

  // update info box
  const info = MAP_INFO[season] || MAP_INFO.all;
  $("#map-info-title").textContent = info.title;
  $("#map-info-text").textContent = info.text;
  $("#map-info-crops").innerHTML = `<strong>Key crops:</strong> ${info.crops}`;
}

/* ----------  Render: Festivals  ---------- */
function renderFestivals() {
  const grid = $("#festival-grid");
  grid.innerHTML = "";
  FESTIVALS.forEach(f => {
    const card = el("div", `festival-card season-${f.season}`);
    card.innerHTML = `
      <div class="festival-icon">${f.icon}</div>
      <div class="festival-body">
        <div class="festival-name">${escapeHtml(f.name)}</div>
        <div class="festival-month">📅 ${escapeHtml(f.month)}</div>
        <div class="festival-desc">${escapeHtml(f.desc)}</div>
        <div class="festival-season ${f.season}">${SEASON_META[f.season].icon} ${SEASON_META[f.season].label} Season</div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ----------  Render: Season select  ---------- */
function renderSeasons() {
  const grid = $("#season-grid");
  grid.innerHTML = "";
  Object.keys(SEASON_META).forEach(key => {
    const m = SEASON_META[key];
    const card = el("div", `season-card ${key}`);
    card.onclick = () => goCrops(key);
    card.innerHTML = `
      <div class="bg" style="background-image:url('${m.bg}')"></div>
      <span class="accent-bar"></span>
      <div class="overlay">
        <div class="icon">${m.icon}</div>
        <h3>${m.label}</h3>
        <div class="meta">${m.tagline} · ${m.month}</div>
        <div class="desc">${m.desc}</div>
        <div class="go">Explore ${CROPS[key].length} crops →</div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ----------  Render: Crops list  ---------- */
function renderCropsList(season) {
  const m = SEASON_META[season];
  const hero = $("#crops-hero");
  hero.querySelector(".bg").style.backgroundImage = `url('${m.bg}')`;
  hero.querySelector(".icon").textContent = m.icon;
  hero.querySelector("h2").textContent = `${m.label} Season Crops`;
  hero.querySelector("p").textContent = `${m.tagline} · ${m.month} · ${CROPS[season].length} crops`;

  $("#crop-search").value = "";
  renderCropCards(season, "");
  // wire search
  $("#crop-search").oninput = (e) => renderCropCards(season, e.target.value.trim().toLowerCase());
}

function renderCropCards(season, query) {
  const grid = $("#crop-grid");
  const list = CROPS[season];
  const filtered = query
    ? list.filter(c =>
        c.name.toLowerCase().includes(query) ||
        (c.hindi || "").toLowerCase().includes(query) ||
        (c.wiki || "").toLowerCase().includes(query) ||
        (c.region || "").toLowerCase().includes(query))
    : list;

  $("#crop-count").textContent = `${filtered.length} crop${filtered.length !== 1 ? "s" : ""}`;

  grid.innerHTML = "";
  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results">😣 No crops match “${escapeHtml(query)}”. Try another name.</div>`;
    return;
  }
  filtered.forEach((crop, i) => {
    const card = el("div", "crop-card");
    card.style.animationDelay = `${Math.min(i * 0.03, 0.5)}s`;
    card.onclick = () => goCropDetail(season, crop.name);
    card.innerHTML = `
      <div class="thumb">
        <img src="${crop.img}" alt="${escapeHtml(crop.name)}" loading="lazy"
             onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\'><rect width=\\'100%25\\' height=\\'100%25\\' fill=\\'%23eef3f0\\'/><text x=\\'50%25\\' y=\\'50%25\\' font-family=\\'sans-serif\\' font-size=\\'22\\' fill=\\'%235a8a72\\' text-anchor=\\'middle\\' dy=\\'.35em\\'>${encodeURIComponent(crop.name)}</text></svg>'">
      </div>
      <div class="body">
        <div class="name">${escapeHtml(crop.name)}</div>
        <div class="hindi-name">${escapeHtml(crop.hindi || "")}</div>
        <div class="sci">${escapeHtml(crop.wiki)}</div>
        <div class="tags">
          <span class="tag rain">🌧️ ${escapeHtml(crop.rain)}</span>
          <span class="tag soil">🪴 ${shortSoil(crop.soil)}</span>
        </div>
        <div class="crop-desc">${escapeHtml(crop.desc)}</div>
        <div class="region-note">📍 ${shortRegion(crop.region)}</div>
        <div class="more">View details →</div>
      </div>`;
    grid.appendChild(card);
  });
}

function shortRegion(r) {
  const parts = r.split(",").map(s => s.trim());
  if (parts.length <= 2) return r;
  return parts.slice(0, 2).join(", ") + " +more";
}

function shortSoil(s) {
  if (!s) return "Loamy soil";
  const head = s.split(";")[0].trim();
  return head.length > 32 ? head.slice(0, 30) + "…" : head;
}

/* ----------  Render: Crop detail  ---------- */
function renderCropDetail(season, crop) {
  const m = SEASON_META[season];
  const hero = $("#detail-hero");
  hero.querySelector(".bg").style.backgroundImage = `url('${crop.img}')`;
  $("#detail-back").onclick = () => goCrops(season);
  $("#detail-name").textContent = crop.name;
  $("#detail-hindi").textContent = crop.hindi || "";
  $("#detail-sci").textContent = crop.wiki;
  $("#detail-season-chip").innerHTML = `${m.icon} ${m.label} Season · ${m.month}`;

  $("#detail-lead").textContent = crop.desc;
  $("#detail-rain").textContent = crop.rain;
  $("#detail-soil").textContent = crop.soil || "Well-drained loamy soil";
  $("#detail-region").textContent = crop.region;
  $("#detail-season-full").innerHTML = `${m.icon} ${m.label} Season<br><span style="font-weight:400;opacity:.8;font-size:.92rem">${m.tagline} (${m.month})</span>`;
  $("#detail-back-bottom").onclick = () => goCrops(season);
}

/* ----------  Background Music  ---------- */
function initMusic() {
  const audio = $("#bg-music");
  const btn = $("#music-toggle");
  let isPlaying = false;

  // Safely call play() — some environments return undefined instead of a Promise
  const safePlay = (onOk, onErr) => {
    let result;
    try { result = audio.play(); } catch (e) { if (onErr) onErr(e); return; }
    if (result && typeof result.then === "function") {
      result.then(onOk || (()=>{})).catch(onErr || (()=>{}));
    } else if (result !== undefined) {
      if (onOk) onOk();
    } else {
      if (onErr) onErr();
    }
  };

  // Try to autoplay (browsers may block; user can toggle)
  const tryPlay = () => {
    safePlay(() => { isPlaying = true; btn.classList.add("playing"); },
             () => { isPlaying = false; btn.classList.remove("playing"); });
  };

  // Attempt autoplay
  tryPlay();

  // On first user click anywhere, try to start music
  const startOnce = () => {
    if (!isPlaying) tryPlay();
    document.removeEventListener("click", startOnce);
  };
  document.addEventListener("click", startOnce);

  // Toggle button
  btn.onclick = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      btn.classList.remove("playing");
    } else {
      safePlay(() => { isPlaying = true; btn.classList.add("playing"); }, () => {});
    }
  };
}

/* ----------  Utilities  ---------- */
function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* ----------  Init  ---------- */
function init() {
  if (typeof CROP_DATA === "undefined") {
    console.error("CROP_DATA not found - ensure assets/data.js is loaded before app.js");
    document.querySelector(".loader p").textContent = "Could not load crop data. Please refresh.";
    return;
  }
  CROPS = CROP_DATA;

  renderSeasons();
  renderFestivals();

  // welcome CTA scrolls down to the three options (part 2)
  $("#welcome-cta").onclick = () => {
    const part2 = document.querySelector(".welcome-part-2");
    if (part2) part2.scrollIntoView({ behavior: "smooth" });
  };
  $("#scroll-hint").onclick = () => {
    const part2 = document.querySelector(".welcome-part-2");
    if (part2) part2.scrollIntoView({ behavior: "smooth" });
  };

  // welcome part-2 option buttons
  $("#opt-season").onclick = () => goSeasons();
  $("#opt-agri").onclick = () => goAgri();
  $("#opt-map").onclick = () => goIndiaMap();

  // top nav tabs (highlight active; switch views in place)
  document.querySelectorAll(".nav-link").forEach(b => {
    b.onclick = () => {
      const nav = b.dataset.nav;
      if (nav === "welcome") goWelcome();
      else if (nav === "season") goSeasons();
      else if (nav === "agri") goAgri();
      else if (nav === "india-map") goIndiaMap();
    };
  });

  // brand logo = home
  $("#home-btn").onclick = () => goWelcome();

  // india map page
  $("#map-back-welcome").onclick = () => goWelcome();
  $("#map-go-seasons").onclick = () => goSeasons();
  document.querySelectorAll(".map-filter").forEach(b => {
    b.onclick = () => filterMap(b.dataset.season);
  });
  document.querySelectorAll(".map-zone").forEach(z => {
    z.onclick = () => filterMap(z.dataset.season);
  });

  // agri page
  $("#agri-back-welcome").onclick = () => goWelcome();
  $("#agri-go-seasons").onclick = () => goSeasons();

  // welcome stats
  $("#stat-crops").textContent = Object.values(CROPS).reduce((a, b) => a + b.length, 0);
  $("#stat-seasons").textContent = Object.keys(CROPS).length;

  // initialize map to show all
  filterMap("all");

  // init background music
  initMusic();

  // seed browser history so the FIRST Back stays inside the app
  history.replaceState({ view: "welcome-view" }, "", location.pathname + location.search);

  // hide loader
  document.querySelector(".loader").classList.add("hide");
  showView("welcome-view");
}

document.addEventListener("DOMContentLoaded", init);
