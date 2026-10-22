"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks! We'll get back to you within a working day.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Could not send your enquiry. Please check your connection and try again.");
    }
  }

  const labelClass = "font-body block text-sm font-medium text-[#c9a876]";
  const inputClass =
    "font-body mt-1 w-full rounded-sm border border-[#4a3620] bg-[#2b1a0f] px-3 py-2 text-[#f3e6ce] placeholder:text-[#8a7560] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e3b765]";

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={80}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className={labelClass}>
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="[6-9][0-9]{9}"
          title="10-digit Indian mobile number"
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          What are you looking for?
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={3}
          maxLength={500}
          rows={4}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-body rounded-sm bg-[#b8743a] px-6 py-3 font-semibold text-[#150e09] hover:bg-[#c9854a] disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e3b765]"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p aria-live="polite" className="font-body mt-3 text-sm text-[#b9a383]">
          {status === "success" && <span className="text-green-500">{message}</span>}
          {status === "error" && <span className="text-red-400">{message}</span>}
        </p>
      </div>
    </form>
  );
}
