package com.example.Helper;

public class UserFoundException extends Exception{

	public UserFoundException() {
		super("User with this user name already exist!! Try with different one");
	}
	public UserFoundException(String msg) {
		super(msg);
	}
}
