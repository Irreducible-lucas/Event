export interface Link {
  id: number;
  text: string;
  url: string;
}
export interface FooterLink {
  id: number;
  title: string;
  url: string;
}
export interface FooterContact {
  address: string[];
  phone: string;
  telHref: string;
  officeLocations: string;
}
export interface StatCardProps {
  icon: JSX.Element;
  value: string;
  label: string;
  bgColor: string;
}

export interface Attendee {
  id: number;
  image: string;
  name: string;
  event: string;
  amount: string;
  positive: boolean;
}
export type EventProps = {
  id?: number;
  imgName: string;
  image: string; 
  status?: string; 
};
  export interface EventCardProps {
    date: string;
    title: string;
    ticketsSold: number;
    revenue: string;
    onDelete?: () => void;
    onManage?: () => void;
  }
  export interface timeZonesProps{
    id: number, 
    name: string, 
    utcOffset: number
  }

  export interface AttendeesProps {
    name: string;
    phone: string;
    date: string;
    time: string;
    seats: string;
    paymentStatus: string;
    eTicket: string;
  }
  export interface CheckInProps {
    id: number;
    title: string;
    value: string | number;
    percentage?: string;
    percentageType?: "positive" | "negative";
  }
  
  export interface CheckInTable {
    id: number;
    name: string;
    status: string;
    location: string;
    organizer: string;
    organizerId: string;
    attendees: string;
    image: string;
  }
