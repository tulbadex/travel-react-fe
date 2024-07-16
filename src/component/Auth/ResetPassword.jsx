import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Handle resetting the password
        console.log('Reset password with token:', token);
        console.log('New password:', password);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between items-center mb-4 w-full max-w-md">
                <h2 className="text-xl font-bold">Reset Password</h2>
            </div>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right mr-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-2/3 border rounded p-2"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right mr-2">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-2/3 border rounded p-2"
                    />
                </div>
                <div className="flex items-center justify-center mb-4">
                    <button type="submit" className="w-2/3 bg-[#605DEC] text-white py-2 rounded">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;