const container = document.getElementById('scheduleContainer');
const statusBox = document.getElementById('status');
const select = document.getElementById('scheduleSelect');

// JSON filenames
const schedules = ['wyattSchedule.json', 'hank.json', 'anthony.json', 'James.json'];

async function loadSchedule(fileName) {
  try {
    container.innerHTML = "";

    // Fetch the schedules
    const response = await fetch(`./json/${fileName}`);
    if (!response.ok) throw new Error("Failed to load schedule.");

    const data = await response.json();
    statusBox.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      const course = data[i];
      const html = `
        <div class="col-md-4 mb-3">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${course.className}</h5>
              <p class="card-text">
                <strong>Period:</strong> ${course.period}<br>
                <strong>Teacher:</strong> ${course.teacher}<br>
                <strong>Room:</strong> ${course.roomNumber}<br>
                <strong>Subject:</strong> ${course.subjectArea}
              </p>
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', html);
    }

  } catch (err) {
    statusBox.innerHTML = `<div class="alert alert-danger">Error: ${err.message}</div>`;
  }
}


// Switch schedules using the dropdown’s index
select.addEventListener('change', () => {
  const index = select.selectedIndex;
  loadSchedule(schedules[index]);
});

// Load Schedule
window.addEventListener('DOMContentLoaded', () => {
  loadSchedule(schedules[0]);
});
