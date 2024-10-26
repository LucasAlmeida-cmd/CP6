"use client";

import { TipoNotaCP } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarNota({ params }: { params: { id: number } }) {
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

    notaCP4: 0.0,
    data4: "",
    feedback4: "",
    
    notaCP5: 0.0,
    data5: "",
    feedback5: "",
    
    notaCP6: 0.0,
    data6: "",
    feedback6: ""
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
        `http://localhost:3000/api/base-notas/base-cps/${params.id}`,
        {
          method: "PATCH", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeAluno: nota.nomeAluno,
            materia: nota.materia,
            avaliacao: nota.avaliacao,

            notaCP: nota.notaCP,
            data: nota.data,
            feedback: nota.feedback,

            notaCP2: nota.notaCP2,
            data2: nota.data2,
            feedback2: nota.feedback2,

            notaCP3: nota.notaCP3,
            data3: nota.data3,
            feedback3: nota.feedback3,

            notaCP4: nota.notaCP4,
            data4: nota.data4,
            feedback4: nota.feedback4,

            notaCP5: nota.notaCP5,
            data5: nota.data5,
            feedback5: nota.feedback5,

            notaCP6: nota.notaCP6,
            data6: nota.data6,
            feedback6: nota.feedback6,
          }),
        }
      );

      if (response.ok) {
        alert("Nota atualizada com sucesso.");
        navigate.push("/notas/notas-cps/cps"); 
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
              onChange={(e) => handleChange(e)}
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
              name="materiaCP"
              value={nota.materia}
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome da avaliação"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nota 1:
            </label>
            <input
              type="number"
              id="idNota"
              name="notaCP"
              value={nota.notaCP}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Data 1:
            </label>
            <input
              type="string"
              id="idData"
              name="data"
              value={nota.data}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Feed Back 1:
            </label>
            <input
              type="string"
              id="idFeedback"
              name="feedback"
              value={nota.feedback}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Feed Back"
              required
            />
          </div>


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nota 2:
            </label>
            <input
              type="number"
              id="idNota"
              name="notaCP2"
              value={nota.notaCP2}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Data 2:
            </label>
            <input
              type="string"
              id="idData"
              name="data2"
              value={nota.data2}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Feed Back 2:
            </label>
            <input
              type="string"
              id="idFeedback"
              name="feedback2"
              value={nota.feedback2}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Feed Back"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nota 3:
            </label>
            <input
              type="number"
              id="idNota"
              name="notaCP3"
              value={nota.notaCP3}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Data 3:
            </label>
            <input
              type="string"
              id="idData"
              name="data3"
              value={nota.data3}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Feed Back 3:
            </label>
            <input
              type="string"
              id="idFeedback"
              name="feedback3"
              value={nota.feedback3}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Feed Back"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nota 4:
            </label>
            <input
              type="number"
              id="idNota"
              name="notaCP4"
              value={nota.notaCP4}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Data 4:
            </label>
            <input
              type="string"
              id="idData"
              name="data4"
              value={nota.data4}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Feed Back 4:
            </label>
            <input
              type="string"
              id="idFeedback"
              name="feedback4"
              value={nota.feedback4}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Feed Back"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nota 5:
            </label>
            <input
              type="number"
              id="idNota"
              name="notaCP5"
              value={nota.notaCP5}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Data 5:
            </label>
            <input
              type="string"
              id="idData"
              name="data5"
              value={nota.data5}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Feed Back 5:
            </label>
            <input
              type="string"
              id="idFeedback"
              name="feedback5"
              value={nota.feedback5}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Feed Back"
              required
            />
          </div>


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Nota 6:
            </label>
            <input
              type="number"
              id="idNota"
              name="notaCP6"
              value={nota.notaCP6}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valor da nota"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Data 6:
            </label>
            <input
              type="string"
              id="idData"
              name="data6"
              value={nota.data6}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Feed Back 6:
            </label>
            <input
              type="string"
              id="idFeedback"
              name="feedback6"
              value={nota.feedback6}
              onChange={(e) => handleChange(e)}
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
