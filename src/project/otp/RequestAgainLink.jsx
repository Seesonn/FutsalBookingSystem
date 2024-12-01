import React from 'react';

const RequestAgainLink = ({ handleRequestAgain }) => {
  return (
    <div className="text-center text-sm sm:text-base">
      <span className="text-gray-600">Didn't receive code? </span>
      <a
        href="#"
        onClick={handleRequestAgain}
        className="text-[#04153F] hover:text-blue-900"
      >
        Request again
      </a>
    </div>
  );
};

export default RequestAgainLink;
