import {   BannerSection, GeneralMenu, HeaderBg,  MenuMobile, MenuOverlay, NavSection} from './style';
import logo from '../../assets/logopng.png';
import {AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import { Container } from 'react-bootstrap';



const Banner = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <HeaderBg className="header-bg">
            <NavSection >
                <div className="container"  id="initial">
                    <header className="header-bg">
                    <MenuOverlay isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} className="d-flex d-md-none position-fixed h-100 w-100" />
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#initial" className="me-4 my-2"><img src={logo} alt="logo" style={{width:'80px'}} /></a>                                                
                            <div>    
                                <div className="d-flex align-items-end justify-content-between d-block d-md-none">
                                    <GiHamburgerMenu type="button" onClick={() => setIsMenuOpened(true)} size={18} color="white"/>
                                </div>                                          
                                <MenuMobile isMenuOpened={isMenuOpened} className="d-flex flex-column d-md-none position-fixed">
                                    <NavSection className="container w-100">
                                        <div className=" d-flex flex-column justify-content-center mb-3">
                                            <AiOutlineClose type="button" onClick={() => setIsMenuOpened(false)} className="align-self-end" />
                                
                                        </div>
                                    <div className="d-flex flex-column w-100">
                                    <p id="logo">MechMind</p>    
                                            <a href="#practice-areas" className="me-4" isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)}>Serviços</a>
                                            <a href="#who-we-are" className="me-4" isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)}>Sobre nós</a>
                                            <a href="#contact" className="me-4" isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)}>Contato</a>
                                        </div>
                                    </NavSection>
                                </MenuMobile>
                                <GeneralMenu className="w-100 d-none d-md-flex">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <a href="#practice-areas" className="me-4">Serviços</a>
                                        <a href="#who-we-are" className="me-4">Sobre nós</a>
                                        <a href="#contact" >Contato</a>
                                    </div>
                                </GeneralMenu>
                            </div>    
                        </div>
                    </header>                   
                </div>
            </NavSection>
            <BannerSection className="d-flex flex-grow-1 justify-content-end ">
                <div className="col-6 d-flex align-items-center">
                    <Container className="d-flex flex-column ">
                        <h1 className="text-blue fw-bold">MechMind</h1>
                        <p className="my-0 fw-bold">A MechMind é uma empresa especializada em engenharia mecânica </p>
                        <p className="my-0 fw-bold">que oferece soluções através de laudos, avaliações e perícias.</p>
                    </Container>
                </div>
            </BannerSection>
        </HeaderBg>
    );
}

export default Banner;
