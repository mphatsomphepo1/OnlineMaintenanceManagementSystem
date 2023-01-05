import react,{useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {fetchUserData} from '../API/service';
import { useNavigate } from 'react-router-dom';

const MainWrapper=styled.div`
    padding-top:40px;
`;

export const Dash =(props)=>{
    let navigate = useNavigate();

    const dispatch=useDispatch();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({});

    useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
            navigate("/list")
        })
    },[]);

    const logOut=()=>{

        localStorage.clear();
        navigate("/")

    }

    return (
        <Container>
            <MainWrapper>
                <h4>Hello Admin {data && `${data.userName} ${data.lastName}`}</h4>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.roleCode==='ADMIN').length>0 && <Button 
                type="variant" onClick={()=> navigate("/list")}>
                    View Faults
                </Button> }
                <br></br>

                <Button style={{marginTop:'5px'}} onClick={() =>logOut()}>Logout</Button>
            </MainWrapper>
        </Container>
    )
}