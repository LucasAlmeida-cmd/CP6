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
}