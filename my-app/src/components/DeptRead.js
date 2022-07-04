import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon, Table } from 'semantic-ui-react'


export default function Read() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/test/api/dept', {} , {headers: {
        "access-control-allow-origin" : "true"
        }}).then((response) => setData(response.data));
    })

    


    return (
        <div className='container'>
        <div className='divContainer'>
        <Table collapsing selectable>
            <Table.Header>
            <Table.Row>
            <Table.HeaderCell >Deptno</Table.HeaderCell>
            <Table.HeaderCell >Dname</Table.HeaderCell>
            <Table.HeaderCell >Loc</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
                {data.map((data) => {
                    return (
                        <Table.Row key={data.deptno} >
                        <Table.Cell><Link to={`/deptDetail/${data.deptno}`}>{data.deptno}</Link></Table.Cell>
                        <Table.Cell>{data.dname}</Table.Cell>
                        <Table.Cell>{data.loc}</Table.Cell>
                        </Table.Row>
                    )
                })}
                
            
            </Table.Body>
        </Table>
        
            
    
        </div>
        <Button animated>
        <Link to='/insert'>
        <Button.Content visible>추가하기</Button.Content>
        <Button.Content hidden>
            <Icon name='arrow right' />
        </Button.Content>
        </Link>
        </Button>
        </div>
        
    )
}