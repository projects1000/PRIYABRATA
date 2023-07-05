package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "standard")
public class Standard {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private int StandardId;
	
	@ManyToOne
    private TeacherDetail teacher;

	public TeacherDetail getTeacher() {
		return teacher;
	}

	public void setTeacher(TeacherDetail teacher) {
		this.teacher = teacher;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getStandardId() {
		return StandardId;
	}

	public void setStandardId(int standardId) {
		StandardId = standardId;
	}

	

	
}
