import React from 'react';
import googleIcon from "../../assets/img/icon/google.svg";
import facebookIcon from "../../assets/img/icon/facebook-icon.svg";
import appleIcon from "../../assets/img/icon/apple-mac.svg";

function SignUp({ closeModal }) {
    return(
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Sign up for Tripma</h2>
                <button onClick={closeModal} className="text-gray-600">&times;</button>
            </div>
            <form>
                <div className="mb-4">
                    <label className="block mb-2">Email or phone number</label>
                    <input type="text" className="w-full border rounded p-2" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input type="password" className="w-full border rounded p-2" />
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">I agree to the <a href="#" className="text-blue-600">terms and conditions</a></span>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Send me the latest deal alerts</span>
                    </label>
                </div>
                <button type="submit" className="w-full bg-[#605DEC] text-white py-2 rounded mb-4">Create account</button>
                <div className="text-center text-gray-500">or</div>
                <button className="w-full bg-white border border-gray-300 text-black py-2 rounded flex items-center justify-center mb-2">
                    <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" /> Continue with Google
                </button>
                <button className="w-full bg-white border border-gray-300 text-black py-2 rounded flex items-center justify-center mb-2">
                    <img src={appleIcon} alt="Apple" className="w-5 h-5 mr-2" /> Continue with Apple
                </button>
                <button className="w-full bg-white border border-gray-300 text-black py-2 rounded flex items-center justify-center mb-2">
                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5 mr-2" /> <span>Continue with Facebook</span>
                </button>
            </form>
        </>
    )
}

export default SignUp;