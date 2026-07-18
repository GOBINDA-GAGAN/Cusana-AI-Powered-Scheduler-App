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
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-medium text-text shadow-sm sm:px-4 sm:py-2 sm:text-xs lg:text-sm">
            • FAQ
          </span>

          <h2 className="mt-5 text-2xl font-bold leading-tight text-text sm:text-3xl md:text-4xl lg:mt-6 lg:text-6xl">
            Questions? We've Got
            <br />
            Answers.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-text-light sm:mt-5 sm:text-base sm:leading-7 lg:mt-6 lg:max-w-2xl lg:text-lg lg:leading-8">
            Everything you need to know before getting started with
            Scheduler AI.
          </p>

        </div>

        {/* FAQ */}
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-xl sm:mt-14 sm:rounded-2xl lg:mt-16 lg:rounded-3xl">

          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-border last:border-none"
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-white/5 sm:gap-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6"
                >

                  <h3 className="flex-1 text-sm font-semibold leading-6 text-text sm:text-base lg:text-lg">
                    {faq.question}
                  </h3>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border sm:h-9 sm:w-9 lg:h-10 lg:w-10">

                    {open ? (
                      <Minus
                        size={16}
                        className="sm:h-[18px] sm:w-[18px]"
                      />
                    ) : (
                      <Plus
                        size={16}
                        className="sm:h-[18px] sm:w-[18px]"
                      />
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
                      <p className="px-4 pb-4 text-xs leading-6 text-text-light sm:px-6 sm:pb-5 sm:text-sm lg:px-8 lg:pb-6 lg:text-base lg:leading-7">
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