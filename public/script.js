



document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Reset all active states
        document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
            activeQuestion.classList.remove('active');
            activeQuestion.nextElementSibling.classList.remove('show');
        });

        // Toggle the clicked FAQ
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('show');
        }
    });
});


