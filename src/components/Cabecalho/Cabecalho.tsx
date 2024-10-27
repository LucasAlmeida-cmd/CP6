import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="flex lg:px-[7vw] lg:py-5 lg:font-bold lg:gap-[5vw] lg:justify-start hover:shadow-md ease-in duration-300 items-center sm:px-[7vw] sm:py-5 sm:font-bold sm:gap-[5vw] sm:justify-between border">
      <h1 className="lg:text-xl text-blue-800">QuantumLeap</h1>
      <Menu />
    </header>
  );
}
