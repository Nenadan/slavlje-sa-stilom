import satenskeRuze1 from '../assets/pokloni/satenske-ruze-1/satenske_ruze-1-1.webp';
import satenskeRuze2 from '../assets/pokloni/satenske-ruze-1/satenske_ruze-1-2.webp';
import satenskiVenac1 from '../assets/pokloni/satenski-venci/satenski_venac-1.webp';
import satenskiVenac2 from '../assets/pokloni/satenski-venci/satenski_venac-2.webp';
import satenskiVenac3 from '../assets/pokloni/satenski-venci/satenski_venac-3.webp';
import satenskaKorpica1 from '../assets/pokloni/satenske-korpice/satenska_korpica-1-1.webp';
import satenskaKorpica2 from '../assets/pokloni/satenske-korpice/satenska_korpica-1-2.webp';
import autoDekoracija1 from '../assets/dekoracije/auto-dekoracija/auto-dekoracija-1-1.jpg';
import autoDekoracija2 from '../assets/dekoracije/auto-dekoracija/auto-dekoracija-1-2.jpg';
import dekoracijaZaSlikanje1 from '../assets/dekoracije/dekoracije-za-slikanje/dekoracija-za-slikanje-1-1.jpg';
import dekoracijaZaSlikanje2 from '../assets/dekoracije/dekoracije-za-slikanje/dekoracija-za-slikanje-1-2.jpg';
import dekoracijaZaSlikanje3 from '../assets/dekoracije/dekoracije-za-slikanje/dekoracija-za-slikanje-1-3.jpg';
import slatkiSto1 from '../assets/dekoracije/slatki-sto-1-1.jpg';
import slatkiSto2 from '../assets/dekoracije/slatki-sto-1-2.jpg';

export const products = [
  {
    id: 'd1',
    category: 'Dekoracije',
    name: 'Dekoracije za automobil',
    price: 5000,
    unit: 'postavka',
    description: 'Ukras za venčano vozilo od bele til trake i cveća, postavlja se na haubu i retrovizore.',
    images: [autoDekoracija1, autoDekoracija2],
  },
  {
    id: 'd2',
    category: 'Dekoracije',
    name: 'Dekoracija za slikanje',
    price: 18000,
    unit: 'postavka',
    description: 'Personalizovana dekoracija za fotografisanje — balon luk ili pozadina, rekviziti i osvetljeni brojevi, prilagođeno temi proslave.',
    images: [dekoracijaZaSlikanje1, dekoracijaZaSlikanje2, dekoracijaZaSlikanje3],
  },
    {
    id: 'd3',
    category: 'Dekoracije',
    name: 'Slatki sto',
    price: 8000,
    unit: 'postavka',
    description: 'Personalizovan slatki sto sa dekoracijama i poslasticama po vašem izboru.',
    images: [slatkiSto1, slatkiSto2],
  },
  {
    id: 'k1',
    category: 'Pokloni',
    name: 'Satenske ruže, srce',
    price: 2500,
    unit: 'komad',
    description: 'Večite satenske ruže složene u kutiji u obliku srca, idealne za romantične prilike.',
    images: [satenskeRuze2, satenskeRuze1],
  },
  {
    id: 'k2',
    category: 'Pokloni',
    name: 'Satenski venac 1',
    price: 1500,
    unit: 'komad',
    description: 'Ručno rađen satenski venac u tirkiznoj boji, sa crvenom mašnom i cvetovima u crvenoj i beloj boji.',
    images: [satenskiVenac1],
  },
  {
    id: 'k3',
    category: 'Pokloni',
    name: 'Satenski venac 2',
    price: 1700,
    unit: 'komad',
    description: 'Ručno rađen satenski venac u zlatnoj boji, sa crvenom mašnom i cvetovima u tirkiznoj i narandžasto-crvenoj boji.',
    images: [satenskiVenac2],
  },
  {
    id: 'k4',
    category: 'Pokloni',
    name: 'Satenski venac 3',
    price: 2000,
    unit: 'komad',
    description: 'Ručno rađen satenski venac u tirkiznoj boji, sa crvenom i dve zlatne mašne, i cvetovima u crvenoj i beloj boji.',
    images: [satenskiVenac3],
  },
  {
    id: 'k5',
    category: 'Pokloni',
    name: 'Satenske korpice',
    price: 2200,
    unit: 'komad',
    description: 'Ukrasna korpica sa satenskim cvetovima, limenim telom sa novogodišnjim motivom i drškom u crvenoj boji.',
    images: [satenskaKorpica1, satenskaKorpica2],
  },
];

export const categories = ['Sve', ...new Set(products.map((product) => product.category))];
