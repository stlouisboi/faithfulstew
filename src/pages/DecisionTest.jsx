import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import EmailCapture from '../components/EmailCapture'
import { QUESTIONS, ASSESSMENT, RESULTS, CLOSING, computeResult } from '../data/decisionTest'
import { EASE } from '../lib/site'

export default function DecisionTest() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({}) // { qid: value }  or  cost: [values]
  const [phase, setPhase] = useState('quiz') // quiz | result

  const total = QUESTIONS.length
  const current = QUESTIONS[step]

  const answered = useMemo(() => {
    if (!current) return false
    const a = answers[current.id]
    return current.kind === 'multi' ? Array.isArray(a) && a.length > 0 : a !== undefined
  }, [answers, current])

  const result = useMemo(() => (phase === 'result' ? computeResult(answers) : null), [phase, answers])

  function chooseSingle(value) {
    setAnswers((a) => ({ ...a, [current.id]: value }))
  }

  function toggleMulti(value) {
    setAnswers((a) => {
      const cur = Array.isArray(a[current.id]) ? a[current.id] : []
      const exclusive = value === 'none' || value === 'notclear'
      let next
      if (cur.includes(value)) {
        next = cur.filter((v) => v !== value)
      } else if (exclusive) {
        next = [value]
      } else {
        next = [...cur.filter((v) => v !== 'none' && v !== 'notclear'), value]
      }
      return { ...a, [current.id]: next }
    })
  }

  function next() {
    if (step < total - 1) setStep((s) => s + 1)
    else setPhase('result')
  }
  function back() {
    if (step > 0) setStep((s) => s - 1)
  }
  function retake() {
    setAnswers({})
    setStep(0)
    setPhase('quiz')
  }

  const isSelected = (value) => {
    const a = answers[current.id]
    return current.kind === 'multi' ? Array.isArray(a) && a.includes(value) : a === value
  }

  return (
    <>
      <Seo
        title={ASSESSMENT.name}
        path="/decision-test"
        description={`${ASSESSMENT.name} \u2014 ${ASSESSMENT.tagline}`}
      />

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-24 md:pb-32 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
              Free Decision Check
            </p>
            <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl text-ink leading-[1.1]">
              {ASSESSMENT.name}
            </h1>
            <p className="mt-6 text-lg text-ink-secondary leading-[1.7]">{ASSESSMENT.subhead}</p>
          </div>

          <div className="mt-14">
            {phase === 'quiz' && (
              <div data-testid="decision-test-quiz">
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
                    {current.help && (
                      <p className="mt-2 text-sm text-ink-tertiary">{current.help}</p>
                    )}
                    <div className="mt-8 space-y-3">
                      {current.options.map((opt, i) => {
                        const selected = isSelected(opt.value)
                        const multi = current.kind === 'multi'
                        return (
                          <button
                            key={opt.value}
                            onClick={() => (multi ? toggleMulti(opt.value) : chooseSingle(opt.value))}
                            className={[
                              'w-full text-left px-5 py-4 border transition-all duration-200 flex items-center gap-3',
                              selected
                                ? 'border-gold bg-gold/10 text-ink'
                                : 'border-border-light bg-cream hover:border-ink/40 text-ink-secondary',
                            ].join(' ')}
                            data-testid={`test-option-${current.id}-${i}`}
                          >
                            {multi && (
                              <span
                                className={[
                                  'shrink-0 w-5 h-5 border flex items-center justify-center',
                                  selected ? 'bg-gold border-gold text-cream' : 'border-ink-tertiary',
                                ].join(' ')}
                              >
                                {selected && <Check size={14} />}
                              </span>
                            )}
                            <span>{opt.label}</span>
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
                  <p className="text-xs uppercase tracking-widest text-ink-tertiary">Your result</p>
                  <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink">
                    {result.title}
                  </h2>
                </div>

                <p className="mt-8 text-lg text-ink-secondary leading-[1.8]">{result.meaning}</p>

                <div className="mt-8 rounded-lg bg-cream-dark border-l-2 border-gold px-6 py-6">
                  <p className="text-xs uppercase tracking-widest text-gold font-medium">Your next move</p>
                  <p className="mt-3 text-ink font-display text-xl leading-[1.5]">{result.nextMove}</p>
                </div>

                {result.examples && (
                  <ul className="mt-8 space-y-3">
                    {result.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-3 text-ink-secondary leading-[1.6]">
                        <Check size={18} className="mt-1 text-gold shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {result.remember && (
                  <p className="mt-8 font-display italic text-xl md:text-2xl text-ink leading-[1.5] border-t border-border-light pt-8">
                    &ldquo;{result.remember}&rdquo;
                  </p>
                )}

                {/* Universal closing */}
                <div className="mt-12 text-center">
                  <p className="font-display font-bold text-2xl text-ink leading-[1.4]">
                    {CLOSING.lead}
                  </p>
                  <p className="mt-3 text-ink-secondary leading-[1.7] max-w-xl mx-auto">{CLOSING.body}</p>
                  <p className="mt-8 font-display italic text-lg text-gold">{CLOSING.motto}</p>
                </div>

                {/* Email capture */}
                <div className="mt-12 rounded-lg bg-navy text-cream p-8">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-center">
                    Get your full result + a short guide
                  </h3>
                  <p className="mt-3 text-center text-cream/80">
                    We&rsquo;ll send your result and a practical guide to taking your next faithful step.
                  </p>
                  <div className="mt-8">
                    <EmailCapture
                      buttonLabel="Send My Result"
                      source="before-you-say-yes"
                      showStage={false}
                      presetStage={answers.stage}
                      resultTag={result.key}
                      variant="dark"
                    />
                  </div>
                </div>

                {/* Book CTA */}
                <div className="mt-12 border border-border-light bg-cream-dark p-8 text-center">
                  <p className="text-ink-secondary leading-[1.7]">
                    Want a deeper framework for the decision you are facing?{' '}
                    <span className="text-ink font-display italic">Kingdom Before Company</span> helps
                    Christian entrepreneurs and business owners make decisions about calling, motives,
                    money, risk, leadership, family, integrity, growth, and faithful release under
                    God&rsquo;s authority.
                  </p>
                  <Link
                    to="/book"
                    className="mt-6 inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm tracking-wide hover:bg-ink/90 transition-colors"
                    data-testid="result-explore-book"
                  >
                    Explore the Book
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={retake}
                    className="text-sm text-ink-secondary hover:text-ink transition-colors"
                    data-testid="test-retake"
                  >
                    Retake the check
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
