export type TipoNotaCP = {
    id: number;
    nomeAluno: string;
    materia: string;
    avaliacao: string;
    notaCP: number;
    data: string;
    feedback: string;
    notaCP2: number;
    data2: string;
    feedback2: string;
    notaCP3: number;
    data3: string;
    feedback3: string;
    notaCP4: number;
    data4: string;
    feedback4: string;
    notaCP5: number;
    data5: string;
    feedback5: string;
    notaCP6: number;
    data6: string;
    feedback6: string;
}

export type TipoNotaGS = {
    id: number;
    nomeAluno: string;
    materia: string;
    linkGS: string;
    notaGS: number;
    descricaoGS: string;
}

export type TipoNotaCS = {
    id: number;
    nomeAluno: string;
    materia: string;
    avaliacaoCS: string;

    descricaoCS1: string;
    notaCS1: number;
    
    descricaoCS2: string;
    notaCS2: number;
    descricaoCS3: string;
    notaCS3: number;
    descricaoCS4: string;
    notaCS4: number;
    
}