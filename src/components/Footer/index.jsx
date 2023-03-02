import { Container } from 'react-bootstrap';
import Networking from '../Networking';
import { FooterBg } from './style';

const Footer = () =>  (
    <FooterBg className=" d-flex py-3 footer-bg">
        <Container className="d-flex justify-content-center justify-content-md-between">
            <p className="text text-white ">Site por <a href="https://www.linkedin.com/in/marianacnascimento/"  target="_blank" rel="noreferrer">Mariana C. Nascimento</a></p>
            <Networking />
        </Container>
    </FooterBg>    
);
    
export default Footer;
