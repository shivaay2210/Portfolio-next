"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
    setDone(true);
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contactUs" className="relative">
      {" "}
      {/* Updated ID to match ScrollLink target */}
      <div className="flex flex-col px-[100px] my-[4rem] gap-[0.5rem]">
        <h1 className="text-3xl font-bold text-white">Contact Me</h1>
        <div className="h-px w-full bg-white"></div>
      </div>
      <div className="bg-black relative">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="max-w-2xl mx-[150px] p-4 relative z-10">
          {done && (
            <h1 className="text-lg md text-center font-sans font-bold mb-8 text-slate-400">
              Thank you for your message! I will get back to you shortly.
            </h1>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
