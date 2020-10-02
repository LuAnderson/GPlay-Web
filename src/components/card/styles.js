import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${(props) => props.isActive ? '#eee' : '#1f1f1f'};
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 157px;
    margin-bottom: 24px;
    margin-right: 24px;
    width: 340px;
`;

export const Image = styled.img`
    max-height: 64px;
    max-width: 128px;
`;
