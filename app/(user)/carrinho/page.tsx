import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ShoppingCartPage() {
  return (
    <section className="mx-14 xl:mx-10 md:mx-0 py-4 md:px-4">
      <h2 className="mb-4 mt-4">Seus Items:</h2>
      <main className="flex w-full gap-4">
        <div className="w-full p-4 border-gray-300 border rounded-xl shadow-md">
          <h3>Item 1</h3>
          <p>Descrição do item 1</p>
          <p>Preço: R$ 100,00</p>
          <button>Remover</button>
        </div>
        <aside className=" flex flex-col gap-4">
          <div className="p-4 border-gray-300 border rounded-xl shadow-md">
            <h2>Total do pedido</h2>
            <p>Preço toal: R$100,00</p>
            <p>Desconto: R$ 10,00</p>
            <p>Frete: R$20,00</p>
            <p>Total: R$9.009,00</p>
            <button>Seguir para o pagamento</button>
            <span>OU</span>
            <button>Continuar comprando</button>
          </div>
          <div className="p-4 border-gray-300 border rounded-xl shadow-md">
            <Label>Digite o cupom de desconto:</Label>
            <Input
              placeholder="Digite o cupom de desconto"
              type="text"
              className="mt-2"
            />
            <Button type="submit" variant="outline" className="w-full mt-4">
              Aplicar cupom
            </Button>
          </div>
        </aside>
      </main>
    </section>
  )
}
