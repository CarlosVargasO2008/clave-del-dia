import { AlertTriangle } from "lucide-react";

interface TrialExpiredProps {
  expirationDate: string | null;
}

export default function TrialExpired({ expirationDate }: TrialExpiredProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-red-900 flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-8 max-w-md">
        <div className="text-center space-y-4">
          <AlertTriangle size={64} className="mx-auto text-red-400" />
          <h1 className="text-4xl font-bold text-red-400">Período de Prueba Expirado</h1>
          <p className="text-xl text-gray-300">
            Lo sentimos, el período de prueba de 15 días ha finalizado.
          </p>
          {expirationDate && (
            <div className="bg-red-900/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-red-200">Fecha de expiración:</p>
              <p className="text-lg font-bold text-red-300">{expirationDate}</p>
            </div>
          )}
        </div>

        <div className="w-full bg-red-900/30 backdrop-blur rounded-lg p-6 text-center">
          <p className="text-gray-400 text-sm">
            La aplicación ya no está disponible. El período de prueba de 15 días desde tu descarga inicial ha vencido.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Gracias por usar "Clave del Día".
          </p>
        </div>
      </div>
    </div>
  );
}
