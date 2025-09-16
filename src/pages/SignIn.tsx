import { useState } from "react"
import { Input } from "../components/Input.tsx"
import { Button } from "../components/Button.tsx"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Formulário enviado")
    console.log({ email, password })
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={e => setEmail(e.target.value)}
      />


      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={e => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a 
        href="/signup"
        className="text-sm font-semibold text-center text-gray-100 mt-10 mb-4 hover:text-green-800 transition ease-linear"
      >
        Criar Conta 
      </a>

    </form>
  )
}