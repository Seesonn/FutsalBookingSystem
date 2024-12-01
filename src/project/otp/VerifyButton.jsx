import React from 'react';

const VerifyButton = ({ handleVerify }) => {
  return (
    <button
      onClick={handleVerify}
      className="mb-4 w-full rounded-lg bg-[#04153F] px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 focus:outline-none sm:text-base"
    >
      Verify
    </button>
  );
};

export default VerifyButton;
