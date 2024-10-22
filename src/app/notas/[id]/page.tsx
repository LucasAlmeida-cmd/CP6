"use client";

import { TipoNota } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarNota({ params }: { params: { id: number } }) {

  const navigate = useRouter();

  const [nota, setNota] = useState<TipoNota>({
    id: 0,
    nomeAluno: "",
    materia:"",
    avaliacao:"",
    nota: 0.0,
    data: "",
    feedback: ""
});

  useEffect(() => {
      const chamadaApi = async ()=>{
        const response = await fetch(`http://localhost:3000/api/base-notas/${params.id}`);
        const data = await response.json();
        setNota(data);
      }
      chamadaApi();
  }, [params])


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        //Realizando um destructuring no evento que é passado como parâmetro:
        const { name, value } = e.target;
        //Aqui estamos atualizando o estado do produto com o novo valor do campo que foi alterado pelo usuário ao digitar os dados neste mesmo campo.
        setNota((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/base-notas/${params.id}`, {
        method:"PUT",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(nota)
      });

      if(response.ok){
        alert("Nota atualizada com sucesso.")
        setNota({
            id: 0,
            nomeAluno: "",
            materia:"",
            avaliacao:"",
            nota: 0.0,
            data: "",
            feedback: ""
      });
        navigate.push("/notas");
      }

    } catch (error) {
      console.error("Falha ao atualizar nota!",error);
    }

  }

  return (
    <div>
      <h2>Atualizando Nota:</h2>

      <div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nome Aluno
            </label>
            <input
              type="string"
              id="idNome"
              name="nome"
              value={nota.nomeAluno}
              onChange={(e)=> handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome do aluno"
              
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
              onChange={(e)=> handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome da materia"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Avaliação
            </label>
            <input
              type="string"
              id="idAvaliacao"
              name="avaliacao"
              value={nota.avaliacao}
              onChange={(e)=> handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome da avaliação"
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
              name="nota"
              value={nota.nota}
              onChange={(e)=> handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Data
            </label>
            <input
              type="string"
              id="idData"
              name="data"
              value={nota.data}
              onChange={(e)=> handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Feed Back
            </label>
            <input
              type="string"
              id="idFeedback"
              name="feedback"
              value={nota.feedback}
              onChange={(e)=> handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Feed Back"
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
