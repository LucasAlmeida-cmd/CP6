"use client";

import { TipoCriacao } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadNotas() {

  const navigate = useRouter();

    const [nota, setNota] = useState<TipoCriacao>({
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
        feedback6: "",
        linkGS: "",
        notaGS: 0.0,
        descricaoGS: "",
        avaliacaoCS:"",
        descricaoCS1: "",
        notaCS1: 0.0,
        descricaoCS2: "",
        notaCS2: 0.0,
        descricaoCS3: "",
        notaCS3: 0.0,
        descricaoCS4: "",
        notaCS4: 0.0  
    });

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      try {
        const response = await fetch("http://localhost:3000/api/base-notas/base-p/", {
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(nota)
        });

        if(response.ok){
          alert("Produto cadastrado com sucesso.")
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
            notaCP4: 0.0,
            data4: "",
            feedback4: "",
            notaCP5: 0.0,
            data5: "",
            feedback5: "",
            notaCP6: 0.0,
            data6: "",
            feedback6: "",
            linkGS: "",
            notaGS: 0.0,
            descricaoGS: "",
            avaliacaoCS:"",
            descricaoCS1: "",
            notaCS1: 0.0,
            descricaoCS2: "",
            notaCS2: 0.0,
            descricaoCS3: "",
            notaCS3: 0.0,
            descricaoCS4: "",
            notaCS4: 0.0  
        });
          navigate.push("/");
        }

      } catch (error) {
        console.error("Falha ao cadastrar nota!",error);
      }
 
    }

  return (
    <div>
        <h1>Cadastro de Notas</h1>
        <div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nome Aluno</label>
            <input
              type="string"
              id="idNome"
              name="nomeAluno"
              value={nota.nomeAluno}
               onChange={(e)=> setNota({...nota,nomeAluno:e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome Aluno"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Materia</label>
            <input
              type="string"
              id="idMateria"
              name="materia"
              value={nota.materia}
              onChange={(e)=> setNota({...nota,materia: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Materia"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Escrever: Check Point</label>
            <input
              type="string"
              id="idAvaliacao"
              name="avaliacao"
              value={nota.avaliacao}
              onChange={(e)=> setNota({...nota,avaliacao:e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome da Avaliação"
              required
            />
          </div>



          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CP 1:</label>
            <input
              type="number"
              id="idNotaCP"
              name="notaCP"
              value={nota.notaCP}
              onChange={(e)=> setNota({...nota,notaCP: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CP 1:"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data CP 1:</label>
            <input
              type="string"
              id="idData"
              name="data"
              value={nota.data}
              onChange={(e)=> setNota({...nota,data: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data CP1"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Feedback CP 1:</label>
            <input
              type="string"
              id="idFeedback"
              name="feedback"
              value={nota.feedback}
              onChange={(e)=> setNota({...nota,feedback: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FeedBack CP1"
              required
            />
          </div>



          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CP 2:</label>
            <input
              type="number"
              id="idNotaCP"
              name="notaCP2"
              value={nota.notaCP2}
              onChange={(e)=> setNota({...nota,notaCP2: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CP 2:"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data CP 2:</label>
            <input
              type="string"
              id="idData"
              name="data2"
              value={nota.data2}
              onChange={(e)=> setNota({...nota,data2: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data CP2"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Feedback CP 2:</label>
            <input
              type="string"
              id="idFeedback"
              name="feedback2"
              value={nota.feedback2}
              onChange={(e)=> setNota({...nota,feedback2: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FeedBack CP2"
              required
            />
          </div>



          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CP 3:</label>
            <input
              type="number"
              id="idNotaCP"
              name="notaCP3"
              value={nota.notaCP3}
              onChange={(e)=> setNota({...nota,notaCP3: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CP 3:"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data CP 3:</label>
            <input
              type="string"
              id="idData"
              name="data3"
              value={nota.data3}
              onChange={(e)=> setNota({...nota,data3: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data CP3"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Feedback CP 3:</label>
            <input
              type="string"
              id="idFeedback"
              name="feedback3"
              value={nota.feedback3}
              onChange={(e)=> setNota({...nota,feedback3: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FeedBack CP3"
              required
            />
          </div>



          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CP 4:</label>
            <input
              type="number"
              id="idNotaCP"
              name="notaCP4"
              value={nota.notaCP4}
              onChange={(e)=> setNota({...nota,notaCP4: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CP 4:"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data CP 4:</label>
            <input
              type="string"
              id="idData"
              name="data4"
              value={nota.data4}
              onChange={(e)=> setNota({...nota,data4: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data CP4"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Feedback CP 4:</label>
            <input
              type="string"
              id="idFeedback"
              name="feedback4"
              value={nota.feedback4}
              onChange={(e)=> setNota({...nota,feedback4: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FeedBack CP4"
              required
            />
          </div>


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CP 5:</label>
            <input
              type="number"
              id="idNotaCP"
              name="notaCP5"
              value={nota.notaCP5}
              onChange={(e)=> setNota({...nota,notaCP5: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CP 5:"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data CP 5:</label>
            <input
              type="string"
              id="idData"
              name="data5"
              value={nota.data5}
              onChange={(e)=> setNota({...nota,data5: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data CP5"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Feedback CP 5:</label>
            <input
              type="string"
              id="idFeedback"
              name="feedback5"
              value={nota.feedback5}
              onChange={(e)=> setNota({...nota,feedback5: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FeedBack CP5"
              required
            />
          </div>


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CP 6:</label>
            <input
              type="number"
              id="idNotaCP"
              name="notaCP6"
              value={nota.notaCP6}
              onChange={(e)=> setNota({...nota,notaCP6: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CP 6:"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data CP 1:</label>
            <input
              type="string"
              id="idData"
              name="data6"
              value={nota.data6}
              onChange={(e)=> setNota({...nota,data6: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data CP6"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Feedback CP 6:</label>
            <input
              type="string"
              id="idFeedback"
              name="feedback6"
              value={nota.feedback6}
              onChange={(e)=> setNota({...nota,feedback6: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="FeedBack CP6"
              required
            />
          </div>



          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Link GS:</label>
            <input
              type="string"
              id="idLinkGS"
              name="linkGS"
              value={nota.linkGS}
              onChange={(e)=> setNota({...nota,linkGS: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Link GS"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota GS:</label>
            <input
              type="number"
              id="idNotaGS"
              name="notaGS"
              value={nota.notaGS}
              onChange={(e)=> setNota({...nota,notaGS: parseFloat( e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Data CP1"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descrição GS:</label>
            <input
              type="string"
              id="idDescricaoGS"
              name="descricaoGS"
              value={nota.descricaoGS}
              onChange={(e)=> setNota({...nota,descricaoGS: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descricao GS"
              required
            />
          </div>

          
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Escrever: Challenge Sprints</label>
            <input
              type="string"
              id="idAvaliacaocS"
              name="avaliacaoCS"
              value={nota.avaliacaoCS}
              onChange={(e)=> setNota({...nota,avaliacaoCS: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descricao GS"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descrição CS 1:</label>
            <input
              type="string"
              id="idDescricaoCS1"
              name="descricaoCS1"
              value={nota.descricaoCS1}
              onChange={(e)=> setNota({...nota,descricaoCS1: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descricao CS 1"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CS 1:</label>
            <input
              type="string"
              id="idNotaCS1"
              name="notaCS1"
              value={nota.notaCS1}
              onChange={(e)=> setNota({...nota,notaCS1: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CS 1"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descrição CS 2:</label>
            <input
              type="string"
              id="idDescricaoCS2"
              name="descricaoCS2"
              value={nota.descricaoCS2}
              onChange={(e)=> setNota({...nota,descricaoCS2: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descricao CS 2"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CS 2:</label>
            <input
              type="string"
              id="idNotaCS2"
              name="notaCS2"
              value={nota.notaCS2}
              onChange={(e)=> setNota({...nota,notaCS2: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CS 2"
              required
            />
          </div>


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descrição CS 3:</label>
            <input
              type="string"
              id="idDescricaoCS3"
              name="descricaoCS3"
              value={nota.descricaoCS3}
              onChange={(e)=> setNota({...nota,descricaoCS3: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descricao CS 3"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CS 3:</label>
            <input
              type="string"
              id="idNotaCS3"
              name="notaCS3"
              value={nota.notaCS3}
              onChange={(e)=> setNota({...nota,notaCS3: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CS 3"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descrição CS 4:</label>
            <input
              type="string"
              id="idDescricaoCS4"
              name="descricaoCS4"
              value={nota.descricaoCS4}
              onChange={(e)=> setNota({...nota,descricaoCS4: e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descricao CS 4"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nota CS 2:</label>
            <input
              type="string"
              id="idNotaCS4"
              name="notaCS4"
              value={nota.notaCS4}
              onChange={(e)=> setNota({...nota,notaCS4: parseFloat(e.target.value)})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nota CS 4"
              required
            />
          </div>


          <div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
          </div>

        </form>
      </div>
     
    </div>
  )
}
