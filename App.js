import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Dragusha & Associates Law Firm</h1>
        <p className="text-sm mt-2">Justice. Expertise. Dedication.</p>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Trusted Legal Partner</h2>
        <p className="max-w-2xl mx-auto mb-6">
          At Dragusha & Associates, we specialize in providing professional legal services in Business Law, Criminal Defense, and Legal Consulting.
        </p>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-800">Book a Consultation</button>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Business Law", description: "Corporate legal structures, contracts, and compliance." },
            { title: "Criminal Defense", description: "Strong representation in criminal cases." },
            { title: "Legal Consulting", description: "Tailored legal strategies and advice." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Stay Informed</h2>
        <p className="max-w-xl mx-auto mb-4">
          Visit our blog for legal insights, updates, and expert tips to help you understand your rights and navigate the law.
        </p>
        <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-2xl hover:bg-blue-900 hover:text-white">Go to Blog</button>
      </section>

      <footer className="bg-blue-900 text-white p-6 mt-10 text-center">
        <p>&copy; {new Date().getFullYear()} Dragusha & Associates Law Firm. All rights reserved.</p>
        <p className="text-sm">Contact us: info@dragushalaw.com | +383 49 345 427</p>
      </footer>
    </div>
  );
}
