import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CopyToastProps {
  message: string | null;
}

export const CopyToast: React.FC<CopyToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print flex items-center gap-2.5 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2.5 rounded-xl shadow-2xl border border-slate-700 dark:border-slate-200 text-xs font-semibold animate-bounce">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
      <span>{message}</span>
    </div>
  );
};
