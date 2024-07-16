import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
    <div className="flex flex-col items-center">
    <div className="flex justify-between items-center mb-4 w-full max-w-md">
      <h2 className="text-xl font-bold">Sign In to Tripma</h2>
    </div>
    <form className="w-full max-w-md">
      <div className="flex items-center mb-4">
        <label className="w-1/3 text-right mr-2">Email</label>
        <input type="email" className="w-2/3 border rounded p-2" />
      </div>
      <div className="flex items-center mb-4">
        <label className="w-1/3 text-right mr-2">Password</label>
        <input type="password" className="w-2/3 border rounded p-2" />
      </div>
      <div className="flex items-center justify-center mb-4">
        <button type="submit" className="w-2/3 bg-[#605DEC] text-white py-2 rounded">Sign In</button>
      </div>
      <div className="flex items-center justify-center mb-4">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
      </div>
    </form>
  </div>
);

export default Login;