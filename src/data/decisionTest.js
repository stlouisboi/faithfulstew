// "Before You Say Yes" is a decision check for Christian entrepreneurs and
// owner-operators. Not a spiritual scorecard. It interrupts one real, pressured
// business decision long enough to help the owner see what they may be missing.
// No numerical score. Returns one of four practical results.

export const ASSESSMENT = {
  name: 'Before You Say Yes',
  tagline:
    'A 7-question decision check for Christian entrepreneurs before they move, expand, commit, or walk away.',
  subhead:
    'This is not a spiritual scorecard. Answer each question while thinking about one real decision you are facing right now.',
}

// Business stage, used by the standalone email forms (MailerLite field).
export const STAGES = [
  { value: 'exploring', label: 'Exploring whether to start a business' },
  { value: 'launching', label: 'Preparing to launch or make my first sale' },
  { value: 'operating', label: 'Operating but still building stability' },
  { value: 'growing', label: 'Growing and carrying more responsibility' },
  { value: 'leading', label: 'Leading contractors or a small team' },
  { value: 'transitioning', label: 'Considering a change, sale, or closure' },
  { value: 'unsure', label: 'I am not sure' },
]

export const QUESTIONS = [
  {
    id: 'decision',
    kind: 'single',
    lens: 'The decision',
    prompt: 'What decision are you about to make?',
    options: [
      { label: 'Take on a new client, contract, or project', value: 'client', flag: 'context' },
      { label: 'Set or change my pricing', value: 'pricing', flag: 'context' },
      { label: 'Borrow money, sign a lease, or make a major purchase', value: 'borrow', flag: 'context' },
      { label: 'Subcontract work or hire someone', value: 'hire', flag: 'context' },
      { label: 'Pursue growth, add a service, or expand', value: 'grow', flag: 'context' },
      { label: 'Leave a job or go full time in my business', value: 'fulltime', flag: 'context' },
      { label: 'Sell, close, pivot, or release something', value: 'release', flag: 'context' },
    ],
  },
  {
    id: 'fear',
    kind: 'single',
    lens: 'The pressure',
    prompt: 'What are you most afraid will happen if you say no?',
    options: [
      { label: 'I will miss a rare opportunity', value: 'miss', flag: 'fear' },
      { label: 'I will lose money or needed income', value: 'money', flag: 'fear' },
      { label: 'Someone else will get ahead of me', value: 'behind', flag: 'fear' },
      { label: 'I will disappoint a client, my family, or myself', value: 'disappoint', flag: 'fear' },
      { label: 'I will stay stuck where I am', value: 'stuck', flag: 'fear' },
      { label: 'Honestly, nothing bad. I just feel pressure to act', value: 'pressure', flag: 'lowfear' },
      { label: 'I am not sure', value: 'unsure', flag: 'unsure' },
    ],
  },
  {
    id: 'hope',
    kind: 'single',
    lens: 'The hope',
    prompt: 'What are you hoping this decision will give you?',
    options: [
      { label: 'More income or stability', value: 'income', flag: 'context' },
      { label: 'More freedom or control over my time', value: 'freedom', flag: 'context' },
      { label: 'Proof that I am on the right path', value: 'proof', flag: 'attach' },
      { label: 'Relief from a difficult situation', value: 'relief', flag: 'attach' },
      { label: 'A real chance to serve people well', value: 'serve', flag: 'context' },
      { label: 'Growth or momentum', value: 'momentum', flag: 'context' },
    ],
  },
  {
    id: 'cost',
    kind: 'multi',
    lens: 'The cost',
    prompt: 'Who will carry the cost if this goes badly?',
    help: 'Choose all that apply.',
    options: [
      { label: 'Me', value: 'me', flag: 'self' },
      { label: 'My spouse, family, or household', value: 'household', flag: 'other' },
      { label: 'My clients or customers', value: 'customers', flag: 'other' },
      { label: 'A business partner', value: 'partner', flag: 'other' },
      { label: 'My savings, debt, or cash flow', value: 'finances', flag: 'other' },
      { label: 'My health, rest, or margin', value: 'health', flag: 'other' },
      { label: 'No one else, really', value: 'none', flag: 'none' },
      { label: 'I have not thought about this clearly', value: 'notclear', flag: 'notclear' },
    ],
  },
  {
    id: 'unclear',
    kind: 'single',
    lens: 'The unknown',
    prompt: 'What important fact is still unclear?',
    options: [
      { label: 'Whether clients actually want or will pay for this', value: 'demand', flag: 'test' },
      { label: 'The real numbers, price, or margin', value: 'numbers', flag: 'test' },
      { label: 'The time and workload it will actually take', value: 'capacity', flag: 'test' },
      { label: 'Whether I can deliver it well and consistently', value: 'deliver', flag: 'test' },
      { label: 'What my spouse, family, or partner really thinks', value: 'people', flag: 'people' },
      { label: 'What a qualified professional would advise (legal, tax, financial)', value: 'counsel', flag: 'counsel' },
      { label: 'Nothing. I have the facts I need', value: 'clean', flag: 'clean' },
    ],
  },
  {
    id: 'method',
    kind: 'single',
    lens: 'The boundary',
    prompt: 'What would you have to compromise to get the result?',
    options: [
      { label: 'Nothing that I can see', value: 'nothing', flag: 'clean' },
      { label: 'Time with God, family, health, or needed rest', value: 'rest', flag: 'compromise' },
      { label: 'Truthfulness in how I sell, price, or promise', value: 'truth', flag: 'compromise' },
      { label: 'Fair treatment of clients, contractors, or partners', value: 'fairness', flag: 'compromise' },
      { label: 'Safety, quality, or professional standards', value: 'standards', flag: 'compromise' },
      { label: 'A financial boundary I already know I need', value: 'financial', flag: 'compromise' },
      { label: 'I am not sure yet', value: 'unsure', flag: 'unsure' },
    ],
  },
  {
    id: 'ifnot',
    kind: 'single',
    lens: 'If it does not happen',
    prompt: 'If the result you want does not happen, what will you do?',
    options: [
      { label: 'Keep obeying and adjust the plan', value: 'obey', flag: 'good' },
      { label: 'Slow down and gather more information', value: 'slow', flag: 'good' },
      { label: 'Test a smaller version first', value: 'test', flag: 'good' },
      { label: 'Talk it through with people I trust', value: 'talk', flag: 'good' },
      { label: 'Honestly, I would probably push harder because I need this', value: 'push', flag: 'push' },
      { label: 'I am not sure', value: 'unsure', flag: 'unsure' },
    ],
  },
]

export const CLOSING = {
  lead: 'Your next faithful step is not necessarily your biggest step.',
  body: 'It may be a conversation, a calculation, a smaller test, a boundary, or a decision to wait.',
  motto: 'Build diligently. Steward faithfully. Hold the results loosely.',
}

export const RESULTS = {
  wisdom: {
    key: 'wisdom',
    title: 'Move With Wisdom',
    meaning:
      'Your decision appears to have a responsible foundation. You have considered the real cost, the people affected, the facts available, and the boundaries that must govern it. That does not guarantee the outcome you want. It means you may be ready to take the next faithful step without demanding certainty.',
    nextMove:
      'Write down what you are saying yes to, the boundaries that govern it, and the date you will review whether the decision is still being carried faithfully.',
    remember: 'Faithfulness belongs to you. Outcomes belong to God.',
  },
  test: {
    key: 'test',
    title: 'Slow Down and Test',
    meaning:
      'The opportunity may be real, but a major assumption has not yet been tested. It could be demand, price, delivery, capacity, time, family cost, or the actual risk you are carrying. Slowing down does not mean you are afraid. It may mean you are being responsible.',
    nextMove:
      'Identify the biggest unproven assumption and test that before making the larger commitment.',
    examples: [
      'Ask a real client whether they would buy',
      'Test the price before building the full offer',
      'Run the numbers at lower revenue',
      'Try a smaller pilot before signing a lease',
      'Confirm the legal, safety, quality, or compliance requirements',
      'Test whether your schedule and household can carry the workload',
    ],
  },
  people: {
    key: 'people',
    title: 'Bring People Into the Decision',
    meaning:
      'This decision may affect people who are not yet fully in the room. A spouse, household, client, contractor, partner, lender, or qualified professional may carry risk or consequences you cannot faithfully decide for alone. Seeking input is not weakness. It is stewardship.',
    nextMove:
      'Name the person whose perspective, consent, or expertise is missing, and have that conversation before you commit.',
    remember: 'Your family should not discover the business plan by absorbing its consequences.',
  },
  method: {
    key: 'method',
    title: 'Protect the Method',
    meaning:
      'Pressure may be asking you to compromise something you already know matters: truthfulness, fair treatment, safety, quality, compliance, professional standards, health, rest, family, or a financial boundary. A good outcome does not make a compromised method faithful.',
    nextMove:
      'Stop and name the exact compromise the opportunity is asking for. Do not move forward until the method can stay faithful.',
    remember: 'Do not sacrifice God\u2019s method trying to obtain God\u2019s outcome.',
  },
}

// Rule-based branching. No score. Protect the Method overrides everything else.
export function computeResult(answers) {
  const flagOf = (qid) => {
    const q = QUESTIONS.find((x) => x.id === qid)
    return q?.options.find((o) => o.value === answers[qid])?.flag
  }
  const costFlags = (answers.cost || []).map((v) => {
    const q = QUESTIONS.find((x) => x.id === 'cost')
    return q.options.find((o) => o.value === v)?.flag
  })

  const method = flagOf('method')
  const unclear = flagOf('unclear')
  const ifnot = flagOf('ifnot')
  const notClear = costFlags.includes('notclear')

  // 1. A concrete compromise overrides all other paths.
  if (method === 'compromise') return RESULTS.method

  // 2. Missing people, missing counsel, or unclear about who bears the cost.
  if (unclear === 'people' || unclear === 'counsel' || notClear) return RESULTS.people

  // 3. Untested assumptions, or a tendency to push through regardless.
  if (unclear === 'test' || ifnot === 'push' || ifnot === 'unsure' || method === 'unsure') {
    return RESULTS.test
  }

  // 4. Responsible foundation.
  return RESULTS.wisdom
}
