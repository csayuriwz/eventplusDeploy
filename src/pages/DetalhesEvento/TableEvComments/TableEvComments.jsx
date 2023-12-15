import React from "react";
import "./TableEvComments.css";
import iconeLixo from "../../../assets/images/trash-delete.svg";
import ToggleSwitch from "../../../components/Toggle/Toggle";

const TableComentarios = ({ dados, fnDelete, fnExibe }) => {
  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--little">
            Nome
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Descrição
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>

      <tbody>
        {dados.map((comentario) => (
          <tr
            key={comentario.idComentarioEvento}
            className="table-data__head-row"
          >
            <td className="table-data__data table-data__data--little">
              {comentario.usuario.nome}
            </td>

            <td className="table-data__data table-data__data--little">
              {comentario.descricao}
            </td>

            <td className="table-data__data table-data__data--little">
              <img
                className="table-data__icon"
                src={iconeLixo}
                alt="Ícone de lixeira para deletar"
                onClick={() => fnDelete(comentario.idComentarioEvento)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComentarios;
