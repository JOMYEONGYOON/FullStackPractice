package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dto.Dept;
import com.spring.mapper.DeptMapper;

@Service
public class DeptServiceImpl implements DeptService{

	@Autowired
	DeptMapper deptMapper;
	
	
	@Override
	public List<Dept> findAllDept() {
		return deptMapper.findAllDept();
	}


	@Override
	public Dept findDeptByDeptno(int deptno) {
		return deptMapper.findDeptByDeptno(deptno);
	}


	@Override
	public void insertDept(Dept dept) {
		deptMapper.insertDept(dept);
	}


	@Override
	public void updateDeptno(Dept dept) {
		deptMapper.updateDeptno(dept);
	}


	@Override
	public void deleteDeptByDeptno(Dept dept) {
		deptMapper.deleteDeptByDeptno(dept);
	}


}
