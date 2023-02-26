import { AdviceCardContainer, CardImg } from './style';



const CardPracticeAdvice = ({title, description,image, children}) => (
        <AdviceCardContainer className=" card w-100" >          
                <div className="card-body py-4 mx-3">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <CardImg image={image}/>
        </AdviceCardContainer>
);


export default CardPracticeAdvice;

