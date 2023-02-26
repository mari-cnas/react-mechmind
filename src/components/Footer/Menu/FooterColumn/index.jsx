import { FooterMenuContainer } from './style';

const FooterColumn = ({title, link1,link2,link3,link4, line1,line2,line3,line4, children}) => (
    <FooterMenuContainer className="container d-flex flex-column text-white justify-content-between align-items-md-center align-items-start align-items-lg-start py-5">
       <h5>{title}</h5>
       <a href={link1}>{line1}</a>
       <a href={link2}>{line2}</a>
       <a href={link3}>{line3}</a>
       <a href={link4}>{line4}</a>
    </FooterMenuContainer>

    
);

export default FooterColumn;