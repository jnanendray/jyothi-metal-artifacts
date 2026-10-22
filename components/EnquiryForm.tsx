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

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="block text-sm font-medium text-stone-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={80}
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className="block text-sm font-medium text-stone-700">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="[6-9][0-9]{9}"
          title="10-digit Indian mobile number"
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-stone-700">
          What are you looking for?
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={3}
          maxLength={500}
          rows={4}
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-amber-800 px-6 py-3 font-semibold text-white hover:bg-amber-900 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p aria-live="polite" className="mt-3 text-sm text-stone-600">
          {status === "success" && <span className="text-green-700">{message}</span>}
          {status === "error" && <span className="text-red-700">{message}</span>}
        </p>
      </div>
    </form>
  );
}
