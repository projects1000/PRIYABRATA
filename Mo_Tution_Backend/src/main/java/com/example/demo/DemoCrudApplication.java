package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.entity.Standard;
import com.example.demo.entity.TeacherDetail;
import com.example.demo.service.TeacherService;
import com.example.demo.service.UserService;

@SpringBootApplication
public class DemoCrudApplication extends SpringBootServletInitializer implements CommandLineRunner {
	@Autowired
	private UserService userService;

	@Autowired
	private TeacherService teacherService;
	

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(DemoCrudApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		try {

			System.out.println("starting code");
//
//			User user = new User();
//			user.setFirstname("Teacher");
//			user.setLastname("Teacher");
//			user.setUsername("Teacher");
//			user.setPassword(this.bCryptPasswordEncoder.encode("Teacher"));
//			user.setEmail("Teacher@gmail.com");
//			user.setProfile("default.png");
//			
//			Role role1 = new Role();
//			role1.setRoleId(45L);
//			role1.setRoleName("NORMAL");
//			
//	
//			
//			Set<UserRole> userRoleSet = new HashSet<>();
//			UserRole userRole = new UserRole();
//			userRole.setRole(role1);
//			userRole.setUser(user);
//			userRoleSet.add(userRole);
//			
//			User user1 = this.userService.createUser(user, userRoleSet);
//			System.out.println(user1.getUsername());
//			
//			TeacherDetail teacher = new TeacherDetail();
//			teacher.setName("Ruhi");
//			teacher.setAddress("Nandan");
//			teacher.setEmail("Ruhi@gmail.com");
//			teacher.setPhone((long) 980040888);
//			teacher.setExperience(3);
//
//			List<Standard> standardList=new ArrayList<>();
//			
//			Standard st1=new Standard();
//			st1.setStandardId(1);
//			st1.setTeacher(teacher);
//			
//			Standard st2=new Standard();
//			st2.setStandardId(2);
//			st2.setTeacher(teacher);
//			
//			Standard st3=new Standard();
//			st3.setStandardId(3);
//			st3.setTeacher(teacher);
//			
//			standardList.add(st1);
//			standardList.add(st2);
//			standardList.add(st3);
//			
//			teacher.setStandardList(standardList);
//			
//			TeacherDetail teacherResult = this.teacherService.saveTeacher(teacher);
//			
//			System.out.println(teacherResult);
		} catch (Exception e) {
			e.printStackTrace();

		}
	}
}
