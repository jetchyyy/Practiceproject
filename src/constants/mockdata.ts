import bike4 from '../assets/bike4.jpg'
import bike from '../assets/bike.jpg'
import bike2 from '../assets/bike2.jpg'
import bike3 from '../assets/bike3.jpg'
interface Studentdata {
  title: string;
  description: string;
  image: string;
  name?: string;
}
export const mockStudent: Studentdata[] = [
  {
    description: "₱5,850",
    image: bike,
    title: "Alloy Tempest",
    name: "WAW"
  },
  {
    description: "₱6,500",
    image: bike2,
    title: "Folding Bike",
  },
  {
    description: "₱14,600",
    image: bike3,
    title: "Garuda Ebike",
  },
  {
    description: "₱3,900",
    image: bike4,
    title: "Japanese Bike",
  },
  
  
];
