import styled from 'styled-components';

export const HeaderBar = styled.header`
display: flex;
justify-content: space-around;
background-color: transparent;
background-image: linear-gradient(135deg, #fff5cb 0%, #b6e3d4 50%, #33a7b5 100%);
max-height: 90px;
padding: 30px;
box-sizing: border-box;
align-items: center;
border: blue solid 0.1px;
`;

export const SelectedDates = styled.div`
margin-top: 10px;
display: flex;
justify-content: space-around;
box-sizing: border-box;
>div{
    height: 400px;
    border: 2px gray solid;
    background-color: transparent;
    background-image: linear-gradient(180deg, #f6f8fb 0%, #e9f4fb 100%);
}
`;

export const EmbarksTable = styled.div`
margin-top: 10px;
background-color: #e9f4fb;
`;