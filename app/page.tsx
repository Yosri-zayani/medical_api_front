import Image from 'next/image'
import Link from 'next/link'
import { ChatbotCard } from '@/components/ChatbotCard'
import hospitalmage from "@/app/images/azizaothamana.jpg";
export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Aziza Othmana Hospital</h1>
        <p className="text-xl">Providing high-quality healthcare in the heart of Tunisia</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 Emergency Care</li>
            <li>Specialized Clinics</li>
            <li>Advanced Surgery</li>
            <li>Maternity Care</li>
            <li>Laboratory and Imaging Services</li>
          </ul>
        </div>
        <div>
          <Image 
              src={hospitalmage}
              alt="Hospital building"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
        </div>
      </section>

      <section className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Hospital History</h2>
        <p>Founded in 1662 during the Muradid dynasty, Aziza Othmana Hospital is the oldest hospital in Tunis. Originally named Bimaristan Al Azzafine, it was relocated to its current site in the second half of the 19th century. In 1879, it was renamed Sadiki Hospital and played a crucial role in the discovery of the typhus agent by Charles Nicolle, who received the Nobel Prize in Medicine in 1928 for this work.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Specialties</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Hematology</h3>
            <p>Including a blood bank</p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Gynecology and Obstetrics</h3>
            <p>With a medically assisted procreation unit</p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Orthopedics</h3>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Plastic Surgery and Hand Surgery</h3>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Traumatology</h3>
            <p>Known for its emergency trauma services</p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Dental Medicine</h3>
            <p>Located in a separate pavilion</p>
          </li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Book Your Appointment Today</h2>
        <Link href="/appointments" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Book Appointment
        </Link>
      </section>

      <ChatbotCard />
    </div>
  )
}

