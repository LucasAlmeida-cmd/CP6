"use client";

import { TipoNotaCP } from "@/types";
import { param } from "framer-motion/m";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Produtos() {
  const navigate = useRouter();

  const [notas, setNotas] = useState<TipoNotaCP[]>([]);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/base-notas/base-cps/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Produto escluído com sucesso!");
        window.location.href = "/notas/notas-cps/cps";
      }
    } catch (error) {
      console.error("Falha na exclusão!");
    }
  };

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(
        "http://localhost:3000/api/base-notas/base-cps/"
      );
      const data = await response.json();
      setNotas(data);
    };
    chamadaApi();
  }, []);

  return (
    <main className="px-[10%] py-[7vh] flex flex-col w-full">
      <h1 className="lg:text-xl lg:font-bold">Notas dos Checkpoints</h1>
      <div className="mb-7">
        <h2 className="lg:text-lg lg:font-semibold">1º Semestre</h2>
        <table className="table-border">
          <thead>
            <tr>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Id</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nome Aluno</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Materia</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Avaliação</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 1:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Data 1:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">FeedBack 1:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 2:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Data 2:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">FeedBack 2:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 3:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Data 3:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">FeedBack 3:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Editar | Excluir</th>
            </tr>
          </thead>

          <tbody>
            {notas.map((n) => (
              <tr key={n.id}>
                <td className="border border-slate-500 px-1 text-center">{n.id}</td>
                <td className="border border-slate-500 px-1 text-center">{n.nomeAluno}</td>
                <td className="border border-slate-500 px-1 text-center">{n.materia}</td>
                <td className="border border-slate-500 px-1 text-center">{n.avaliacao}</td>
                <td className="border border-slate-500 px-1 text-center">{n.notaCP}</td>
                <td className="border border-slate-500 px-1 text-center">{n.data}</td>
                <td className="border border-slate-500 px-1 text-center">{n.feedback}</td>
                <td className="border border-slate-500 px-1 text-center">{n.notaCP2}</td>
                <td className="border border-slate-500 px-1 text-center">{n.data2}</td>
                <td className="border border-slate-500 px-1 text-center">{n.feedback2}</td>
                <td className="border border-slate-500 px-1 text-center">{n.notaCP3}</td>
                <td className="border border-slate-500 px-1 text-center">{n.data3}</td>
                <td className="border border-slate-500 px-1 text-center">{n.feedback3}</td>
                <td className="border border-slate-500 px-1 text-center">
                  <Link href={`/notas/notas-cps/${n.id}`}>Editar</Link> |
                  <Link href="#" onClick={() => handleDelete(n.id)}>
                    {" "}
                    Excluir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div>
        <h2 className="lg:text-lg lg:font-semibold">2º Semestre</h2>
        <table className="tabelaProd">
          <thead>
            <tr>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Id</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nome Aluno</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Materia</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Avaliação</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 4:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Data 4:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">FeedBack 4:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 5:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Data 5:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">FeedBack 5:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 6:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Data 6:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">FeedBack 6:</th>
              <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Editar | Excluir</th>
            </tr>
          </thead>

          <tbody>
            {notas.map((n) => (
              <tr key={n.id}>
                <td className="border border-slate-500 px-1 text-center">{n.id}</td>
                <td className="border border-slate-500 px-1 text-center">{n.nomeAluno}</td>
                <td className="border border-slate-500 px-1 text-center">{n.materia}</td>
                <td className="border border-slate-500 px-1 text-center">{n.avaliacao}</td>
                <td className="border border-slate-500 px-1 text-center">{n.notaCP4}</td>
                <td className="border border-slate-500 px-1 text-center">{n.data4}</td>
                <td className="border border-slate-500 px-1 text-center">{n.feedback4}</td>
                <td className="border border-slate-500 px-1 text-center">{n.notaCP5}</td>
                <td className="border border-slate-500 px-1 text-center">{n.data5}</td>
                <td className="border border-slate-500 px-1 text-center">{n.feedback5}</td>
                <td className="border border-slate-500 px-1 text-center">{n.notaCP6}</td>
                <td className="border border-slate-500 px-1 text-center">{n.data6}</td>
                <td className="border border-slate-500 px-1 text-center">{n.feedback6}</td>
                <td className="border border-slate-500 px-1 text-center">
                  <Link href={`/notas/notas-cps/${n.id}`}>Editar</Link> |
                  <Link href="#" onClick={() => handleDelete(n.id)}>
                    {" "}
                    Excluir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
