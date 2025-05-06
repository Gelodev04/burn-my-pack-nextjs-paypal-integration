import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, DollarSign, Ban, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Hero */}
      <section className="relative w-full h-60 md:h-72 lg:h-80 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1200&q=60"
          alt="Throwing cigarettes and cash into a trash can"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">
            How It Works
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-white/90">
            Re‑wire your brain with the science of{" "}
            <span className="font-semibold">loss aversion</span> and stop
            smoking—permanently.
          </p>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-20 px-6 bg-emerald-50" id="science">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: Sparkles,
              title: "Loss Aversion 101",
              desc: "We feel the pain of losing money about twice as intensely as the joy of gaining it. This powerful bias can be flipped to crush cravings.",
            },
            {
              icon: DollarSign,
              title: "Deposit Contracts",
              desc: "Randomised trials show people are more likely to quit when their own money is on the line compared with reward‑only programs.",
            },
            {
              icon: LineChart,
              title: "Contingency Management",
              desc: "Behaviour therapy that ties immediate consequences to behaviour change outperforms will‑power alone across addiction studies.",
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
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Step‑by‑step process */}
      <section className="py-20 px-6 bg-white" id="steps">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
            Your 4‑Step Playbook
          </h2>
          <ol className="space-y-6">
            {[
              {
                title: "1 | Make the Commitment",
                body: "Swear—out loud or in writing—that you’re done with smoking. Set today as Day 0.",
              },
              {
                title: "2 | Pick a Penalty Amount",
                body: "Choose a cash figure that stings (₩20 000 default). Authorise it once, but it’s only captured if you cave.",
              },
              {
                title: "3 | Smoke? Pay Immediately",
                body: "If you light up, hit the red PayPal button and throw away the rest of the pack. Your brain links the puff with losing money.",
              },
              {
                title: "4 | Track & Celebrate",
                body: "Watch your smoke‑free streak and cumulative savings grow. Negative reinforcement fades; pride takes over.",
              },
            ].map(({ title, body }) => (
              <li
                key={title}
                className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-emerald-50/40"
              >
                <h3 className="font-semibold text-slate-700 mb-1">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Evidence strip */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Backed by Real Research
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Studies in the <em>New England Journal of Medicine</em> and others
            show that smokers who risk their own money are up to{" "}
            <strong>2× more likely</strong>
            to stay abstinent at 6 months compared with reward‑only incentives.
          </p>
          <p className="text-slate-600 text-sm">
            Sources: Halpern et al 2015; Roll & Higgins 2013; Aonso & Kulhánek
            2022.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Ready to make smoking financially painful?
        </h3>
        <Button
          asChild
          size="lg"
          className="mt-6 bg-white text-emerald-600 font-semibold hover:bg-white/90"
        >
          <Link href="/pledge">Start Your Pledge Today</Link>
        </Button>
      </section>
    </div>
  );
}
