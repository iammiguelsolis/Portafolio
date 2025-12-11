interface StatusBadgeProps {
  text?: string;
  className?: string;
}

export default function StatusBadge({
  text = "DISPONIBLE PARA PROYECTOS",
  className = "",
}: StatusBadgeProps) {
  return (
    <div  
      className={`
        group 
        inline-flex items-center 
        border-2 border-sage-600
        py-2 px-5 hover:px-8
        rounded-full 
        text-sage-700 text-xs font-bold tracking-widest uppercase
        shadow-lg shadow-forest-900/20
        transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
        cursor-default select-none
        ${className}
      `}
    >
      <span className="relative flex h-3 w-3 mr-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-0 group-hover:opacity-75 animate-ping duration-1000"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500 shadow-sm border-sage-600 transform transition-transform duration-300 group-hover:scale-150"></span>
      </span>
      <span className="whitespace-nowrap group-hover:text-sm duration-500">
        {text}
      </span>
    </div>
  );
}