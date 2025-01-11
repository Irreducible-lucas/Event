import { Ticket } from "lucide-react";
import { event, profilePic } from "../assets";
import { Attendee, AttendeesProps, CardProps, CheckInTable, EventProps, FooterContact, FooterLink, Link, timeZonesProps } from "../type";

export const links: Link[] = [
  {
    id: 1,
    text: "Home",
    url: "/home",
  },
  {
    id: 2,
    text: "About Us",
    url: "/aboutus",
  },

  {
    id: 3,
    text: "Reports and Financials",
    url: "/reports-financials",
  },

  {
    id: 4,
    text: "Contact Information",
    url: "/contact",
  },
];

export const footerData = {
  company: [
    { id: 1, title: "Jolly Home", url: "#" },
    { id: 2, title: "Products", url: "#" },
    { id: 3, title: "Customers", url: "#" },
    { id: 4, title: "Press Releases", url: "#" },
  ] as FooterLink[],
  features: [
    { id: 1, title: "Register Online", url: "#" },
    { id: 2, title: "Print Event Badges", url: "#" },
    { id: 3, title: "Check In Attendees", url: "#" },
    { id: 4, title: "Engage With Attendees", url: "#" },
    { id: 5, title: "Capture Leads", url: "#" },
    { id: 6, title: "Send Invitations", url: "#" },
    { id: 7, title: "Conduct Surveys", url: "#" },
    { id: 8, title: "See All Features", url: "#" },
  ] as FooterLink[],
  solutions: [
    { id: 1, title: "Conference App", url: "#" },
    { id: 2, title: "Cvent Alternative", url: "#" },
    { id: 3, title: "Event App", url: "#" },
    { id: 4, title: "Event Badge Printing", url: "#" },
    { id: 5, title: "Event Check-In App", url: "#" },
    { id: 6, title: "Event Management System", url: "#" },
    { id: 7, title: "See All Solutions", url: "#" },
  ] as FooterLink[],
  resources: [
    { id: 1, title: "Pricing", url: "#" },
    { id: 2, title: "Privacy Policy", url: "#" },
    { id: 3, title: "Terms of Service", url: "#" },
    { id: 4, title: "Security Guide", url: "#" },
    { id: 5, title: "How-To Guides", url: "#" },
  ] as FooterLink[],
  contact: {
    address: ["303 Twin Dolphin Dr. Fl 6", "Redwood City, CA 94065"],
    phone: "650 594 5955",
    telHref: "tel:6505945955",
    officeLocations: "#",
  } as FooterContact,
};
export const topAttendees: Attendee[] = [
  {
    id: 1,
    name: "Bimbimasli",
    event: "Seminar Pembangunan",
    amount: "80M",
    positive: true,
    image: profilePic,
  },
  {
    id: 2,
    name: "Afgan_Syahreza",
    event: "Konser Nostalgia",
    amount: "40M",
    positive: false,
    image: profilePic,
  },
  {
    id: 3,
    name: "Ariel_Noah",
    event: "Konser Nostalgia",
    amount: "30M",
    positive: false,
    image: profilePic,
  },
  {
    id: 4,
    name: "DewiMidema",
    event: "Seminar Pembangunan",
    amount: "10M",
    positive: true,
    image: profilePic,
  },
  {
    id: 5,
    name: "Dani_Listya",
    event: "Seminar Pembangunan",
    amount: "5M",
    positive: false,
    image: profilePic,
  },
];

export const events: EventProps[] = [
  {
    id: 1,
    imgName: "Event 1",
    image: event,
    status: "Approved",
  },
  {
    id: 2,
    imgName: "Event 2",
    image: event,
    status: "Approved",
  },
  {
    id: 3,
    imgName: "Event 3",
    image: event,
    status: "Ended",
  },
];
export const timeZones: timeZonesProps[] = [
  { id: 1, name: "UTC (Coordinated Universal Time)", utcOffset: 0 },
  { id: 2, name: "GMT (Greenwich Mean Time)", utcOffset: 0 },
  { id: 3, name: "EST (Eastern Standard Time)", utcOffset: -5 },
  { id: 4, name: "CST (Central Standard Time)", utcOffset: -6 },
  { id: 5, name: "MST (Mountain Standard Time)", utcOffset: -7 },
  { id: 6, name: "PST (Pacific Standard Time)", utcOffset: -8 },
  { id: 7, name: "IST (Indian Standard Time)", utcOffset: +5.5 },
  { id: 8, name: "CET (Central European Time)", utcOffset: +1 },
  { id: 9, name: "EET (Eastern European Time)", utcOffset: +2 },
  { id: 10, name: "JST (Japan Standard Time)", utcOffset: +9 },
  { id: 11, name: "AEST (Australian Eastern Standard Time)", utcOffset: +10 },
];

export const attendancees: AttendeesProps[] = [
  {
    name: "Md. Shiraj",
    phone: "+1 456 576 897",
    date: "12 Nov 2024",
    time: "12:00 pm",
    seats: "A1 - A2",
     eTicket: "Sucessful",
    paymentStatus: "Pending",
   
  }, 
  {
    name: "Md. Shiraj",
    phone: "+1 456 576 897",
    date: "12 Nov 2024",
    time: "12:00 pm",
    seats: "A1 - A2",
      eTicket: "Unsuccesful",
    paymentStatus: "Completed",
  
  },
  {
    name: "Md. Shiraj",
    phone: "+1 456 576 897",
    date: "12 Nov 2024",
    time: "12:00 pm",
    seats: "A1 - A2",
      eTicket: "Unsuccesful",
    paymentStatus: "Completed",
  
  },
  {
    name: "Md. Shiraj",
    phone: "+1 456 576 897",
    date: "12 Nov 2024",
    time: "12:00 pm",
    seats: "A1 - A2",
      eTicket: "Unsuccesful",
    paymentStatus: "Completed",
  
  },
  {
    name: "Md. Shiraj",
    phone: "+1 456 576 897",
    date: "12 Nov 2024",
    time: "12:00 pm",
    seats: "A1 - A2",
      eTicket: "Unsuccesful",
    paymentStatus: "Completed",
  
  },
  {
    name: "Md. Shiraj",
    phone: "+1 456 576 897",
    date: "12 Nov 2024",
    time: "12:00 pm",
    seats: "A1 - A2",
      eTicket: "Unsuccesful",
    paymentStatus: "Completed",
  
  },
  {
    name: "Md. Shiraj",
    phone: "+1 456 576 897",
    date: "12 Nov 2024",
    time: "12:00 pm",
    seats: "A1 - A2",
      eTicket: "Unsuccesful",
    paymentStatus: "Completed",
  
  },
 
];

export const cards: CardProps[] = [
  {
    id: 1,
    title: "Total no of Event",
    value: 11,
  
  },
  {id: 2,
    title: "Total Attendancees",
    value: 550,
  
  },
  {
    id: 3,
    title: "Check-in Status",
    value: "334/550",
    percentage: "80%",
    percentageType: "positive",
  },
  {
    id: 3,
    title: "Attendances Engagement",
    value: "100/334", 
  
  },
];
export const checkTable: CheckInTable[] = [
  {
    id: 1,
    name: "Tech Conference 2025",
    status: "Active",
    location: "New York, USA",
    organizer: "John Doe",
    organizerId: "#10234",
    attendees: "500 Attendees",
    image: profilePic,
  },
  {
    id: 2,
    name: "Health Summit 2025",
    status: "Active",
    location: "Los Angeles, USA",
    organizer: "Jane Smith",
    organizerId: "#23456",
    attendees: "300 Attendees",
    image: profilePic,
  },
  {
    id: 3,
    name: "Tech Conference 2025",
    status: "Active",
    location: "New York, USA",
    organizer: "John Doe",
    organizerId: "#10234",
    attendees: "500 Attendees",
    image: profilePic,
  },
  {
    id: 4,
    name: "Health Summit 2025",
    status: "Active",
    location: "Los Angeles, USA",
    organizer: "Jane Smith",
    organizerId: "#23456",
    attendees: "300 Attendees",
    image: profilePic,
  },
  {
    id: 5,
    name: "Tech Conference 2025",
    status: "Active",
    location: "New York, USA",
    organizer: "John Doe",
    organizerId: "#10234",
    attendees: "500 Attendees",
    image: profilePic,
  },
];
