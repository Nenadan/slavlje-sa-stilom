import { formatPrice } from './formatPrice';

export function validateOrder(formData) {
  if (!formData.name.trim()) {
    return { field: 'name', message: 'Upišite ime da znamo kome se javljamo.' };
  }
  if (formData.phone.replace(/\D/g, '').length < 8) {
    return { field: 'phone', message: 'Broj telefona nije potpun. Upišite ga sa pozivnim brojem.' };
  }
  if (!formData.date) {
    return { field: 'date', message: 'Izaberite datum proslave da proverimo termin.' };
  }
  return null;
}

export function buildOrderText(items, formData, totals) {
  const lines = ['Spisak sa sajta Slavlje sa stilom', ''];

  items.forEach((item) => {
    lines.push(`- ${item.name} x${item.qty} = ${formatPrice(item.price * item.qty)}`);
  });

  lines.push('');
  lines.push(`Artikli: ${formatPrice(totals.subtotal)}`);
  lines.push(`Dostava: ${totals.shipping === 0 ? 'besplatno' : formatPrice(totals.shipping)}`);
  lines.push(`Ukupno: ${formatPrice(totals.total)}`);
  lines.push('');
  lines.push(`Ime: ${formData.name}`);
  lines.push(`Telefon: ${formData.phone}`);
  lines.push(`Datum proslave: ${formData.date || 'nije upisan'}`);
  lines.push(`Adresa dostave: ${formData.address || 'nije upisana'}`);
  lines.push(`Napomena: ${formData.note || 'nema'}`);

  return lines.join('\n');
}
