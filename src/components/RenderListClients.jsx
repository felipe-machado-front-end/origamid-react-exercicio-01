import React from "react";
import { clientes } from "../data/clientes";
import ClientItem from "./ClientItem";

function RenderListClients() {
  const renderList = () => (
    <div>
      {clientes.map((cliente, index) => (
        <ClientItem key={index} data={cliente} />
      ))}
    </div>
  );
  return <div>{renderList()}</div>;
}

export default RenderListClients;
