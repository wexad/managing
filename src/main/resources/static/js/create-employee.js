document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#employeeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const email = document.querySelector('#email').value;

        // Create employee object
        const employee = {
            firstName: firstName,
            lastName: lastName,
            email: email // Changed from emailId to email to match your object structure
        };

        // Send POST request
        fetch('http://localhost:8080/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(response => response.json())
            .then(data => {
                alert('Employee created successfully');
                form.reset(); // Reset form fields
            })
            .catch(error => {
                console.error('Error creating employee:', error);
                alert('Failed to create employee');
            });
    });
});
