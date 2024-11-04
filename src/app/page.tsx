import Hero from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Services } from "@/components/home/Services";
import { Artists } from "@/components/home/Artists";
import { Testimonials } from "@/components/home/Testimonials";
import { Membership } from "@/components/home/Membership";
import { Booking } from "@/components/home/Booking";
import { Introduction } from "@/components/home/Introduction";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Introduction />
      <section id="experience"  className="w-full">
        <Experience />
      </section>
      <section id="services"  className="w-full">
        <Services />
      </section>
      <section id="artists"  className="w-full">
        <Artists />
      </section>
      <section id="testimonials" className="w-full">
        <Testimonials />
      </section>
      <section id="membership"  className="w-full">
        <Membership />
      </section>
      <section id="booking"  className="w-full">
        <Booking />
      </section>
    </main>
  );
}
