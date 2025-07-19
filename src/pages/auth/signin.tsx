import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) alert("Erro ao fazer login");
    else alert("Login bem-sucedido!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="p-2 border rounded-md mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        className="p-2 border rounded-md mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Entrar
      </button>
    </form>
  );
}
