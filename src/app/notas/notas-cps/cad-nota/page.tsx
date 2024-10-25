"use client";

import { TipoNotaCP } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadProdutos() {
  const navigate = useRouter();

  const [nota, setNota] = useState<TipoNotaCP>({
    id: 0,
    nomeAluno: "",
    materia: "",
    avaliacao: "",
    notaCP: 0.0,
    data: "",
    feedback: "",
    notaCP2: 0.0,
    data2: "",
    feedback2: "",
    notaCP3: 0.0,
    data3: "",
    feedback3: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.ENDPOINT_URL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nota),
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso.");
        setNota({
          id: 0,
          nomeAluno: "",
          materia: "",
          avaliacao: "",
          notaCP: 0.0,
          data: "",
          feedback: "",
          notaCP2: 0.0,
          data2: "",
          feedback2: "",
          notaCP3: 0.0,
          data3: "",
          feedback3: "",
        });
        navigate.push("/produtos");
      }
    } catch (error) {
      console.error("Falha ao cadastrar produto!", error);
    }
  };

  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nome
            </label>
            <input
              type="string"
              id="idNome"
              name="nome"
              value={nota.nomeAluno}
              onChange={(e) => setNota({ ...nota, nomeAluno: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da Nota  "
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Materia
            </label>
            <input
              type="string"
              id="idMateria"
              name="materia"
              value={nota.materia}
              onChange={(e) =>
                setNota({ ...nota, materia: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Preço do produto"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Quantidade
            </label>
            <input
              type="string"
              id="idAvaliacao"
              name="avaliacao"
              value={nota.avaliacao}
              onChange={(e) =>
                setNota({ ...nota, avaliacao: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantidade do produto"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
