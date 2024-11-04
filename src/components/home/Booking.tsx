"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Booking() {
  const [date, setDate] = useState<Date>();

  return (
    <section className="w-full bg-card py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-cormorant text-4xl md:text-5xl text-soft-black">
                Book Your Experience
              </h2>
              <p className="font-nunito text-deep-navy">
                Transform your beauty routine into a luxury experience.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="border-primary/20 focus:border-primary"
                />
                <Input
                  placeholder="Last Name"
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <Input
                type="email"
                placeholder="Email Address"
                className="border-primary/20 focus:border-primary"
              />

              <Select>
                <SelectTrigger className="border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="classic-lash">Classic Full Set</SelectItem>
                  <SelectItem value="volume-lash">Volume Full Set</SelectItem>
                  <SelectItem value="mega-volume">Mega Volume</SelectItem>
                  <SelectItem value="gel-manicure">Signature Gel Manicure</SelectItem>
                  <SelectItem value="art-design">Art & Design</SelectItem>
                  <SelectItem value="bio-sculpture">Bio Sculpture Gel</SelectItem>
                </SelectContent>
              </Select>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-primary/20",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Textarea
                placeholder="Special requests or notes"
                className="border-primary/20 focus:border-primary"
              />

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Book Appointment
              </Button>
            </form>

            <p className="text-sm text-deep-navy/70 italic">
              First-time clients: Mention "WELCOME" for a complimentary hand treatment with your service.
            </p>
          </div>

          {/* Right side - Image and additional info */}
          <div className="space-y-8">
            {/* Placeholder for image - uncomment and update src when ready */}
            {/* <Image
              src="/images/booking-ambiance.webp"
              alt="LUMIÈRE luxury nail and lash experience"
              width={600}
              height={800}
              className="rounded-lg object-cover"
            /> */}
            <div className="aspect-[3/4] rounded-lg bg-muted/20" />

            <div className="space-y-6 bg-secondary/20 p-8 rounded-lg">
              <h3 className="font-cormorant text-2xl text-soft-black">
                Our Guarantee
              </h3>
              <p className="font-nunito text-deep-navy">
                Love your results or your next service is complimentary.
              </p>
              <ul className="space-y-3 text-deep-navy">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Medical-grade sterilization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Premium products
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Unrushed appointments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 