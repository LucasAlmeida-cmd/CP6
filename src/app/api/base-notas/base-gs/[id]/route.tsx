import { TipoNotaGS } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json', 'utf-8');
    const dados:TipoNotaGS[] = JSON.parse(file);

    const notas = dados.find(p => p.id == params.id);

    return NextResponse.json(notas);
}

export async function PATCH(request: Request, { params }: { params: { id: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json','utf-8');
    const notas: TipoNotaGS[] = JSON.parse(file);
    
    const{nomeAluno, materia, linkGS, notaGS, descricaoGS} = await request.json();

    const indice = notas.findIndex(p => p.id == params.id);

    if (indice != -1) {
       
        const notaAtualizada = {
            ...notas[indice],
            nomeAluno: nomeAluno ?? notas[indice].nomeAluno, 
            materia: materia ?? notas[indice].materia,
            linkGS: linkGS ?? notas[indice].linkGS,
            notaGS: notaGS ?? notas[indice].notaGS,
            descricaoGS: descricaoGS ?? notas[indice].descricaoGS,
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
    const nota:TipoNotaGS[] = JSON.parse(file);
    const indice = nota.findIndex(p => p.id == params.id);

    
    if(indice != -1){
        nota.splice(indice, 1);
    
    
        const fileUpdate = JSON.stringify(nota);
        await fs.writeFile(process.cwd() + '/src/data/basecps.json',fileUpdate);
            
        return NextResponse.json({msg:"Nota excluída com sucesso!"});
    
    }
}
