import { TipoNotaCS } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json', 'utf-8');
    const dados:TipoNotaCS[] = JSON.parse(file);

    const notas = dados.find(p => p.id == params.id);
    const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });

    return NextResponse.json(notas, { headers });
}

export async function PATCH(request: Request, { params }: { params: { id: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json','utf-8');
    const notas: TipoNotaCS[] = JSON.parse(file);

    const { nomeAluno, materia, avaliacaoCS, 
        descricaoCS1, notaCS1
        , descricaoCS2, notaCS2, 
        descricaoCS3, notaCS3, 
        descricaoCS4, notaCS4
     } = await request.json();

    const indice = notas.findIndex(nota => nota.id == params.id);

    if (indice != -1) {
     
        const notaAtualizada = {
            ...notas[indice], 
            nomeAluno: nomeAluno ?? notas[indice].nomeAluno, 
            materia: materia ?? notas[indice].materia,
            avaliacaoCS: avaliacaoCS ?? notas[indice].avaliacaoCS,
            descricaoCS1: descricaoCS1 ?? notas[indice].descricaoCS1,
            notaCS1: notaCS1 ?? notas[indice].notaCS1,
            descricaoCS2: descricaoCS2 ?? notas[indice].descricaoCS2,
            notaCS2: notaCS2 ?? notas[indice].notaCS2,
            descricaoCS3: descricaoCS3 ?? notas[indice].descricaoCS3,
            notaCS3: notaCS3 ?? notas[indice].notaCS3,
            descricaoCS4: descricaoCS4 ?? notas[indice].descricaoCS4,
            notaCS4: notaCS4 ?? notas[indice].notaCS4
        };

   
        notas.splice(indice, 1, notaAtualizada);

        await fs.writeFile(process.cwd() + '/src/data/basecps.json', JSON.stringify(notas));

        return NextResponse.json({ msg: "Nota atualizada com sucesso!" });
    } else {
        return NextResponse.json({ msg: "Nota não encontrada!" }, { status: 404 });
    }
}



export async function DELETE(request: Request, { params }: { params: { id: number } }) {


    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json','utf-8');
    const nota:TipoNotaCS[] = JSON.parse(file);
    
    const indice = nota.findIndex(p => p.id == params.id);

    if(indice != -1){
        nota.splice(indice, 1);
    
        const fileUpdate = JSON.stringify(nota);
        await fs.writeFile(process.cwd() + '/src/data/basecps.json',fileUpdate);
            
        return NextResponse.json({msg:"Nota excluída com sucesso!"});
    
    }
}
