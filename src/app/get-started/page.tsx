"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function GetStartedPage() {
  const [amount, setAmount] = useState(20000); // default ₩20 000
  const [quitDate, setQuitDate] = useState(() => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  });
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center font-sans py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center max-w-2xl leading-tight">
        Set your pledge in two quick steps
      </h1>
      <p className="mt-3 max-w-md text-center text-slate-600">
        The penalty is{" "}
        <span className="font-medium">only charged if you smoke</span> and press
        the button. You can change it later in settings.
      </p>

      <Card className="mt-10 w-full max-w-xl shadow-md">
        <CardContent className="p-8 space-y-8">
          {/* Penalty amount */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-slate-700 font-semibold">
              Penalty Amount (₩)
            </Label>
            <input
              id="amount"
              type="range"
              min="5000"
              max="100000"
              step="5000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-lg font-medium text-emerald-700">
              ₩{amount.toLocaleString()}
            </div>
          </div>

          {/* Quit date */}
          <div className="space-y-2">
            <Label htmlFor="quitDate" className="text-slate-700 font-semibold">
              Quit Date
            </Label>
            <Input
              id="quitDate"
              type="date"
              value={quitDate}
              onChange={(e) => setQuitDate(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Optional email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700 font-semibold">
              Email for progress reminders (optional)
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Continue button */}
          <Button asChild size="lg" className="w-full mt-6">
            <Link
              href={{
                pathname: "/pledge",
                query: { amount, quitDate, email },
              }}
            >
              Confirm & Continue
            </Link>
          </Button>

          <p className="text-xs text-slate-500 text-center mt-4">
            By continuing, you agree that the penalty amount will be captured
            each time you voluntarily press the payment button after smoking.
            You can cancel at any time.
          </p>
        </CardContent>
      </Card>

      <Button asChild variant="link" className="mt-6 text-emerald-700">
        <Link href="/how-it-works">Need to see the science again?</Link>
      </Button>
    </div>
  );
}
