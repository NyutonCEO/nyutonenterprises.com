(function () {
  const grid = document.getElementById("gallery");
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCap = document.getElementById("lbCap");
  const btnClose = document.getElementById("lbClose");
  const btnPrev = document.getElementById("lbPrev");
  const btnNext = document.getElementById("lbNext");

  // Build grid
  GALLERY_ITEMS.forEach((item, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.src;
    a.dataset.index = i;
    a.setAttribute("aria-label", `Open image ${i+1}`);
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = item.alt || "";
    img.src = item.thumb || item.src;
    const cap = document.createElement("div");
    cap.className = "caption";
    cap.textContent = item.caption || "";
    a.appendChild(img);
    li.appendChild(a);
    if (item.caption) li.appendChild(cap);
    grid.appendChild(li);
  });

  let current = 0;

  function open(index) {
    current = index;
    const item = GALLERY_ITEMS[current];
    lbImg.src = item.src;
    lbImg.alt = item.alt || "";
    lbCap.textContent = item.caption || "";
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    btnClose.focus();
  }

  function close() {
    lb.setAttribute("aria-hidden", "true");
    lbImg.removeAttribute("src");
    document.body.style.overflow = "";
  }

  function prev() {
    current = (current - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    open(current);
  }

  function next() {
    current = (current + 1) % GALLERY_ITEMS.length;
    open(current);
  }

  // Grid click
  grid.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    e.preventDefault();
    open(Number(a.dataset.index));
  });

  // Lightbox controls
  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", prev);
  btnNext.addEventListener("click", next);

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    const openState = lb.getAttribute("aria-hidden") === "false";
    if (!openState) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });

  // Close when clicking backdrop
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });
})();
