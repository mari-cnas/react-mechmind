import styled, { keyframes } from 'styled-components'
import cover from '../../assets/cover.jpg';
import coversm from '../../assets/coversm.jpg';

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`     


export const NavSection = styled.header`

.navbar{
    color:white;
}

#bannertext{
    font-size:58px;
}

h1{
    color:white;
    font-family: 'Martel', serif;
    font-weight: bold;
    font-size:58px;
    line-height: 65px;
    letter-spacing: 0.2px;
}

p,a{
    color:white;
    font-family: 'Montserrat', sans-serif;
    font-size:16px;
    line-height: 30px;
    letter-spacing: 0.2px;
}

#logo{
    font-family: 'Martel', serif;
    font-size:24px;
}


`;

export const MenuSection = styled.div`
    height:100vh;
`
export const HeaderBg = styled.section`
display:flex;
flex-direction: column;
min-height:100vh;
`

export const BannerSection = styled.section`

background-image: url(${coversm});
background-repeat: no-repeat;
background-size: cover;

@media (min-width: 767px) { background-image: url(${cover}); }

h1{
    font-size:3rem;
}
p{
    max-width:700px;
    font-size:1.2rem;
    color:black;
}
`

export const GeneralMenu = styled.div`

    display: block;
    color: #666;
    padding: 10px 10px;
`;

export const MenuMobile = styled.div`

    height: 100rem;
    top:0;
    right: ${props => props.isMenuOpened ? 0 : -75}%;
    padding: 0px;
    width: 75%;
    animation: ${props => props.isMenuOpened ? enter : leave} 0.2s ease-out;
    transition: all 0.2s ease-out;
    z-index:10;
    background-color:#252B42;

    > svg {
    position: absolute;
    top: 1rem;
    } 
`
export const MenuOverlay = styled.div`
    opacity: ${props => props.isMenuOpened ? 1 : 0};
    visibility: ${props => props.isMenuOpened ? "visible" : "hidden"};
    animation: ${props => props.isMenuOpened ? fadeIn : fadeOut} 0.2s ease-out;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.2s ease-out;
    z-index: 5;
    top:0;
    left:0;
    height:100vh;
`