import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Scheduler AI generate schedules?",
    answer:
      "Our AI analyzes your tasks, priorities, deadlines, and availability to create an optimized schedule in seconds.",
  },
  {
    question: "Can I edit my schedule after it's generated?",
    answer:
      "Yes. Every schedule is fully customizable. Drag, drop, edit, or remove tasks whenever you want.",
  },
  {
    question: "Does it sync with Google Calendar?",
    answer:
      "Yes. You can connect Google Calendar to keep all your events in one place.",
  },
  {
    question: "Is there a limit to how many schedules I can create?",
    answer:
      "No. Premium users enjoy unlimited schedules and AI planning.",
  },
  {
    question: "Can I use it on mobile?",
    answer:
      "Absolutely. The app works seamlessly on desktop, tablet, and mobile devices.",
  },
  {
    question: "What happens after my free trial?",
    answer:
      "You'll be asked to choose a subscription plan. Your data will remain safe.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-text">
            • FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-text md:text-6xl">
            Questions? We've Got
            <br />
            Answers.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-text-light">
            Everything you need to know before getting started with Scheduler AI.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">

          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-border last:border-none"
              >
                <button
                  onClick={() =>
                    setOpenIndex(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-white/5"
                >
                  <h3 className="text-lg font-semibold text-text">
                    {faq.question}
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                    {open ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-6 leading-7 text-text-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}