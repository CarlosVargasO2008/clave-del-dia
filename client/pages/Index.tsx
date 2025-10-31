import { useState } from "react";
import { Calendar, Copy, Check } from "lucide-react";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [copied, setCopied] = useState(false);

  const encodingMap: { [key: string]: number } = {
    "0": 1,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 1,
    "5": 2,
    "6": 3,
    "7": 4,
    "8": 1,
    "9": 2,
  };

  const generateCode = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const dateString = day + month + year;
    return dateString.split("").map((digit) => encodingMap[digit]).join("");
  };

  const generatedCode = generateCode(selectedDate);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedDate = selectedDate.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-10 h-10 text-green-700" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-700 to-black bg-clip-text text-transparent">
              Generador de Códigos
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Convierte cualquier fecha en un código único usando nuestra tabla de
            codificación
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Calendar and Date Input */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Selecciona una Fecha
            </h2>

            {/* Date Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Fecha
              </label>
              <input
                type="date"
                value={selectedDate.toISOString().split("T")[0]}
                onChange={handleDateChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition text-gray-800 bg-gray-50"
              />
            </div>

            {/* Date Display */}
            <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-600 font-medium mb-2">
                Fecha Seleccionada
              </p>
              <p className="text-2xl font-bold text-green-700 capitalize">
                {formattedDate}
              </p>
            </div>

            {/* Date Breakdown */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-700 mb-4">
                Desglose de la Fecha
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
                  <p className="text-gray-600 text-xs font-semibold mb-2">
                    DÍA
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {String(selectedDate.getDate()).padStart(2, "0")}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
                  <p className="text-gray-600 text-xs font-semibold mb-2">
                    MES
                  </p>
                  <p className="text-2xl font-bold text-green-700">
                    {String(selectedDate.getMonth() + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
                  <p className="text-gray-600 text-xs font-semibold mb-2">
                    AÑO
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    {selectedDate.getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Generated Code */}
          <div className="flex items-center justify-center">
            {/* Generated Code Display */}
            <div className="w-full bg-gradient-to-br from-green-700 to-black rounded-2xl shadow-lg p-8 text-white">
              <p className="text-sm font-semibold text-green-100 mb-2">
                Código Generado
              </p>
              <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 mb-6">
                <p className="text-5xl sm:text-6xl font-bold font-mono tracking-wider text-center">
                  {generatedCode}
                </p>
              </div>
              <p className="text-sm text-green-100 text-center mb-6">
                Desde: {String(selectedDate.getDate()).padStart(2, "0")}
                {String(selectedDate.getMonth() + 1).padStart(2, "0")}
                {selectedDate.getFullYear()}
              </p>
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-3 rounded-lg hover:bg-green-50 transition transform hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copiar Código
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            ¿Cómo Funciona?
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100 text-green-700 font-bold">
                  1
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Selecciona Fecha</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Elige una fecha del calendario
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100 text-green-700 font-bold">
                  2
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Obtén Dígitos</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Se extrae el formato DDMMYYYY
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100 text-green-700 font-bold">
                  3
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Genera Código</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Convierte usando la tabla de codificación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
