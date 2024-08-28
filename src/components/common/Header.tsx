import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 border-b mb-16">
      <div className="container mx-auto">
        <Navbar />
      </div>
    </header>
  );
}
