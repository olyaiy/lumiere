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
import { format, setHours, setMinutes } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { artists } from "@/components/home/Artists";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimeSlot {
  hour: number;
  minute: number;
  label: string;
}

const timeSlots: TimeSlot[] = [
  { hour: 10, minute: 0, label: "10:00 AM" },
  { hour: 10, minute: 30, label: "10:30 AM" },
  { hour: 11, minute: 0, label: "11:00 AM" },
  { hour: 11, minute: 30, label: "11:30 AM" },
  { hour: 12, minute: 0, label: "12:00 PM" },
  { hour: 12, minute: 30, label: "12:30 PM" },
  { hour: 13, minute: 0, label: "1:00 PM" },
  { hour: 13, minute: 30, label: "1:30 PM" },
  { hour: 14, minute: 0, label: "2:00 PM" },
  { hour: 14, minute: 30, label: "2:30 PM" },
  { hour: 15, minute: 0, label: "3:00 PM" },
  { hour: 15, minute: 30, label: "3:30 PM" },
  { hour: 16, minute: 0, label: "4:00 PM" },
  { hour: 16, minute: 30, label: "4:30 PM" },
  { hour: 17, minute: 0, label: "5:00 PM" },
  { hour: 17, minute: 30, label: "5:30 PM" },
  { hour: 18, minute: 0, label: "6:00 PM" },
  { hour: 18, minute: 30, label: "6:30 PM" },
];

export function Booking() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  return (
    <section className="w-full bg-card py-24">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Title */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              Book Your Experience
            </h2>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />

            <p className="text-muted-foreground font-nunito max-w-2xl mx-auto text-lg leading-relaxed">
              Transform your beauty routine into a luxury experience.
            </p>
          </motion.div>
        </div>

        {/* Booking Form */}    
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col bg-white rounded-xl shadow-sm p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-cormorant text-2xl text-soft-black">Personal Details</h3>
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
              </div>

              <div className="space-y-4">
                <h3 className="font-cormorant text-2xl text-soft-black">Service Details</h3>
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

                <div className="grid md:grid-cols-2 gap-4">
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

                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot.label} value={slot.label}>
                          {slot.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Select>
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select artist" />
                  </SelectTrigger>
                  <SelectContent>
                    {artists.map((artist) => (
                      <SelectItem key={artist.id} value={artist.id.toString()}>
                        {artist.name} - {artist.role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Special requests or notes"
                className="border-primary/20 focus:border-primary min-h-[100px]"
              />

              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90 text-white py-6"
              >
                <a href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </form>

            <p className="text-sm text-deep-navy/70 italic text-center mt-2">
              First-time clients: Mention "WELCOME" for a complimentary hand treatment with your service.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="flex-1 relative w-full overflow-hidden rounded-xl min-h-[300px]">
              <Image
                src="/booking-ambiance.jpg"
                alt="LUMIÈRE luxury nail and lash experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6 bg-white rounded-xl shadow-sm p-8">
              <h3 className="font-cormorant text-2xl text-soft-black">
                Our Guarantee
              </h3>
              <p className="font-nunito text-deep-navy font-medium">
                Love your results or your next service is complimentary.
              </p>
              <ul className="space-y-4 text-deep-navy">
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