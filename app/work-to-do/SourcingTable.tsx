export type Row = [part: string, spec: string, price: string, label: string, url: string];

export default function SourcingTable({ rows, cols }: { rows: Row[]; cols: [string, string, string, string] }) {
  return (
    <div className="wtd-tablewrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>{cols[0]}</th>
            <th>{cols[1]}</th>
            <th>{cols[2]}</th>
            <th>{cols[3]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([part, spec, price, label, url], i) => (
            <tr key={i}>
              <td className="n">{String(i + 1).padStart(2, "0")}</td>
              <td><strong>{part}</strong></td>
              <td>{spec}</td>
              <td className="p">{price}</td>
              <td><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
