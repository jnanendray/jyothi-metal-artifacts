import Container from "@/components/Container";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-amber-800"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="bg-linear-to-br from-amber-100 via-amber-50 to-orange-50">
      <Container className="py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
          Jyothi Metal Artifacts
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
          Handcrafted copper, brass &amp; bronze, made to last generations
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-700">
          Traditional utensils, pooja essentials, idols and home decor, shaped by hand by
          skilled artisans. Every piece is solid metal, not plated.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#products"
            className="inline-block rounded-full bg-amber-800 px-6 py-3 font-semibold text-white hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
          >
            Shop the collection
          </a>
          <a
            href="#contact"
            className="inline-block rounded-full border border-stone-400 px-6 py-3 font-semibold text-stone-800 hover:border-stone-500 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
          >
            Ask a question
          </a>
        </div>
      </Container>
    </section>
  );
}

type Product = {
  name: string;
  metal: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    name: "Hammered Copper Water Jug",
    metal: "Pure Copper",
    price: "₹1,450",
    description: "1.5L hand-hammered jug with matching tumbler. Ayurvedic copper storage.",
  },
  {
    name: "Brass Pooja Thali Set",
    metal: "Brass",
    price: "₹2,100",
    description: "7-piece engraved thali set with diya, kalash and incense holder.",
  },
  {
    name: "Bronze Nataraja Idol",
    metal: "Bronze (Panchaloha)",
    price: "₹6,800",
    description: "10-inch traditional lost-wax cast idol, hand-finished detailing.",
  },
  {
    name: "Brass Diya Set (Pack of 5)",
    metal: "Brass",
    price: "₹950",
    description: "Classic oil lamps for festivals and daily prayer, polished finish.",
  },
  {
    name: "Copper-Bottom Kadai",
    metal: "Stainless Steel + Copper Base",
    price: "₹2,650",
    description: "10-inch kadai with pure copper base for even heating, induction-friendly.",
  },
  {
    name: "Engraved Brass Urli",
    metal: "Brass",
    price: "₹1,800",
    description: "12-inch decorative bowl for floating flowers, hand-engraved floral motifs.",
  },
];

function whatsAppHref(productName: string) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const digits = rawNumber.replace(/\D/g, "");
  if (!digits) return null;
  const text = encodeURIComponent(
    `Hi Jyothi Metal Artifacts, I'm interested in the ${productName}. Could you share more details?`
  );
  return `https://wa.me/${digits}?text=${text}`;
}

export function Products() {
  return (
    <section id="products" className="py-16 md:py-20">
      <Container>
        <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">Our Collection</h2>
        <p className="mt-2 max-w-2xl text-stone-600">
          A few favourites from our range of copper, brass and bronze pieces.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const href = whatsAppHref(product.name);
            return (
              <div
                key={product.name}
                className="flex flex-col rounded-2xl border border-amber-200 bg-white p-5 shadow-sm"
              >
                <div className="flex aspect-square items-center justify-center rounded-xl bg-amber-100 text-sm text-amber-700">
                  Photo coming soon
                </div>
                <h3 className="mt-4 text-base font-semibold text-stone-900">{product.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-700">
                  {product.metal}
                </p>
                <p className="mt-2 flex-1 text-sm text-stone-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-stone-900">{product.price}</span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-green-700 px-4 py-2 text-xs font-semibold text-white hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                      Enquire on WhatsApp
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="rounded-full bg-amber-800 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
                    >
                      Enquire
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

const trustPoints = [
  {
    title: "Handcrafted by artisans",
    description: "Each piece is shaped by skilled metalworkers, not mass-produced.",
  },
  {
    title: "Solid metal, not plated",
    description: "Genuine copper, brass or bronze all the way through.",
  },
  {
    title: "Pan-India shipping",
    description: "Carefully packed and shipped with tracking, anywhere in India.",
  },
  {
    title: "GST invoice included",
    description: "Every order comes with a proper tax invoice for your records.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-amber-100/60 py-16 md:py-20">
      <Container>
        <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">Why Jyothi</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-xl bg-white p-5 shadow-sm">
              <CheckIcon />
              <h3 className="mt-3 font-semibold text-stone-900">{point.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-amber-200 py-10">
      <Container className="text-center sm:text-left">
        <p className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Jyothi Metal Artifacts. Handcrafted copper, brass
          and bronze. Fictional demo store for a training project &mdash; prices and products
          are placeholders.
        </p>
      </Container>
    </footer>
  );
}
