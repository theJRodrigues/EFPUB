import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="bg-[url(/assets/bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat bg-gray-600 bg-blend-darken min-h-screen flex flex-col">
      <Header />

      <main className="text-white grow flex flex-col  justify-center items-center">
        <section className="w-1/2 space-y-4 ml-2 text-center">
          <h1 className="text-7xl font-bold">Bem vindo ao EFPUB!</h1>
          <div>
            <p className="text-2xl">
              Aqui começa sua jornada rumo ao controle financeiro e à liberdade de escolha.
            </p>
            <p className="text-2xl">Aprenda, pratique e transforme seu futuro!</p>
          </div>
        </section>
      </main>
      <footer>
        <img src="/assets/logo.png" alt="imagem de gráficos" className=" w-full max-w-15 m-auto" />
      </footer>
    </div>
  );
};

export default Home;
