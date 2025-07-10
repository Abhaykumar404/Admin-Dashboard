

export let MockDataList = [
  { id: 1, title: 'Hyundai i10 Sportz', status: 'pending', name: 'Rahul Sharma', contact: '9876543210', date: '2023-05-15' },
  { id: 2, title: 'Maruti Swift VXi', status: 'approved', name: 'Priya Verma', contact: '9123456780', date: '2023-06-22' },
  { id: 3, title: 'Tata Nexon EV', status: 'pending', name: 'Amit Joshi', contact: '9812345678', date: '2023-07-10' },
  { id: 4, title: 'Mahindra XUV700', status: 'rejected', name: 'Sunita Mehra', contact: '9871234567', date: '2023-08-05' },
  { id: 5, title: 'Toyota Fortuner', status: 'approved', name: 'Rohit Singh', contact: '9911223344', date: '2023-09-18' },
  { id: 6, title: 'Honda City ZX', status: 'pending', name: 'Neha Patil', contact: '9933445566', date: '2023-10-30' },
  { id: 7, title: 'Renault Kwid Climber', status: 'approved', name: 'Vikram Das', contact: '9877001122', date: '2023-11-12' },
  { id: 8, title: 'Kia Seltos HTX', status: 'pending', name: 'Anjali Kapoor', contact: '9001122334', date: '2023-12-03' },
  { id: 9, title: 'Skoda Kushaq Style', status: 'pending', name: 'Mohit Rana', contact: '9887766554', date: '2024-01-25' },
  { id: 10, title: 'Volkswagen Taigun', status: 'rejected', name: 'Sneha Bansal', contact: '9012345678', date: '2024-02-14' },
  { id: 11, title: 'MG Hector Plus', status: 'approved', name: 'Deepak Rawat', contact: '9023456789', date: '2024-03-08' },
  { id: 12, title: 'Hyundai Creta SX', status: 'pending', name: 'Megha Tiwari', contact: '9988776655', date: '2024-04-19' },
  { id: 13, title: 'Tata Harrier XZA', status: 'approved', name: 'Arjun Nair', contact: '9778899001', date: '2024-05-21' },
  { id: 14, title: 'Mahindra Thar LX', status: 'rejected', name: 'Riya Sen', contact: '9111223344', date: '2024-06-11' },
  { id: 15, title: 'Ford EcoSport Titanium', status: 'approved', name: 'Kunal Malhotra', contact: '9090909090', date: '2024-07-30' },
  { id: 16, title: 'Maruti Baleno Alpha', status: 'pending', name: 'Shruti Rao', contact: '9345678901', date: '2024-08-15' },
  { id: 17, title: 'Kia Sonet GTX+', status: 'pending', name: 'Abhishek Jain', contact: '9871112233', date: '2024-09-22' },
  { id: 18, title: 'Nissan Magnite XV', status: 'approved', name: 'Pooja Rathi', contact: '9876665544', date: '2024-10-05' },
  { id: 19, title: 'Honda Amaze VX', status: 'rejected', name: 'Devansh Mittal', contact: '9356677880', date: '2024-11-28' },
  { id: 20, title: 'Hyundai Venue SX', status: 'approved', name: 'Tanya Desai', contact: '9844112233', date: '2024-12-10' },
];
 export type DataListing = {
   id: number;
   title: string;
   name: string;
   contact: string;
   date: string;
   status: 'pending' | 'approved' | string;
 };
 
