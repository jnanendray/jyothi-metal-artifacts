import { Hero, Products, WhyChooseUs, Footer } from "@/components/Sections";
import Container from "@/components/Container";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <WhyChooseUs />
        <section id="contact" className="bg-[#150e09] py-16 md:py-20">
          <Container className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-[#f3e6ce] md:text-3xl">
              Get in touch
            </h2>
            <p className="font-body mt-2 text-[#b9a383]">
              Tell us what you&apos;re looking for and we&apos;ll get back within a working day.
            </p>
            <EnquiryForm />
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
