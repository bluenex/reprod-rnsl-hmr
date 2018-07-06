import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    border-radius: 5px;
    background-color: ${props => props.bgColor ? props.bgColor : 'white'};
    align-items:center;
    justify-content:center;
    height: 40px;
    margin-top: 5px;
`;

const ButtonDisable = styled.View`
    border-radius: 5px;
    background-color: #eee;
    align-items:center;
    justify-content:center;
    height: 40px;
`;

export { Button, ButtonDisable };
