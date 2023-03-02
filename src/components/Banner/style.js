import styled, { keyframes } from 'styled-components'
import cover from '../../assets/cover.jpg';


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


/* header{
    position: fixed;
    top:10px;
    left: 20px;
} */

/* .navbody{
    background: #252B42;
    opacity:50%;
}

.navcolor{
    background: #252B42;

} */

.btn1{
    padding: 10px 36px;
    width: 182px;
    height: 48px; 
    background: #D0A144;
    border-radius: 37px;
    border-style: none;
    color: white;
    font-size: 14px;
}

.btn2{
    padding: 10px 36px;
    width: 182px;
    height: 48px;
    background: none;
    border-radius: 37px;
    border-color: white;
    color: white;
    font-size: 14px;
}

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

export const HeaderBg = styled.section`
display:flex;
flex-direction: column;
min-height:100vh;
`

export const BannerSection = styled.section`

background-image: url(${cover});
background-repeat: no-repeat;
background-size: cover;

div{
    backdrop-filter: blur(10px);
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
    left: ${props => props.isMenuOpened ? 0 : -75}%;
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
    height:100vh;
`