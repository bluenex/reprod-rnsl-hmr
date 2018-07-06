import styled from 'styled-components/native';

const Card = styled.View`
    background-color: #FFF;
    margin: 5px 10px 5px 10px;
    border: solid rgba(0,0,0,0.2);
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
`;

const CardItem = styled.View`
    background-color: ${props => props.bgColor ? props.bgColor : 'white'};
    border-radius: 5px;
    padding: 10px;
`;

const CardHeader = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.1);
  padding: 10px;
`;

export { Card, CardItem, CardHeader };
