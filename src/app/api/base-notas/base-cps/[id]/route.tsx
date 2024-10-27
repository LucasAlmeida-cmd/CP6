import { TipoNotaCP } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json', 'utf-8');
    const dados:TipoNotaCP[] = JSON.parse(file);

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
    const notas: TipoNotaCP[] = JSON.parse(file);

    const { nomeAluno, materia, avaliacao, notaCP, data, feedback,notaCP2, data2, feedback2,notaCP3, data3, feedback3
        ,notaCP4, data4, feedback4
        ,notaCP5, data5, feedback5
        ,notaCP6, data6, feedback6
     } = await request.json();

    const indice = notas.findIndex(nota => nota.id == params.id);

    if (indice != -1) {
     
        const notaAtualizada = {
            ...notas[indice], 
            nomeAluno: nomeAluno ?? notas[indice].nomeAluno, 
            materia: materia ?? notas[indice].materia,
            avaliacao: avaliacao ?? notas[indice].avaliacao,
            notaCP: notaCP ?? notas[indice].notaCP,
            data: data ?? notas[indice].data,
            feedback: feedback ?? notas[indice].feedback,
            notaCP2: notaCP2 ?? notas[indice].notaCP2,
            data2: data2 ?? notas[indice].data2,
            feedback2: feedback2 ?? notas[indice].feedback2,
            notaCP3: notaCP3 ?? notas[indice].notaCP3,
            data3: data3 ?? notas[indice].data3,
            feedback3: feedback3 ?? notas[indice].feedback3,
            notaCP4: notaCP4 ?? notas[indice].notaCP4,
            data4: data4 ?? notas[indice].data4,
            feedback4: feedback4 ?? notas[indice].feedback4,
            notaCP5: notaCP5 ?? notas[indice].notaCP5,
            data5: data5 ?? notas[indice].data5,
            feedback5: feedback5 ?? notas[indice].feedback5,
            notaCP6: notaCP6 ?? notas[indice].notaCP6,
            data6: data6 ?? notas[indice].data6,
            feedback6: feedback6 ?? notas[indice].feedback6,
            
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
    //Realizando o parse de string para objeto literal
    const nota:TipoNotaCP[] = JSON.parse(file);
    
    const indice = nota.findIndex(p => p.id == params.id);

    if(indice != -1){
        nota.splice(indice, 1);
    
        const fileUpdate = JSON.stringify(nota);
        await fs.writeFile(process.cwd() + '/src/data/basecps.json',fileUpdate);
            
        return NextResponse.json({msg:"Nota excluída com sucesso!"});
    
    }
}
