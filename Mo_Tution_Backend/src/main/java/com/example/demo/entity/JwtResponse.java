package com.example.demo.entity;

public class JwtResponse {

	String token;

	public JwtResponse(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public JwtResponse() {
		super();
	}

	public void setToken(String token) {
		this.token = token;
	}
	
}
