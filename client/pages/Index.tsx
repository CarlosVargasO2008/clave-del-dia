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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition text-gray-800 bg-gray-50"
              />
            </div>

            {/* Date Display */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-600 font-medium mb-2">
                Fecha Seleccionada
              </p>
              <p className="text-2xl font-bold text-purple-700 capitalize">
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
                  <p className="text-2xl font-bold text-purple-600">
                    {String(selectedDate.getDate()).padStart(2, "0")}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
                  <p className="text-gray-600 text-xs font-semibold mb-2">
                    MES
                  </p>
                  <p className="text-2xl font-bold text-pink-600">
                    {String(selectedDate.getMonth() + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
                  <p className="text-gray-600 text-xs font-semibold mb-2">
                    AÑO
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {selectedDate.getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Encoding Table and Generated Code */}
          <div className="space-y-8">
            {/* Encoding Table */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Tabla de Codificación
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-700 bg-gradient-to-r from-purple-50 to-transparent">
                        Dígito
                      </th>
                      <th className="text-right py-3 px-4 font-bold text-gray-700 bg-gradient-to-r from-transparent to-pink-50">
                        Código
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }, (_, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-100 hover:bg-gray-50 transition"
                      >
                        <td className="py-3 px-4 font-semibold text-gray-800 text-lg">
                          {i}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 text-white font-bold text-lg shadow-md">
                            {encodingMap[i.toString()]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Generated Code Display */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
              <p className="text-sm font-semibold text-purple-100 mb-2">
                Código Generado
              </p>
              <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 mb-6">
                <p className="text-5xl sm:text-6xl font-bold font-mono tracking-wider text-center">
                  {generatedCode}
                </p>
              </div>
              <p className="text-sm text-purple-100 text-center mb-6">
                Desde: {String(selectedDate.getDate()).padStart(2, "0")}
                {String(selectedDate.getMonth() + 1).padStart(2, "0")}
                {selectedDate.getFullYear()}
              </p>
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-2 bg-white text-purple-600 font-bold py-3 rounded-lg hover:bg-purple-50 transition transform hover:scale-105 active:scale-95"
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
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 text-purple-600 font-bold">
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
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-pink-100 text-pink-600 font-bold">
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
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 font-bold">
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
