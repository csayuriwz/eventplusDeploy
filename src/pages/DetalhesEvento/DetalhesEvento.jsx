import api, { commentaryEventResource } from "../../Services/Service";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import MainContent from "../../components/MainContent/MainContent";
import Notification from "../../components/Notification/Notification";
import Banner from "../../components/Banner/Banner";
import Container from "../../components/Container/Container";
import EventoAnterior from "../../components/EventoAnterior/EventoAnterior";
import Title from "../../components/Title/Title";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import { eventoAnteriorResource } from "../../Services/Service";
import backArrow from '../../assets/images/arrow-back-8.svg'

import "./DetalhesEvento.css"

const DetalhesEvento = () => {
  //   const { state } = useLocation();

  const { catarina } = useParams();
  const { userData } = useContext(UserContext);
  const {state} = useLocation();


  const [evento, setEvento] = useState([]);
  const [eventosAnteriores, setEventosAnteriores] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [notifyUser, setNotifyUser] = useState(); //Componente Notification

 

  useEffect(() => {
    async function DetailsEvents( ) {
      try {
        const promiseFeedbacks = await api.get(commentaryEventResource);

        setFeedback(promiseFeedbacks.data);

        console.log(promiseFeedbacks.data);
        console.log(feedback);
      } catch (error) {
        
      }
    }
    DetailsEvents();
  }, []);

  return (
    <MainContent>
      {userData.role == "Administrador" ? (
        <Link to={"/eventos"}>
          <img className="setinha" src={backArrow} alt="setinha para voltar" />
        </Link>
      ):(
        <Link to={"/eventos-alunos"}>
          <img src={backArrow} alt="setinha para voltar" />
        </Link>
      )}

      <section className="detalhes-evento">
        
          <Title titleText={evento.nomeEvento} />
          <div className="events-box">
            <EventoAnterior
              key={evento.idEvento}
              title={evento.nomeEvento}
              description={evento.descricao}
              eventDate={evento.dataEvento}
              idEvent={evento.idEvento}
            />
          </div>
       
      </section>
    </MainContent>
  );
};

export default DetalhesEvento;
