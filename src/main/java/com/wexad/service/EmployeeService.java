package com.wexad.service;

import com.wexad.model.Employee;
import com.wexad.repo.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Optional<Employee> findById(long id) {
        return employeeRepository.findById(id);
    }
    public void deleteById(long id) {
        employeeRepository.deleteById(id);
    }
}
