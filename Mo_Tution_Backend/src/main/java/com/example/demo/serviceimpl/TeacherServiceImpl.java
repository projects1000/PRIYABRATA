package com.example.demo.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Standard;
import com.example.demo.entity.TeacherDetail;
import com.example.demo.repo.TeacherRepository;
import com.example.demo.repo.UserRepository;
import com.example.demo.service.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService{

	@Autowired
	private TeacherRepository teacherRepository;

	@Override
	public TeacherDetail saveTeacher(TeacherDetail teacherDetail) {
		
//		List<Standard> standardList = new ArrayList<>();
//		for(Standard st:teacherDetail.getStandardList())
//		{
//			st.setTeacher(teacherDetail);
//			standardList.add(st);
//		}
//		teacherDetail.setStandardList(standardList);
		
		 return this.teacherRepository.save(teacherDetail);
	}

//	@Override
//	public List<TeacherDetail> getTeacherDetails(int standard) {
//		// TODO Auto-generated method stub
//		return this.teacherRepository.findByStandard(standard);
//	}
	

}
