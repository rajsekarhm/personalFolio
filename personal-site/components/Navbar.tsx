"use client";

import React, { useState } from "react";
import Link from "next/link";

const navItems = [{ title: "Contact", href: "#contact" }];

export function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const [isSecretWrong, setSecret] = useState(false);

  const handleSubmit = () => {
    if (inputValue === "02-02-2002") {
      alert("Access granted to Voyage!");
    } else {
      setSecret(true);
    }
  };

  return (
    <header>
      <div className="font-mono">
        <nav>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-gray-400 text-s">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="text-gray-400 text-s"
              onClick={() => setSecret(true)}
            >
              Voyage
            </button>
          </div>
        </nav>
      </div>

      {isSecretWrong && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="font-mono bg-[#111] p-6 rounded-xl shadow-lg w-[90%] max-w-sm text-center">
      <h3 className="text-gray-400 text-s mb-3">Enter Secret</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter secret"
        className="text-gray-400 text-s border p-2 rounded w-full mb-4 bg-transparent placeholder-gray-500"
      />
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleSubmit}
          className="text-gray-400 text-s border-2 border-gray-100 px-4 py-1 rounded hover:bg-gray-800"
        >
          Submit
        </button>
        <button
          onClick={() => setSecret(false)}
          className="text-gray-400 text-s border-2 border-gray-100 px-4 py-1 rounded hover:bg-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </header>
  );
}
