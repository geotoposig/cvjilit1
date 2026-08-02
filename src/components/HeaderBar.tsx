import React from 'react';
import { 
  Moon, 
  Sun, 
  Search, 
  LayoutGrid, 
  FileText, 
  Download, 
  Check, 
  Copy
} from 'lucide-react';

interface HeaderBarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  viewMode: 'interactive' | 'classic';
  onChangeViewMode: (mode: 'interactive' | 'classic') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCopyAllContact: () => void;
  copiedContact: boolean;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  isDarkMode,
  onToggleDarkMode,
  viewMode,
  onChangeViewMode,
  searchQuery,
  onSearchChange,
  onCopyAllContact,
  copiedContact,
  activeSection,
  onNavigateSection,
}) => {
  const sections = [
    { id: 'objective', label: 'Objectif' },
    { id: 'experience', label: 'Expériences' },
    { id: 'education', label: 'Formation' },
    { id: 'workshops', label: 'Formations & Ateliers' },
    { id: 'web-sig', label: 'Projets Web-SIG' },
  ];

  return (
    <header className="no-print sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Brand & Mode Switcher */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                EJ
              </div>
              <div>
                <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                  Elmostafa JILIT
                </h1>
                <p className="text-xs text-teal-600 dark:teal-400 font-medium">
                  géographe & Géomaticien
                </p>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onToggleDarkMode}
                id="btn-toggle-dark-mobile"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Changer le thème"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                href="https://drive.google.com/file/d/1D2TdoXQuiuoYXdA34YkFxrNogLT-TfVk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-download-mobile"
                className="p-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors flex items-center justify-center"
                title="Télécharger le CV PDF"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Search bar & Section Nav */}
          <div className="flex-1 max-w-md mx-0 md:mx-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                id="search-input"
                placeholder="Rechercher une compétence, ville, outil, organisme..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-teal-500 dark:focus:border-teal-400 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Effacer
                </button>
              )}
            </div>
          </div>

          {/* Action Tools */}
          <div className="hidden md:flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex items-center text-xs">
              <button
                onClick={() => onChangeViewMode('interactive')}
                id="btn-view-interactive"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Interactif
              </button>
              <button
                onClick={() => onChangeViewMode('classic')}
                id="btn-view-classic"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'classic'
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Document A3 (Pleine Page)
              </button>
            </div>

            {/* Copy Contact Info */}
            <button
              onClick={onCopyAllContact}
              id="btn-copy-contact"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Copier les coordonnées complets"
            >
              {copiedContact ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copié !</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copier Contact</span>
                </>
              )}
            </button>

            {/* Download PDF button linking to Google Drive */}
            <a
              href="https://drive.google.com/file/d/1D2TdoXQuiuoYXdA34YkFxrNogLT-TfVk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-download-desktop"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger CV (PDF)</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              id="btn-toggle-dark-desktop"
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Changer le thème"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Section Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-2 mt-1 scrollbar-none border-t border-slate-100 dark:border-slate-800 text-xs">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => onNavigateSection(sec.id)}
              className={`whitespace-nowrap px-3 py-1 rounded-full font-medium transition-colors ${
                activeSection === sec.id
                  ? 'bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
};
