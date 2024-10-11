const todayBtn = getId('today-btn'); // Fetch the button element

todayBtn.addEventListener('click', function () {
    const dashBoard = getId('dashboard-section');
    dashBoard.classList.add('hidden'); // Hide the dashboard section

    const todaySection = getId('today-section');
    todaySection.classList.remove('hidden'); // Show today's section
});
