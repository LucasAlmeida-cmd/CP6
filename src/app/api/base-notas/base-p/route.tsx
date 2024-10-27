import { NextResponse } from "next/server";
import {promises as fs} from "fs";
import { TipoCriacao } from "@/types";

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

    //Recuperando os dados da nossa PSEUDO-BASE de dados o arquivo .json.

    const file = await fs.readFile(process.cwd() + '/src/data/basecps.json','utf-8');
    //Realizando o parse de string para objeto literal
    const listaDeProdutos:TipoCriacao[] = JSON.parse(file);

    const{id,nomeAluno,materia,avaliacao,
        notaCP, data, feedback,
        notaCP2, data2, feedback2, 
        notaCP3, data3, feedback3,
        notaCP4, data4, feedback4,
        notaCP5, data5, feedback5,
        notaCP6, data6, feedback6,
        descricaoCS1, notaCS1, 
        descricaoCS2, notaCS2, 
        descricaoCS3, notaCS3, 
        descricaoCS4, notaCS4,
        linkGS, notaGS, descricaoGS} = await request.json();
  
    const produto = {id,nomeAluno,materia,avaliacao,
        notaCP, data, feedback,
        notaCP2, data2, feedback2, 
        notaCP3, data3, feedback3,
        notaCP4, data4, feedback4,
        notaCP5, data5, feedback5,
        notaCP6, data6, feedback6,
        descricaoCS1, notaCS1, 
        descricaoCS2, notaCS2, 
        descricaoCS3, notaCS3, 
        descricaoCS4, notaCS4,
        linkGS, notaGS, descricaoGS} as TipoCriacao;

    produto.id = (listaDeProdutos[ listaDeProdutos.length - 1 ].id + 1);

    listaDeProdutos.push(produto);
    const fileCreated = JSON.stringify(listaDeProdutos);
    await fs.writeFile(process.cwd() + '/src/data/basecps.json',fileCreated);
        
    return NextResponse.json(produto,{status:201});

}