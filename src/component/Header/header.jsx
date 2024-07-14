import React, { useState } from 'react';
import appLogo from '../../assets/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import SignUp from '../Auth/SignUp'


Modal.setAppElement('#root'); // Necessary for screen readers

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const location = useLocation();
  
  const loactionPath = (route) => route === location.pathname;
  
  return (
    <>

      <header className="flex justify-between items-center p-4 bg-white">
        <img src={appLogo} alt="Tripma Logo" className="h-8" />
        <nav className="space-x-4">
          <Link to='/' className={`hover:text-blue-600 ${loactionPath("/") ? "text-[#605DEC]" : "text-gray-600"}`}>
            Flights
          </Link>
          <Link to='/hotels' className={`hover:text-blue-600 ${loactionPath("/hotels") ? "text-[#605DEC]" : "text-gray-600"}`}>
            Hotels
          </Link>
          <Link to='/packages' className={`hover:text-blue-600 ${loactionPath("/packages") ? "text-[#605DEC]" : "text-gray-600"}`}>
            Packages
          </Link>
          <Link to='/login' className={`hover:text-blue-600 ${loactionPath("/login") ? "text-[#605DEC]" : "text-gray-600"}`}>
            Sign in
          </Link>
          <a href='#' className='bg-[#605DEC] text-white px-4 py-2 rounded' onClick={openModal}>
            Sign up
          </a>
        </nav>
      </header>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        className="bg-white rounded-lg p-8 max-w-lg h-full mx-auto my-1 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <SignUp closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default Header;