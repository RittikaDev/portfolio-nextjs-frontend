import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Rittika Dev. All rights reserved.
      </small>
      <p className="text-xs font-semibold">
        Code and content are protected. Reach out for licensing or
        collaboration.
      </p>
    </div>
  );
};

export default Footer;
