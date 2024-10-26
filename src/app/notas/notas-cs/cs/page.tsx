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
        <div>
            <h2>Challenge Sprints</h2>
            
            <table className="tabelaProd">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome Aluno</th>
                        <th>Materia</th>
                        <th>Avaliação</th>

                        <th>Descrição 1:</th>
                        <th>Nota 1:</th>

                        <th>Descrição 2:</th>
                        <th>Nota 2:</th>
       
                        <th>Descrição 3:</th>
                        <th>Nota 3:</th>

                        <th>Descrição 4:</th>
                        <th>Nota 4:</th>
    
                        <th>Editar | Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {notas.map((n) => (
                        <tr key={n.id}>
                            <td>{n.id}</td>
                            <td>{n.nomeAluno}</td>
                            <td>{n.materia}</td>
                            <td>{n.avaliacaoCS}</td>  
                            <td>{n.descricaoCS1}</td>
                            <td>{n.notaCS1}</td>
                            <td>{n.descricaoCS2}</td>
                            <td>{n.notaCS2}</td>
                            <td>{n.descricaoCS3}</td>
                            <td>{n.notaCS3}</td>
                            <td>{n.descricaoCS4}</td>
                            <td>{n.notaCS4}</td>
                            <td><Link href={`/notas/notas-cs/${n.id}`}>Editar</Link> | 
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
