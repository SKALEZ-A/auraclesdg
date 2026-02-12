import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Auracle SDG
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
