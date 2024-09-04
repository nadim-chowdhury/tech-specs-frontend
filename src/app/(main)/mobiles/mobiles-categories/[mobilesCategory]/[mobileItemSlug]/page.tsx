"use client";

import MobileDeviceDetails from "@/components/mobiles/MobileDeviceDetails";
import { mobileItemSlugData2 } from "@/utils/mobile-demo-data";
import React, { useEffect, useState } from "react";
// import axios from "axios";

const MobileItemSlugPage = () => {
  const [specifications, setSpecifications] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchSpecifications = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://api.example.com/mobile-specifications"
  //         );
  //         setSpecifications(response.data);
  //       } catch (err) {
  //         setError("Failed to fetch data. Please try again later.");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchSpecifications();
  //   }, []);

  //   if (loading) {
  //     return <p className="text-center text-gray-600">Loading...</p>;
  //   }

  //   if (error) {
  //     return <p className="text-center text-red-600">{error}</p>;
  //   }

  const device = mobileItemSlugData2?.device;

  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="bg-slate-100 border rounded-lg hidden lg:block"></div>

      <div className="lg:col-span-3">
        <MobileDeviceDetails device={device} />
      </div>
    </section>
  );
};

export default MobileItemSlugPage;
