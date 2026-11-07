import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f2ef] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0a66c2] flex items-center justify-center mb-4">
        <Briefcase className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Página no encontrada</h1>
      <p className="text-sm text-slate-600 max-w-md mb-6">
        La vacante o sección que buscas no existe o ya no está disponible.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[#0a66c2] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#004182] transition-colors"
      >
        Volver al buscador de empleos
      </Link>
    </div>
  );
}
