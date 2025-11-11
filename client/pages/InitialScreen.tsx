import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function InitialScreen() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-green-400 to-green-600 flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-8 max-w-md">
        <div className="text-center space-y-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4a0d784e314c403f81cd8a523edd9468%2F0905fb710d3d4286aaeef0dafc1e9c3f?format=webp&width=800"
            alt="ORIOL"
            className="w-48 h-48 mx-auto drop-shadow-lg"
          />
          <p className="text-xl text-white font-semibold">Generador de Códigos Inteligente</p>
          <p className="text-white/80 text-sm">Transforma fechas en códigos únicos usando nuestro sistema de codificación avanzado</p>
        </div>

        <div className="w-full pt-8">
          <button
            onClick={handleNavigate}
            className="w-full bg-white hover:bg-gray-100 text-green-700 font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Comenzar
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full pt-8 text-center">
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="text-2xl font-bold">📅</div>
            <p className="text-xs text-white mt-2">Selecciona Fecha</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="text-2xl font-bold">🔄</div>
            <p className="text-xs text-white mt-2">Genera Código</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="text-2xl font-bold">✨</div>
            <p className="text-xs text-white mt-2">Copia Resultado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
