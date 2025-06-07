import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="bg-[url(/assets/bg-home.jpg)] bg-cover bg-fixed bg-center bg-no-repeat bg-gray-600 bg-blend-darken min-h-screen flex flex-col">
      <Header />

      <main className="text-white grow flex flex-col justify-center">
        <section className="w-1/2 space-y-4 ml-2">
          <h1 className="text-7xl font-bold">Bem vindo ao EFPUB!</h1>
          <p className="text-2xl">
            Aqui começa sua jornada rumo ao controle financeiro e à liberdade de escolha. Aprenda, pratique e
            transforme seu futuro!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
