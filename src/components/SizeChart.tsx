const SizeChart = () => {
  const sizes = [
    { label: 'S', chest: '50 cm', length: '70 cm' },
    { label: 'M', chest: '53 cm', length: '72 cm' },
    { label: 'L', chest: '56 cm', length: '74 cm' },
    { label: 'XL', chest: '60 cm', length: '76 cm' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-black">
            <th className="py-4 text-xs uppercase tracking-widest font-bold">Size</th>
            <th className="py-4 text-xs uppercase tracking-widest font-bold">Chest Width</th>
            <th className="py-4 text-xs uppercase tracking-widest font-bold">Length</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((s) => (
            <tr key={s.label} className="border-b border-gray-100 hover:bg-gray-50 transition">
              <td className="py-4 text-sm font-medium">{s.label}</td>
              <td className="py-4 text-sm text-gray-600">{s.chest}</td>
              <td className="py-4 text-sm text-gray-600">{s.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;