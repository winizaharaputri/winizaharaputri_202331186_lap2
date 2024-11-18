// Function to toggle content visibility
function toggleContent(id) {
    const content = document.getElementById(id);
    const confirmHide = confirm("Apakah Anda ingin menyembunyikan konten dari bagian ini?");
    if (confirmHide) {
        content.classList.toggle("hidden");
    }
}

// Function to toggle display modes
function toggleMode() {
    document.body.classList.toggle("messy-mode");
}
