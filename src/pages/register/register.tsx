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
      <section className="max-w-xl mx-auto p-6 bg-slate-900 text-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Cadastro de Instituição</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <label className="font-medium flex flex-col">
            Nome da Instituição
            <input {...register("nomeInstituicao")} className="border " />
            {errors.nomeInstituicao && (
              <p className="text-red-600 text-sm">{errors.nomeInstituicao.message}</p>
            )}
          </label>

          <label className="block font-medium">
            Nome do Responsável
            <input {...register("responsavel")} className="input" />
            {errors.responsavel && <p className="text-red-600 text-sm">{errors.responsavel.message}</p>}
          </label>

          <label className="block font-medium">
            E-mail institucional
            <input type="email" {...register("email")} className="input" />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </label>

          <label className="block font-medium">
            Telefone
            <input type="tel" {...register("telefone")} className="input" />
            {errors.telefone && <p className="text-red-600 text-sm">{errors.telefone.message}</p>}
          </label>

          <fieldset className="grid grid-cols-2 gap-4">
            <label className="block font-medium">
              Município
              <input {...register("municipio")} className="input" />
              {errors.municipio && <p className="text-red-600 text-sm">{errors.municipio.message}</p>}
            </label>

            <label className="block font-medium">
              Estado
              <input {...register("estado")} className="input" />
              {errors.estado && <p className="text-red-600 text-sm">{errors.estado.message}</p>}
            </label>
          </fieldset>

          <label className="block font-medium">
            Número estimado de alunos
            <input type="string" {...register("alunos")} className="input" />
            {errors.alunos && <p className="text-red-600 text-sm">{errors.alunos.message}</p>}
          </label>

          <label className="block font-medium">
            Observações (opcional)
            <textarea {...register("observacoes")} className="input h-24" />
          </label>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Enviar Solicitação
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
