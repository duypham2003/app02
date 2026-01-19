
import React from 'react';
import { MOCK_PAYMENTS } from '../data';

const TuitionView: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 ios-blur bg-background-dark/80 px-4 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary cursor-pointer">arrow_back_ios</span>
          <h1 className="text-xl font-extrabold tracking-tight text-white">Tuition</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Live Sync</span>
          <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        </div>
      </header>

      <main className="pb-32">
        <div className="p-4">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-[#004e63] p-6 shadow-xl shadow-primary/20">
            <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
              <span className="material-symbols-outlined text-[120px] text-white">music_note</span>
            </div>
            <div className="relative z-10">
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Outstanding Balance</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-white text-3xl font-extrabold tracking-tight">$4,250.00</span>
              </div>
              <div className="mt-6 flex justify-between items-center bg-black/10 rounded-lg p-3 border border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/80 text-lg">calendar_month</span>
                  <span className="text-white/80 text-xs font-medium">Updated 2m ago</span>
                </div>
                <button className="text-xs font-bold text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-2 flex flex-col gap-3">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-500 text-xl">search</span>
            </div>
            <input className="w-full bg-card-dark border-none rounded-xl py-3 pl-11 pr-4 focus:ring-2 focus:ring-primary/50 text-sm transition-all text-white placeholder-gray-500" placeholder="Search student..." type="text"/>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {['All Due', 'Overdue', 'Piano', 'Violin'].map((label, i) => (
              <button key={label} className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border ${
                i === 0 ? 'bg-primary text-white border-primary' : 'bg-card-dark text-gray-400 border-white/5'
              }`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 mt-6 flex justify-between items-center">
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-gray-500">Pending Payments</h3>
          <span className="text-xs font-medium text-primary">12 Items</span>
        </div>

        <div className="px-4 mt-4 space-y-3">
          {MOCK_PAYMENTS.map(payment => (
            <div key={payment.id} className="bg-card-dark rounded-xl p-4 border border-white/5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                    <span className="material-symbols-outlined">piano</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-none">{payment.studentName}</h4>
                    <p className="text-xs text-gray-500 mt-1">{payment.type}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${
                  payment.status === 'overdue' ? 'bg-accent-gold/20 text-accent-gold' : 'bg-white/5 text-gray-400'
                }`}>{payment.status}</span>
              </div>
              <div className="flex items-end justify-between border-t border-white/5 pt-3">
                <div>
                  <p className="text-xs text-gray-500">Amount Due</p>
                  <p className="text-lg font-extrabold text-white">${payment.amount.toFixed(2)}</p>
                  <p className="text-[10px] text-gray-500">Due {payment.date}</p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined text-sm">notifications</span>
                  Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TuitionView;
