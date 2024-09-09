"use client";

import { useState } from "react";

export default function ProductForm() {
  const [formData, setFormData] = useState<any>({
    name: "",
    brand: "",
    releaseDate: "",
    rating: "",
    images: ["", "", ""],
    keySpecs: {
      processor: "",
      ram: "",
      storage: "",
      display: "",
      battery: "",
      camera: "",
    },
    detailedSpecs: {
      network: "",
      dimensions: "",
      weight: "",
      build: "",
      sim: "",
      ipRating: "",
      stylus: "",
      displayType: "",
      resolution: "",
      protection: "",
      alwaysOnDisplay: false,
      os: "",
      chipset: "",
      cpu: "",
      gpu: "",
      memory: {
        cardSlot: "",
        internal: "",
        ufs: "",
      },
      mainCamera: {
        quad: ["", "", "", ""],
        features: "",
        video: "",
      },
      selfieCamera: {
        single: "",
        features: "",
        video: "",
      },
      sound: {
        loudspeaker: "",
        jack: "",
        audio: "",
      },
      comms: {
        wlan: "",
        bluetooth: "",
        positioning: "",
        nfc: "",
        radio: "",
        usb: "",
      },
      sensors: "",
      additionalFeatures: "",
      battery: {
        type: "",
        charging: "",
      },
      colors: [""],
      models: [""],
      sar: {
        head: "",
        body: "",
        sarEu: {
          head: "",
          body: "",
        },
      },
      price: {
        usd: "",
        eur: "",
        gbp: "",
        inr: "",
      },
    },
  });

  const handleChange = (e: any, section: any, field: any) => {
    const value = e.target.value;
    setFormData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleNestedChange = (
    e: any,
    section: any,
    subSection: any,
    field: any
  ) => {
    const value = e.target.value;
    setFormData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subSection]: {
          ...prev[section][subSection],
          [field]: value,
        },
      },
    }));
  };

  const handleArrayChange = (e: any, section: any, index: any) => {
    const value = e.target.value;
    setFormData((prev: any) => {
      const updatedArray = [...prev[section]];
      updatedArray[index] = value;
      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        console.log("Product created successfully");
        // Reset form or show success message
      } else {
        console.error("Failed to create product");
        console.log("res:", res);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      {/* Basic Info */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={formData.name}
          onChange={(e) => handleChange(e, "name", "")}
        />
      </div>
      {/* Additional fields for brand, releaseDate, rating... */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Brand</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={formData.brand}
          onChange={(e) => handleChange(e, "brand", "")}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Release Date
        </label>
        <input
          type="date"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={formData.releaseDate}
          onChange={(e) => handleChange(e, "releaseDate", "")}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <input
          type="number"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={formData.rating}
          onChange={(e) => handleChange(e, "rating", "")}
        />
      </div>

      {/* Images */}
      {formData.images.map((image: any, index: any) => (
        <div className="mb-4" key={index}>
          <label className="block text-sm font-medium text-gray-700">
            Image {index + 1}
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={image}
            onChange={(e) => handleArrayChange(e, "images", index)}
          />
        </div>
      ))}

      {/* Key Specs */}
      <h2 className="text-lg font-medium mb-2">Key Specs</h2>
      {Object.keys(formData.keySpecs).map((spec) => (
        <div className="mb-4" key={spec}>
          <label className="block text-sm font-medium text-gray-700">
            {spec.charAt(0).toUpperCase() + spec.slice(1)}
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={formData.keySpecs[spec]}
            onChange={(e) => handleNestedChange(e, "keySpecs", spec, "")}
          />
        </div>
      ))}

      {/* Detailed Specs */}
      <h2 className="text-lg font-medium mb-2">Detailed Specs</h2>
      {Object.keys(formData.detailedSpecs).map((spec) => (
        <div className="mb-4" key={spec}>
          <label className="block text-sm font-medium text-gray-700">
            {spec.charAt(0).toUpperCase() + spec.slice(1)}
          </label>
          {typeof formData.detailedSpecs[spec] === "object" &&
          !Array.isArray(formData.detailedSpecs[spec]) ? (
            Object.keys(formData.detailedSpecs[spec]).map((subSpec) => (
              <div className="mb-4" key={subSpec}>
                <label className="block text-sm font-medium text-gray-700">
                  {subSpec.charAt(0).toUpperCase() + subSpec.slice(1)}
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={formData.detailedSpecs[spec][subSpec]}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", spec, subSpec)
                  }
                />
              </div>
            ))
          ) : (
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.detailedSpecs[spec]}
              onChange={(e) => handleChange(e, "detailedSpecs", spec)}
            />
          )}
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
