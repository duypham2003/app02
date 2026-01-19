
import { Student, ClassSession, PaymentRecord } from './types';

export const MOCK_STUDENTS: Student[] = [
  {
    id: "MC-8801",
    name: "Alexander Chen",
    instrument: "Piano",
    level: "Advanced",
    status: "active",
    paymentStatus: "paid",
    attendanceRate: 98,
    lastSync: "2m ago",
    image: "https://picsum.photos/id/101/200/200",
    mobile: "+1 (555) 012-1111",
    email: "a.chen@music.com",
    guardian: "David Chen (Father)"
  },
  {
    id: "MC-8802",
    name: "Julianne Smith",
    instrument: "Piano",
    level: "Grade 3",
    status: "active",
    paymentStatus: "overdue",
    attendanceRate: 94,
    lastSync: "5m ago",
    image: "https://picsum.photos/id/102/200/200",
    mobile: "+1 (555) 012-3456",
    email: "j.smith@studentmail.com",
    guardian: "Robert Smith (Father)"
  },
  {
    id: "MC-8803",
    name: "Sarah Jenkins",
    instrument: "Vocal",
    level: "Intermediate",
    status: "active",
    paymentStatus: "pending",
    attendanceRate: 88,
    lastSync: "10m ago",
    image: "https://picsum.photos/id/103/200/200",
    mobile: "+1 (555) 012-7890",
    email: "s.jenkins@vocal.com",
    guardian: "Mary Jenkins (Mother)"
  },
  {
    id: "MC-8804",
    name: "Marcus Thorne",
    instrument: "Violin",
    level: "Introductory",
    status: "active",
    paymentStatus: "paid",
    attendanceRate: 92,
    lastSync: "1h ago",
    image: "https://picsum.photos/id/104/200/200",
    mobile: "+1 (555) 012-4444",
    email: "m.thorne@strings.com",
    guardian: "Sarah Thorne (Mother)"
  }
];

export const MOCK_CLASSES: ClassSession[] = [
  {
    id: "c1",
    studentName: "Julianne Smith",
    instrument: "Piano",
    room: "Studio A",
    time: "14:30",
    duration: "60 MIN",
    instructor: "Dr. Aris",
    status: "scheduled",
    image: "https://picsum.photos/id/108/100/100"
  },
  {
    id: "c2",
    studentName: "Marcus Thorne",
    instrument: "Violin",
    room: "Studio C",
    time: "15:45",
    duration: "45 MIN",
    instructor: "Sarah Jenkins",
    status: "premium",
    image: "https://picsum.photos/id/109/100/100"
  },
  {
    id: "c3",
    studentName: "Elena Rodriguez",
    instrument: "Audio Prod",
    room: "Studio B",
    time: "17:00",
    duration: "90 MIN",
    instructor: "Mark T.",
    status: "scheduled",
    image: "https://picsum.photos/id/110/100/100"
  },
  {
    id: "c4",
    studentName: "Sarah Chen",
    instrument: "Vocals",
    room: "Studio A",
    time: "18:15",
    duration: "45 MIN",
    instructor: "Elena M.",
    status: "canceled",
    image: "https://picsum.photos/id/111/100/100"
  }
];

export const MOCK_PAYMENTS: PaymentRecord[] = [
  {
    id: "p1",
    studentName: "Julianne Smith",
    amount: 150.00,
    date: "Oct 12, 2023",
    method: "Check",
    type: "Monthly Tuition",
    status: "overdue"
  },
  {
    id: "p2",
    studentName: "Marcus Thorne",
    amount: 120.00,
    date: "Nov 01, 2023",
    method: "Visa",
    type: "Violin Lessons",
    status: "pending"
  },
  {
    id: "p3",
    studentName: "Elara Vance",
    amount: 185.00,
    date: "Oct 28, 2023",
    method: "Cash",
    type: "Cello Level 2",
    status: "pending"
  }
];
