import Button from "@/app/components/atoms/Button";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-ivory-50 p-12 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-sage-200 pb-6">
        <h1 className="text-4xl font-bold text-forest-900 mb-2">Sistema de Diseño</h1>
        <p className="text-sage-600">
          Galería de componentes y variantes del átomo <code>&lt;Button /&gt;</code>
        </p>
      </div>

      {/* 1. VARIANTES DE COLOR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-forest-800 border-l-4 border-sage-500 pl-4">
          1. Variantes (Variants)
        </h2>
        <p className="text-forest-600 mb-4">
          Se controlan con la propiedad <code>variant="..."</code>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center bg-white p-8 rounded-xl shadow-sm border border-ivory-200">
          
          {/* PRIMARY */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary">Primary</Button>
            <span className="text-xs text-sage-500 font-mono">variant="primary"</span>
          </div>

          {/* SECONDARY */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary">Secondary</Button>
            <span className="text-xs text-sage-500 font-mono">variant="secondary"</span>
          </div>

          {/* OUTLINE */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline">Outline</Button>
            <span className="text-xs text-sage-500 font-mono">variant="outline"</span>
          </div>

          {/* GHOST */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="ghost">Ghost Button</Button>
            <span className="text-xs text-sage-500 font-mono">variant="ghost"</span>
          </div>

        </div>
      </section>

      {/* 2. TAMAÑOS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-forest-800 border-l-4 border-coffee-400 pl-4">
          2. Tamaños (Sizes)
        </h2>
        <p className="text-forest-600 mb-4">
          Se controlan con la propiedad <code>size="..."</code>. Funcionan en cualquier variante.
        </p>
        
        <div className="flex flex-wrap items-end gap-8 bg-white p-8 rounded-xl shadow-sm border border-ivory-200">
          
          <div className="flex flex-col items-center gap-2">
            <Button size="sm" variant="primary">Small</Button>
            <span className="text-xs text-sage-500 font-mono">size="sm"</span>
          </div>

          <div className="flex flex-col items-center gap-2">
             <Button size="md" variant="primary">Medium (Default)</Button>
             <span className="text-xs text-sage-500 font-mono">size="md"</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button size="lg" variant="primary">Large Button</Button>
            <span className="text-xs text-sage-500 font-mono">size="lg"</span>
          </div>

        </div>
      </section>

      {/* 3. ESTADOS Y MEZCLAS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-forest-800 border-l-4 border-blush-400 pl-4">
          3. Estados y Contexto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta Oscura (Para probar contraste) */}
          <div className="bg-forest-900 p-8 rounded-xl shadow-md text-center space-y-4">
            <h3 className="text-ivory-100 font-bold">Sobre fondo oscuro</h3>
            <div className="flex justify-center gap-4">
               <Button variant="primary">Acción</Button>
               {/* Aquí el outline se ve genial */}
               <Button variant="outline" className="border-ivory-200 text-ivory-100 hover:bg-forest-800">
                 Borde Claro
               </Button>
            </div>
          </div>

          {/* Estado Deshabilitado */}
          <div className="bg-ivory-200 p-8 rounded-xl text-center space-y-4 border border-ivory-300">
            <h3 className="text-forest-800 font-bold">Estado Disabled</h3>
            <div className="flex justify-center gap-4">
               <Button variant="primary" disabled>Procesando...</Button>
               <Button variant="secondary" disabled>No Click</Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}