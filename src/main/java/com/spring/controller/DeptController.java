package com.spring.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.dto.Dept;
import com.spring.service.DeptServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DeptController {
	
//	ㅇ
	@Autowired
	private DeptServiceImpl deptservice;
	
	/*
	 * 모든 Dept값 출력
	 * 
	 */
	@GetMapping(value= "/dept")
	
	public List<Dept> findAllDept(){
		List<Dept> array = deptservice.findAllDept();
		return array;
	}
	
	/*
	 * 한개의 Dept값 출력
	 * 
	 */
	
	@GetMapping(value = "/dept/{deptno}")
	public Dept findByDeptno(@PathVariable(value = "deptno") int deptno){
		
		Dept dept = deptservice.findDeptByDeptno(deptno);
		return dept;
	}
	
	/*
	 *  Dept값 삽입
	 * 
	 */
	
	@PostMapping(value = "/dept" , consumes = MediaType.APPLICATION_JSON_VALUE)
	public void insertDeptno(@RequestBody Dept dept){
		System.out.println(dept);
		deptservice.insertDept(dept);
	}
	
	/*
	 *  Dept값 수정
	 * 
	 */
	@PutMapping(value = "/dept" , consumes = MediaType.APPLICATION_JSON_VALUE )
	public void updateDeptno(@RequestBody Dept dept ){
		System.out.println("update");
		System.out.println(dept);
		deptservice.updateDeptno(dept);
	}
	
	/*
	 *  Dept값 삭제
	 * 
	 */
	@DeleteMapping(value = "/dept" , consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteDeptno(@RequestBody Dept dept){
		System.out.println("delete");
		System.out.println(dept);
		deptservice.deleteDeptByDeptno(dept);
	}
	
}
