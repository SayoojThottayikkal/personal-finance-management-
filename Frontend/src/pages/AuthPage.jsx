import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", name: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "" : "";

    const res = await axios.post(url, form);

    if (isLogin && res.data.token) {
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } else if (!isLogin) {
      setIsLogin(true);
      setForm({ username: "", password: "" });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto ">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border rounded p-2"
        />
        {!isLogin && (
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border rounded  p-2"
          />
        )}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border rounded  p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-blue-500 px-4 py-2 w-full"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 underline ml-2"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
}
