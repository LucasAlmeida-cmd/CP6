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
        <div>
            <h2>Global Solution</h2>
            <table className="tabelaNotas">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome Aluno</th>
                        <th>Materia</th>
                        <th>Link</th>
                        <th>Nota</th>
                        <th>Descrição</th>
                        <th>Editar | Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {notas.map((n) => (
                        <tr key={n.id}>
                            <td>{n.id}</td>
                            <td>{n.nomeAluno}</td>
                            <td>{n.materia}</td>
                            <td><Link href={n.linkGS}>Link Projeto</Link></td>
                            <td>{n.notaGS}</td>
                            <td>{n.descricaoGS}</td>
                            <td><Link href={`/notas/notas-gs/${n.id}`}>Editar</Link> | 
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
