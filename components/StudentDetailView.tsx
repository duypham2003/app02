
import React from 'react';
import { Student } from '../types';

interface StudentDetailViewProps {
  student: Student | null;
  onBack: () => void;
}

const StudentDetailView: React.FC<StudentDetailViewProps> = ({ student, onBack }) => {
  if (!student) return null;

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-background-dark/80 ios-blur px-4 py-3 flex items-center justify-between border-b border-white/5">
        <button onClick={onBack} className="flex items-center text-primary">
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
          <span className="text-lg">Students</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-white">Student Details</h1>
        <button className="text-primary font-semibold text-lg">Edit</button>
      </header>

      <main className="max-w-md mx-auto w-full">
        <section className="flex flex-col items-center pt-8 pb-6 px-4">
          <div className="relative">
            <div className="size-32 rounded-full border-2 border-accent-gold p-1">
              <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${student.image}')` }}></div>
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-4 border-background-dark">
              <span className="material-symbols-outlined text-sm block">verified</span>
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white">{student.name}</h2>
          <p className="text-primary/80 font-medium">Student ID: {student.id} • 2nd Year</p>
          
          <div className="flex gap-4 mt-6">
            {['call', 'mail', 'calendar_month'].map(icon => (
              <button key={icon} className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="px-4 mb-6">
          <div className="bg-surface-dark rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Current Enrollment</span>
              <div className="flex h-7 items-center justify-center bg-primary/20 px-3 rounded-lg">
                <p className="text-primary text-xs font-bold">{student.level} {student.instrument}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-sm text-gray-400">Attendance Rate</p>
                <p className="text-xl font-bold text-primary">{student.attendanceRate}%</p>
              </div>
              <div className="h-2.5 w-full bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${student.attendanceRate}%` }}></div>
              </div>
              <p className="text-[11px] text-accent-gold mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">auto_awesome</span>
                Top performer in {student.instrument} sessions
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 px-1 mb-2">Contact Information</h3>
          <div className="bg-surface-dark rounded-xl overflow-hidden border border-white/5">
            {[
              { icon: 'smartphone', label: 'Mobile', val: student.mobile },
              { icon: 'alternate_email', label: 'Email', val: student.email },
              { icon: 'supervisor_account', label: 'Guardian', val: student.guardian }
            ].map((item, i, arr) => (
              <div key={item.label} className={`p-4 flex items-center gap-4 ${i !== arr.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="font-medium text-white">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 mb-8">
          <div className="flex items-center justify-between px-1 mb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Recent Payments</h3>
            <button className="text-xs font-bold text-primary">View Statement</button>
          </div>
          <div className="bg-surface-dark rounded-xl overflow-hidden border border-white/5">
            <div className="p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <div>
                  <p className="font-bold text-white">Monthly Tuition</p>
                  <p className="text-xs text-gray-500">Oct 01, 2023 • Check</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">$180.00</p>
                <span className="text-[10px] font-bold uppercase text-accent-gold">Paid</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDetailView;
