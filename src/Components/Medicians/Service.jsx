import React from 'react'
import hospImg from "../../assets/medician/Hospitalisits.avif";
import pediatricsImg from "../../assets/medician/pediatrics.jpeg";
import criticalImg from "../../assets/medician/critical.jpg";
import labImg from "../../assets/medician/lab.avif";

const Service = () => {

    const services = [
  {
    title: "Hospitalists",
    text: "Doctors who specialize in caring for patients inside the hospital.",
    img: hospImg,
  },
  {
    title: "Pediatrics",
    text: "Medical care and treatment for infants, children, and teenagers.",
    img: pediatricsImg,
  },
  {
    title: "Critical Care",
    text: "Intensive treatment for patients with severe or life-threatening conditions.",
    img: criticalImg,
  },
  {
    title: "Laboratory",
    text: "Medical tests and diagnostics performed on patient samples.",
    img: labImg,
  },
];
  return (
    <>
      <section className="px-6 py-12 text-center">
      <h2 className="text-4xl font-semibold text-blue-800 mb-2">Medical Services</h2>
      <p className="text-gray-500 mb-10">
        Sample text. Click to select the text box. Click again or double click to start editing the text.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 text-left">
            <img
              src={service.img}
              alt={service.title}
              className="w-full md:w-1/2 object-cover h-48 rounded"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
          
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Service
