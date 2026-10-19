export default function Tags({ items, label }: { items: string[]; label?: string }) {
  return <ul className="tags" aria-label={label}>{items.map(i => <li key={i}>{i}</li>)}</ul>;
}
