// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu du di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// kirim pesan ke WhatsApp
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const hp = document.getElementById("hp").value;

    const noAdmin = "6285964218083";
    const pesan =
      `Halo Admin Banana Chips 👋%0A%0A` +
      `Nama: ${nama}%0A` +
      `Alamat: ${alamat}%0A` +
      `No HP: ${hp}%0A%0A` +
      `Saya ingin melakukan pemesanan keripik pisang.`;

    const url = `https://wa.me/${noAdmin}?text=${pesan}`;
    window.open(url, "_blank");
  });
