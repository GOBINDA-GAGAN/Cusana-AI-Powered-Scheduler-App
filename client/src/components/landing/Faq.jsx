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
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-text shadow-sm sm:text-sm">
            • FAQ
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-6xl">
            Questions? We've Got
            <br />
            Answers.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-light sm:mt-6 sm:text-lg sm:leading-8">
            Everything you need to know before getting started with Scheduler
            AI.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-xl sm:mt-16 sm:rounded-3xl">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-border last:border-none"
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/5 sm:px-8 sm:py-6"
                >
                  <h3 className="flex-1 text-base font-semibold leading-6 text-text sm:text-lg">
                    {faq.question}
                  </h3>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border sm:h-10 sm:w-10">
                    {open ? <Minus size={18} /> : <Plus size={18} />}
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
                      <p className="px-5 pb-5 text-sm leading-7 text-text-light sm:px-8 sm:pb-6 sm:text-base">
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