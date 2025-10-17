
fetch("wyattSchedule.json")
	.then(response => response.json())
	.then(document.getElementById("out").innerhtml= `
<h2>${data.name}<h2>
<p>Role: ${data.role}</p>`
)
catch (error => document.getElementByID("out").textContent("Error.")
