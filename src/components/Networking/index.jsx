import { NetworkingContainer } from './style';
import face from '../../assets/face.png';
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';

const Networking = () =>  (
    <NetworkingContainer className="d-flex list-unstyled">
        <li className="mx-2 "><a href="https://www.linkedin.com/company/mechmind/" target="_blank" rel="noreferrer" ><img src={linkedin} alt="Linkedin" className="col"/></a></li>
        <li className="mx-2 "><a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><img src={face} alt="Facebook" className="col"/></a></li>
        <li className="mx-2"><a href="https://www.instagram.com/mechmindeng" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" className="col"/></a></li>
    </NetworkingContainer>
    );
    
    
export default Networking;