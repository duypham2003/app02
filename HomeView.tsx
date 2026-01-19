
import React from 'react';
import { MOCK_CLASSES } from '../data';

interface HomeViewProps {
  onNavigate: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col pb-32 animate-in fade-in duration-500">
      {/* Header Profile Section */}
      <header className="flex items-center p-6 justify-between border-b border-white/5 bg-surface-dark/30">
        <div className="flex items-center gap-4">
          <div className="size-12 shrink-0 rounded-2xl border-2 border-primary/30 overflow-hidden bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/5">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="Admin"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Main Dashboard</p>
            <h2 className="text-xl font-extrabold tracking-tight text-white">Hello, Director</h2>
          </div>
        </div>
        <div className="relative">
          <button className="flex size-11 items-center justify-center rounded-xl bg-card-dark text-white border border-white/5 active:scale-90 transition-transform">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-background-dark"></span>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-2 gap-4 p-6">
        <div className="flex flex-col gap-2 rounded-3xl p-5 bg-card-dark border border-white/5 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="bg-emerald-500/10 p-2 rounded-xl">
              <span className="material-symbols-outlined text-emerald-500 text-2xl">group</span>
            </div>
            <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">+12%</span>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-tighter">Active Students</p>
            <p className="text-3xl font-black tracking-tighter text-white">1,240</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 rounded-3xl p-5 bg-card-dark border border-white/5 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="bg-primary/10 p-2 rounded-xl">
              <span className="material-symbols-outlined text-primary text-2xl">music_note</span>
            </div>
            <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-1 rounded-full">LIVE</span>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-tighter">Daily Lessons</p>
            <p className="text-3xl font-black tracking-tighter text-white">48</p>
          </div>
        </div>
      </section>

      {/* Revenue Analytics Widget */}
      <section className="px-6 mb-6">
        <div className="flex flex-col gap-6 rounded-[2rem] p-7 bg-gradient-to-br from-card-dark to-background-dark border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Revenue Forecast</p>
              <h3 className="text-4xl font-black tracking-tighter mt-1 text-white">$42,800</h3>
              <p className="text-emerald-500 text-[11px] font-bold flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                Higher than last month
              </p>
            </div>
            <button className="bg-white/5 hover:bg-white/10 p-2 rounded-xl transition-colors">
              <span className="material-symbols-outlined text-gray-400">more_horiz</span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 items-end h-28 px-1 relative z-10">
            {[40, 65, 35, 85, 55, 95, 75].map((h, i) => (
              <div key={i} className="group relative flex flex-col items-center gap-3 flex-1">
                <div 
                  className={`w-full rounded-full transition-all duration-500 ${i === 5 ? 'bg-primary shadow-[0_0_20px_rgba(0,112,140,0.5)]' : 'bg-white/10 group-hover:bg-white/20'}`} 
                  style={{ height: `${h}%` }}
                ></div>
                <span className={`text-[9px] font-black ${i === 5 ? 'text-primary' : 'text-gray-600'}`}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Tasks / Lessons */}
      <section className="px-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-black tracking-tight text-white">Immediate Schedule</h2>
          <button onClick={onNavigate} className="text-primary text-xs font-black uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-lg">View All</button>
        </div>
        <div className="space-y-3">
          {MOCK_CLASSES.slice(0, 3).map(cls => (
            <div key={cls.id} className="flex items-center gap-4 bg-card-dark/50 p-4 rounded-2xl border border-white/5 active:bg-card-dark transition-all">
              <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 shadow-inner ${
                cls.status === 'canceled' ? 'bg-red-500/10 text-red-500' : 
                cls.status === 'premium' ? 'bg-accent-gold/10 text-accent-gold' : 
                'bg-primary/10 text-primary'
              }`}>
                <span className="material-symbols-outlined text-2xl font-light">
                  {cls.instrument === 'Piano' ? 'piano' : 
                   cls.instrument === 'Violin' ? 'vibration' : 'graphic_eq'}
                </span>
              </div>
              <div className="flex flex-1 flex-col">
                <h4 className="font-bold text-white leading-none">{cls.studentName}</h4>
                <p className="text-gray-500 text-[11px] mt-1.5 font-medium">{cls.instrument} • {cls.instructor}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-white">{cls.time}</p>
                <span className="text-[9px] text-primary font-black uppercase tracking-widest">{cls.room}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sync Status Footer */}
      <div className="mt-10 px-6 flex justify-center">
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Database Live Sync Active</p>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
