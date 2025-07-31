import { useState } from "react";

export default function AuthPage() {
  const [Login, setLogin] = useState(true);
  const [form, setForm] = useState({ username: "", name: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-5 sm:mt-20  bg-gray-300 shadow-xl rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">
        {Login ? "Login" : "Register"}
      </h2>
      <form className="space-y-4">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border rounded p-2 "
        />
        {!Login && (
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
    </div>
  );
}
