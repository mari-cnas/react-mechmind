import { AreasContainer } from './style';
import Maintext from  '../../Maintext';
import CardPracticeAreas from  '../../CardPracticeAreas';
import balance from '../../../assets/006-balance.png';
import auction from '../../../assets/001-auction.png';
import accept from '../../../assets/005-accept.png';


import CardPracticeAdvice from  '../../CardPracticeAdvice';
import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';
import card3 from '../../../assets/card3.png';
import card4 from '../../../assets/card4.png';
import { Container } from 'react-bootstrap';

const OurPracticeAreas = () => (
    <>
    <AreasContainer className="container d-flex flex-column align-items-center my-5" id="practice-areas">
        <Maintext
            title="Our Practice Areas"
            description1="Problems trying to resolve the conflict between"
            description2="the two major realms of Classical physics: Newtonian mechanics"
            align="center"
        />
        <div className="row row-cols-1 row-cols-md-3 w-100 justify-content-between g-3">
            <div className="col d-flex ">
            <CardPracticeAreas 
            icon={balance}
            description="Family Law"
            /></div>
		     <div className="col d-flex ">
            <CardPracticeAreas 
            icon={auction}
            description="Business Law"
            />
            </div>
            <div className="col d-flex ">
            <CardPracticeAreas 
            icon={accept}
            description="Trust & Estates"
            />
            </div>
                <div>
                    <p className="text-white">
                    - Laudos + ART;
                    - Perícias;

                    - Consultorias; 

                    - Projetos e Melhorias.


                    Áreas de Engenharia Mecânica, sendo elas:
                    - Brinquedos / playground;
                    - Veículos automotores;
                    - Exaustão de cozinhas;
                    - NR11, NR12, NR13, NR18, NR35;
                    - Ar condicionado - PMOC;

                                        - AVCB e PPCI.
                                        Laudo NR12 para Máquinas e Equipamentos
                    Inventário NR12 para Máquinas e Equipamentos
                    Apreciação de Riscos e laudo NR12
                    Adequação Máquinas NR12
                    </p>
                </div>
                <div>
                    <p className="text-white">
                    VEJA COMO É FÁCIL SOLICITAR UM SERVIÇO
                    1
                    Orçamento
                    Entre em contato via Whatsapp, ou E-mail e solicite um orçamento do serviço desejado

                    2
                    Desenvolvimento
                    Começamos a reunir as informações necessárias para o desenvolvimento do documento

                    3
                    Pagamento
                    O pagamento é efetuado com o valor e a data especificada acordados no orçamento

                    4
                    Entrega
                    O documento será entregue em mãos, ou por outro meio acordado entre as partes
                                        </p>
                </div>
        </div> 
        
        
    </AreasContainer>

<Container className=" d-flex flex-column  align-items-center py-5" id="practice-advice">
<Maintext
title="Practice Advice"
description1="Problems trying to resolve the conflict between"
description2="the two major realms of Classical physics: Newtonian mechanics"
align="center"
/>
<div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 justify-content-between g-3 w-100">
    <div className="col d-flex">
    <CardPracticeAdvice 
    title="Frauds or Mislead"
    description="Newton thought that light was made up of particles, but then it was discovered "
    image={card1}
    />
    </div>
    <div className="col d-flex">
    <CardPracticeAdvice 
        title="Bailes & Warrants"
        description="'Quantum mechanics' is the description of the behaviour of matter"
        image={card2}
    />
    </div>
    <div className="col d-flex">
    
    <CardPracticeAdvice 
        title="Federal Drug Crimes"
        description="They describe a uiverse consisting of bodies moving"
        image={card3}
    />
    </div>
    <div className="col d-flex">
    <CardPracticeAdvice 
        title="Traffic Related Crimes"
        description="They finally obtained a consistent description of the behaviour "
        image={card4}
    />
    </div>
</div> 
</Container>
</> 
);

export default OurPracticeAreas;

