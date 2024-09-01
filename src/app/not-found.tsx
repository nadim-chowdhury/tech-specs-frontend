import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Not Found</h2>
        <p className="my-8">Could not find requested resource</p>
        <Link href="/" className="text-cyan-600">Return Home</Link>
      </div>
    </div>
  );
}
