
import React, { useState } from 'react';
import HomeView from './components/HomeView';
import StudentsView from './components/StudentsView';
import ScheduleView from './components/ScheduleView';
import TuitionView from './components/TuitionView';
import StudentDetailView from './components/StudentDetailView';
import { Student } from './types';

type ViewState = 'home' | 'students' | 'schedule' | 'tuition' | 'studentDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const navigateToDetail = (student: Student) => {
    setSelectedStudent(student);
    setCurrentView('studentDetail');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView onNavigate={() => setCurrentView('schedule')} />;
      case 'students': return <StudentsView onSelectStudent={navigateToDetail} />;
      case 'schedule': return <ScheduleView />;
      case 'tuition': return <TuitionView />;
      case 'studentDetail': return <StudentDetailView student={selectedStudent} onBack={() => setCurrentView('students')} />;
      default: return <HomeView onNavigate={() => setCurrentView('schedule')} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-background-dark relative">
      {renderView()}
      
      {/* Bottom Navigation */}
      {currentView !== 'studentDetail' && (
        <nav className="fixed bottom-0 left-0 right-0 z-[60] ios-blur border-t border-white/5 pb-8 pt-3 px-6 flex justify-around items-center max-w-lg mx-auto bg-black/60">
          <button 
            onClick={() => setCurrentView('home')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'home' ? 'text-primary' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined font-bold">grid_view</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
          </button>
          
          <button 
            onClick={() => setCurrentView('students')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'students' ? 'text-primary' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Students</span>
          </button>

          <button 
            onClick={() => setCurrentView('schedule')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'schedule' ? 'text-primary' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Schedule</span>
          </button>

          <button 
            onClick={() => setCurrentView('tuition')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'tuition' ? 'text-primary' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Tuition</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
