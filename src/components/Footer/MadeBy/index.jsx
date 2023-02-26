import { MadeByContainer } from './style';
import Networking from  '../../Networking';

const MadeBy = () => (
        <MadeByContainer className="container d-flex py-3 justify-content-center justify-content-md-between flex-wrap">
            <p className="text text-white ">Site por <a href="https://www.linkedin.com/in/marianacnascimento/"  target="_blank" rel="noreferrer">Mariana C. Nascimento</a></p>
            <Networking/>
        </MadeByContainer>

        
);

export default MadeBy;