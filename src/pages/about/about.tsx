import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center p-3 gap-5">
        <section className="w-1/2 text-xl">
          <h1 className="text-7xl text-slate-200 mb-4">Sobre o EFPUB</h1>
          <p className="mb-4">
            O <strong>EFPUB – Educação Financeira Pública</strong> é um projeto criado para ajudar
            adolescentes da rede pública a entender e aplicar conceitos de educação financeira no dia a dia.
            Por meio de trilhas de aprendizado interativas, buscamos promover a autonomia, o planejamento e o
            pensamento empreendedor.
          </p>
        </section>
        <section className="w-1/2 flex flex-col gap-4">
          <article className="bg-slate-900 p-4 rounded w-50 m-auto">
            <h2 className="font-semibold text-2xl text-center text-slate-200">Missão</h2>
            <p className="text-slate-300">
              Promover a educação financeira entre adolescentes da rede pública, oferecendo acesso gratuito a
              conteúdos práticos que incentivam o planejamento, a autonomia e o uso consciente do dinheiro.
            </p>
          </article>
          <article className="bg-slate-900 p-4 rounded w-50 m-auto">
            <h2 className="font-semibold text-2xl text-center text-slate-200">Visão</h2>
            <p className="text-slate-300">
              Tornar-se referência em inclusão financeira digital para jovens, contribuindo para a formação de
              cidadãos preparados para lidar com desafios econômicos da vida adulta.
            </p>
          </article>
          <article className="bg-slate-900 p-4 rounded w-50 m-auto">
            <h2 className="font-semibold text-2xl text-center text-slate-200">Valores</h2>
            <ul className="text-slate-300">
              <li>
                <span className="font-bold">Inclusão:</span> acesso para todos.
              </li>
              <li>
                <span className="font-bold">Autonomia:</span> protagonismo na vida financeira.
              </li>
              <li>
                <span className="font-bold">Responsabilidade:</span> decisões conscientes.
              </li>
              <li>
                <span className="font-bold">Inovação:</span> tecnologia como meio educativo.
              </li>
              <li>
                <span className="font-bold">Empatia:</span> respeito às diferentes realidades.
              </li>
            </ul>
          </article>
        </section>
      </main>

      <footer className="bg-slate-950 p-2">
        <p className="text-sm text-slate-300 text-center">
          Desenvolvido como parte de uma atividade extensionista do Centro Universitário Internacional
          UNINTER.
        </p>
      </footer>
    </div>
  );
};

export default About;
