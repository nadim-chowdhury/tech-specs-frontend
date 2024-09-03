"use client";

import { useState } from "react";

export default function CreateProduct() {
  const [product, setProduct] = useState<any>({
    name: "",
    brand: "",
    releaseDate: "",
    rating: 0,
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
      // mainCamera: {
      //   quad: [],
      //   features: "",
      //   video: "",
      // },
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
      tests: {
        performance: {
          antutuV9: "",
          antutuV10: "",
          geekBenchV6: "",
          markWildLife: "",
        },
        display: "",
        camera: "",
        loudspeaker: "",
        battery: "",
      },
    },
    // reviews: [
    //   {
    //     id: 1,
    //     user: "",
    //     rating: "",
    //     comment: "",
    //   },
    // ],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // const handleNestedChange = (e: any, section: any, key: any) => {
  //   const { name, value } = e.target;
  //   setProduct({
  //     ...product,
  //     [section]: {
  //       ...product[section],
  //       [key]: { ...product[section][key], [name]: value },
  //     },
  //   });
  // };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement>, // use a more specific type for the event
    section: string,
    key: string
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [section]: {
        ...product[section],
        [key]: value, // Directly update the key with the new value
      },
    });
  };

  const handleArrayChange = (e: any, section: any, index: any, key: any) => {
    const { value } = e.target;

    // Ensure that the key points to an array
    const targetArray = product[section][key];
    if (!Array.isArray(targetArray)) {
      console.error(
        `Expected an array at product[${section}][${key}], but found:`,
        targetArray
      );
      return;
    }

    // Copy the existing array and update the specific index
    const newArray = [...targetArray];
    newArray[index] = value;

    // Update the state with the new array
    setProduct({
      ...product,
      [section]: {
        ...product[section],
        [key]: newArray,
      },
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("product------", product);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
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
  };

  return (
    <section className="container mx-auto">
      <div className="bg-slate-50 rounded-lg border p-6">
        <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Basic Info */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Release Date
            </label>
            <input
              type="date"
              name="releaseDate"
              value={product.releaseDate}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              required
            />
          </div>
          {/* <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={product.rating}
              onChange={handleChange}
              // step="0.1"
              min={0}
              max={5}
              className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              required
            />
          </div> */}

          {/* Images */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Images</h2>
            {product.images.map((image: any, index: any) => (
              <div key={index} className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Image {index + 1}
                </label>
                <input
                  type="text"
                  name={`image-${index}`}
                  value={image}
                  onChange={(e) => {
                    const newImages = [...product.images];
                    newImages[index] = e.target.value;
                    setProduct({ ...product, images: newImages });
                  }}
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Specs</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Processor
              </label>
              <input
                type="text"
                name="processor"
                value={product.keySpecs.processor}
                onChange={(e) => handleNestedChange(e, "keySpecs", "processor")}
                className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                RAM
              </label>
              <input
                type="text"
                name="ram"
                value={product.keySpecs.ram}
                onChange={(e) => handleNestedChange(e, "keySpecs", "ram")}
                className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Storage
              </label>
              <input
                type="text"
                name="storage"
                value={product.keySpecs.storage}
                onChange={(e) => handleNestedChange(e, "keySpecs", "storage")}
                className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Display
              </label>
              <input
                type="text"
                name="display"
                value={product.keySpecs.display}
                onChange={(e) => handleNestedChange(e, "keySpecs", "display")}
                className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Battery
              </label>
              <input
                type="text"
                name="battery"
                value={product.keySpecs.battery}
                onChange={(e) => handleNestedChange(e, "keySpecs", "battery")}
                className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Camera
              </label>
              <input
                type="text"
                name="camera"
                value={product.keySpecs.camera}
                onChange={(e) => handleNestedChange(e, "keySpecs", "camera")}
                className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Detailed Specs */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Detailed Specs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Network
                </label>
                <input
                  type="text"
                  name="network"
                  value={product.detailedSpecs.network}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "network")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Dimensions
                </label>
                <input
                  type="text"
                  name="dimensions"
                  value={product.detailedSpecs.dimensions}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "dimensions")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Weight
                </label>
                <input
                  type="text"
                  name="weight"
                  value={product.detailedSpecs.weight}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "weight")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Build
                </label>
                <input
                  type="text"
                  name="build"
                  value={product.detailedSpecs.build}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "build")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  SIM
                </label>
                <input
                  type="text"
                  name="sim"
                  value={product.detailedSpecs.sim}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "sim")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              {/* <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  IP Rating
                </label>
                <input
                  type="text"
                  name="ipRating"
                  value={product.detailedSpecs.ipRating}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "ipRating")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div> */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Stylus
                </label>
                <input
                  type="text"
                  name="stylus"
                  value={product.detailedSpecs.stylus}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "stylus")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Display Type
                </label>
                <input
                  type="text"
                  name="displayType"
                  value={product.detailedSpecs.displayType}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "displayType")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Resolution
                </label>
                <input
                  type="text"
                  name="resolution"
                  value={product.detailedSpecs.resolution}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "resolution")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Protection
                </label>
                <input
                  type="text"
                  name="protection"
                  value={product.detailedSpecs.protection}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "protection")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              {/* <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Always On Display
              </label>
              <input
                type="checkbox"
                name="alwaysOnDisplay"
                checked={product.detailedSpecs.alwaysOnDisplay}
                onChange={(e) =>
                  handleNestedChange(e, "detailedSpecs", "alwaysOnDisplay")
                }
                className="block p-2 border rounded-md focus:ring focus:ring-blue-500"
              />
            </div> */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Operating System
                </label>
                <input
                  type="text"
                  name="os"
                  value={product.detailedSpecs.os}
                  onChange={(e) => handleNestedChange(e, "detailedSpecs", "os")}
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Chipset
                </label>
                <input
                  type="text"
                  name="chipset"
                  value={product.detailedSpecs.chipset}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "chipset")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  CPU
                </label>
                <input
                  type="text"
                  name="cpu"
                  value={product.detailedSpecs.cpu}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "cpu")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  GPU
                </label>
                <input
                  type="text"
                  name="gpu"
                  value={product.detailedSpecs.gpu}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "gpu")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
              {/* Add more fields for detailedSpecs here */}

              {/* Memory Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Memory</h3>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Card Slot
                </label>
                <input
                  type="text"
                  name="cardSlot"
                  value={product.detailedSpecs.memory.cardSlot}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "memory.cardSlot")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Internal Storage
                </label>
                <input
                  type="text"
                  name="internal"
                  value={product.detailedSpecs.memory.internal}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "memory.internal")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  UFS
                </label>
                <input
                  type="text"
                  name="ufs"
                  value={product.detailedSpecs.memory.ufs}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "memory.ufs")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Main Camera Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Main Camera</h3>
                {/* {product.detailedSpecs.mainCamera.quad.map(
                  (camera: any, index: any) => (
                    <div key={index} className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Camera {index + 1}
                      </label>
                      <input
                        type="text"
                        name={`camera-${index}`}
                        value={camera}
                        onChange={(e) =>
                          handleArrayChange(
                            e,
                            "detailedSpecs",
                            index,
                            "mainCamera.quad"
                          )
                        }
                        className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                      />
                    </div>
                  )
                )} */}
                {/* <label className="block mb-2 text-sm font-medium text-gray-700">
                  Features
                </label>
                <input
                  type="text"
                  name="features"
                  value={product.detailedSpecs.mainCamera.features}
                  onChange={(e) =>
                    handleNestedChange(
                      e,
                      "detailedSpecs",
                      "mainCamera.features"
                    )
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Video
                </label>
                <input
                  type="text"
                  name="video"
                  value={product.detailedSpecs.mainCamera.video}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "mainCamera.video")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                /> */}
              </div>

              {/* Selfie Camera Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Selfie Camera</h3>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Single
                </label>
                <input
                  type="text"
                  name="single"
                  value={product.detailedSpecs.selfieCamera.single}
                  onChange={(e) =>
                    handleNestedChange(
                      e,
                      "detailedSpecs",
                      "selfieCamera.single"
                    )
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Features
                </label>
                <input
                  type="text"
                  name="features"
                  value={product.detailedSpecs.selfieCamera.features}
                  onChange={(e) =>
                    handleNestedChange(
                      e,
                      "detailedSpecs",
                      "selfieCamera.features"
                    )
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Video
                </label>
                <input
                  type="text"
                  name="video"
                  value={product.detailedSpecs.selfieCamera.video}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "selfieCamera.video")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Sound Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Sound</h3>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Loudspeaker
                </label>
                <input
                  type="text"
                  name="loudspeaker"
                  value={product.detailedSpecs.sound.loudspeaker}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "sound.loudspeaker")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  3.5mm Jack
                </label>
                <input
                  type="text"
                  name="jack"
                  value={product.detailedSpecs.sound.jack}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "sound.jack")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Audio
                </label>
                <input
                  type="text"
                  name="audio"
                  value={product.detailedSpecs.sound.audio}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "sound.audio")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Comms Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Comms</h3>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  WLAN
                </label>
                <input
                  type="text"
                  name="wlan"
                  value={product.detailedSpecs.comms.wlan}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "comms.wlan")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Bluetooth
                </label>
                <input
                  type="text"
                  name="bluetooth"
                  value={product.detailedSpecs.comms.bluetooth}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "comms.bluetooth")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Positioning
                </label>
                <input
                  type="text"
                  name="positioning"
                  value={product.detailedSpecs.comms.positioning}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "comms.positioning")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  NFC
                </label>
                <input
                  type="text"
                  name="nfc"
                  value={product.detailedSpecs.comms.nfc}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "comms.nfc")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Radio
                </label>
                <input
                  type="text"
                  name="radio"
                  value={product.detailedSpecs.comms.radio}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "comms.radio")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  USB
                </label>
                <input
                  type="text"
                  name="usb"
                  value={product.detailedSpecs.comms.usb}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "comms.usb")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Sensors Section */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Sensors
                </label>
                <input
                  type="text"
                  name="sensors"
                  value={product.detailedSpecs.sensors}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "sensors")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Additional Features Section */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Additional Features
                </label>
                <input
                  type="text"
                  name="additionalFeatures"
                  value={product.detailedSpecs.additionalFeatures}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "additionalFeatures")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Battery Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Battery</h3>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  value={product.detailedSpecs.battery.type}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "battery.type")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Charging
                </label>
                <input
                  type="text"
                  name="charging"
                  value={product.detailedSpecs.battery.charging}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "battery.charging")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Standby
                </label>
                <input
                  type="text"
                  name="standby"
                  value={product.detailedSpecs.battery.standby}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "battery.standby")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Talk Time
                </label>
                <input
                  type="text"
                  name="talkTime"
                  value={product.detailedSpecs.battery.talkTime}
                  onChange={(e) =>
                    handleNestedChange(e, "detailedSpecs", "battery.talkTime")
                  }
                  className="block w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
