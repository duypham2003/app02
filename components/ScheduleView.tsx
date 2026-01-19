
import React from 'react';
import { MOCK_CLASSES } from '../data';

const ScheduleView: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 ios-blur bg-background-dark/80 border-b border-white/10 px-4 pt-3 pb-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight text-white">Class Schedule</h1>
              <p className="text-[10px] text-gray-400 flex items-center gap-1 uppercase tracking-wider font-semibold">
                <span className="size-1.5 rounded-full bg-green-500"></span> Sync with Sheets • 2m ago
              </p>
            </div>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full bg-white/5 text-white">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-3">
          {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16', 'Sat 17'].map((day, i) => {
            const [name, num] = day.split(' ');
            const isSelected = i === 2;
            return (
              <a key={day} className={`flex flex-col items-center min-w-[54px] py-3 rounded-2xl transition-all ${
                isSelected ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 text-gray-400'
              }`} href="#">
                <span className="text-[10px] uppercase font-bold opacity-80">{name}</span>
                <span className="text-base font-bold text-white">{num}</span>
              </a>
            );
          })}
        </div>
      </header>

      <main className="p-4 space-y-6 pb-32">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Wednesday, Oct 14</h2>
          <span className="px-2 py-1 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">4 LESSONS</span>
        </div>

        <div className="space-y-4">
          {MOCK_CLASSES.map((lesson, idx) => (
            <div key={lesson.id} className="relative group">
              {idx === 0 && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full shadow-[0_0_12px_rgba(0,112,140,0.8)] z-10"></div>
              )}
              <div className="flex items-stretch gap-4 rounded-2xl bg-card-dark p-4 border border-white/5 shadow-sm">
                <div className="flex flex-col justify-center min-w-[70px] border-r border-white/5 pr-4">
                  <p className={`${idx === 0 ? 'text-accent-gold' : 'text-gray-400'} text-xs font-bold`}>{lesson.time}</p>
                  <p className="text-gray-500 text-[10px] font-medium uppercase">{lesson.duration}</p>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-bold text-lg">{lesson.instrument}</h3>
                    {idx === 0 && <span className="material-symbols-outlined text-primary text-sm">emergency_recording</span>}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <span className="material-symbols-outlined text-sm">person</span>
                    <span>{lesson.instructor}</span>
                    <span className="size-1 rounded-full bg-gray-700"></span>
                    <span className="material-symbols-outlined text-sm">meeting_room</span>
                    <span>{lesson.room}</span>
                  </div>
                </div>
                <div 
                  className="w-16 h-16 rounded-xl bg-center bg-cover border border-white/10" 
                  style={{ backgroundImage: `url('${lesson.image}')` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ScheduleView;
