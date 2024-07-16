import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sending the reset password email
        console.log('Send reset password email to:', email);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between items-center mb-4 w-full max-w-md">
                <h2 className="text-xl font-bold">Forgot Password</h2>
            </div>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right mr-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-2/3 border rounded p-2"
                    />
                </div>
                <div className="flex items-center justify-center mb-4">
                    <button type="submit" className="w-2/3 bg-[#605DEC] text-white py-2 rounded">Send Reset Link</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;