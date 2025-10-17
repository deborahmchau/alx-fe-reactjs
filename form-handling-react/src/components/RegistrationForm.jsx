import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 rounded-md p-2"
            value={username}                   
            onChange={(event) => setUsername(event.target.value)}  
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-md p-2"
            value={email}                      
            onChange={(event) => setEmail(event.target.value)}    
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md p-2"
            value={password}                   
            onChange={(event) => setPassword(event.target.value)}  
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
