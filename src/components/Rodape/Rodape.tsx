import fotoArthur from "@/img/foto-arthur.png";
import fotoLucas from "@/img/foto-lucas.jpg";
import fotoVictor from "@/img/foto-victor.jpg";
import Image from "next/image";

export default function Rodape() {
  return (
    <footer className="w-full text-white bg-black font-bold flex justify-between gap-5 lg:px-[7vw] lg:py-7 lg:items-center lg:flex-row sm:px-[7vw] sm:py-7 sm:items-center sm:flex-col">
      <div className="lg:text-2xl sm:text-xl">
        <h1>QuantumLeap</h1>
      </div>
      <div className="lg:w-[40%] lg:h-fit flex flex-col lg:gap-3 sm:gap-2">
        Desenvolvido por:
        <ul className="flex flex-col gap-3">
          <li className="flex gap-3 items-center lg:h-[7vh] sm:h-[5vh]">
            <Image src={fotoArthur} className="w-auto h-full rounded-full" />
            <p className="lg:font-semibold">Arthur Eduardo Luna Pulini</p>
          </li>
          <li className="flex gap-3 items-center lg:h-[7vh] sm:h-[5vh]">
            <Image src={fotoLucas} className="w-auto h-full rounded-full" />
            <p className="lg:font-semibold">
              Lucas Almeida Fernandes de Moraes
            </p>
          </li>
          <li className="flex gap-3 items-center lg:h-[7vh] sm:h-[5vh]">
            <Image src={fotoVictor} className="w-auto h-full rounded-full" />
            <p className="lg:font-semibold">Victor Nascimento Cosme</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
