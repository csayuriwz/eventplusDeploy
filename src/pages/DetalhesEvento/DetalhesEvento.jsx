import api from "../../Services/Service";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import MainContent from "../../components/MainContent/MainContent";
import Notification from "../../components/Notification/Notification";
import Banner from "../../components/Banner/Banner";
import Container from "../../components/Container/Container";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";


const DetalhesEvento = () => {
//   const { state } = useLocation();

    const {catarina} = useParams({}) 
    const {userData} = useContext(UserContext)
    const [evento, setEvento] = useState([]);
    const [notifyUser, setNotifyUser] = useState(); //Componente Notification

    useEffect (() => {
        async function buscarEvento() {
            
            //fazer o get para pegar os dados do evento
            const promise= await api.get(`/Evento/${catarina}`)
            const dados = await promise.data;
            setEvento(dados);
            console.log(dados);

            if (userData.role === "Administrador") {
                //fazer o get pra pegar todos os comentarios
                
            } else {
                //fazer o get pra pegar os comentarios da IA
                
            }
        }
        buscarEvento();
    }, [])

  
    return (
    
        <MainContent>
          {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
          <Banner />
    
         
            <Container>
    
            
            </Container>
          
    
         
    
          <VisionSection />
          <ContactSection />
        </MainContent>
      );
  
};

export default DetalhesEvento;
