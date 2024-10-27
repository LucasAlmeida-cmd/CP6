import Link from "next/link";

export default function Menu() {
  return (
    <main className="w-full font-semibold pb-[40vh]">
      <div className="border-b-2 border-blue-500 w-full py-3 ps-3"><Link href="/">Home</Link></div>
      <div className="border-b-2 border-blue-500 w-full py-3 ps-3"><Link href="notas/notas-cps/cps">Checkpoints</Link></div>
      <div className="border-b-2 border-blue-500 w-full py-3 ps-3"><Link href="notas/notas-gs/gs">Global Solution</Link></div>
      <div className="border-b-2 border-blue-500 w-full py-3 ps-3"><Link href="notas/notas-cs/cs">Challenge Sprints</Link></div>
      <div className="border-b-2 border-blue-500 w-full py-3 ps-3 text-blue-500"><Link href="notas/cad-notas">Cadastro de notas</Link></div>
    </main>
  )
}
