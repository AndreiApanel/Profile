const firstButton = document.getElementById('btn');
const popup = document.querySelector('.pop-up');
const closeButton = document.getElementById('close');

firstButton.addEventListener('click', () => {
	popup.classList.toggle('hidden')
})
popup.addEventListener('click', (event) => {
	if (event.target.classList.contains('pop-up')) {
		popup.classList.toggle('hidden')
	}
})
closeButton.addEventListener('click', () => {
	popup.classList.toggle('hidden')
})