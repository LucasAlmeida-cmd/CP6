"use client";

import { TipoNotaGS } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarNota({ params }: { params: { id: number } }) {
  const navigate = useRouter();

  const [nota, setNota] = useState<TipoNotaGS>({
    id: 0,
    nomeAluno: "",
    materia: "",
    linkGS: "", 
    notaGS: 0.0,
    descricaoGS: "",
  });

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/base-notas/base-gs/${params.id}`
      );
      const data = await response.json();
      setNota(data);
    };
    chamadaApi();
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNota((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/base-notas/base-gs/${params.id}`,
        {
          method: "PATCH", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeAluno: nota.nomeAluno,
            materia: nota.materia,
            linkGS: nota.linkGS,
            notaGS: nota.notaGS,
            descricaoGS: nota.descricaoGS,
          }),
        }
      );

      if (response.ok) {
        alert("Nota atualizada com sucesso.");
        navigate.push("/notas/notas-gs/gs"); 
      } else {
        const errorMessage = await response.text();
        console.error("Erro ao atualizar a nota:", errorMessage);
        alert(`Erro ao atualizar a nota: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
      alert("Falha ao atualizar a nota!");
    }
  };


  return (
    <div>
      <h2>Atualizando Nota GS:</h2>

      <div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nome Aluno
            </label>
            <input
              type="string"
              id="idNome"
              name="nomeAluno"
              value={nota.nomeAluno}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome do aluno"
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
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome da materia"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Link do Projeto
            </label>
            <input
              type="string"
              id="idLink"
              name="linkGS"
              value={nota.linkGS}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Link do Projeto"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nota
            </label>
            <input
              type="number"
              id="idNota"
              name="notaGS"
              value={nota.notaGS}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Descrição
            </label>
            <input
              type="string"
              id="idDescrição"
              name="descricaoGS"
              value={nota.descricaoGS}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descrição do Projeto"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Alterar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
