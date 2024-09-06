import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function MobileDeviceDetails({ device }: any) {
  return (
    <div className="w-full">
      {/* Device Name */}
      <h1 className="text-2xl font-bold text-gray-800">{device?.name}</h1>
      <h3 className="text-xl font-bold text-gray-800 mb-6 capitalize">
        {device?.brand}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {device?.images?.map((img: any, i: any) => (
          <div
            key={i}
            className={`h-[40vh] w-full ${i > 0 ? "hidden sm:block" : ""}`}
          >
            <Image
              src={img?.url || ""}
              // src="https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={1280}
              height={720}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <Table className="mobile-device-details-table text-xs md:text-base">
        {/* Launch Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Launch
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Announced:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.launch?.announced}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Status:</TableCell>
            <TableCell className="text-gray-700">
              {device?.launch?.status}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Release Date:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.launch?.release_date}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Body Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Body
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Dimensions:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.body?.dimensions}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Weight:</TableCell>
            <TableCell className="text-gray-700">
              {device?.body?.weight}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Build:</TableCell>
            <TableCell className="text-gray-700">
              Front - {device?.body?.build?.front}, Back -{" "}
              {device?.body?.build?.back}, Frame - {device?.body?.build?.frame}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">SIM:</TableCell>
            <TableCell className="text-gray-700">
              {device?.body?.sim?.type}
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell className="font-medium text-gray-700">Others:</TableCell>
            <TableCell className="text-gray-700">
              {device?.body?.sim?.additional_features}
            </TableCell>
          </TableRow> */}
        </TableBody>

        {/* Display Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Display
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Type:</TableCell>
            <TableCell className="text-gray-700">
              {device?.display?.type}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Size:</TableCell>
            <TableCell className="text-gray-700">
              {device?.display?.size}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Resolution:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.display?.resolution}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Protection:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.display?.protection}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Platform Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Platform
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">OS:</TableCell>
            <TableCell className="text-gray-700">
              {device?.platform?.os}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">CPU:</TableCell>
            <TableCell className="text-gray-700">
              {device?.platform?.cpu}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">GPU:</TableCell>
            <TableCell className="text-gray-700">
              {device?.platform?.gpu}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Chipset:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.platform?.chipset}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Memory Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Memory
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Card Slot:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.memory?.card_slot}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Internal:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.memory?.internal?.join(", ")}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Camera Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Camera
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Main Camera:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.camera?.main?.modules?.join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Selfie Camera:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.camera?.selfie?.modules?.join(", ")}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Sound Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Sound
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Loudspeaker:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.sound?.loudspeaker}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Audio Jack:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.sound?.jack}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Features Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={2}
              className="text-xl font-semibold text-gray-700"
            >
              Comms
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">GPS:</TableCell>
            <TableCell className="text-gray-700">
              {device?.comms?.gps}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Wifi:</TableCell>
            <TableCell className="text-gray-700">
              {device?.comms?.wlan}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Bluetooth:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.comms?.bluetooth}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">NFC:</TableCell>
            <TableCell className="text-gray-700">
              {device?.comms?.nfc}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">USB:</TableCell>
            <TableCell className="text-gray-700">
              {device?.comms?.usb}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Radio:</TableCell>
            <TableCell className="text-gray-700">
              {device?.comms?.radio}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Features Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Features
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Sensors:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.features?.sensors}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Battery Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className="text-xl font-semibold text-gray-700"
            >
              Battery
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Type:</TableCell>
            <TableCell className="text-gray-700">
              {device?.battery?.type}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">
              Charging:
            </TableCell>
            <TableCell className="text-gray-700">
              {device?.battery?.charging}
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Misc Information */}
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={2}
              className="text-xl font-semibold text-gray-700"
            >
              Miscellaneous
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Colors:</TableCell>
            <TableCell className="text-gray-700">
              {device?.misc?.colors?.join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-gray-700">Models:</TableCell>
            <TableCell className="text-gray-700">
              {device?.misc?.models?.join(", ")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
