import { GetInTouchContainer } from './style';
import Maintext from  '../../Maintext';
import CardContact from  '../../CardContact';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const GetInTouch = () => (
    <GetInTouchContainer className="container d-flex flex-column my-5" id="contact">
        <Maintext
        title="Contato"
        align="center"
        />
        <div className=" row h-75 row-cols-md-2 row-cols-sm-1">
            <CardContact className="col"
            title="Telefone"
            description="(41)99978-3212/99575-5306"
            icon={<BiPhone size={50}/>}
            
            />       
            <CardContact className="col tw"
            title="E-mail"
            description="contato.mechmind@gmail.com"
            icon={<AiOutlineMail size={50}/>}
            backgroundColor="#295C7A"
            textColor="white"
            />
        </div>
    </GetInTouchContainer>
        
);

export default GetInTouch;