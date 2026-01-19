
import React from 'react';
import { MOCK_STUDENTS } from '../data';
import { Student } from '../types';

interface StudentsViewProps {
  onSelectStudent: (student: Student) => void;
}

const StudentsView: React.FC<StudentsViewProps> = ({ onSelectStudent }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 ios-blur bg-background-dark/80 px-6 py-4 flex flex-col gap-4 border-b border-white/5 max-w-lg mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-white">Student Directory</h1>
          <div className="flex gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white">
              <span className="material-symbols-outlined text-[22px]">sync</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white">
              <span className="material-symbols-outlined text-[22px]">tune</span>
            </button>
          </div>
        </div>
        
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-primary text-[20px]">search</span>
          </div>
          <input 
            className="block w-full bg-white/5 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/50 text-white placeholder-gray-500" 
            placeholder="Search students or sheets..." 
            type="text"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['All', 'Piano', 'Guitar', 'Vocal', 'Violin'].map((cat, i) => (
            <div key={cat} className={`flex h-9 shrink-0 items-center justify-center px-5 rounded-full border transition-all ${i === 0 ? 'bg-primary border-primary shadow-lg shadow-primary/20' : 'bg-white/5 border-white/10'}`}>
              <p className={`text-xs font-semibold uppercase tracking-wider ${i === 0 ? 'text-white' : 'text-gray-400'}`}>{cat}</p>
            </div>
          ))}
        </div>
      </header>

      <main className="pt-52 pb-32 px-4 space-y-3">
        <div className="px-2 pb-1 flex justify-between items-center">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Active Enrollments ({MOCK_STUDENTS.length})</span>
          <span className="text-[11px] font-medium text-gray-500">Sync: 2m ago</span>
        </div>

        {MOCK_STUDENTS.map(student => (
          <div 
            key={student.id} 
            onClick={() => onSelectStudent(student)}
            className="bg-surface-dark p-4 rounded-xl border border-white/5 flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-primary/20" 
                  style={{ backgroundImage: `url('${student.image}')` }}
                ></div>
                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-surface-dark rounded-full ${student.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              </div>
              <div>
                <h3 className="font-bold text-white">{student.name}</h3>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    {student.instrument === 'Piano' ? 'piano' : 'mic_external_on'}
                  </span>
                  <span className="text-sm text-gray-400">{student.level} {student.instrument}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className={`px-2.5 py-1 rounded-md border text-[10px] font-bold uppercase tracking-tighter ${
                student.paymentStatus === 'paid' ? 'bg-accent-gold/10 border-accent-gold/20 text-accent-gold' : 
                'bg-red-500/10 border-red-500/20 text-red-500'
              }`}>
                {student.paymentStatus}
              </div>
              <span className="text-[11px] text-gray-500">Mon 4:30 PM</span>
            </div>
          </div>
        ))}
      </main>

      <div className="fixed bottom-28 right-6 z-50">
        <button className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
      </div>
    </div>
  );
};

export default StudentsView;
