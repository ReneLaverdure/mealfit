import styled from 'styled-components'

export const CoverBackgroundImage = styled.section`
    display: grid;
    height: 100vh;
    background-image: ${props => `url(${props.image.src})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`;
