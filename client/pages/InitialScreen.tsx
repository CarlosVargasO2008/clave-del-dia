import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function InitialScreen() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-black to-green-900 flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-8 max-w-md">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-green-400">ORIOL</h1>
          <p className="text-xl text-gray-300">Generador de Códigos Inteligente</p>
          <p className="text-gray-400 text-sm">Transforma fechas en códigos únicos usando nuestro sistema de codificación avanzado</p>
        </div>

        <div className="w-full pt-8">
          <button
            onClick={handleNavigate}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Comenzar
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full pt-8 text-center">
          <div className="bg-green-900/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">📅</div>
            <p className="text-xs text-gray-400 mt-2">Selecciona Fecha</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">🔄</div>
            <p className="text-xs text-gray-400 mt-2">Genera Código</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">✨</div>
            <p className="text-xs text-gray-400 mt-2">Copia Resultado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
