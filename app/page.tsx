import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-50 overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 border-b border-ivory-200">
        {/* Elemento decorativo de fondo (opcional) */}
        <div className="absolute top-0 right-0 -z-10 opacity-20 translate-x-1/4 -translate-y-1/4 blur-3xl">
          <div className="aspect-square w-[600px] rounded-full bg-gradient-to-br from-sage-200 to-blush-200"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-sage-600 tracking-wider uppercase text-sm font-semibold">
                Hola, mi nombre es
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-forest-900 tracking-tight leading-tight">
                Miguel Solis.
                <span className="block text-sage-600">
                  Creo experiencias digitales.
                </span>
              </h1>
              <p className="text-lg text-forest-700 max-w-xl leading-relaxed">
                Soy un desarrollador apasionado por construir software excelente
                que mejora la vida de las personas. Especializado en crear
                interfaces modernas y funcionales.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="#proyectos"
                className="px-8 py-4 rounded-full bg-sage-600 text-ivory-50 font-bold text-lg hover:bg-sage-700 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Ver mis proyectos
              </Link>
              <Link
                href="#contacto"
                className="px-8 py-4 rounded-full border-2 border-coffee-400 text-coffee-700 font-bold text-lg hover:bg-coffee-50 transition-all"
              >
                Contáctame
              </Link>
            </div>
          </div>
          
          {/* Placeholder para tu foto o una imagen abstracta */}
          <div className="relative hidden lg:block h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-ivory-200 border-4 border-ivory-100 rotate-3 hover:rotate-0 transition-all duration-500">
             {/* TIP: Reemplaza esto con una foto tuya real usando el componente <Image /> de Next.js.
                 Por ahora uso un div de color.
             */}
             <div className="absolute inset-0 bg-gradient-to-tr from-forest-800 to-sage-500 opacity-90 mix-blend-multiply"></div>
             <div className="absolute inset-0 flex items-center justify-center text-ivory-100 font-bold text-2xl">
               [Tu Foto Aquí]
             </div>
          </div>
        </div>
      </section>

      {/* --- BREVE SOBRE MÍ --- */}
      <section className="py-20 px-6 bg-ivory-100">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-forest-800">
            Un poco sobre mí
          </h2>
          <p className="text-lg text-forest-600 leading-relaxed">
            Me encanta moverme entre el diseño y el código. Mi objetivo es
            fusionar la estética con la funcionalidad técnica. Cuando no estoy
            programando, probablemente estoy explorando nuevas tecnologías o
            diseñando interfaces de usuario intuitivas.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE PROYECTOS DESTACADOS (Estática por ahora) --- */}
      <section id="proyectos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <p className="text-sage-600 font-mono uppercase tracking-wider font-bold mb-2">Portafolio</p>
               <h2 className="text-4xl font-bold text-forest-900">Proyectos Destacados</h2>
            </div>
             <Link href="/proyectos" className="hidden md:block text-coffee-600 hover:text-coffee-800 underline underline-offset-4 font-semibold">
                Ver el archivo completo &rarr;
             </Link>
          </div>

          {/* GRID DE PROYECTOS (Placeholders visuales usando tus colores) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Proyecto 1 */}
            <article className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-ivory-200 hover:-translate-y-2">
              <div className="h-64 bg-forest-100 relative overflow-hidden">
                {/* Placeholder de imagen */}
                <div className="absolute inset-0 bg-gradient-to-r from-sage-200 to-forest-200 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex gap-2 mb-4">
                   <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-blush-100 text-blush-800">React</span>
                   <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-sage-100 text-sage-800">Tailwind</span>
                </div>
                <h3 className="text-2xl font-bold text-forest-900 group-hover:text-sage-700 transition-colors">
                  <Link href="#"> Plataforma E-commerce Moderna </Link>
                </h3>
                <p className="text-forest-600 line-clamp-3">
                  Una solución completa de comercio electrónico construida desde cero, enfocada en la velocidad y la experiencia del usuario.
                </p>
              </div>
            </article>

             {/* Proyecto 2 */}
             <article className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-ivory-200 hover:-translate-y-2">
              <div className="h-64 bg-coffee-100 relative overflow-hidden">
                {/* Placeholder de imagen */}
                <div className="absolute inset-0 bg-gradient-to-r from-coffee-200 to-blush-200 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="p-8 space-y-4">
                 <div className="flex gap-2 mb-4">
                   <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-forest-100 text-forest-800">Next.js</span>
                   <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-coffee-100 text-coffee-800">Sanity CMS</span>
                </div>
                <h3 className="text-2xl font-bold text-forest-900 group-hover:text-coffee-700 transition-colors">
                  <Link href="#"> Blog de Arquitectura Minimalista </Link>
                </h3>
                <p className="text-forest-600 line-clamp-3">
                  Un sitio web de contenido dinámico conectado a un CMS headless, diseñado con una estética limpia y tonos tierra.
                </p>
              </div>
            </article>
          </div>
          
           <div className="mt-10 text-center md:hidden">
              <Link href="/proyectos" className="text-coffee-600 font-semibold">
                Ver todos los proyectos &rarr;
              </Link>
           </div>
        </div>
      </section>

      {/* --- SECCIÓN DE SKILLS (Impacto oscuro) --- */}
      <section className="py-24 px-6 bg-forest-900 text-ivory-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
           <h2 className="text-3xl font-bold mb-6">Tecnologías que domino</h2>
           <p className="text-forest-200 max-w-2xl mx-auto">
             Siempre estoy aprendiendo, pero estas son las herramientas centrales de mi flujo de trabajo actual.
           </p>
        </div>

        {/* Lista de Skills tipo "Pills" */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js 14', 'Tailwind CSS v4', 'Node.js', 'Sanity CMS', 'Git', 'Figma'].map((skill) => (
               <div key={skill} className="px-6 py-3 rounded-xl bg-forest-800 border border-forest-700 font-medium text-sage-200 shadow-sm hover:bg-forest-700 hover:border-sage-500 transition-all cursor-default">
                 {skill}
               </div>
            ))}
        </div>
      </section>

      {/* --- CONTACTO / FOOTER CTA --- */}
      <section id="contacto" className="py-32 px-6 bg-ivory-200 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-extrabold text-forest-900">
            ¿Tienes una idea en mente?
          </h2>
          <p className="text-xl text-forest-700">
            Estoy disponible para nuevos proyectos y colaboraciones. Hablemos sobre cómo puedo ayudarte a dar vida a tu visión.
          </p>
          <a href="mailto:tuemail@ejemplo.com" className="inline-block px-10 py-5 rounded-full bg-coffee-600 text-ivory-50 font-bold text-xl hover:bg-coffee-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
             Envíame un correo
          </a>
        </div>
      </section>
    </main>
  );
}