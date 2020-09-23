import styled from 'styled-components';

export const RightBarContainer = styled.div`
    background-color: #6930C3;
    height: 100%;
    width: 25%;
    position: fixed;
    top: 0;
    right: 0;
    border-radius: 30px 0 0 30px;
    
`;

export const Name = styled.div`
    display: flex;
    position: relative;
    margin-right: 10%;
    color: #fff;

    h1 {
        margin-left: 20%;
    }
`;

export const Info = styled.div`
    
`;

export const ListContainer = styled.div`
    margin-top: 10%;
    margin-left:18%;
    color: #fff;

    h4 {
        margin-top: 10%;
    }
`;

export const InfoList = styled.ul`
    list-style: none;
`;

export const AddressList = styled.ul`
    list-style: none;
`;

export const RightBarContent = styled.div`
    margin-top: 10%;
`;

// export const FormContainer = styled.div`
//     display: flex;
// `;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 13%;
    margin-top: 4%;
    padding: 0;
    width: 325px;
    height: 255px;

    input {
        width: 325px;
        height: 30px;
        margin-bottom: 15px;
        background-color: #E5E5E5;
        border: none;
        border-radius: 20px;
        padding-left: 20px;
    }
`;

export const Title = styled.div`
    position: relative;
    left: 30%;
    padding-top: 20px;
    width: 325px;

    h1 {
        border-bottom: 2px black solid;
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    margin-left: 38%;
    bottom: 40%;   
`;

export const DeleteButton = styled.div`
    margin-bottom: 50px;

    button {
        transition: 0.3s;
        width: 120px;
        height: 50px;             
        border-radius: 30px;
        border-style: none;
        font-size: 18px; 
        color: white;
        background-color: #301E46;
        &:hover{
            background-color: red;
            color: black;
            width: 130px;
            height: 60px;
        }                      
    }
`;

export const UpdateButton = styled.div`

    button {
        transition: 0.3s;
        width: 120px;
        height: 50px;              
        border-radius: 30px;
        border-style: none;
        font-size: 18px;
        color: white;
        background-color: #301E46;
        &:hover{
            background-color: yellow;
            color: black;
            width: 130px;
            height: 60px;
        }                      
    }
`;