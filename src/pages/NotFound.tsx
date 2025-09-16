export function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
      <h1 className="text-gray-100 font-semibold text-2xl mb-10">404 - Not Found 🚫</h1>
      <a 
        href="/"
        className="font-semibold text-center text-green-100 hover:text-green-200 transition-colors"  >Voltar para o início</a>

      </div>
    </div>
  )
}