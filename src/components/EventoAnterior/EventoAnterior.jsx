import React from "react";
import "./EventoAnterior.css";
import { Link } from "react-router-dom";

import { Tooltip } from "react-tooltip";

// importar a função lá do arquivo stringFunction (destructuring)
import { dateFormatDbToView } from "../../Utils/stringFunctions";

const EventoAnterior = ({ title, description = "", eventDate = "", idEvent, evento }) => {
  function detalhes(idEvent) {
    // dá pra usar a prop idEvent? testar
    alert(`Chamar o recurso para os detalhes do evento: ${idEvent}`);
  }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>

      <p
        className="event-card__description"
        
        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        <Tooltip id={idEvent} className="tooltip" />
        {description.substr(0, 15)} ...
        ...
      </p>

      <p className="event-card__description">
        {/* aplicar a função pra converter a data */}
        {dateFormatDbToView(eventDate)}
        {/* {eventDate} */}
      </p>

      <Link className="event-card__connect-link"></Link>

      {/* <a
      state={evento} href={"/detalhes-evento"}
        // onClick={() => {
        //   detalhes(idEvent);
        // }}
        className="event-card__connect-link"
      >
        Detalhes do Evento
      </a> */}

      <Link
      state={evento} to={`/detalhes-evento/${idEvent}`}
        // onClick={() => {
        //   detalhes(idEvent);
        // }}
        className="event-card__connect-link"
      >
        Detalhes do Evento
      </Link>
    </article>
  );
};

export default EventoAnterior;
