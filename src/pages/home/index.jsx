import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCount } from "../../store/countAction";
import Navbar from "../../components/navbar";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); 
  const [countData, setCountData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getCount({ token: user.token }));
        setCountData(response.payload.message); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, user.token]);

  return (
    <>
      <Navbar/>
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Election Results</h1>
        <div className="overflow-x-auto">
        {/* <h1>{JSON.stringify(countData)}</h1> */}
          <table className="table-auto w-full border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-800 px-4 py-2">Caleg ID</th>
                <th className="border border-gray-800 px-4 py-2">Name</th>
                <th className="border border-gray-800 px-4 py-2">Total Suara</th>
              </tr>
            </thead>
            <tbody>
              {countData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-800 px-4 py-2">{item.caleg_id}</td>
                  <td className="border border-gray-800 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-800 px-4 py-2">{item.total_suara}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
    
  );
};

export default Home;
