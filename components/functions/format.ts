// Shorten address
export function shortenAddress(string: any): string {
  if (typeof string !== 'string') return '';
  return (string.slice(0, 6) + '...' + string.slice(-4)).toLowerCase();
}
