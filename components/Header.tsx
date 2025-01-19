import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Aziza Othmana Hospital</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/appointments">Appointments</Link></li>
          <li><Link href="/doctors">Doctors</Link></li>
          <li><Link href="/admin">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

