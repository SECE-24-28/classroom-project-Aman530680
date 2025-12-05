const form = document.getElementById('feedbackForm');
const outputDiv = document.getElementById('output');
const ratingInput = document.getElementById('rating');
const ratingValueSpan = document.getElementById('ratingValue');

ratingValueSpan.textContent = ratingInput.value;

ratingInput.addEventListener('input', () => {
    ratingValueSpan.textContent = ratingInput.value;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;

    if (!name || !course || !feedback) {
        return;
    }

    const card = document.createElement('div');
    card.classList.add('feedback-card');
    
    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Rating:</strong> ${rating} / 5</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;
    outputDiv.appendChild(card);
    form.reset();
    ratingInput.value = 3;
    ratingValueSpan.textContent = 3;
    
});
