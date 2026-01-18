function openModal(image) {
    const modal = document.getElementById("lightbox");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "block";
    modalImg.src = image.src;
}

function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}