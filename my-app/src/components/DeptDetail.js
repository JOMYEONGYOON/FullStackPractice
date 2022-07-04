import axios from "axios";
import React, { useEffect, useState } from "react";
import {Form , Button} from 'semantic-ui-react'
import { useParams , useNavigate  } from "react-router-dom";
import styles from "./DeptDetail.module.css";


const DeptDetail = () => {
  let navigate = useNavigate();
  const {deptno} = useParams();
  
  const [getDeptno, setDeptno] = useState('');
  const [dname, setDname] = useState('');
  const [loc, setLoc] = useState('');
  const [update, setUpdateForm] = useState(false);
  const [detailData , setDetailData] = useState('');


  const detailDept = (event) => {
    let url = 'http://localhost:8080/test/api/dept/'+ deptno;
    axios.get(url , {} , {headers: {
        "access-control-allow-origin" : "true"
    }}).then((response) => setDetailData(response.data) );
  };

  const updateForm = () => {
    document.getElementById('dname').readOnly = false;
    document.getElementById('loc').readOnly = false;
    setUpdateForm(true);
    
  }

  const updateExcute = (event) => {
   
    console.log(deptno);


    let url = 'http://localhost:8080/test/api/dept/';
    axios.put(url , {deptno,dname,loc} , {headers: {
        "access-control-allow-origin" : "true"
    }}).then(function (response) {
      navigate("/");
    });
  };
  const deleteDept = (event) => {
   
    if(window.confirm("정말 삭제 하시겠습니까?")){
    let url = 'http://localhost:8080/test/api/dept';
    axios.delete(url ,{ data : 
      {
        deptno : deptno
      } 
    }, {headers: {
        "access-control-allow-origin" : "true"
    }})
    .then(function () {
      alert("삭제되었습니다.");
      navigate("/");
    });
      
    }else {
      alert("취소 되었습니다.")
    }
    // let deptno = getDeptno;

   
  }; 

  useEffect(() => {
    detailDept();
    }
  )


  return (
    <div>
    <Form className={styles.form_css}>
      <Form.Field className={styles.input_width}>
        <label>Deptno</label>
        <input type="text" name="deptno" 
          id="deptno"
          defaultValue = {detailData.deptno}
          readOnly = {true}
          onChange={(e) => setDeptno(e.target.value)}
        />
      </Form.Field>
      <Form.Field className={styles.input_width}>
        <label>Dname</label>
        <input type="text" name="dname" 
          id="dname"
          defaultValue={detailData.dname}
          readOnly = {true}
          onChange={(e) => setDname(e.target.value)}
        />
      </Form.Field>
      <Form.Field className={styles.input_width}>
        <label>Loc</label>
        <input type="text" name="loc" 
          id="loc"
          defaultValue={detailData.loc}
          readOnly = {true}
          onChange={(e) => setLoc(e.target.value)}
        />
      </Form.Field>
      {update === false ?    
      <Button type="button" onClick={updateForm} >수정하기</Button>
      :
      <Button type="button" onClick={updateExcute} >수정</Button>
      }
    
      <Button type="button" onClick={deleteDept} >삭제</Button>
    </Form>
  </div>
  )

}
export default DeptDetail;