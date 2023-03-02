import { MaintextContainer } from './style';

const Maintext = ({title,title2,description1,align,children}) =>  (
    <MaintextContainer className={`py-5 text-${align}`}>
    <h2 className="mb-0 title-color">{title}</h2>
    <p className="mb-0 text-white">{description1}</p>
    </MaintextContainer>
    );
    
    
export default Maintext;