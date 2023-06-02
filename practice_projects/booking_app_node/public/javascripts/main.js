async function allSchedules() {
	const response = await fetch('http://localhost:3000/api/schedules');
	const json = await response.json();
	return json;
}

document.addEventListener('DOMContentLoaded', async () => {
	try {
		const schedules = await allSchedules()
		console.log(schedules)
	} catch (err) {
		console.log(`Error: ${err}`);
	}
});