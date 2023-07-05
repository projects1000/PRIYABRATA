package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.TeacherDetail;
import com.example.demo.service.TeacherService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class TeacherController {
	@Autowired
	private TeacherService teacherService;
	
//	@GetMapping("/teacher/{standard}")
//	@Operation (summary="service to get Teachers")
//	public List<TeacherDetail> getTeacherDetails(@PathVariable("standard") int standard) {
//		return this.teacherService.getTeacherDetails(standard);
//	}
	
	@PostMapping("/saveTeacher")
	@Tag(name="SaveTeacher", description="Service to save  teacher")
	@Operation (summary="service to Save Teachers")
	public TeacherDetail saveTeacherDetails(@RequestBody TeacherDetail teacherDetail) {
		return this.teacherService.saveTeacher(teacherDetail);
	}
	
}
