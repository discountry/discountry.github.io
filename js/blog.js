/* Yubolun's DEV Blog — 原生 JS，无依赖
   功能：导航搜索过滤（首页）/ "/" 快捷键聚焦 / 阅读进度条 /
   返回顶部 / 代码块复制按钮 */

(function () {
  "use strict";

  var searchInput = document.querySelector(".nav-search input");
  var archive = document.querySelector("[data-archive]");

  /* ---------- 搜索 ---------- */

  function applyFilter(q) {
    if (!archive) return;
    q = q.trim().toLowerCase();
    document.body.classList.toggle("is-filtering", q.length > 0);

    var rows = archive.querySelectorAll(".post-row");
    var anyVisible = false;

    rows.forEach(function (row) {
      var hay = (row.getAttribute("data-search") || row.textContent).toLowerCase();
      var hit = q === "" || hay.indexOf(q) !== -1;
      row.classList.toggle("hidden", !hit);
      if (hit) anyVisible = true;
    });

    /* 隐藏没有可见文章的年份标题 */
    archive.querySelectorAll(".archive-year").forEach(function (yearEl) {
      var el = yearEl.nextElementSibling; /* ul.post-list */
      var visible = el && el.querySelector(".post-row:not(.hidden)");
      yearEl.classList.toggle("hidden", !visible);
    });

    var empty = archive.querySelector(".list-empty");
    if (empty) empty.style.display = q && !anyVisible ? "block" : "none";
  }

  if (searchInput) {
    if (archive) {
      /* 首页：即时过滤；支持 ?q= 进入 */
      var params = new URLSearchParams(location.search);
      var initial = params.get("q") || "";
      if (initial) {
        searchInput.value = initial;
        applyFilter(initial);
      }
      searchInput.addEventListener("input", function () {
        applyFilter(searchInput.value);
      });
      searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          searchInput.value = "";
          applyFilter("");
          searchInput.blur();
        }
      });
    } else {
      /* 其他页：回车跳转首页搜索 */
      searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && searchInput.value.trim()) {
          var base = searchInput.getAttribute("data-home") || "/";
          location.href = base + "?q=" + encodeURIComponent(searchInput.value.trim());
        }
      });
    }

    /* "/" 聚焦搜索 */
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== searchInput &&
          !/input|textarea/i.test(document.activeElement.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  /* ---------- 阅读进度条（文章页） ---------- */

  var progress = document.querySelector(".read-progress");
  if (progress) {
    var onScroll = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var pct = max > 0 ? (doc.scrollTop || document.body.scrollTop) / max : 0;
      progress.style.width = (pct * 100).toFixed(2) + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 返回顶部 ---------- */

  var toTop = document.querySelector(".to-top");
  if (toTop) {
    document.addEventListener("scroll", function () {
      var y = document.documentElement.scrollTop || document.body.scrollTop;
      toTop.classList.toggle("show", y > 600);
    }, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 代码块复制 ---------- */

  document.querySelectorAll(".prose pre").forEach(function (pre) {
    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.textContent = "copy";
    btn.addEventListener("click", function () {
      var code = pre.querySelector("code");
      var text = code ? code.textContent : pre.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = "copied";
        setTimeout(function () { btn.textContent = "copy"; }, 1600);
      });
    });
    pre.appendChild(btn);
  });
})();
