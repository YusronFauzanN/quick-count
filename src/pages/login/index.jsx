import { useState } from "react";
import Toast from "../../components/toast";
import { useDispatch } from "react-redux";
import { login } from "../../store/countAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handlePhoneChanger = (e) => {
      setPhone(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSignIn = async () => {
		await dispatch(
			login({
				data: {
					phone: phone,
					password: password,
				},
			})
		).then((res) => {
			if (res.meta.requestStatus !== "fulfilled") {
				return Toast({
					type: "error",
					message: res.payload.response.data.message,
				});
			}
			Toast({
				type: "success",
				message: "Login success",
			});
      navigate(`/`);
		});
	};

    return (
    <div className="flex justify-center min-h-screen items-center bg-green-600">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="phone"
            value={phone}
            onChange={handlePhoneChanger}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
            <button
                type="button"
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-full disabled:cursor-not-allowed"
                onClick={handleSignIn}> Login
            </button>
        </div>
      </form>
    </div>
    );
}

export default Login;