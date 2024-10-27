"use client";

import { TipoNotaCS } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarNota({ params }: { params: { id: number } }) {
  const navigate = useRouter();

  const [nota, setNota] = useState<TipoNotaCS>({
    id: 0,
    nomeAluno: "",
    materia: "",
    avaliacaoCS: "",
    descricaoCS1: "",
    notaCS1: 0.0,
    descricaoCS2: "",
    notaCS2: 0.0,
    descricaoCS3: "",
    notaCS3: 0.0,
    descricaoCS4: "",
    notaCS4: 0.0,
    
  });

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/base-notas/base-cps/${params.id}`
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
        `http://localhost:3000/api/base-notas/base-cs/${params.id}`,
        {
          method: "PATCH", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeAluno: nota.nomeAluno,
            materia: nota.materia,
            avaliacaoCS: nota.avaliacaoCS,
            descricaoCS1: nota.descricaoCS1,
            notaCS1: nota.notaCS1,
            descricaoCS2: nota.descricaoCS2,
            notaCS2: nota.notaCS2,
            descricaoCS3: nota.descricaoCS3,
            notaCS3: nota.notaCS3,
            descricaoCS4: nota.descricaoCS4,
            notaCS4: nota.notaCS4,
          }),
        }
      );

      if (response.ok) {
        alert("Nota atualizada com sucesso.");
        navigate.push("/notas/notas-cs/cs"); 
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
    <main className="px-[10%] py-[7vh] flex flex-col w-full">
      <h2 className="text-xl font-bold mb-7">Atualizando Nota:</h2>
      
      <form className="w-full" onSubmit={handleSubmit}>
        <fieldset className="grid grid-cols-2 gap-x-[10%] w-full">

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nome Aluno
            </label>
            <input
              type="string"
              id="idNome"
              name="nomeAluno"
              value={nota.nomeAluno}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
              placeholder="Nome do aluno"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Materia
            </label>
            <input
              type="string"
              id="idMateria"
              name="materia"
              value={nota.materia}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Nome da materia"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Avaliação  
            </label>
            <input
              type="string"
              id="idAvaliacaoCS"
              name="avaliacaoCS"
              value={nota.avaliacaoCS}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Nome da avaliação"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Descrição atividade 1:
            </label>
            <input
              type="string"
              id="idDescricaoCS"
              name="descricaoCS1"
              value={nota.descricaoCS1}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Descrição atividade "
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Nota 1:
            </label>
            <input
              type="number"
              id="idNotaCS"
              name="notaCS1"
              value={nota.notaCS1}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Valor da nota"
              required
            />
          </div>


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Descrição atividade 2:
            </label>
            <input
              type="string"
              id="idDescricaoCS"
              name="descricaoCS2"
              value={nota.descricaoCS2}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Descrição atividade"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Nota 2:
            </label>
            <input
              type="number"
              id="idNotaCS"
              name="notaCS2"
              value={nota.notaCS2}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Valor da nota"
              required
            />
          </div>


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Descrição atividade 3:
            </label>
            <input
              type="string"
              id="idDescricaoCS"
              name="descricaoCS3"
              value={nota.descricaoCS3}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Descrição atividade"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Nota 3:
            </label>
            <input
              type="number"
              id="idNotaCS"
              name="notaCS3"
              value={nota.notaCS3}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Valor da nota"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Descrição atividade 4:
            </label>
            <input
              type="string"
              id="idDescricaoCS"
              name="descricaoCS4"
              value={nota.descricaoCS4}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Descrição atividade"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Nota 4:
            </label>
            <input
              type="number"
              id="idNotaCS"
              name="notaCS4"
              value={nota.notaCS4}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
              placeholder="Valor da nota"
              required
            />
          </div>
        </fieldset>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Alterar
          </button>
        </div>
      </form>
      
    </main>
  );
}
