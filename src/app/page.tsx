import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cubos Movies - Descubra lançamentos, filmes, séries e mais!",
  description:
    "Descubra os melhores filmes para assistir! Explore nossa coleção "
    + "com lançamentos, clássicos e recomendações personalizadas. Encontre "
    + "seu próximo filme agora!", // 157 characters
};

export default function Home() {
  return (
    <div>
      <h1>Hello, Montserrat</h1>
      <h2 className="font-inter">Hello, Inter</h2>
      <h3 className="font-roboto">Hello, Roboto</h3>
    </div>
  );
}
