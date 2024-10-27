import { NextResponse } from "next/server";
import {promises as fs} from "fs";
import { TipoNotaGS } from "@/types";

export async function GET() {   
    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json','utf-8');
    const dados = JSON.parse(file);

    const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });

    return NextResponse.json(dados, { headers });
}

export async function POST(request:Request) {

   
    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json','utf-8');
   
    const listaDeNotas:TipoNotaGS[] = JSON.parse(file);
    
    const{ id,nomeAluno, materia, linkGS, notaGS, descricaoGS} = await request.json();
   
    const notas = { id,nomeAluno, materia, linkGS, notaGS, descricaoGS} as TipoNotaGS;

    notas.id = (listaDeNotas[ listaDeNotas.length - 1 ].id + 1);

    
    listaDeNotas.push(notas);
    
    const fileCreated = JSON.stringify(listaDeNotas);
    await fs.writeFile(process.cwd() + '/src/data/basecps.json',fileCreated);
        
    return NextResponse.json(notas,{status:201});

}