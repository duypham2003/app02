
export interface Student {
  id: string;
  name: string;
  instrument: string;
  level: string;
  status: 'active' | 'new' | 'paused' | 'potential';
  paymentStatus: 'paid' | 'pending' | 'overdue';
  attendanceRate: number;
  lastSync: string;
  image: string;
  mobile: string;
  email: string;
  guardian: string;
}

export interface ClassSession {
  id: string;
  studentName: string;
  instrument: string;
  room: string;
  time: string;
  duration: string;
  instructor: string;
  status: 'scheduled' | 'canceled' | 'premium';
  image?: string;
}

export interface PaymentRecord {
  id: string;
  studentName: string;
  amount: number;
  date: string;
  method: string;
  type: string;
  status: 'paid' | 'pending' | 'overdue';
}
