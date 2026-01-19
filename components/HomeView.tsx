
import React from 'react';
import { MOCK_CLASSES } from '../data';

interface HomeViewProps {
  onNavigate: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col pb-32">
      {/* Header */}
      <header className="flex items-center p-4 justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="size-10 shrink-0 rounded-full border-2 border-primary overflow-hidden bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">account_circle</span>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Welcome back,</p>
            <h2 className="text-base font-bold leading-tight text-white">Admin User</h2>
          </div>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full bg-card-dark text-white active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Grid Stats */}
      <section className="grid grid-cols-2 gap-3 p-4">
        <div className="flex flex-col gap-1 rounded-2xl p-4 bg-card-dark border border-white/5 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="material-symbols-outlined text-emerald-500 text-xl">group</span>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+4%</span>
          </div>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Active Students</p>
          <p className="text-2xl font-bold tracking-tight text-white">912</p>
        </div>
        <div className="flex flex-col gap-1 rounded-2xl p-4 bg-card-dark border border-white/5 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="material-symbols-outlined text-primary text-xl">person_add</span>
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">This Mo</span>
          </div>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">New Students</p>
          <p className="text-2xl font-bold tracking-tight text-white">24</p>
        </div>
      </section>

      {/* Monthly Revenue Card */}
      <section className="px-4 py-2">
        <div className="flex flex-col gap-4 rounded-2xl p-6 bg-card-dark border border-white/5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm font-medium">Monthly Revenue</p>
              <p className="text-3xl font-bold tracking-tight mt-1 text-white">$24,450</p>
            </div>
            <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="text-xs font-bold">8.2%</span>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3 items-end h-24 mt-2 px-1">
            {[60, 80, 45, 70, 90, 100].map((h, i) => (
              <div key={i} className="group relative flex flex-col items-center gap-2">
                <div 
                  className={`w-full rounded-t-md transition-all ${i === 5 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary/20'}`} 
                  style={{ height: `${h}%` }}
                ></div>
                <span className={`text-[9px] font-bold ${i === 5 ? 'text-primary' : 'text-gray-500'}`}>
                  {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Classes */}
      <section className="mt-4">
        <div className="flex items-center justify-between px-4 pb-4">
          <h2 className="text-xl font-bold tracking-tight text-white">Today's Classes</h2>
          <button onClick={onNavigate} className="text-primary text-sm font-bold">See all</button>
        </div>
        <div className="flex flex-col gap-px bg-white/5">
          {MOCK_CLASSES.map(cls => (
            <div key={cls.id} className="flex items-center gap-4 bg-background-dark px-4 py-4 active:bg-card-dark transition-colors">
              <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 border ${
                cls.status === 'canceled' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                cls.status === 'premium' ? 'bg-accent-gold/10 text-accent-gold border-accent-gold/20' : 
                'bg-primary/10 text-primary border-primary/20'
              }`}>
                <span className="material-symbols-outlined">
                  {cls.instrument === 'Piano' ? 'piano' : 
                   cls.instrument === 'Violin' ? 'vibration' : 'graphic_eq'}
                </span>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-base leading-none text-white">{cls.studentName}</p>
                  {cls.status === 'premium' && (
                    <span className="bg-accent-gold/20 text-accent-gold text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Premium</span>
                  )}
                  {cls.status === 'canceled' && (
                    <span className="bg-red-500/20 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Canceled</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mt-1">{cls.instrument} • {cls.room}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${cls.status === 'canceled' ? 'line-through text-gray-500' : 'text-white'}`}>{cls.time}</p>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{cls.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Sheets Status */}
      <footer className="mt-8 px-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Synced with Google Sheets</p>
        </div>
        <p className="text-[10px] text-gray-500">Last sync: 2 minutes ago</p>
      </footer>
    </div>
  );
};

export default HomeView;
