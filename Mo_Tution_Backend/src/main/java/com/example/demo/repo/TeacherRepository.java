package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.TeacherDetail;

public interface TeacherRepository extends JpaRepository<TeacherDetail, Long> {
	

	//List<TeacherDetail> findByStandard(int standard);
}