import { FooterContainer } from './style';
import Request from  './Request';
import Menu from './Menu';
import MadeBy from './MadeBy';

const Footer = () =>  (
    <FooterContainer>
        <Request/>
        <Menu/>
        <MadeBy/>          
    </FooterContainer>    
);
    
export default Footer;