import React, { useState } from 'react';
import {Form , Button} from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./DeptDetail.module.css"; 

export default function InsertDept() {

    const [deptno, setDeptno] = useState('');
    const [dname, setDname] = useState('');
    const [loc, setLoc] = useState('');

    let navigate = useNavigate();

    const insertDept = () => {
      let url = 'http://localhost:8080/test/api/dept/';
      axios.post(url , {deptno,dname,loc} , {headers: {
          "access-control-allow-origin" : "true"
      }}).then(function (response) {
        navigate("/");
      });
    };


    return (
      <div>
        <Form className={styles.form_css}>
          <Form.Field className={styles.input_width}>
            <label>Deptno</label>
            <input type="text" name="deptno"
            onChange={(e) => setDeptno(e.target.value)}
            />
          </Form.Field>
          <Form.Field className={styles.input_width}>
            <label>Dname</label>
            <input type="text" name="dname" 
            onChange={(e) => setDname(e.target.value)}
            />
          </Form.Field>
          <Form.Field className={styles.input_width}>
            <label>Loc</label>
            <input type="text" name="loc" 
            onChange={(e) => setLoc(e.target.value)}
            />
          </Form.Field>
          <Button type="submit" onClick={insertDept}>추가</Button>
        </Form>
      </div>
     
    )
  }


