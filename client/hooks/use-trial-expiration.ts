import { useState, useEffect } from 'react';

const INSTALL_DATE_KEY = 'clave_del_dia_install_date';
const TRIAL_DAYS = 15;

export interface TrialStatus {
  isExpired: boolean;
  daysRemaining: number;
  installDate: string | null;
  expirationDate: string | null;
}

export function useTrialExpiration(): TrialStatus {
  const [status, setStatus] = useState<TrialStatus>({
    isExpired: false,
    daysRemaining: 0,
    installDate: null,
    expirationDate: null,
  });

  useEffect(() => {
    const storedInstallDate = localStorage.getItem(INSTALL_DATE_KEY);
    const now = new Date();
    const todayString = now.toISOString().split('T')[0];

    let installDate: Date;
    let installDateString: string;

    if (!storedInstallDate) {
      // First time opening the app - set installation date
      installDate = now;
      installDateString = todayString;
      localStorage.setItem(INSTALL_DATE_KEY, installDateString);
    } else {
      // App was already installed
      installDateString = storedInstallDate;
      const [year, month, day] = storedInstallDate.split('-').map(Number);
      installDate = new Date(year, month - 1, day);
    }

    // Calculate expiration date (15 days from installation)
    const expirationDate = new Date(installDate);
    expirationDate.setDate(expirationDate.getDate() + TRIAL_DAYS);
    const expirationDateString = expirationDate.toISOString().split('T')[0];

    // Calculate days remaining
    const timeDiff = expirationDate.getTime() - now.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const isExpired = daysRemaining < 0;

    setStatus({
      isExpired,
      daysRemaining: Math.max(0, daysRemaining),
      installDate: installDateString,
      expirationDate: expirationDateString,
    });
  }, []);

  return status;
}
