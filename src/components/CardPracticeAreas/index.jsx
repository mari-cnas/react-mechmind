import { AreasCardContainer } from './style';

const CardPracticeAreas = ({icon,description,children}) => (
    <AreasCardContainer className="square-card w-100">
        <img src={icon} alt="card1" className="mb-3"/>
        <div >
            <h5 className="card-title">{description}</h5>
        </div>    
    </AreasCardContainer>
);

export default CardPracticeAreas;