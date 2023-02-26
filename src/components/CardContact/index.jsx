import { ContactCardContainer } from './style';


const CardContact = ({icon,title,description,backgroundColor,textColor, children}) => (
        <ContactCardContainer className="card d-flex flex-column align-items-center justify-content-center py-4 my-3 " 
            backgroundColor={backgroundColor} textColor={textColor}>
            <img src={icon} alt="tel"/>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h6 className="card-title">{title}</h6>
                <h6 className="card-text">{description}</h6>
                <h5 className="py-2">Get Support</h5>
                <a href="#contact" className="btn btn-submit">Submit request</a>
            </div>
        </ContactCardContainer>
        
);

export default CardContact;

