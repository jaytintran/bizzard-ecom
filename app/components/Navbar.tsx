import React from 'react';
import useCart from '../hooks/useCart'; // Adjust the import path

const Navbar: React.FC = () => {
  const { cartItemCount } = useCart(); // Use cartItemCount instead of cartItems.length

  return (
    <nav className="bg-black p-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white font-semibold">My Store</div>
        <div className="flex items-center">
          <div className="mr-4 text-white bg-rose-700 h-[30px] w-[30px] rounded-full flex items-center justify-center">{cartItemCount ? cartItemCount : "0"}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
