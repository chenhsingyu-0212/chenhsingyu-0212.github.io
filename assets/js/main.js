// ============================================================
//  Hsing-Yu — theme interactions
//  loader · scroll reveal · nav shadow · theme toggle · cat
// ============================================================
(function () {
  var root = document.documentElement;

  // ---- Loader (hide once DOM is ready; do NOT wait on external resources) ----
  (function () {
    var l = document.getElementById("loader");
    if (!l) return;
    var hide = function () { l.classList.add("done"); };
    setTimeout(hide, 500);              // main.js is deferred, so the DOM is ready here
    window.addEventListener("load", hide);
  })();

  // ---- Scroll reveal (staggered within a group) ----
  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) {
          return c.classList.contains("rv");
        });
        el.style.transitionDelay = (sibs.indexOf(el) * 70) + "ms";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.14 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }
  // hero reveals shortly after loader fades
  setTimeout(function () {
    document.querySelectorAll(".hero .rv").forEach(function (el, i) {
      el.style.transitionDelay = (i * 90) + "ms";
      el.classList.add("in");
    });
  }, 780);

  // ---- Nav shadow on scroll ----
  var nav = document.querySelector("nav.site");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---- Mobile menu: hamburger toggles the nav-links dropdown ----
  var navToggle = document.getElementById("navToggle");
  if (nav && navToggle) {
    var closeMenu = function () {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // tapping a link, clicking outside, or Escape all close the menu
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !nav.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  // ---- Theme toggle: day/night checkbox (persisted; FOUC guard in theme-init) ----
  var themeToggle = document.getElementById("themeToggle");
  function current() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
  }
  function applyTheme(next) {
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  }
  // checked = day / light
  if (themeToggle) themeToggle.checked = (current() === "light");
  var themeLoader = document.getElementById("themeLoader");
  var switching = false;
  if (themeToggle) themeToggle.addEventListener("change", function () {
    if (switching) { themeToggle.checked = (current() === "light"); return; }
    var next = themeToggle.checked ? "light" : "dark";
    var noAnim = !themeLoader ||
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches);
    if (noAnim) { applyTheme(next); return; }
    switching = true;
    // overlay paints the TARGET theme's colour so the swap stays hidden
    themeLoader.classList.remove("to-dark", "to-light");
    themeLoader.classList.add(next === "dark" ? "to-dark" : "to-light");
    themeLoader.classList.add("show");
    themeLoader.setAttribute("aria-hidden", "false");
    // swap the theme fully covered, then fade out onto the new theme
    setTimeout(function () { applyTheme(next); }, 520);
    setTimeout(function () {
      themeLoader.classList.remove("show");
      themeLoader.setAttribute("aria-hidden", "true");
      switching = false;
    }, 1080);
  });

  // ---- Group About/Beyond prose into background section cards ----
  document.querySelectorAll(".sectioned .prose").forEach(function (prose) {
    var kids = Array.prototype.slice.call(prose.children), sec = null;
    kids.forEach(function (node) {
      var isHead = node.tagName === "H2" || node.tagName === "H3";
      if (isHead || !sec) {
        sec = document.createElement("div");
        sec.className = "prose-sec";
        prose.insertBefore(sec, node);
      }
      sec.appendChild(node);
    });
  });

  // ---- Copy button helper ----
  var COPY_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var CHECK_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  function makeCopyBtn(getText) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "copy-btn"; b.innerHTML = COPY_ICON;
    b.setAttribute("aria-label", "Copy code"); b.title = "Copy";
    b.addEventListener("click", function () {
      var text = getText() || "";
      var done = function () {
        b.innerHTML = CHECK_ICON; b.classList.add("done"); b.title = "Copied!";
        setTimeout(function () { b.innerHTML = COPY_ICON; b.classList.remove("done"); b.title = "Copy"; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      } else {
        var ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (e) {}
        ta.remove();
      }
    });
    return b;
  }

  // standalone code blocks (not inside code tabs)
  document.querySelectorAll(".prose .highlight").forEach(function (hl) {
    if (hl.closest(".code-tabs")) return;
    var code = hl.querySelector("code");
    if (!code) return;
    hl.appendChild(makeCopyBtn(function () { return code.innerText; }));
  });

  // ---- Code tabs (build a tab bar from .code-tabs > .tab-panel[data-title]) ----
  document.querySelectorAll(".code-tabs").forEach(function (box) {
    var panels = box.querySelectorAll(".tab-panel");
    if (!panels.length) return;
    box.classList.add("tabbed");
    var bar = document.createElement("div");
    bar.className = "tab-bar";
    var btns = [];
    panels.forEach(function (p, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tab-btn";
      btn.textContent = p.getAttribute("data-title") || ("Tab " + (idx + 1));
      btn.addEventListener("click", function () {
        panels.forEach(function (x) { x.classList.remove("active"); });
        btns.forEach(function (b) { b.classList.remove("active"); });
        p.classList.add("active"); btn.classList.add("active");
      });
      btns.push(btn); bar.appendChild(btn);
    });
    bar.appendChild(makeCopyBtn(function () {
      var active = box.querySelector(".tab-panel.active code") || box.querySelector(".tab-panel.active");
      return active ? active.innerText : "";
    }));
    box.insertBefore(bar, box.firstChild);
    panels[0].classList.add("active"); btns[0].classList.add("active");
  });

  // ---- Category cards: clamp pills to 2 rows, trailing "…" when they overflow ----
  (function () {
    function lineCount(box) {
      var tops = [];
      for (var i = 0; i < box.children.length; i++) {
        var t = box.children[i].offsetTop;
        if (tops.indexOf(t) < 0) tops.push(t);
      }
      return tops.length;
    }
    function clamp(box) {
      if (lineCount(box) <= 2) return;
      var ell = document.createElement("span");
      ell.className = "cat-pill more";
      ell.textContent = "…";
      box.appendChild(ell);
      while (lineCount(box) > 2 && ell.previousElementSibling) {
        box.removeChild(ell.previousElementSibling);
      }
    }
    function run() { document.querySelectorAll(".cat-pills").forEach(clamp); }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run); else run();
  })();

  // ---- Posts list: client-side pagination, fixed 20 per page ----
  (function () {
    var list = document.getElementById("postlist");
    if (!list) return;
    var rows = Array.prototype.slice.call(list.querySelectorAll(".post"));
    var SIZE = 20;
    if (rows.length <= SIZE) return;              // nothing to paginate
    var tools = document.getElementById("postTools");
    var info = document.getElementById("ppInfo");
    var pager = document.getElementById("postPager");
    var pc = Math.ceil(rows.length / SIZE);
    var page = 1, first = true;
    if (tools) tools.hidden = false;

    function render() {
      var start = (page - 1) * SIZE, end = start + SIZE;
      rows.forEach(function (r, i) {
        var vis = i >= start && i < end;
        r.style.display = vis ? "" : "none";
        if (vis && !first) r.classList.add("in"); // paged-in rows appear immediately
      });
      if (info) info.textContent = (start + 1) + "–" + Math.min(end, rows.length) + " / " + rows.length;
      buildPager();
      first = false;
    }

    function go(p) {
      page = Math.min(Math.max(1, p), pc);
      render();
      var top = list.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: top, behavior: "smooth" });
    }

    function buildPager() {
      if (!pager) return;
      pager.textContent = "";
      if (pc <= 1) return;
      var frag = document.createDocumentFragment(), win = 2;
      function add(label, p, kind) {
        var el;
        if (kind === "cur") { el = document.createElement("span"); el.className = "cur"; }
        else if (kind === "gap") { el = document.createElement("span"); el.className = "gap"; }
        else { el = document.createElement("a"); el.href = "#"; el.addEventListener("click", function (e) { e.preventDefault(); go(p); }); }
        el.textContent = label;
        frag.appendChild(el);
      }
      if (page > 1) add("←", page - 1);
      for (var n = 1; n <= pc; n++) {
        if (n === 1 || n === pc || Math.abs(n - page) <= win) add(String(n), n, n === page ? "cur" : "");
        else if (n === page - win - 1 || n === page + win + 1) add("…", 0, "gap");
      }
      if (page < pc) add("→", page + 1);
      pager.appendChild(frag);
    }

    render();
  })();

  // ---- Companion cats: hop + heart + a random line on hover/click ----
  (function () {
    var cats = document.getElementById("cats");
    var bubble = cats ? cats.querySelector(".c-bubble") : null;
    var LINES = ["meow?", "mrrp!", "zoomies!!", "feed me, human", "nap o'clock",
      "the red dot!", "purr purr", "hehe", "is it dinner yet",
      "We are the dreamers. We make it happen 'cause we can see it.", "謝謝你來，謝謝你還在"];
    var idx = 0;
    function say() { if (bubble) bubble.textContent = LINES[(idx++) % LINES.length]; }
    say();
    if (cats) cats.addEventListener("mouseenter", say);
    document.querySelectorAll(".kat").forEach(function (kat) {
      kat.addEventListener("click", function (e) {
        kat.classList.remove("hop"); void kat.offsetWidth; kat.classList.add("hop");
        say();
        var h = document.createElement("div");
        h.className = "heart"; h.textContent = "♥";
        h.style.left = (e.clientX - 6) + "px"; h.style.top = (e.clientY - 10) + "px";
        document.body.appendChild(h);
        setTimeout(function () { h.remove(); }, 1000);
      });
    });
  })();

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  // ---- Hero eyebrow: typewriter rotating research topics ----
  (function () {
    var el = document.getElementById("heroTw");
    if (!el || reduce) return;
    var words = ["Game AI", "Reinforcement Learning", "AlphaZero & MCTS", "Wall Go · Mahjong · Werewolf"];
    var i = 0, ch = 0, del = false;
    el.textContent = "";
    function step() {
      var w = words[i];
      el.textContent = w.substring(0, ch);
      if (!del) { ch++; if (ch > w.length) { del = true; setTimeout(step, 1600); return; } }
      else { ch--; if (ch === 0) { del = false; i = (i + 1) % words.length; } }
      setTimeout(step, del ? 42 : 82);
    }
    step();
  })();

  // ---- Hero name: layered copies that parallax-echo with the cursor ----
  (function () {
    var wrap = document.getElementById("trippyName");
    if (!wrap || reduce) return;
    var copies = wrap.querySelectorAll(".tr-copy");
    var tx = 0, ty = 0, lx = 0, ly = 0, tracking = false;
    function centerXY() {
      var r = wrap.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    document.addEventListener("mousemove", function (e) {
      tracking = true;
      var c = centerXY();
      tx = c.x - e.clientX;
      ty = c.y - e.clientY;
    }, { passive: true });
    function frame(t) {
      if (!tracking) { tx = Math.sin(t / 950) * window.innerWidth * 0.22; ty = Math.cos(t / 950) * 40; }
      lx += (tx - lx) * 0.14;
      ly += (ty - ly) * 0.14;
      for (var i = 0; i < copies.length; i++) {
        var n = i + 1;
        var y = (n * ly * 0.02).toFixed(2);
        var z = n * -11;
        var r = (n * 1.7 * (lx * 0.0016)).toFixed(2);
        copies[i].style.transform = "perspective(500px) translate3d(0," + y + "px," + z + "px) rotate(" + r + "deg) skew(" + r + "deg)";
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  })();

  // ---- Project cards: 3D tilt + cursor-follow glow ----
  if (!reduce) {
    document.querySelectorAll(".grid .card").forEach(function (c) {
      c.addEventListener("mousemove", function (e) {
        var r = c.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        c.style.transform = "rotateX(" + ((0.5 - py) * 8).toFixed(2) +
          "deg) rotateY(" + ((px - 0.5) * 8).toFixed(2) + "deg)";
        c.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        c.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      });
      c.addEventListener("mouseleave", function () { c.style.transform = ""; });
    });
  }

  // ---- Divider: rotating little-cat scenes ----
  (function () {
    var stage = document.getElementById("hrStage");
    if (!stage) return;
    var CAT = '<svg viewBox="0 0 48 24" width="34" height="17">' +
      '<path class="ct-tail" d="M13,14 C9,11 8,4 12,1" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="25" cy="13" rx="12" ry="5.5" fill="currentColor"/><circle cx="38" cy="10" r="5" fill="currentColor"/>' +
      '<path d="M33,6 L33,0.5 L38,4 Z" fill="currentColor"/><path d="M39,4 L42,-0.5 L43.5,6 Z" fill="currentColor"/>' +
      '<line class="ct-leg a" x1="19" y1="16" x2="19" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
      '<line class="ct-leg b" x1="23" y1="16" x2="23" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
      '<line class="ct-leg b" x1="30" y1="16" x2="30" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
      '<line class="ct-leg a" x1="33" y1="16" x2="33" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';
    var YARN = '<svg viewBox="0 0 20 20" width="15" height="15"><circle cx="10" cy="10" r="8" fill="#d98a9a"/>' +
      '<g stroke="#a85668" stroke-width="1" fill="none" opacity=".75"><path d="M3,7 Q10,13 17,7"/><path d="M3,13 Q10,7 17,13"/>' +
      '<path d="M7,3 Q13,10 7,17"/><path d="M13,3 Q7,10 13,17"/></g></svg>';
    var BOX = '<svg viewBox="0 0 42 30" width="21" height="15">' +
      '<path d="M6,11 L36,11 L33,28 L9,28 Z" fill="#c69f68"/>' +
      '<path d="M6,11 L2,5 L26,5 L36,11 Z" fill="#b1854f"/>' +
      '<path d="M36,11 L40,5 L16,5 L6,11 Z" fill="#dcb87f"/></svg>';
    var COL = ["#41597a", "#c9824a", "#7d8590", "#b1663c", "#556b8d"];
    var RCAT = '<svg class="rcat" viewBox="0 0 48 24" width="40" height="20">' +
      '<path class="tail" d="M13,14 C9,11 8,4 12,1" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="25" cy="13" rx="12" ry="5.5" fill="currentColor"/><circle cx="38" cy="10" r="5" fill="currentColor"/>' +
      '<path d="M33,6 L33,0.5 L38,4 Z" fill="currentColor"/><path d="M39,4 L42,-0.5 L43.5,6 Z" fill="currentColor"/>' +
      '<line class="leg a" x1="19" y1="16" x2="19" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
      '<line class="leg b" x1="23" y1="16" x2="23" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
      '<line class="leg b" x1="30" y1="16" x2="30" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
      '<line class="leg a" x1="33" y1="16" x2="33" y2="23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';
    var YARN2 = '<svg class="yarn" viewBox="0 0 20 20" width="16" height="16"><circle cx="10" cy="10" r="8" fill="#d98a9a"/>' +
      '<g stroke="#a85668" stroke-width="1" fill="none" opacity=".75"><path d="M3,7 Q10,13 17,7"/><path d="M3,13 Q10,7 17,13"/>' +
      '<path d="M7,3 Q13,10 7,17"/><path d="M13,3 Q7,10 13,17"/></g></svg>';
    function cat(c) { var s = document.createElement("span"); s.className = "hcat"; s.style.color = c; s.innerHTML = CAT; return s; }
    function movew(dir, dur) {
      var m = document.createElement("div"); m.className = "hr-move " + dir;
      m.style.animation = "hmove" + (dir === "lr" ? "LR" : "RL") + " " + dur + "ms linear forwards"; return m;
    }
    function convoy(n, dir, yarn) {
      var dur = 9000 + n * 1300, m = movew(dir, dur), i;
      for (i = 0; i < n; i++) m.appendChild(cat(COL[i % COL.length]));
      if (yarn) { var y = document.createElement("span"); y.className = "hyarn"; y.innerHTML = YARN; m.appendChild(y); }
      stage.appendChild(m); return dur + 700;
    }
    function boxScene() {
      var dur = 9200;
      var b = document.createElement("span"); b.className = "hbox wig"; b.style.setProperty("--d", dur + "ms"); b.innerHTML = BOX;
      stage.appendChild(b);
      var m = movew("lr", dur), c = cat(COL[1]); c.classList.add("hop"); c.style.setProperty("--d", dur + "ms");
      m.appendChild(c); stage.appendChild(m); return dur + 700;
    }
    function sceneYarn() {
      stage.innerHTML = '<span class="runner"><span class="catwrap">' + RCAT + '</span></span><span class="yarnwrap">' + YARN2 + '</span>';
      return 15600;
    }
    var scenes = [
      function () { return sceneYarn(); },
      function () { return convoy(2, "lr", false); },
      function () { return convoy(3, "rl", false); },
      function () { return boxScene(); },
      function () { return convoy(1, "rl", false); }
    ];
    if (reduce) { var m = document.createElement("div"); m.className = "hr-move"; m.style.left = "46%"; m.appendChild(cat(COL[0])); stage.appendChild(m); return; }
    var idx = 0;
    function next() { stage.innerHTML = ""; var wait = scenes[idx % scenes.length](); idx++; setTimeout(next, wait); }
    next();
  })();
})();
