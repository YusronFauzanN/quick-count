import { useState } from 'react';

const FormQuickCount = () => {
  const [formData, setFormData] = useState({
    provinsi: '',
    kabupaten_kota: '',
    kecamatan: '',
    desa: '',
    quick_count_detail: [
      { caleg_id: '', jumlah_suara: '' },
      { caleg_id: '', jumlah_suara: '' },
      { caleg_id: '', jumlah_suara: '' }
    ]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.includes('caleg_id') || name.includes('jumlah_suara')) {
      const newQuickCountDetail = [...formData.quick_count_detail];
      newQuickCountDetail[index][name] = value;
      setFormData({
        ...formData,
        quick_count_detail: newQuickCountDetail
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan pengiriman data ke backend di sini
    // Reset form jika diperlukan
    setFormData({
      provinsi: '',
      kabupaten_kota: '',
      kecamatan: '',
      desa: '',
      quick_count_detail: [
        { caleg_id: '', jumlah_suara: '' },
        { caleg_id: '', jumlah_suara: '' },
        { caleg_id: '', jumlah_suara: '' }
      ]
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="provinsi">
            Provinsi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="provinsi"
            type="text"
            name="provinsi"
            placeholder="Provinsi"
            value={formData.provinsi}
            onChange={handleChange}
          />
        </div>
        {/* Add other fields similarly */}
        
        {/* Quick Count Detail */}
        <div className="mb-4">
          <p className="text-lg font-bold mb-2">Quick Count Detail</p>
          {formData.quick_count_detail.map((detail, index) => (
            <div key={index} className="flex mb-2">
              <input
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name={`caleg_id_${index}`}
                placeholder="Caleg ID"
                value={detail.caleg_id}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                type="number"
                name={`jumlah_suara_${index}`}
                placeholder="Jumlah Suara"
                value={detail.jumlah_suara}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormQuickCount;
