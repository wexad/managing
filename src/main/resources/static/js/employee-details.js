document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const apiURL = `http://localhost:8080/api/employees/${id}`;
    const employeeDetailsDiv = document.querySelector('#employeeDetails');
    const updateForm = document.querySelector('#updateForm');

    // Fetch employee details
    fetch(apiURL)
        .then(response => response.json())
        .then(employee => {
            console.log(employee); // Log the employee object to check if email is present
            employeeDetailsDiv.innerHTML = `
                <p><strong>ID:</strong> ${employee.id}</p>
                <p><strong>First Name:</strong> ${employee.firstName}</p>
                <p><strong>Last Name:</strong> ${employee.lastName}</p>
                <p><strong>Email:</strong> ${employee.email}</p>
            `;

            // Populate the update form with existing data
            document.querySelector('#firstName').value = employee.firstName;
            document.querySelector('#lastName').value = employee.lastName;
            document.querySelector('#email').value = employee.email; // Set default if null
        })
        .catch(error => console.error('Error fetching employee details:', error));

    // Handle form submission for updating employee
    updateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const updatedEmployee = {
            firstName: document.querySelector('#firstName').value,
            lastName: document.querySelector('#lastName').value,
            email: document.querySelector('#email').value
        };

        fetch(apiURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedEmployee)
        })
            .then(response => response.json())
            .then(employee => {
                alert('Employee updated successfully');
                // Optionally, you can redirect or refresh the page
                window.location.reload(); // Refresh the page after update
            })
            .catch(error => console.error('Error updating employee:', error));
    });
});
