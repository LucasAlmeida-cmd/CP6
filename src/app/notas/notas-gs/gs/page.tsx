"use client";

import { TipoNotaGS } from "@/types";
import { param } from "framer-motion/m";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Produtos() {

    const navigate = useRouter();

    const [notas, setNotas] = useState<TipoNotaGS[]>([]);

    const handleDelete = async (id:number) =>{
        try {
            const response = await fetch(`http://localhost:3000/api/base-notas/base-gs/${id}`,{
                method: 'DELETE',
            });

            if (response.ok) {
                alert("Produto escluído com sucesso!");
                window.location.href = "/notas/notas-gs/gs";
            }

        } catch (error) {
            console.error("Falha na exclusão!");
            
        }
    }

    useEffect(() => {
        const chamadaApi = async ()=>{
            const response = await fetch("http://localhost:3000/api/base-notas/base-gs/");
            const data = await response.json();
            setNotas(data);
        }
        chamadaApi();
    },[]);
    
   
    return (
        <main className="border px-[10%] py-[7vh] flex flex-col border-red-600 w-full">
            <h2 className="lg:text-xl lg:font-bold">Global Solution</h2>
            <div className="mb-7">
                <table className="table-border">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Id</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nome Aluno</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Materia</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Link</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Nota</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Descrição</th>
                            <th className="border border-slate-300 bg-slate-200 whitespace-nowrap px-3 py-1">Editar | Excluir</th>
                        </tr>
                    </thead>

                    <tbody>
                        {notas.map((n) => (
                            <tr key={n.id}>
                                <td className="border border-slate-500 px-1 text-center">{n.id}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.nomeAluno}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.materia}</td>
                                <td className="border border-slate-500 px-1 text-center"><Link href={n.linkGS}>Link Projeto</Link></td>
                                <td className="border border-slate-500 px-1 text-center">{n.notaGS}</td>
                                <td className="border border-slate-500 px-1 text-center">{n.descricaoGS}</td>
                                <td className="border border-slate-500 px-1 text-center"><Link href={`/notas/notas-gs/${n.id}`}>Editar</Link> | 
                                <Link href="#" onClick={()=>handleDelete(n.id)}> Excluir</Link></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            
        </main>
    )
}
