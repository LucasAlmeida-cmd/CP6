"use client";

import { TipoNota } from "@/types";
import { param } from "framer-motion/m";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Produtos() {

    const navigate = useRouter();

    const [notas, setNotas] = useState<TipoNota[]>([]);

    const handleDelete = async (id:number) =>{
        try {
            const response = await fetch(`http://localhost:3000/api/base-notas/${id}`,{
                method: 'DELETE',
            });

            if (response.ok) {
                alert("Produto escluído com sucesso!");
                window.location.href = "/notas";
            }

        } catch (error) {
            console.error("Falha na exclusão!");
            
        }
    }

    useEffect(() => {
        const chamadaApi = async ()=>{
            const response = await fetch("http://localhost:3000/api/base-notas");
            const data = await response.json();
            setNotas(data);
        }
        chamadaApi();
    },[]);
    
   
    return (
        <div>
            <h2>CPS</h2>
            <table className="tabelaProd">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome Aluno</th>
                        <th>Materia</th>
                        <th>Avaliação</th>
                        <th>Nota</th>
                        <th>Data</th>
                        <th>FeedBack</th>
                        <th>Editar | Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {notas.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nomeAluno}</td>
                            <td>{p.materia}</td>
                            <td>{p.avaliacao}</td>
                            <td>{p.nota}</td>
                            <td>{p.data}</td>
                            <td>{p.feedback}</td>
                            <td><Link href={`/notas/${p.id}`}>Editar</Link> | 
                            <Link href="#" onClick={()=>handleDelete(p.id)}> Excluir</Link></td>
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
