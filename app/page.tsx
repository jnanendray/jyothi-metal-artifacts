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
        <section id="contact" className="py-16 md:py-20">
          <Container className="max-w-2xl">
            <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">Get in touch</h2>
            <p className="mt-2 text-stone-600">
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
