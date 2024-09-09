"use client";

import { mobileBrands } from "@/utils/mobile-demo-data";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateProductPage() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState<any>([]);
  const [launchInfo, setLaunchInfo] = useState<any>({
    announced: "",
    status: "",
    release_date: "",
  });
  console.log("launchInfo:", launchInfo);
  const [bodyInfo, setBodyInfo] = useState<any>({});
  const [displayInfo, setDisplayInfo] = useState<any>({});
  const [platformInfo, setPlatformInfo] = useState<any>({});
  const [memoryInfo, setMemoryInfo] = useState<any>({
    internal: ["", "", "", ""],
    card_slot: "",
  });
  console.log("memoryInfo:", memoryInfo);
  const [cameraInfo, setCameraInfo] = useState<any>({
    main: { modules: [""] },
    selfie: { modules: [""] },
  });
  console.log("cameraInfo:", cameraInfo);
  const [soundInfo, setSoundInfo] = useState<any>({});
  const [communicationsInfo, setCommunicationsInfo] = useState<any>({});
  const [featuresInfo, setFeaturesInfo] = useState<any>({});
  const [batteryInfo, setBatteryInfo] = useState<any>({});
  const [misc, setMisc] = useState<any>({
    colors: ["", "", ""],
    models: ["", "", ""],
  });
  console.log("misc:", misc);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      images: ["", "", ""],
    },
  });

  const validateURL = (url: string) =>
    /^(http:\/\/|https:\/\/)/.test(url) ||
    "Please enter a valid URL starting with http:// or https://";

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleBrandChange = (e: any) => {
    setBrand(e.target.value);
  };

  const handleImageChange = (index: any, value: any) => {
    setImages((prevImages: any) => {
      const newImages = [...prevImages];
      newImages[index] = value;
      return newImages;
    });
  };

  const handleLaunchInfoChange = (e: any, key: any) => {
    setLaunchInfo((prevLaunchInfo: any) => ({
      ...prevLaunchInfo,
      [key]: e.target.value,
    }));
  };

  const handleBodyInfoChange = (e: any, key: any, subKey: any) => {
    setBodyInfo((prevBodyInfo: any) => {
      if (subKey) {
        return {
          ...prevBodyInfo,
          [key]: {
            ...prevBodyInfo[key],
            [subKey]: e.target.value,
          },
        };
      } else {
        return {
          ...prevBodyInfo,
          [key]: e.target.value,
        };
      }
    });
  };

  const handleDisplayInfoChange = (e: any, key: any) => {
    setDisplayInfo((prevDisplayInfo: any) => ({
      ...prevDisplayInfo,
      [key]: e.target.value,
    }));
  };

  const handlePlatformInfoChange = (e: any, key: any) => {
    setPlatformInfo((prevPlatformInfo: any) => ({
      ...prevPlatformInfo,
      [key]: e.target.value,
    }));
  };

  const handleMemoryInfoChange = (e: any, key: any, subKey: any) => {
    setMemoryInfo((prevMemoryInfo: any) => {
      if (subKey) {
        return {
          ...prevMemoryInfo,
          [key]: {
            ...prevMemoryInfo[key],
            [subKey]: e.target.value,
          },
        };
      } else {
        return {
          ...prevMemoryInfo,
          [key]: e.target.value,
        };
      }
    });
  };

  const handleCameraInfoChange = (e: any, key: any, subKey: any) => {
    setCameraInfo((prevCameraInfo: any) => {
      if (subKey) {
        return {
          ...prevCameraInfo,
          [key]: {
            ...prevCameraInfo[key],
            [subKey]: e.target.value,
          },
        };
      } else {
        return {
          ...prevCameraInfo,
          [key]: e.target.value,
        };
      }
    });
  };

  const handleCameraArrayChange = (
    e: any,
    key: any,
    subKey: any,
    index: any
  ) => {
    setCameraInfo((prevCameraInfo: any) => {
      const keyExists = prevCameraInfo[key] || {};
      const subKeyExists = keyExists[subKey] || [];

      const updatedArray = [...subKeyExists];
      updatedArray[index] = e.target.value;

      return {
        ...prevCameraInfo,
        [key]: {
          ...keyExists,
          [subKey]: updatedArray,
        },
      };
    });
  };

  const handleSoundInfoChange = (e: any, key: any) => {
    setSoundInfo((prevSoundInfo: any) => ({
      ...prevSoundInfo,
      [key]: e.target.value,
    }));
  };

  const handleMemoryArrayChange = (e: any, key: any, index: any) => {
    setMemoryInfo((prevMemoryInfo: any) => {
      const updatedArray = [...(prevMemoryInfo[key] || [])];
      updatedArray[index] = e.target.value;
      return {
        ...prevMemoryInfo,
        [key]: updatedArray,
      };
    });
  };

  const handleCommunicationsInfoChange = (e: any, key: any) => {
    setCommunicationsInfo((prev: any) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleFeaturesInfoChange = (e: any, key: any) => {
    setFeaturesInfo((prev: any) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleBatteryInfoChange = (e: any, key: any) => {
    setBatteryInfo((prev: any) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleMiscArrayChange = (e: any, key: any, index: any) => {
    setMisc((prev: any) => {
      const updatedArray = [...(prev[key] || [])];
      updatedArray[index] = e.target.value;
      return {
        ...prev,
        [key]: updatedArray,
      };
    });
  };

  const handleFormSubmit = async (data: any) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mobile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            brand: brand,
            images: data.images,
            launch: launchInfo,
            body: bodyInfo,
            display: displayInfo,
            platform: platformInfo,
            memory: memoryInfo,
            camera: cameraInfo,
            sound: soundInfo,
            comms: communicationsInfo,
            features: featuresInfo,
            battery: batteryInfo,
            misc: misc,
          }),
        }
      );
      if (res.ok) {
        toast.success("Mobile created successfully!");
        resetForm();
        reset();
        // location.reload();
      } else {
        toast.error("Failed to create mobile");
        console.error("res:", res);
      }
    } catch (error) {
      toast.error("Error occurred while creating mobile");
      console.error("Error:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setBrand("");
    setImages([]);
    setLaunchInfo({ announced: "", status: "", release_date: "" });
    setBodyInfo({});
    setDisplayInfo({});
    setPlatformInfo({});
    setMemoryInfo({
      internal: ["", "", "", ""],
      card_slot: "",
    });

    setCameraInfo({
      main: { modules: [""] },
      selfie: { modules: [""] },
    });
    setSoundInfo({});
    setCommunicationsInfo({});
    setFeaturesInfo({});
    setBatteryInfo({});
    setMisc({
      colors: ["", "", ""],
      models: ["", "", ""],
    });
  };

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Mobile</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
        {/* Device Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Device Name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Device Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Device Brand
          </label>
          <select
            value={brand}
            onChange={handleBrandChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select a brand</option>
            {mobileBrands?.map((brand: any, index: any) => (
              <option key={index} value={brand.toLowerCase()}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Device Images
          </label>

          {/* Image 1 */}
          <Controller
            name="images[0]"
            control={control}
            rules={{
              validate: validateURL,
            }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                // placeholder="Image URL 1"
              />
            )}
          />
          {(errors as any).images?.[0] && (
            <p className="text-red-500 text-sm mt-1">
              {(errors as any).images[0]?.message}
            </p>
          )}

          {/* Image 2 */}
          <Controller
            name="images[1]"
            control={control}
            rules={{
              validate: validateURL,
            }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                // placeholder="Image URL 2"
              />
            )}
          />
          {(errors as any).images?.[1] && (
            <p className="text-red-500 text-sm mt-1">
              {(errors as any).images[1]?.message}
            </p>
          )}

          {/* Image 3 */}
          <Controller
            name="images[2]"
            control={control}
            rules={{
              validate: validateURL,
            }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                // placeholder="Image URL 3"
              />
            )}
          />
          {(errors as any).images?.[2] && (
            <p className="text-red-500 text-sm mt-1">
              {(errors as any).images[2]?.message}
            </p>
          )}
        </div>

        {/* Launch Information */}
        <div>
          <h2 className="text-lg font-medium">Launch Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Announced
              </label>
              <input
                type="date"
                value={launchInfo?.announced}
                onChange={(e) => handleLaunchInfoChange(e, "announced")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <input
                type="text"
                value={launchInfo?.status}
                onChange={(e) => handleLaunchInfoChange(e, "status")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Release Date
              </label>
              <input
                type="date"
                value={launchInfo?.release_date}
                onChange={(e) => handleLaunchInfoChange(e, "release_date")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Body Information */}
        <div>
          <h2 className="text-lg font-medium">Body Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dimensions
              </label>
              <input
                type="text"
                value={bodyInfo.dimensions || ""}
                onChange={(e) => handleBodyInfoChange(e, "dimensions", "")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <input
                type="text"
                value={bodyInfo.weight || ""}
                onChange={(e) => handleBodyInfoChange(e, "weight", "")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Build (Front/Back/Frame)
              </label>
              <input
                type="text"
                value={bodyInfo.build?.front || ""}
                onChange={(e) => handleBodyInfoChange(e, "build", "front")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={bodyInfo.build?.back || ""}
                onChange={(e) => handleBodyInfoChange(e, "build", "back")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={bodyInfo.build?.frame || ""}
                onChange={(e) => handleBodyInfoChange(e, "build", "frame")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SIM Type
              </label>
              <input
                type="text"
                value={bodyInfo.sim?.type || ""}
                onChange={(e) => handleBodyInfoChange(e, "sim", "type")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {/* <label className="block text-sm font-medium text-gray-700 mt-4">
                Others
              </label>
              <input
                type="text"
                value={bodyInfo.sim?.additional_features || ""}
                onChange={(e) =>
                  handleBodyInfoChange(e, "sim", "additional_features")
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              /> */}
            </div>
          </div>
        </div>

        {/* Display Information */}
        <div>
          <h2 className="text-lg font-medium">Display Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Display Type
              </label>
              <input
                type="text"
                value={displayInfo.type || ""}
                onChange={(e) => handleDisplayInfoChange(e, "type")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Size
              </label>
              <input
                type="text"
                value={displayInfo.size || ""}
                onChange={(e) => handleDisplayInfoChange(e, "size")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resolution
              </label>
              <input
                type="text"
                value={displayInfo.resolution || ""}
                onChange={(e) => handleDisplayInfoChange(e, "resolution")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Protection
              </label>
              <input
                type="text"
                value={displayInfo.protection || ""}
                onChange={(e) => handleDisplayInfoChange(e, "protection")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Platform Information */}
        <div>
          <h2 className="text-lg font-medium">Platform Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                OS
              </label>
              <input
                type="text"
                value={platformInfo.os || ""}
                onChange={(e) => handlePlatformInfoChange(e, "os")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chipset
              </label>
              <input
                type="text"
                value={platformInfo.chipset || ""}
                onChange={(e) => handlePlatformInfoChange(e, "chipset")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CPU
              </label>
              <input
                type="text"
                value={platformInfo.cpu || ""}
                onChange={(e) => handlePlatformInfoChange(e, "cpu")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                GPU
              </label>
              <input
                type="text"
                value={platformInfo.gpu || ""}
                onChange={(e) => handlePlatformInfoChange(e, "gpu")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Memory Information */}
        <div>
          <h2 className="text-lg font-medium">Memory Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Internal Storage Options
              </label>
              <input
                type="text"
                value={memoryInfo.internal[0]}
                onChange={(e) => handleMemoryArrayChange(e, "internal", 0)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={memoryInfo.internal[1]}
                onChange={(e) => handleMemoryArrayChange(e, "internal", 1)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={memoryInfo.internal[2]}
                onChange={(e) => handleMemoryArrayChange(e, "internal", 2)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={memoryInfo.internal[3]}
                onChange={(e) => handleMemoryArrayChange(e, "internal", 3)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Slot
              </label>
              <input
                type="text"
                value={memoryInfo.card_slot || ""}
                onChange={(e) => handleMemoryInfoChange(e, "card_slot", "")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Camera Information */}
        <div>
          <h2 className="text-lg font-medium">Camera Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Main Camera
              </label>
              <textarea
                // type="text"
                value={cameraInfo.main.modules[0] || ""}
                rows={4}
                onChange={(e) =>
                  handleCameraArrayChange(e, "main", "modules", 0)
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Selfie Camera
              </label>
              <textarea
                // type="text"
                value={cameraInfo.selfie.modules[0] || ""}
                rows={4}
                onChange={(e) =>
                  handleCameraArrayChange(e, "selfie", "modules", 0)
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Sound Information */}
        <div>
          <h2 className="text-lg font-medium">Sound Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loudspeaker
              </label>
              <input
                type="text"
                value={soundInfo.loudspeaker || ""}
                onChange={(e) => handleSoundInfoChange(e, "loudspeaker")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                3.5mm Jack
              </label>
              <input
                type="text"
                value={soundInfo.jack || ""}
                onChange={(e) => handleSoundInfoChange(e, "jack")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Communications Information */}
        <div>
          <h2 className="text-lg font-medium">Communications Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                WLAN
              </label>
              <input
                type="text"
                value={communicationsInfo.wlan || ""}
                onChange={(e) => handleCommunicationsInfoChange(e, "wlan")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bluetooth
              </label>
              <input
                type="text"
                value={communicationsInfo.bluetooth || ""}
                onChange={(e) => handleCommunicationsInfoChange(e, "bluetooth")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                GPS
              </label>
              <input
                type="text"
                value={communicationsInfo.gps || ""}
                onChange={(e) => handleCommunicationsInfoChange(e, "gps")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NFC
              </label>
              <input
                type="text"
                value={communicationsInfo.nfc || ""}
                onChange={(e) => handleCommunicationsInfoChange(e, "nfc")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Radio
              </label>
              <input
                type="text"
                value={communicationsInfo.radio || ""}
                onChange={(e) => handleCommunicationsInfoChange(e, "radio")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                USB
              </label>
              <input
                type="text"
                value={communicationsInfo.usb || ""}
                onChange={(e) => handleCommunicationsInfoChange(e, "usb")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Features Information */}
        <div>
          <h2 className="text-lg font-medium">Features Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sensors
              </label>
              <textarea
                // type="text"
                rows={2}
                value={featuresInfo.sensors || ""}
                onChange={(e) => handleFeaturesInfoChange(e, "sensors")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Battery Information */}
        <div>
          <h2 className="text-lg font-medium">Battery Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Battery Type
              </label>
              <input
                type="text"
                value={batteryInfo.type || ""}
                onChange={(e) => handleBatteryInfoChange(e, "type")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Charging
              </label>
              <input
                type="text"
                value={batteryInfo.charging || ""}
                onChange={(e) => handleBatteryInfoChange(e, "charging")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Misc Information */}
        <div>
          <h2 className="text-lg font-medium">Miscellaneous Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Colors
              </label>
              <input
                type="text"
                value={misc.colors[0] || ""}
                onChange={(e) => handleMiscArrayChange(e, "colors", 0)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={misc.colors[1] || ""}
                onChange={(e) => handleMiscArrayChange(e, "colors", 1)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={misc.colors[2] || ""}
                onChange={(e) => handleMiscArrayChange(e, "colors", 2)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Models
              </label>
              <input
                type="text"
                value={misc.models[0] || ""}
                onChange={(e) => handleMiscArrayChange(e, "models", 0)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={misc.models[1] || ""}
                onChange={(e) => handleMiscArrayChange(e, "models", 1)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                value={misc.models[2] || ""}
                onChange={(e) => handleMiscArrayChange(e, "models", 2)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Mobile
          </button>
        </div>
      </form>
    </section>
  );
}
