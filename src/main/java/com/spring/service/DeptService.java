package com.spring.service;

import java.util.List;

import com.spring.dto.Dept;

public interface DeptService {
	
	public List<Dept> findAllDept();
	
	public Dept findDeptByDeptno(int deptno);
	
	public void insertDept(Dept dept);
	
	public void updateDeptno(Dept dept);
	
	public void deleteDeptByDeptno(Dept dept);
}
