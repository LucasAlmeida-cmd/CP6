import Link from "next/link";
import imagemMenu from "@/img/icone-menu.png";
import Image from "next/image";

export default function Menu() {
  return (
    <nav className="h-full lg:w-full sm:w-fit">
      <ul className="lg:gap-5 lg:font-semibold sm:hidden lg:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/notas/notas-cps/cps">Checkpoints</Link>
        </li>
        <li>
          <Link href="/notas/notas-gs/gs">Global Solution</Link>
        </li>
        
        <li>
          <Link href="/notas/notas-cs/cs">Challenge Sprints</Link>
        </li>
        <li>
          <Link href="/notas/cad-notas/" className="text-blue-500">Cadastro de Notas</Link>
        </li>
      </ul>
      <ul className="sm:block lg:hidden w-[75%]">
        <Link href="/menu-mobile/">
          <Image
            src={imagemMenu}
            className="w-full h-auto"
            alt="ícone de menu"
          />
        </Link>
      </ul>
    
    </nav>
  );
}
