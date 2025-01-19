'use client'
import { useState } from 'react';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  availability: {
    days: string[];
    times: string[];
  };
  patients: Patient[];
}

interface Patient {
  name: string;
  age: number;
  disease: string;
  roomId?: number; // roomId is optional
}

export default function DoctorSchedule() {
  const [doctors] = useState<Doctor[]>([
    {
      id: 1,
      name: "Dr. Ines Bouhlel",
      specialization: "Orthopedics",
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        times: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"],
      },
      patients: [],
    },
    {
      id: 2,
      name: "Dr. Ali Mbarek",
      specialization: "Dental Medicine",
      availability: {
        days: ["Tuesday", "Thursday"],
        times: ["10:00 AM - 1:00 PM"],
      },
      patients: [
        { name: "Imen Lahmar", age: 28, disease: "Influenza", roomId: 201 },
      ],
    },
    {
      id: 3,
      name: "Dr. Wafa Kefi",
      specialization: "Traumatology",
      availability: {
        days: ["Monday", "Tuesday", "Wednesday"],
        times: ["1:00 PM - 4:00 PM"],
      },
      patients: [],
    },
    {
      id: 4,
      name: "Dr. Sami Gharbi",
      specialization: "Plastic Surgery and Hand Surgery",
      availability: {
        days: ["Thursday", "Friday"],
        times: ["9:00 AM - 12:00 PM"],
      },
      patients: [
        { name: "Fatma Dridi", age: 62, disease: "Cured", roomId: 302 },
      ],
    },
    {
      id: 5,
      name: "Dr. Mohamed Slim Trabelsi",
      specialization: "Gynecology and Obstetrics",
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        times: ["10:00 AM - 1:00 PM"],
      },
      patients: [],
    },
    {
      id: 6,
      name: "Dr. Amel Ben Ammar",
      specialization: "Hematology",
      availability: {
        days: ["Tuesday", "Thursday"],
        times: ["2:00 PM - 5:00 PM"],
      },
      patients: [
        { name: "Fatma Dridi", age: 62, disease: "Diabetes", roomId: 302 },
      ],
    },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Doctors Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Improved layout */}
        {doctors.map((doctor) => (
          <div key={doctor.id} className="border rounded p-4">
            <h2 className="text-xl font-bold">{doctor.name}</h2>
            <p>Specialization: {doctor.specialization}</p>
            <p>
              Availability: {doctor.availability.days.join(", ")} -{" "}
              {doctor.availability.times.join(", ")}
            </p>
        
          </div>
        ))}
      </div>
    </div>
  );
}