import { BannerContainer, HeaderContainer, MenuMobile, MenuOverlay, NavSection } from './style';
import woman from '../../assets/agent.png';
import logo from '../../assets/logopng.png';
import {AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';



const Banner = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <>
            <HeaderContainer >
                <div className="container"  id="initial">
                    <header className="header-bg">
                    <MenuOverlay isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} className="d-flex d-md-none position-fixed h-100 w-100" />
                        <div className="d-flex justify-content-between align-items-center">
                        <a href="#initial" className="me-4"><img src={logo} alt="logo" style={{width:'80px'}} /></a>
                                                
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
                                <NavSection className="w-100 d-none d-md-flex">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <a href="#practice-areas" className="me-4">Serviços</a>
                                        <a href="#who-we-are" className="me-4">Sobre nós</a>
                                        <a href="#contact" >Contato</a>
                                    </div>
                                </NavSection>
                            </div>    
                        </div>
                    </header>
                    <BannerContainer className="row row-cols-1 row-cols-lg-2 ">
                        <div className="col mt-5">
                            <div className="d-flex flex-column align-items-center align-items-md-start mt-5 ">
                                <h1 className="d-flex text-center text-md-start text-blue">MechMind</h1>
                                <p className="d-flex text-center text-md-start my-0">We know how large objects will act,</p>
                                <p className="d-flex text-center text-md-start ">things on a small scale.</p>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                                <button className="btn1 text mb-3 me-2 ">Get Quote Now</button>
                                <button className="btn2 text mb-3 ">Learn More</button>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center mt-5">
                            <img src={woman} alt="woman" className="img-fluid align-self-center " />
                        </div>
                    </BannerContainer>

                </div>
            </HeaderContainer>
        </>
    );
}

export default Banner;
