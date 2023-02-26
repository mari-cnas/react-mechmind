import Video from  '../../Video';
import Maintext from  '../../Maintext';
import people from '../../../assets/Pessoas.png';
import velo from '../../../assets/Velocímetro.png';


const WhoWeAre = () => (
    <div className="container my-5" id="who-we-are">
        <Maintext
            title="Who We Are"
            description1="Problems trying to resolve the conflict between the two major realms"
            description2="of Classical physics: Newtonian mechanics"
            align="center"        
        />
        <div className="row align-items-end justify-content-between ">
            <div className="col-12 col-lg-7 col-md-12">
                <Video/>
            </div>
            <div className="col-12 col-lg-5 col-md-12 d-flex flex-column align-items-lg-end align-items-sm-center ">
                <Maintext
                    title="Most trusted in"
                    title2="our field"
                    description1="Most calendars are designed for teams. Slate"            
                    description2="is designed for freelancers who want a"
                    description3="imple way to plan their schedule."
                    align="start"
                />
                <p className='text-white mb-2'><img src={people} alt="card1" className="me-4"/>the quick fox jumps over the lazy dog<br/>Things on a very small scale...</p>
                <p className='text-white mb-0'><img src={velo} alt="card1" className="me-4 "/>the quick fox jumps over the lazy dog<br/>Things on a very small scale...</p>
            </div>
        </div>
    </div>  
);

export default WhoWeAre;