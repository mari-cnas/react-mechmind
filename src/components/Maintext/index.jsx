import { MaintextContainer } from './style';

const Maintext = ({title,title2,description1,description2,description3,align,children}) =>  (
    <MaintextContainer className={`text-white py-5 text-${align}`}>
    <h2 className="mb-0">{title}</h2>
    <h2>{title2}</h2>
    <p className="mb-0">{description1}</p>
    <p className="mb-0">{description2}</p>
    <p>{description3}</p>
    </MaintextContainer>
    );
    
    
export default Maintext;