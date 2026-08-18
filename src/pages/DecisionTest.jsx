import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import EmailCapture from '../components/EmailCapture'
import { QUESTIONS, RESULTS } from '../data/decisionTest'
import { EASE } from '../lib/site'

export default function DecisionTest() {
  const [step, setStep] = useState(0) // 0..QUESTIONS.length-1, then 'result'
  const [answers, setAnswers] = useState({})
  const [phase, setPhase] = useState('quiz') // quiz | result

  const total = QUESTIONS.length
  const current = QUESTIONS[step]
  const answered = current ? answers[current.id] !== undefined : false

  const weakestLens = useMemo(() => {
    if (Object.keys(answers).length < total) return null
    let lowest = null
    for (const q of QUESTIONS) {
      const s = answers[q.id]
      if (lowest === null || s < lowest.score) lowest = { lens: q.lens, score: s }
    }
    return lowest?.lens || null
  }, [answers, total])

  function choose(score) {
    setAnswers((a) => ({ ...a, [current.id]: score }))
  }

  function next() {
    if (step < total - 1) setStep((s) => s + 1)
    else setPhase('result')
  }

  function back() {
    if (step > 0) setStep((s) => s - 1)
  }

  const result = weakestLens ? RESULTS[weakestLens] : null

  return (
    <>
      <Seo
        title="The Decision Test"
        path="/decision-test"
        description="Seven questions to help Christian entrepreneurs make a difficult business decision without compromising faith, family, or integrity."
      />

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-24 md:pb-32 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">Free Assessment</p>
            <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl text-ink leading-[1.1]">
              The Kingdom Before Company Decision Test
            </h1>
            <p className="mt-6 text-lg text-ink-secondary leading-[1.7]">
              Seven questions to reveal the business tension most likely to pull
              you away from faithful stewardship.
            </p>
          </div>

          <div className="mt-14">
            {phase === 'quiz' && (
              <div data-testid="decision-test-quiz">
                {/* Progress */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-ink-tertiary">
                    Question {step + 1} of {total}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-gold">{current.lens}</span>
                </div>
                <div className="h-1 w-full bg-border-light rounded-full mb-10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gold"
                    animate={{ width: `${((step + 1) / total) * 100}%` }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-ink leading-[1.3]">
                      {current.prompt}
                    </h2>
                    <div className="mt-8 space-y-3">
                      {current.options.map((opt, i) => {
                        const selected = answers[current.id] === opt.score
                        return (
                          <button
                            key={i}
                            onClick={() => choose(opt.score)}
                            className={[
                              'w-full text-left px-5 py-4 border transition-all duration-200',
                              selected
                                ? 'border-gold bg-gold/10 text-ink'
                                : 'border-border-light bg-cream hover:border-ink/40 text-ink-secondary',
                            ].join(' ')}
                            data-testid={`test-option-${current.id}-${i}`}
                          >
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex items-center justify-between">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors disabled:opacity-0"
                    data-testid="test-back"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    onClick={next}
                    disabled={!answered}
                    className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-3 text-sm tracking-wide hover:bg-ink/90 transition-colors disabled:opacity-40"
                    data-testid="test-next"
                  >
                    {step === total - 1 ? 'See My Result' : 'Next'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {phase === 'result' && result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                data-testid="decision-test-result"
              >
                <div className="text-center border-t-2 border-gold pt-10">
                  <p className="text-xs uppercase tracking-widest text-ink-tertiary">
                    Your biggest tension
                  </p>
                  <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink">
                    {weakestLens} &middot; {result.tension}
                  </h2>
                  <p className="mt-6 text-lg text-ink-secondary leading-[1.7]">{result.body}</p>
                </div>

                <div className="mt-12 rounded-lg bg-cream-dark border border-border-light p-8">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-ink text-center">
                    Get your full results + the free guide
                  </h3>
                  <p className="mt-3 text-center text-ink-secondary">
                    Enter your details and we&rsquo;ll send your complete Decision
                    Test breakdown and a short guide to acting on it.
                  </p>
                  <div className="mt-8">
                    <EmailCapture
                      buttonLabel="Send My Results"
                      source="decision-test"
                      resultTag={weakestLens}
                    />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      setAnswers({})
                      setStep(0)
                      setPhase('quiz')
                    }}
                    className="text-sm text-ink-secondary hover:text-ink transition-colors"
                    data-testid="test-retake"
                  >
                    Retake the test
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
