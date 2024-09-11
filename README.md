# Employee Management System

## Overview

This is an Employee Management System built using HTML, CSS, and JavaScript for the frontend without frontend frameworks and a Java-based backend using Spring Boot. It allows users to view, create, update, and manage employee details.

## Features

- **View Employees**: List all employees with options to view details.
- **Create Employee**: Add new employees with details such as first name, last name, and email.
- **Update Employee**: Edit existing employee details.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## File Structure
managing
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── wexad
│   │   │           ├── ManagingApplication.java
│   │   │           ├── controller
│   │   │           │   └── EmployeeController.java
│   │   │           ├── model
│   │   │           │   └── Employee.java
│   │   │           ├── repository
│   │   │           │   └── EmployeeRepository.java
│   │   │           └── service
│   │   │               └── EmployeeService.java
│   │   └── resources
│   │       ├── application.properties
│   │       └── static
│   │           ├── css
│   │           │   ├── index.css
│   │           │   ├── employees.css
│   │           │   ├── employee-details.css
│   │           │   ├── create-employee.css
│   │           ├── js
│   │           │   ├── create-employee.js
│   │           │   ├── employee-details.js
│   │           │   ├── employees.js
│   │           ├── employees.html
│   │           ├── create-employee.html
│   │           ├── employee-details.html
│   │           └── index.html
│
└── test
    └── java
        └── com
            └── wexad
                └── ManagingApplicationTests.java

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/managing.git
    ```

2. Navigate to the project directory:
    ```bash
    cd managing
    ```

3. Open the HTML files in your preferred web browser to view the frontend.
4. For the backend, follow these steps:
    - Ensure you have Java and Maven installed.
    - Navigate to the `/backend` directory.
    - Build the project using Maven:
      ```bash
      mvn clean install
      ```
    - Run the Spring Boot application:
      ```bash
      mvn spring-boot:run
      ```

## Usage

- Open `index.html` to view menu.
- Use `employees.html` to view the employees list and delete employee.
- Use `create-employee.html` to add new employees.
- Access `employee-details.html?id={id}` to view and update details of a specific employee.

## Contributing

Feel free to fork the repository and submit pull requests with improvements. Please ensure that your code adheres to the project's coding standards and includes tests where appropriate.

## Contact

For questions or suggestions, please contact [sherzodchoriyev747@example.com](mailto:sherzodchoriyev747@example.com).

