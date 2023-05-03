import { AreasContainer, PaymentContainer } from './style';
import Maintext from  '../../Maintext';
import CardPracticeAreas from  '../../CardPracticeAreas';
import nr12 from '../../../assets/nr12bg.png';
import pmoc from '../../../assets/pmocbg.png';
//import cost from '../../../assets/costbg.png';
import services from '../../../assets/servicesbg.png';


const OurPracticeAreas = () => (
    <>
    <AreasContainer className="container d-flex flex-column align-items-center my-5" id="practice-areas">
        <Maintext
            title="Serviços - Áreas de atuação"
            align="center"
        />
        <div className="row row-cols-1 row-cols-md-3 w-100 justify-content-between g-2 g-lg-4">
            <div className="col d-flex ">
            <CardPracticeAreas 
            title="NR12"
            icon={nr12}
            description1="Laudo NR12 para Máquinas e Equipamentos"
            description2="Inventário NR12 para Máquinas e Equipamentos"
            description3="Apreciação de Riscos e laudo NR12"
            description4="Adequação Máquinas NR12"
                    /></div>
            <div className="col d-flex ">
            <CardPracticeAreas 
            title="PMOC"
            icon={pmoc}
            description1="Laudo técnico para Sistemas de Ar condicionado"
            description2="PMOC (Plano de Manutenção, Operação e Controle)"
            description3="Definição da frequência das atividades de manutenção"
            description4="Lista de verificação para inspeção das condições de funcionamento"
                    /></div>
                {/* <div className="col d-flex ">
            <CardPracticeAreas 
            title="AVCB e PPCI"
            icon={cost}
            description1="Laudo NR12 para Máquinas e Equipamentos"
            description2="Inventário NR12 para Máquinas e Equipamentos"
            description3="Apreciação de Riscos e laudo NR12"
            description4="Adequação Máquinas NR12"
            /></div> */}
		     <div className="col d-flex ">
            <CardPracticeAreas 
            title="Laudos"
            icon={services}
            description1="Laudos + ART"
            description2="Perícias"
            description3="Consultorias"
            description4="Projetos e Melhorias"
                    /></div>
                
        </div>    
        <div className="d-flex flex-column mt-5">      
            <Maintext
                title="Como solicitar um serviço"
                align="center"
            />
            <PaymentContainer >
            <p>Orçamento<br/>
                            Entre em <a href="#contact">contato</a> via Whatsapp, ou E-mail e solicite um orçamento do serviço desejado
            </p>
            <p>Desenvolvimento<br/>
                            Começamos a reunir as informações necessárias para o desenvolvimento do documento</p>
            <p> Pagamento<br/>
                            O pagamento é efetuado com o valor e a data especificada acordados no orçamento</p>
            <p>Entrega<br/>
                            O documento será entregue em mãos, ou por outro meio acordado entre as partes</p>
            </PaymentContainer>
        </div> 
         
        
    </AreasContainer>
</> 
);

export default OurPracticeAreas;

