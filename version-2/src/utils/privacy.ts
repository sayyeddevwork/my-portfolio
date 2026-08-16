export function maskPhone(phone: string): string {
  const dashIndex = phone.lastIndexOf('-');
  const prefix = dashIndex >= 0 ? phone.slice(0, dashIndex + 1) : '';
  const digits = phone.slice(dashIndex + 1);
  if (digits.length <= 4) return phone;
  return `${prefix}${'X'.repeat(digits.length - 4)}${digits.slice(-4)}`;
}