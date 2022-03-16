import React from "react";

function ClientItem({ data }) {
  return (
    <div>
      <div className="border-4 mb-10">
        <div className="">
          {data.ativa ? (
            <span className="text-green-600 text-xl font-bold">Ativa</span>
          ) : (
            <span className="text-red-700 text-xl font-bold">Inativa</span>
          )}
        </div>
        <p className="text-4xl">{data.nome}</p>
        <p className="text-2xl mt-2 mx-3">{data.idade} anos</p>
        {data.compras.map((compra, index) => (
          <p className="border-2 p-4 m-4" key={index}>
            {compra.nome} - {compra.preco}
          </p>
        ))}

        <span className="text-gray-500 text-3xl p-4  ">
          Total: R$
          {data.compras
            .map((compra) => Number(compra.preco.replace("R$ ", "")))
            .reduce((a, b) => a + b)}
        </span>

        <p>
          {" "}
          {data.compras
            .map((compra) => Number(compra.preco.replace("R$ ", "")))
            .reduce((a, b) => a + b) > 10000 ? (
            <span className="text-red-700 m-6">Você está gastando demais!</span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}

export default ClientItem;
