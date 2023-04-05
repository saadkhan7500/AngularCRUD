package com.angularCRUD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angularCRUD.model.User;
import com.angularCRUD.service.UserService;


@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/add")
	public User addUser(@RequestBody User user)
	{
		return userService.addUser(user);
	}
	
	@GetMapping("/get")
	public List<User> getUsers()
	{
		return userService.getUsers();
	}
	
	@GetMapping("/get/{id}")
	public User getUser(@PathVariable int id)
	{
		return userService.getUser(id);
	}
	
	@PutMapping("/update/{id}")
	public User updateUser(@RequestBody User user , @PathVariable int id)
	{
		return userService.updateUser(user,id);
	
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable int id)
	{
		userService.deleteUser(id);
	}

}
