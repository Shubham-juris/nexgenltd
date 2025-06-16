import React from 'react';

const LocationMap = () => {
  return (
    <div className="w-full h-[450px] p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Location: New Sunny Enclave, Kharar</h2>
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="New Sunny Enclave Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.0526441848436!2d76.6311970742897!3d30.71932498716292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb12fdfc98f%3A0x96b87ec13f799285!2sNew%20Sunny%20Enclave%2C%20Kharar%2C%20Punjab%20140201!5e0!3m2!1sen!2sin!4v1718521300557!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
