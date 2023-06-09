async function fetchSchedules() {
	try {
		const bookings = await fetch('/api/schedules');
		return await bookings.json();
	} catch (err) {
		console.log(err);
	}
}

function displayBookings(bookingData) {
	const bookingList = document.getElementById('bookings');
	bookingList.classList.add('booking-list');
	let darkBackground = true;

	bookingData.forEach((booking) => {
		if (booking.student_email) {
			const listItem = document.createElement('li');
			listItem.classList.add('booking-item');
			if (darkBackground) listItem.classList.add('dark-background');
			darkBackground = !darkBackground;
			listItem.textContent = booking.date;
			listItem.dataset.bookingId = booking.id;
			bookingList.appendChild(listItem);
		}
	})
} 

document.addEventListener('DOMContentLoaded', async () => {
	const bookingData = await fetchSchedules();
	const bookingList = document.getElementById('bookings');
	displayBookings(bookingData);

	bookingList.addEventListener('click', (e) => {
		const bookingId = e.target.dataset.bookingId;
		const targetBooking = bookingData[bookingId];

		if (targetBooking) {
			if (!e.target.firstElementChild) {
				const targetListItem = document.querySelector(`[data-booking-id="${bookingId}"]`);
				const ul = document.createElement('ul');
				ul.classList.add('sub-list')
				const li = document.createElement('li');
				let text = `${'name'} | ${targetBooking.student_email} | ${targetBooking.time}`
				li.textContent = text;
				ul.appendChild(li);
				e.target.appendChild(ul);
			} else {
				e.target.removeChild(e.target.firstElementChild);
			}
		}
	});
})