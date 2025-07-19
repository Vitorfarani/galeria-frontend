const YearFilter = ({ onFilter }: { onFilter: (year: string) => void }) => {
  const years = [2021, 2020, 2019, 2018];  // Modifique conforme seu backend

  return (
    <select onChange={(e) => onFilter(e.target.value)} className="p-2 border rounded-md">
      <option value="">Filtrar por Ano</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearFilter;
