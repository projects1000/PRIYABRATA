package com.example.demo.serviceimpl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Helper.UserFoundException;
import com.example.demo.entity.User;
import com.example.demo.entity.UserRole;
import com.example.demo.repo.RoleRepository;
import com.example.demo.repo.UserRepository;
import com.example.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {

		User local = this.userRepository.findByUsername(user.getUsername());
		if (local != null) {
			System.out.println("User Already Exist");
			throw new UserFoundException("User Already Present");
		}
		else
		{
			//create User
			for(UserRole ur:userRoles)
			{
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local=this.userRepository.save(user);
			
		}
		// TODO Auto-generated method stub
		return local;
	}
   //getting user by user name
	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username);
	}
	//delete the user
	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub
		this.userRepository.deleteById(userId);
		
	}
//	@Override
//	public User createUser(Object user, Set<UserRole> userRoles) throws Exception {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
