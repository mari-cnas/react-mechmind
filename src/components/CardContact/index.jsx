import { ContactCardContainer } from './style';

const CardContact = ({icon,title,description,backgroundColor,textColor, children}) => (
        <ContactCardContainer className="card d-flex flex-column align-items-center justify-content-center py-4 my-3 " 
            backgroundColor={backgroundColor} textColor={textColor}>
            {icon}
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h6 className="card-title">{title}</h6>
                <h5 className="card-text">{description}</h5>
            </div>
        </ContactCardContainer>
        
);

export default CardContact;

