import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 80%; 
    margin-bottom: 50px;  
    height: auto;
    margin: auto;      
`;

export const LeftSide = styled.div`   
    width: 50%;  
    height: auto;
    img{
        margin-top:300px;
        margin-bottom: 100px;
        width: 100%
    }
`;

export const RightSide = styled.div`     
    width: 50%;   
    height: auto;
    h2{
       margin: auto;
    }
`;

export const Titleform = styled.div`    
    width: 100%;
    height: auto;
    h2{   
        margin-top: 100px;     
        font-size: 48px;
        text-align: center;              
    }
`;

export const Form = styled.form`     
    flex-direction: column;
    display: flex;     

    input{
        border-radius: 20px; 
        border-style: none;
        background-color: #E5E5E5;       
        width: 70%;
        height: 46px;
        margin: auto;
        margin-top: 30px; 
        padding-left: 1.5rem;
        font-size: 1.5rem;

        ::placeholder{
            
            
        } 

        &[type="date"]{
            font-size: 1.0rem;            
            font-weight: bold;
            color: #8C8C8C;                       
        }
    }

    button{
    width: 180px;
    height: 61px;             
    border-radius: 30px;
    border-style: none;
    font-size: 24px;
    margin:auto;
    margin: 0 0px 0 108.5px;         
    margin-top: 30px; 
    color: white;
    background-color: #301E46;       
    &:hover{
        background-color: #E5E5E5;
        transition: 0.5s;
        color: black;
    }   

    .buttonArea{
        display: flex;
    }                           
}

       
`;

 
