package com.angularCRUD.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.angularCRUD.model.User;

@Repository
public interface UserRepo extends CrudRepository<User, Integer>{

	User findById(int id);
}
