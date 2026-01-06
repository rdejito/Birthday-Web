// Envelope click to reveal letter
window.addEventListener('DOMContentLoaded', function() {
    var envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.addEventListener('click', function() {
            envelope.classList.toggle('open');
        });
    }
});


document.querySelectorAll('.heart img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('rotate');
    })
})