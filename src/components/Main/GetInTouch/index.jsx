import { GetInTouchContainer } from './style';
import Maintext from  '../../Maintext';
import CardContact from  '../../CardContact';
import tel from '../../../assets/tel.png';
import send from '../../../assets/send.png';
import map from '../../../assets/map.png';

const GetInTouch = () => (
    <GetInTouchContainer className="container d-flex flex-column my-5" id="contact">
        <Maintext
        title="Get In Touch"
        description1="Problems trying to resolve the conflict between"
        description2="the two major realms of Classical physics: Newtonian mechanics"
        align="center"
        />
        <div className=" row h-75 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
            <CardContact className="col"
            title="georgia.young@example.com"
            description="georgia.young@ple.com"
            icon={tel}
            />       
            <CardContact className="col tw"
            title="georgia.young@example.com"
            description="georgia.young@ple.com"
            icon={map}
            backgroundColor="#295C7A"
            textColor="white"
            />
            <CardContact className="col"
            title="georgia.young@example.com"
            description="georgia.young@ple.com"
            icon={send}
            />
        </div>
    </GetInTouchContainer>
        
);

export default GetInTouch;