import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/Header";

const formSchema = z.object({
  nomeInstituicao: z.string().min(3, "Nome é obrigatório"),
  responsavel: z.string().min(3, "Nome do responsável é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(8, "Telefone inválido"),
  municipio: z.string().min(2, "Município obrigatório"),
  estado: z.string().min(2, "Estado obrigatório"),
  alunos: z.coerce.number({ invalid_type_error: "Informe um número valido" }).min(1, "Informe a quantidade"),
  observacoes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    reset();
  };

  return (
    <div className="bg-[url(/assets/bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat bg-gray-600 bg-blend-darken min-h-screen flex flex-col">
      <Header />
      <section className="m-auto px-6 py-2  bg-slate-900 text-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-3">Cadastro de Instituição</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 flex flex-col">
          <label className="flex flex-col gap-0.5">
            Nome da Instituição
            <input
              {...register("nomeInstituicao")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
            />
            {errors.nomeInstituicao && (
              <p className="text-red-600 text-sm">{errors.nomeInstituicao.message}</p>
            )}
          </label>

          <label className="flex flex-col gap-0.5">
            Nome do Responsável
            <input
              {...register("responsavel")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
            />
            {errors.responsavel && <p className="text-red-600 text-sm">{errors.responsavel.message}</p>}
          </label>

          <label className="flex flex-col gap-0.5">
            E-mail institucional
            <input
              type="email"
              {...register("email")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </label>

          <label className="flex flex-col gap-0.5">
            Telefone
            <input
              type="tel"
              {...register("telefone")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
            />
            {errors.telefone && <p className="text-red-600 text-sm">{errors.telefone.message}</p>}
          </label>

          <fieldset className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-0.5">
              Município
              <input
                {...register("municipio")}
                className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
              />
              {errors.municipio && <p className="text-red-600 text-sm">{errors.municipio.message}</p>}
            </label>

            <label className="flex flex-col gap-0.5">
              Estado
              <input
                {...register("estado")}
                className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
              />
              {errors.estado && <p className="text-red-600 text-sm">{errors.estado.message}</p>}
            </label>
          </fieldset>

          <label className="flex flex-col gap-0.5">
            Número estimado de alunos
            <input
              type="string"
              {...register("alunos")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
            />
            {errors.alunos && <p className="text-red-600 text-sm">{errors.alunos.message}</p>}
          </label>

          <label className="flex flex-col gap-0.5">
            Observações (opcional)
            <textarea
              {...register("observacoes")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0 min-h-10"
            />
          </label>

          <button
            type="submit"
            className="bg-slate-800 ring ring-slate-600 px-4 py-2 rounded hover:bg-slate-700 hover:ring-slate-400 transition cursor-pointer m-auto"
          >
            Enviar Solicitação
          </button>
        </form>
      </section>
      <section>
        <article>
          <h1>Para cadastro de Alunos:</h1>
          <p>
            Para o cadastro como aluno é necessário entrar em contato com a sua instituição de ensino, para
            que a mesma possa realizar o seu cadastro corretamente.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Register;
