package com.angularCRUD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angularCRUD.model.User;
import com.angularCRUD.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	
	public User addUser(User user)
	{
		return userRepo.save(user);
	}


	public List<User> getUsers() {
		return (List<User>) userRepo.findAll();
	}


	public User getUser(int id) {
		return userRepo.findById(id);
	}


	public User updateUser(User user, int id) {
		
		User existing=userRepo.findById(id);
		existing.setEmail(user.getEmail());
		existing.setName(user.getName());
		existing.setPhone(user.getPhone());
		existing.setPassword(user.getPassword());
		userRepo.save(existing);
		return existing;
	}


	public void deleteUser(int id) {
		userRepo.deleteById(id);
	}

}
