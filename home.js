// LinkEffekt homepage: a pin matrix for the routes, one shared beat.
// Everything readable is plain HTML; without this script all setups are listed.
(function () {
  const matrix = document.getElementById("matrix");
  if (!matrix) return;

  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const BEAT_MS = 500; // 120 BPM

  const DEVICES = [["gear", "Controllers"], ["iphone", "iPhone"], ["ipad", "iPad"], ["live", "Ableton Live"], ["online", "Friend online"]];

  // Each pin: [from, to].
  const ROUTES = {
    jam: [["iphone", "ipad"], ["ipad", "iphone"]],
    live: [["ipad", "live"]],
    back: [["live", "ipad"]],
    apps: [["ipad", "ipad"]],
    online: [["ipad", "online"], ["online", "ipad"]],
    midi: [["gear", "iphone"], ["gear", "ipad"], ["gear", "live"]],
    clock: [["live", "gear"]],
  };

  const routeOf = {};
  for (const name in ROUTES) ROUTES[name].forEach(([a, b]) => { routeOf[a + ">" + b] = routeOf[a + ">" + b] || name; });

  const make = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  };

  const cols = {}, rows = {}, pins = {};

  // Header: "To" in front of the column names, then "From" above the row names.
  matrix.append(make("span", "m-axis m-to", "To"));
  DEVICES.forEach(([id, label]) => { cols[id] = matrix.appendChild(make("span", "m-col", label)); });
  matrix.append(make("span", "m-axis m-from", "From"), make("span", "m-fill"));
  DEVICES.forEach(([from, label], r) => {
    rows[from] = matrix.appendChild(make("span", "m-row", label));
    DEVICES.forEach(([to], c) => {
      const name = routeOf[from + ">" + to];
      const pin = make(name ? "button" : "span", "pin");
      pin.style.setProperty("--r", r);
      pin.style.setProperty("--c", c);
      if (name) {
        pin.type = "button";
        pin.tabIndex = -1; // the setup list is the keyboard path
        pin.addEventListener("click", () => patch(name));
      }
      pin.appendChild(make("i"));
      pins[from + ">" + to] = matrix.appendChild(pin);
    });
  });

  function patch(name) {
    const on = new Set(ROUTES[name].map(([a, b]) => a + ">" + b));
    const from = new Set(ROUTES[name].map((p) => p[0])), to = new Set(ROUTES[name].map((p) => p[1]));
    for (const key in pins) {
      const [a, b] = key.split(">");
      pins[key].classList.toggle("on", on.has(key));
      pins[key].classList.toggle("row-on", from.has(a));
      pins[key].classList.toggle("col-on", to.has(b));
    }
    for (const id in rows) rows[id].classList.toggle("on", from.has(id));
    for (const id in cols) cols[id].classList.toggle("on", to.has(id));
    document.querySelectorAll(".strip").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.route === name)));
    document.querySelectorAll(".notes p").forEach((p) => p.classList.toggle("active", p.dataset.route === name));
  }

  document.querySelectorAll(".strip").forEach((b) => {
    b.addEventListener("click", () => patch(b.dataset.route));
  });

  patch("jam");

  if (still) return;

  // The level meters in the two hero screenshots move together: what the iPhone
  // sends is what the iPad plays. Drawn over the real screenshots, which stay
  // untouched for anyone who prefers no motion.
  const meters = [];
  (function () {
    const stage = document.querySelector(".devices");
    if (!stage) return;
    const vu = (cls, host) => {
      const m = make("i", "vu " + cls);
      m.append(make("b"), make("b"));
      host.appendChild(m);
      meters.push(...m.children);
    };
    const phone = stage.querySelector(".d-iphone");
    const wrap = make("span", "d-iphone");
    phone.replaceWith(wrap);
    phone.className = "";
    wrap.appendChild(phone);
    vu("vu-iphone", wrap);
    vu("vu-ipad", stage);
  })();

  function level(beat) {
    const p = beat % 1, off = (beat + 0.5) % 1;
    return 0.2 + 0.62 * Math.max(Math.exp(-4.2 * p), 0.5 * Math.exp(-7 * off));
  }

  // The pins and the beat lanes further down tap the same clock.
  const lanes = [...document.querySelectorAll("[data-lane]")].map((lane) => [...lane.querySelectorAll(".pad")]);
  let lastBeat = -1;

  function tick(now) {
    const l = level(now / BEAT_MS);
    meters.forEach((m, i) => m.style.setProperty("--l", (i % 2 ? l * 0.96 : l).toFixed(3)));
    const whole = Math.floor(now / BEAT_MS);
    if (whole !== lastBeat) {
      lastBeat = whole;
      matrix.querySelectorAll(".pin.on i").forEach((dot) => {
        dot.animate([{ transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 380, easing: "cubic-bezier(.16, 1, .3, 1)" });
      });
      const step = whole % 8;
      lanes.forEach((pads) => pads.forEach((p, n) => p.classList.toggle("now", n === step)));
    }
    raf = requestAnimationFrame(tick);
  }

  let raf = 0;
  function run() {
    const go = !document.hidden;
    if (go && !raf) raf = requestAnimationFrame(tick);
    if (!go && raf) { cancelAnimationFrame(raf); raf = 0; }
  }
  document.addEventListener("visibilitychange", run);
  run();
})();
