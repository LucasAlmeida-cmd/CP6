import { NextResponse } from "next/server";
import { promises as fs} from "fs";
import { TipoNotaCP } from "@/types";

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

    const listaDeNotas:TipoNotaCP[] = JSON.parse(file);

    const{ id,nomeAluno,materia,avaliacao,
        notaCP, data, feedback,
        notaCP2, data2, feedback2, 
        notaCP3, data3, feedback3,
        notaCP4, data4, feedback4,
        notaCP5, data5, feedback5,
        notaCP6, data6, feedback6} = await request.json();
    
    const notas = { id,nomeAluno,materia,avaliacao,notaCP, data, feedback,notaCP2, data2, feedback2, notaCP3, data3, feedback3,notaCP4, data4, feedback4,notaCP5, data5, feedback5,notaCP6, data6, feedback6} as TipoNotaCP;

    
    notas.id = (listaDeNotas[ listaDeNotas.length - 1 ].id + 1);

    
    listaDeNotas.push(notas);
    
    const fileCreated = JSON.stringify(listaDeNotas);
    await fs.writeFile(process.cwd() + '/src/data/basecps.json',fileCreated);
        
    return NextResponse.json(notas,{status:201});
}