const eliminarBtn = document.getElementById("eliminarBtn");
const modal = document.getElementById("modal");
const confirmarBtn = document.getElementById("confirmarBtn");
const cancelarBtn = document.getElementById("cancelarBtn");

eliminarBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

confirmarBtn.addEventListener("click", () => {
  modal.style.display = "none";
  alert("✅ Producto eliminado exitosamente.");
});

cancelarBtn.addEventListener("click", () => {
  modal.style.display = "none";
  alert("❌ Operación cancelada. El producto sigue en tu carrito.");
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
