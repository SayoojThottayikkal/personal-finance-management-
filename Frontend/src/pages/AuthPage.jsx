import { useState } from "react";
import { loginUser, registerUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function AuthPage() {
  const [Login, setLogin] = useState(true);
  const [form, setForm] = useState({ username: "", name: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (Login) {
        const res = await loginUser({
          username: form.username,
          password: form.password,
        });
        localStorage.setItem("token", res.token);
        toast.success("Login successful");
        navigate("/");
      } else {
        await registerUser(form);
        toast.success("Registration successful! Please login.");
        setLogin(true);
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-5 sm:mt-20 bg-gray-300 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {Login ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border rounded p-2"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border rounded p-2"
        />

        {!Login && (
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded p-2"
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 w-full"
        >
          {Login ? "Login" : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center">
        {Login ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setLogin(!Login)}
          className="text-blue-500 underline ml-2"
        >
          {Login ? "Register" : "Login"}
        </button>
      </p>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        transition={Bounce}
      />
    </div>
  );
}
