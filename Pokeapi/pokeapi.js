// ── Datos de muestra ────────────────────────────────────────
const data = {
  charmander: {
    num: "#004",
    name: "Charmander",
    img: 4,
    types: [{ label: "Fuego", cls: "t-fire" }],
    bg: "t-fire",
  },
  charmeleon: {
    num: "#005",
    name: "Charmeleon",
    img: 5,
    types: [{ label: "Fuego", cls: "t-fire" }],
    bg: "t-fire",
  },
  charizard: {
    num: "#006",
    name: "Charizard",
    img: 6,
    types: [
      { label: "Fuego", cls: "t-fire" },
      { label: "Volador", cls: "t-flying" },
    ],
    bg: "t-fire",
  },
};

const openModal = (key) => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const p = data[key];
  document.getElementById("modal-name").textContent = p.name;
  document.querySelector(".modal .num").textContent = p.num;
  document.getElementById("modal-img").src =
    `${url}other/official-artwork/${p.img}.png`;
  document.getElementById("modal-img").onerror = () =>
    (this.src = `${url}${p.img}.png`);

  const bg = document.getElementById("modal-bg");
  bg.className = "modal-header-bg " + p.bg;

  const types = document.getElementById("modal-types");
  types.innerHTML = p.types
    .map((t) => `<span class="type-tag ${t.cls}">${t.label}</span>`)
    .join("");
  // Reset tabs
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".tab")[0].classList.add("active");
  ["stats", "info", "moves"].forEach(
    (t, i) =>
      (document.getElementById("tab-" + t).style.display =
        i === 0 ? "block" : "none"),
  );
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
};

const closeOnOverlay = (e) => {
  if (e.target === document.getElementById("modal")) closeModal();
};

const switchTab = (el, name) => {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  ["stats", "info", "moves"].forEach(
    (t) =>
      (document.getElementById("tab-" + t).style.display =
        t === name ? "block" : "none"),
  );
};
