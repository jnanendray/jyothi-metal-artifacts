import Image from "next/image";
import Container from "@/components/Container";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#8a5a2b]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function WordmarkLine({
  text,
  fillVariant,
  className,
  icon,
}: {
  text: string;
  fillVariant: "fill-primary" | "fill-secondary" | "fill-tertiary";
  className: string;
  icon: React.ReactNode;
}) {
  return (
    <p className={`wordmark-line font-wordmark ${className}`}>
      <span className="wordmark-textstack">
        <span className="wordmark-extrude" aria-hidden="true">
          {text}
        </span>
        <span className={`wordmark-fill ${fillVariant}`}>{text}</span>
      </span>
      {icon}
    </p>
  );
}

function DiyaIcon() {
  return (
    <svg
      className="wordmark-icon h-[0.62em] w-auto"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 38c0 11 9.8 18 22 18s22-7 22-18"
        stroke="#e8a560"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M6 34c6 5 15 7 26 7s20-2 26-7"
        stroke="#e8a560"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 27c-3-4-3-9 0-13 3 4 3 9 0 13Z"
        fill="#f4cc85"
        stroke="#e8a560"
        strokeWidth="2"
      />
      <path d="M32 27c2.5 2 2.5 5 0 7-2.5-2-2.5-5 0-7Z" fill="#ffe8b3" />
    </svg>
  );
}

function KalashIcon() {
  return (
    <svg
      className="wordmark-icon h-[0.72em] w-auto"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M22 14h20" stroke="#e8a560" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 14v6M38 14v6" stroke="#e8a560" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M22 20c-8 4-12 12-12 20 0 12 10 20 22 20s22-8 22-20c0-8-4-16-12-20Z"
        stroke="#e8a560"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M14 36h36" stroke="#e8a560" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

function UrliIcon() {
  return (
    <svg
      className="wordmark-icon h-[0.72em] w-auto"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 26c6 6 16 9 24 9s18-3 24-9"
        stroke="#e8a560"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 24c4 10 12 16 22 16s18-6 22-16"
        stroke="#e8a560"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="23" r="3" fill="#f4cc85" />
      <circle cx="36" cy="21" r="2.5" fill="#ffe8b3" />
      <circle cx="30" cy="27" r="2" fill="#f4cc85" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="patina-field relative overflow-hidden border-b border-[#3a2615]">
      <div className="ambient-sheen pointer-events-none absolute inset-0" />
      <Container className="relative py-20 md:py-28">
        <div className="wordmark-wrap">
          <WordmarkLine
            text="Jyothi"
            fillVariant="fill-primary"
            className="text-[clamp(2.75rem,9vw,6.5rem)] tracking-[0.04em]"
            icon={<DiyaIcon />}
          />
          <WordmarkLine
            text="Metal"
            fillVariant="fill-secondary"
            className="mt-2 text-[clamp(1.1rem,3.4vw,3.1rem)] tracking-[0.3em]"
            icon={<KalashIcon />}
          />
          <WordmarkLine
            text="Artifacts"
            fillVariant="fill-tertiary"
            className="mt-1 text-[clamp(1.1rem,3.4vw,3.1rem)] tracking-[0.26em]"
            icon={<UrliIcon />}
          />
        </div>
        <p className="font-body mt-8 max-w-xl text-lg leading-relaxed text-[#e4d3b4]">
          Traditional utensils, pooja essentials, idols and home decor, shaped by hand by
          skilled artisans. Every piece is solid metal, not plated.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#products"
            className="font-body inline-block rounded-sm bg-[#b8743a] px-6 py-3 font-semibold text-[#150e09] hover:bg-[#c9854a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e3b765]"
          >
            Shop the collection
          </a>
          <a
            href="#contact"
            className="font-body inline-block rounded-sm border border-[#6b4a28] px-6 py-3 font-semibold text-[#e4d3b4] hover:border-[#9a7342] hover:bg-[#2b1a0f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e3b765]"
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
  image: string;
};

const products: Product[] = [
  {
    name: "Hammered Copper Water Jug",
    metal: "Pure Copper",
    price: "₹1,450",
    description: "1.5L hand-hammered jug with matching tumbler. Ayurvedic copper storage.",
    image: "/products/copper-jug.jpg",
  },
  {
    name: "Brass Pooja Thali Set",
    metal: "Brass",
    price: "₹2,100",
    description: "7-piece engraved thali set with diya, kalash and incense holder.",
    image: "/products/brass-pooja-thali.jpg",
  },
  {
    name: "Bronze Nataraja Idol",
    metal: "Bronze (Panchaloha)",
    price: "₹6,800",
    description: "10-inch traditional lost-wax cast idol, hand-finished detailing.",
    image: "/products/bronze-nataraja.jpg",
  },
  {
    name: "Brass Diya Set (Pack of 5)",
    metal: "Brass",
    price: "₹950",
    description: "Classic oil lamps for festivals and daily prayer, polished finish.",
    image: "/products/brass-diya-set.jpg",
  },
  {
    name: "Copper-Bottom Kadai",
    metal: "Stainless Steel + Copper Base",
    price: "₹2,650",
    description: "10-inch kadai with pure copper base for even heating, induction-friendly.",
    image: "/products/copper-kadai.jpg",
  },
  {
    name: "Engraved Brass Urli",
    metal: "Brass",
    price: "₹1,800",
    description: "12-inch decorative bowl for floating flowers, hand-engraved floral motifs.",
    image: "/products/brass-urli.jpg",
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
    <section id="products" className="bg-[#150e09] py-16 md:py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-[#f3e6ce] md:text-3xl">
          Our Collection
        </h2>
        <p className="font-body mt-2 max-w-2xl text-[#b9a383]">
          A few favourites from our range of copper, brass and bronze pieces.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const href = whatsAppHref(product.name);
            return (
              <div
                key={product.name}
                className="flex flex-col rounded-sm border border-[#caa667]/40 bg-[#f3e6ce] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              >
                <div className="relative aspect-square overflow-hidden rounded-xs bg-[#e6d4ac]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display mt-4 text-base font-semibold text-[#2b1a0f]">
                  {product.name}
                </h3>
                <p
                  className="font-body mt-1 text-xs tracking-wide text-[#8a5a2b]"
                  style={{ fontVariantCaps: "small-caps" }}
                >
                  {product.metal}
                </p>
                <p className="font-body mt-2 flex-1 text-sm text-[#4a3a28]">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-[#caa667]/40 pt-3">
                  <span className="font-display text-lg font-semibold text-[#2b1a0f]">
                    {product.price}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body rounded-sm bg-green-700 px-3 py-2 text-xs font-semibold text-white hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                      Enquire on WhatsApp
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="font-body rounded-sm bg-[#8a5a2b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#9a6a38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a5a2b]"
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
    <section className="patina-field border-y border-[#3a2615] py-16 md:py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-[#f3e6ce] md:text-3xl">
          Why Jyothi
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-sm border border-[#3a2615] bg-[#2b1a0f]/70 p-5"
            >
              <CheckIcon />
              <h3 className="font-display mt-3 font-semibold text-[#f3e6ce]">{point.title}</h3>
              <p className="font-body mt-1 text-sm text-[#b9a383]">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#3a2615] bg-[#150e09] py-10">
      <Container className="text-center sm:text-left">
        <p className="font-body text-sm text-[#8a7560]">
          &copy; {new Date().getFullYear()} Jyothi Metal Artifacts. Handcrafted copper, brass
          and bronze. Fictional demo store for a training project &mdash; prices and products
          are placeholders.
        </p>
      </Container>
    </footer>
  );
}
