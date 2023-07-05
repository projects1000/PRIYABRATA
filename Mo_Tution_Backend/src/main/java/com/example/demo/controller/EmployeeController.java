//package com.example.demo.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entity.Employee;
//import com.example.demo.service.EmployeeService;
//
//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.tags.Tag;
//
//@RestController
//@RequestMapping("/api1")
//public class EmployeeController {
//	@Autowired
//	private EmployeeService employeeService;
//
//	@GetMapping("/getDetails")
//	@Tag(name="Employee", description="Service to get All employee")
//	@Operation (summary="service to get All employee")
//	public List<Employee> getAllEmployee() {
//		return employeeService.getAllEmployee();
//
//	}
//
//	@PostMapping("/add")
//	@Tag(name="Employee", description="Service to add All employee")
//	@Operation (summary="service to add All employee")
//	public Employee postDetails(@RequestBody Employee employee) {
//		return employeeService.saveEmployee(employee);
//	}
//
//	@DeleteMapping("/{id}")
//	@Tag(name="Employee", description="Service to delete  employee")
//	@Operation (summary="service to delete employee")
//	public String deleteDetails(@PathVariable("id") long id) {
//		employeeService.deleteById(id);
//		return "Data is deleted: " + id;
//	}
//
//	@PutMapping("/update/{id}")
//	@Tag(name="Employee", description="Service to update  employee")
//	@Operation (summary="service to update employee")
//	public String updateDetails(@PathVariable("id") long id, @RequestBody Employee employee) {
//
//		employeeService.updateById(id, employee);
//		return "Your data is updated...";
//	}
//
//}
