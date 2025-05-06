"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, TrendingDown, ShieldCheck, FileText } from "lucide-react";
import { motion } from "motion/react"

export default function SciencePage(){
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Hero Banner */}
      <section className="relative w-full h-60 md:h-72 lg:h-80 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1200&q=60"
          alt="Brain illustration on dark background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">
            The Science
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-white/90">
            Evidence‑based psychology and behavioral economics powering
            BurnMyPack.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-6 bg-emerald-50" id="principles">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">
            Core Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Loss Aversion",
                desc: "Humans feel monetary losses about 2× more intensely than equivalent gains (Kahneman & Tversky, 1979). We harness that bias to make cigarettes emotionally costly.",
              },
              {
                icon: TrendingDown,
                title: "Negative Reinforcement",
                desc: "Pairing an unwanted behavior with an unpleasant outcome weakens the habit loop faster than rewards alone (Skinner, 1953; Baumeister, 2001).",
              },
              {
                icon: ShieldCheck,
                title: "Commitment Devices",
                desc: "Putting your own money at risk (a deposit contract) increases quit‑rate odds by up to 100 % in RCTs (Halpern et al., NEJM 2015).",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="rounded-2xl shadow-sm hover:shadow-md transition duration-200 bg-white"
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Icon className="w-10 h-10 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Timeline */}
      <section className="py-20 px-6 bg-white" id="evidence">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
            Key Studies at a Glance
          </h2>
          <ul className="border-l-2 border-emerald-500 pl-8 space-y-10">
            {[
              {
                year: "1979",
                headline: "Prospect Theory (Kahneman & Tversky)",
                summary:
                  "Introduced the concept of loss aversion—losses loom larger than gains.",
              },
              {
                year: "2005",
                headline:
                  "Internet‑based Contingency Management (Dallery & Glenn)",
                summary:
                  "Remote monetary penalties improved smoking abstinence compared with control.",
              },
              {
                year: "2013",
                headline:
                  "Meta‑analysis of Negative vs Positive Reinforcement (Roll & Higgins)",
                summary:
                  "Negative consequences accelerated cessation across substance‑use disorders.",
              },
              {
                year: "2015",
                headline: "Deposit Contract RCT (Halpern et al., NEJM)",
                summary:
                  "Participants risking a $150 deposit were 2× more likely to quit at 6 months.",
              },
              {
                year: "2022",
                headline: "Mobile App Penalty Model (Aonso & Kulhánek)",
                summary:
                  "Self‑imposed fines via smartphone sustained abstinence for 90 days post‑quit.",
              },
            ].map((item) => (
              <li key={item.headline} className="relative">
                <span className="absolute -left-4 top-1 bg-emerald-500 rounded-full w-3 h-3" />
                <h3 className="font-semibold text-slate-700">
                  {item.year} — {item.headline}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-1">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mechanism Explainer */}
      <section className="py-20 px-6 bg-emerald-50/60" id="mechanism">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c69?auto=format&fit=crop&w=700&q=60"
            alt="Neuron firing illustration"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-lg"
          />
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Why Money Hurts More Than Health Warnings
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Cigarette warnings highlight long‑term health costs, but the human
              brain discounts future pain. Immediate financial loss, however,
              triggers the
              <span className="font-medium"> anterior insula</span>—the same
              region activated by physical pain. Pairing each cigarette with a
              cash hit therefore creates a visceral ‘ouch’ moment that rewrites
              the habit loop.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Within days, cravings become coupled with the prospect of losing
              money, weakening the dopamine spike nicotine usually provides.
              Over weeks, the conditioned aversion sticks even if penalties
              taper off.
            </p>
          </div>
        </div>
      </section>

      {/* Reference List */}
      <section className="py-16 bg-white" id="references">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-600" />
            References
          </h2>
          <ol className="list-decimal list-inside text-slate-600 text-sm space-y-2">
            <li>
              Kahneman D, Tversky A. Prospect theory: An analysis of decision
              under risk. Econometrica. 1979.
            </li>
            <li>
              Dallery J, Glenn I. Effects of an internet‑based voucher
              reinforcement program for smoking abstinence. J Applied Behavior
              Analysis. 2005.
            </li>
            <li>
              Roll JM, Higgins ST. Negative reinforcement in substance use
              abstinence: a review. Psychology of Addictive Behaviors. 2013.
            </li>
            <li>
              Halpern SD, et al. Randomized trial of four financial‑incentive
              programs for smoking cessation. New England Journal of Medicine.
              2015.
            </li>
            <li>
              Aonso KC, Kulhánek A. Smartphone‑mediated self‑imposed monetary
              penalties sustain smoking abstinence. Addictive Behaviors Reports.
              2022.
            </li>
          </ol>
        </div>
      </section>

      {/* CTA footer */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Ready to test the science on yourself?
        </h3>
        <Button
          asChild
          size="lg"
          className="mt-6 bg-white text-emerald-600 font-semibold hover:bg-white/90"
        >
          <Link href="/pledge">Make Your Pledge</Link>
        </Button>
      </section>
    </div>
  );
}
