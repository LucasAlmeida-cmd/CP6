"use client";

import { TipoNotaCP } from "@/types";
import { param } from "framer-motion/m";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Produtos() {

    const navigate = useRouter();

    const [notas, setNotas] = useState<TipoNotaCP[]>([]);

    const handleDelete = async (id:number) =>{
        try {
            const response = await fetch(`http://localhost:3000/api/base-notas/base-cps/${id}`,{
                method: 'DELETE',
            });

            if (response.ok) {
                alert("Produto escluído com sucesso!");
                window.location.href = "/notas/notas-cps/cps";
            }

        } catch (error) {
            console.error("Falha na exclusão!");
            
        }
    }

    useEffect(() => {
        const chamadaApi = async ()=>{
            const response = await fetch("http://localhost:3000/api/base-notas/base-cps/");
            const data = await response.json();
            setNotas(data);
        }
        chamadaApi();
    },[]);
    
   
    return (
        <div>
            <h2>Check Points</h2>
            
            <table className="tabelaProd">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome Aluno</th>
                        <th>Materia</th>
                        <th>Avaliação</th>
                        <th>Nota 1:</th>
                        <th>Data 1:</th>
                        <th>FeedBack 1:</th>
                        <th>Nota 2:</th>
                        <th>Data 2:</th>
                        <th>FeedBack 2:</th>
                        <th>Nota 3:</th>
                        <th>Data 3:</th>
                        <th>FeedBack 3:</th>
                        <th>Editar | Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {notas.map((n) => (
                        <tr key={n.id}>
                            <td>{n.id}</td>
                            <td>{n.nomeAluno}</td>
                            <td>{n.materia}</td>
                            <td>{n.avaliacao}</td>  
                            <td>{n.notaCP}</td>
                            <td>{n.data}</td>
                            <td>{n.feedback}</td>
                            <td>{n.notaCP2}</td>
                            <td>{n.data2}</td>
                            <td>{n.feedback2}</td>
                            <td>{n.notaCP3}</td>
                            <td>{n.data3}</td>
                            <td>{n.feedback3}</td>
                            <td><Link href={`/notas/notas-cps/${n.id}`}>Editar</Link> | 
                            <Link href="#" onClick={()=>handleDelete(n.id)}> Excluir</Link></td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={5}>
                            Quantidade de registros: {notas.length}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
