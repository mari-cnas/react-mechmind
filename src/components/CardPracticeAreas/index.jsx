import {  AreasCardContainer, CardImg} from './style';



const CardPracticeAreas = ({title, description,icon, children}) => (
        <AreasCardContainer className=" card w-100" >        
                <CardImg image={icon} alt="card1" className="my-2" />        
                <div className="card-body py-4 ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>               
        </AreasCardContainer>
);


export default CardPracticeAreas;
