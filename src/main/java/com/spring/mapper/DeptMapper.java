package com.spring.mapper;

import java.util.List;

import com.spring.dto.Dept;

public interface DeptMapper {
	
	public List<Dept> findAllDept();
	
	public Dept findDeptByDeptno(int deptno);
	
	public void insertDept(Dept dept);
	
	public void updateDeptno(Dept dept);
	
	public void deleteDeptByDeptno(Dept dept);
}
