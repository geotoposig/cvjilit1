import React, { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
import { HeaderBar } from './components/HeaderBar';
import { Sidebar } from './components/Sidebar';
import { ObjectiveSection } from './components/ObjectiveSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { WebSigProjectsSection } from './components/WebSigProjectsSection';
import { ClassicDocumentView } from './components/ClassicDocumentView';
import { CopyToast } from './components/CopyToast';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'interactive' | 'classic'>('interactive');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('objective');

  // Sync dark mode class with html root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMessage(`${label} copié dans le presse-papier !`);
    setTimeout(() => {
      setCopiedMessage(null);
    }, 2500);
  };

  const handleCopyAllContact = () => {
    const info = cvData.personalInfo;
    const fullContact = `${info.name} - ${info.title}\nTéléphone: ${info.phones.join(' / ')}\nEmail: ${info.email}\nAdresse: ${info.address}\nLinkedIn: ${info.linkedin.url}`;
    navigator.clipboard.writeText(fullContact);
    setCopiedMessage('Coordonnées complètes copiées !');
    setTimeout(() => {
      setCopiedMessage(null);
    }, 2500);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Top Interactive Header */}
      <HeaderBar
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCopyAllContact={handleCopyAllContact}
        copiedContact={copiedMessage === 'Coordonnées complètes copiées !'}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {viewMode === 'classic' ? (
          <ClassicDocumentView data={cvData} />
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-[340px_1fr] overflow-hidden transition-colors">
            
            {/* Sidebar Column */}
            <Sidebar
              personalInfo={cvData.personalInfo}
              coreSkills={cvData.coreSkills}
              languages={cvData.languages}
              softSkills={cvData.softSkills}
              interests={cvData.interests}
              techSkills={cvData.techSkills}
              onCopyText={handleCopyText}
            />

            {/* Main Content Column */}
            <div className="p-6 md:p-8 space-y-10">
              
              <ObjectiveSection objective={cvData.objective} />

              <ExperienceSection
                experiences={cvData.experiences}
                searchQuery={searchQuery}
              />

              <WebSigProjectsSection
                webSigProjects={cvData.webSigProjects}
                searchQuery={searchQuery}
              />

              <EducationSection
                education={cvData.education}
                searchQuery={searchQuery}
              />

              <WorkshopsSection
                workshops={cvData.workshops}
                searchQuery={searchQuery}
              />

            </div>

          </div>
        )}

      </main>

      {/* Copy Notification Toast */}
      <CopyToast message={copiedMessage} />

      {/* Print Specific CSS override */}
      <style>{`
        @page {
          size: A3 portrait;
          margin: 6mm;
        }
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          main {
            padding: 0 !important;
            max-width: 100% !important;
          }
          #a3-cv-document {
            box-shadow: none !important;
            border: none !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .shadow-2xl, .shadow-xl, .shadow-md, .shadow-sm {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
