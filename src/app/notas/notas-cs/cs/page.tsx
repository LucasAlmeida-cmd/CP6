"use client";

import { TipoNotaCS } from "@/types";
import { param } from "framer-motion/m";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Produtos() {

    const navigate = useRouter();

    const [notas, setNotas] = useState<TipoNotaCS[]>([]);

    const handleDelete = async (id:number) =>{
        try {
            const response = await fetch(`http://localhost:3000/api/base-notas/base-cps/${id}`,{
                method: 'DELETE',
            });

            if (response.ok) {
                alert("Produto excluído com sucesso!");
                window.location.href = "/notas/notas-cs/cs";
            }

        } catch (error) {
            console.error("Falha na exclusão!");
            
        }
    }

    useEffect(() => {
        const chamadaApi = async ()=>{
            const response = await fetch("http://localhost:3000/api/base-notas/base-cps/");
            const Nota = await response.json();
            setNotas(Nota);
        }
        chamadaApi();
    },[]);
    
   
    return (
        <main className="border px-[10%] py-[7vh] flex flex-col border-red-600 w-full">
            <h2 className="lg:text-xl lg:font-bold">Challenge Sprints</h2>
            <div className="mb-7">
                <table className="table-border">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Id</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nome Aluno</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Materia</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Avaliação</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Descrição 1:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 1:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Descrição 2:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 2:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Descrição 3:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 3:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Descrição 4:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota 4:</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Editar | Excluir</th>
                        </tr>
                    </thead>

                    <tbody>
                        {notas.map((n) => (
                            <tr key={n.id}>
                                <td className="border border-slate-500 px-1 text-center">{n.id}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.nomeAluno}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.materia}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.avaliacaoCS}</td>  
                                <td className="border border-slate-500 px-1 text-center">{n.descricaoCS1}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.notaCS1}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.descricaoCS2}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.notaCS2}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.descricaoCS3}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.notaCS3}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.descricaoCS4}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.notaCS4}</td>
                                <td className="border border-slate-500 px-1 text-center"><Link href={`/notas/notas-cs/${n.id}`}>Editar</Link> | 
                                <Link href="#" onClick={()=>handleDelete(n.id)}> Excluir</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            
        </main>
    )
}
