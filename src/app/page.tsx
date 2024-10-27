import Link from "next/link";

export default function Home() {
  return (
    <main className="px-[10%] py-[15vh] flex flex-col gap-[5vh] justify-between">
      <div className="flex lg:flex-row sm:flex-col justify-between w-full gap-3">
        <Link href="/notas/notas-cps/cps">
          <div className="border hover:border-blue-800 rounded flex flex-col transition ease-in-out lg:px-4 lg:py-2 hover:shadow-md">
            <div>
              <h2 className="font-semibold w-full text-center">
                Checkpoints
              </h2>
              <p className="break-words text-center">
                Acesse aqui as nossas notas de Checkpoints. 
              </p>
            </div>
          </div>
        </Link>
        <Link href="/notas/notas-gs/gs">
          <div className="border hover:border-blue-800 rounded lg:px-4 lg:py-2 flex flex-col hover:shadow-md transition ease-in-out ">
            <div>
              <h2 className="font-semibold w-full text-center">
                Global Solution
              </h2>
              <p className="break-words text-center">
                Acesse aqui as nossas notas na Global Solution.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/notas/notas-cps/cps">
          <div className="border hover:border-blue-800 rounded lg:px-4 lg:py-2 flex flex-col hover:shadow-md transition ease-in-out ">
            <h2 className="font-semibold w-full text-center">
              Challenge Sprints
            </h2>
            <p className="break-words text-center">
              Acesse aqui as nossas notas nas sprints do Challenge.
            </p>
          </div>
        </Link>
      </div>
      <div className="w-full border transition ease-in-out hover:border-blue-800 rounded py-5 px-[3vw]">
        <h1 className="font-semibold mb-5 lg:text-xl">Médias do Grupo por Tipo de Avaliação</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <h1 className="font-medium block w-[10%] break-words">Checkpoints</h1>
            <div className="bg-blue-800 h-5 w-[78%] rounded-r-md"></div>
            <p>78</p>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="font-medium block w-[10%] break-words">Global Solution</h1>
            <div className="bg-blue-800 h-5 w-[90%] rounded-r-md"></div>
            <p>90</p>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="font-medium block w-[10%] break-words">Challenge Sprints</h1>
            <div className="bg-blue-800 h-5 w-[82%] rounded-r-md"></div>
            <p>82</p>
          </div>

        </div>
      </div>
    </main>
  )
}