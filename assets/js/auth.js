// Show hint bubble when hint-btn is clicked
document.getElementById('hint-btn').addEventListener('click', function() {
	const hint = document.getElementById('hint-bubble');
	if (hint.style.display === 'none') {
		hint.style.display = 'block';
	} else {
		hint.style.display = 'none';
	}
});
document.getElementById('enter-btn').addEventListener('click', function() {
	const inputField = document.getElementById('secret-input');
	const input = inputField.value.trim();
	inputField.value = '';
	if (input === 'babycake') {
		window.location.href = 'pages/poster.html';
	} else {
		alert('Incorrect code!');
	}
});

// Clear input on page load
window.addEventListener('DOMContentLoaded', function() {
	const inputField = document.getElementById('secret-input');
	if (inputField) inputField.value = '';
});
