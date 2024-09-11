document.addEventListener("DOMContentLoaded", function() {
    const apiURL = 'http://localhost:8080/api/employees';
    const tableBody = document.querySelector('#employeeTable tbody');

    // Fetch employees from the API
    fetch(apiURL)
        .then(response => response.json())
        .then(employees => {
            // Clear existing rows
            tableBody.innerHTML = '';

            // Populate table with employee data
            employees.forEach(employee => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.id}</td>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.email}</td>
                    <td>
                        <a href="employee-details.html?id=${employee.id}" class="btn btn-info">View</a>
                        <button class="btn btn-danger" onclick="deleteEmployee(${employee.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching employees:', error));
});

// Function to handle employee deletion
function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        fetch(`http://localhost:8080/api/employees/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result.deleted) {
                    alert('Employee deleted successfully');
                    location.reload(); // Reload the page to update the list
                }
            })
            .catch(error => console.error('Error deleting employee:', error));
    }
}
