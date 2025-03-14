const calendarDays = document.getElementById('calendarDays');
const currentMonthElement = document.getElementById('currentMonth');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar() {
  // Clear existing days
  calendarDays.innerHTML = '';

  // Set the current month and year
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  currentMonthElement.textContent = `${month} ${year}`;

  // Get the first day of the month and the total days in the month
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const totalDays = lastDay.getDate();
  const startDay = firstDay.getDay();

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startDay; i++) {
    const emptyDay = document.createElement('div');
    calendarDays.appendChild(emptyDay);
  }

  // Add days of the month
  for (let i = 1; i <= totalDays; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    day.classList.add('text-center', 'py-2', 'rounded-full', 'hover:bg-gray-700', 'cursor-pointer');

    // Highlight the current day
    if (i === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
      day.classList.add('bg-blue-500', 'text-white');
    }

    calendarDays.appendChild(day);
  }
}

// Event listeners for previous and next month buttons
prevMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();