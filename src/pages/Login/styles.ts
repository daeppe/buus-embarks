import styled from 'styled-components';

export const ContainerLogin = styled.div`
text-align: center;
background-color: transparent;
background-image: linear-gradient(180deg, #f6f8fb 0%, #e9f4fb 100%);
margin: 30px auto;
max-width: 500px;
border: 1px solid black;
border-radius: 8px 8px 8px 8px;
padding: 20px;

h2{
    font-size: 2rem;
}


.textfield{
    margin: 70px;
    color: black;
    max-height: 50px;
    >p{
        margin-top: 10px;
    }
}

input{
    background-color: white;
}
`;