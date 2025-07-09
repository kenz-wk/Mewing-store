
function sendToWhatsApp() {
  const game = document.getElementById("game").value;
  const id = document.getElementById("id").value;
  const jumlah = document.getElementById("jumlah").value;
  const pembayaran = document.getElementById("pembayaran").value;

  const pesan = `Halo Admin MEWING STORE,%0ASaya ingin top up:%0A
  Game: ${game}%0A
  ID Pemain: ${id}%0A
  Jumlah: ${jumlah} Diamonds%0A
  Pembayaran: ${pembayaran}`;

  const noAdmin = "6281234567890";
  window.open(`https://wa.me/${noAdmin}?text=${pesan}`, "_blank");
}
