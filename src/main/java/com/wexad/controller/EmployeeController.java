package com.wexad.controller;

import com.wexad.model.Employee;
import com.wexad.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.AbstractMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return employeeService.findAll();
    }

    @PostMapping("/employees")
    public Employee getEmployees(@RequestBody Employee employee) {
        return employeeService.save(employee);
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeService.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    @DeleteMapping("/employees/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteById(id);
        HashMap<String, Boolean> result = new HashMap<>();
        result.put("deleted", Boolean.TRUE);
        return result;
    }

    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        Employee employee = employeeService.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());
        return employeeService.save(employee);
    }
}
