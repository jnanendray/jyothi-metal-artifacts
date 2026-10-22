export default function WhatsAppButton() {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const digits = rawNumber.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  const message = encodeURIComponent(
    "Hi Jyothi Metal Artifacts, I'd like to know more about your products."
  );
  const href = `https://wa.me/${digits}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.15.3-.4.45-.603.149-.198.199-.339.3-.566.1-.227.05-.419-.05-.566-.1-.149-.6-1.464-.868-2.008-.219-.447-.44-.487-.627-.487-.173 0-.372-.025-.57.025-.198.05-.772.3-.996.57-.223.272-.846.843-.846 1.995 0 1.153.846 2.267.964 2.42.12.15 2.01 3.05 4.874 4.158 2.864 1.11 2.864.74 3.382.692.52-.049 1.758-.717 2.006-1.41.248-.692.248-1.287.173-1.41-.074-.124-.273-.2-.57-.35z" />
        <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.996.587 3.854 1.6 5.418L2 22l4.68-1.54a9.955 9.955 0 0 0 5.324 1.544h.004c5.518 0 10.004-4.486 10.004-10.004C22.012 6.486 17.526 2 12.004 2zm0 18.17h-.003a8.157 8.157 0 0 1-4.153-1.136l-.298-.177-3.47 1.142 1.158-3.384-.194-.31a8.147 8.147 0 0 1-1.247-4.301c0-4.51 3.67-8.18 8.18-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.51-3.67 8.166-8.18 8.166z" />
      </svg>
    </a>
  );
}
