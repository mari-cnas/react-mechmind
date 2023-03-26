import { Col, Container, Row } from 'react-bootstrap';
import Networking from '../Networking';
import { FooterBg } from './style';
import logo from '../../assets/logopng.png';

const Footer = () =>  (
    <FooterBg className="d-flex py-3 footer-bg">
        <Container className="d-flex d-none d-md-block">
            <Row>
                <Col className="d-flex align-items-center"> <span className="text text-white ">Site por&nbsp;<a href="https://www.linkedin.com/in/marianacnascimento/" target="_blank" rel="noreferrer">Mariana C. Nascimento</a></span></Col>
                <Col className="d-flex justify-content-center"><a href="#initial" className="align-self-center"><img src={logo} alt="logo" style={{ width: '80px' }} /></a></Col>
                <Col className="d-flex justify-content-end align-items-center"><Networking /></Col>
            </Row>                       
        </Container>
        <Container className="d-flex flex-column justify-content-center align-items-center d-block d-md-none">
            <Networking/>
            <a href="#initial" className="my-3"><img src={logo} alt="logo" style={{width:'80px'}} /></a>
            <p className="text text-white mb-1">Site por&nbsp;<a href="https://www.linkedin.com/in/marianacnascimento/" target="_blank" rel="noreferrer">Mariana C. Nascimento</a></p>
        </Container>
    </FooterBg>    
);
    
export default Footer;
