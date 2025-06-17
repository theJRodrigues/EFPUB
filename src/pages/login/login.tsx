import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/Header";

const loginSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type LoginData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log("Login:", data);
  };

  return (
    <div className="bg-[url(/assets/bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat bg-gray-600 bg-blend-darken min-h-screen flex flex-col">
      <Header />
      <section className="grow flex flex-col w-50 ml-auto bg-gradient-to-b from-slate-900 to-slate-800 ">
        <h1 className="text-white text-center mt-10 text-4xl">Seja bem-vindo!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 p-3 text-white mt-10">
          <label className="flex flex-col gap-0.5">
            E-mail
            <input
              type="email"
              {...register("email")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </label>

          <label className="flex flex-col gap-0.5">
            Senha
            <input
              type="password"
              {...register("senha")}
              className="py-1 px-2 bg-slate-800 rounded-md ring ring-slate-600 focus:ring-slate-400 outline-0"
            />
            {errors.senha && <p className="text-red-600 text-sm">{errors.senha.message}</p>}
          </label>

          <button
            type="submit"
            className="bg-slate-800 ring ring-slate-600 px-4 py-2 rounded hover:bg-slate-700 hover:ring-slate-400 transition cursor-pointer m-auto mt-2"
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
