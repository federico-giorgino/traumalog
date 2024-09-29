"use client";

import { ArrowRight, Bone, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { MAIN_AREAS } from "@/lib/data";

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Traumalog
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pioneering treatments in trauma, prosthetics, and arthroscopy for
            improved patient outcomes
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {MAIN_AREAS.map((area, index) => {
            const { title, icon: Icon, description } = area;
            return (
              <motion.div
                key={title}
                className="bg-card border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Icon className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
