import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServiceData();
  }, []);

  const fetchServiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/services", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        console.log("Failed to fetch services:", response.statusText);
      }
    } catch (error) {
      console.log("Error fetching services:", error);
    }
  };
  // Map the services
  return (
    <div className="flex justify-center mt-12">
      <div className="flex text-white w-[90%] max-w-[1420px] flex-col">
        <h1 className="text-white font-bold text-[52px] w-[200px] relative underline-title">
          Services
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {services.map((service) => {
            return (
              <div className="p-10 border-white border-solid border-2 flex flex-col items-center rounded-md">
                <img
                  src="/design.png"
                  alt="People Designing"
                  className="w-[350px]"
                />
                <div className="flex justify-around w-full mt-5">
                  <span className="text-lg">{service.provider}</span>
                  <span className="text-lg">{service.price}</span>
                </div>
                <div className="flex flex-col gap-3 mt-5">
                  <h3 className="text-2xl font-bold leading-[1.3]">
                    {service.service}
                  </h3>
                  <p className="max-w-[300px] tracking-wide">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
