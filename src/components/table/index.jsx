import PropTypes from 'prop-types';

const TableResult = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-800">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-800 px-4 py-2">Caleg ID</th>
            <th className="border border-gray-800 px-4 py-2">Name</th>
            <th className="border border-gray-800 px-4 py-2">Total Suara</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border border-gray-800 px-4 py-2">{item.caleg_id}</td>
              <td className="border border-gray-800 px-4 py-2">{item.name}</td>
              <td className="border border-gray-800 px-4 py-2">{item.total_suara}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableResult.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      caleg_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      total_suara: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TableResult;
