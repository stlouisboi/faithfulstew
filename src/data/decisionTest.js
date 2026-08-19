// "Before You Say Yes" — a 7-question decision check for Christian entrepreneurs
// and business owners. Rule-based branching into 5 result paths.

export const ASSESSMENT = {
  name: 'Before You Say Yes',
  tagline: 'A 7-question check for Christian entrepreneurs facing a business decision',
  subhead:
    'Whether you are starting a business, growing one, leading people, borrowing money, taking a contract, or deciding what to release, these questions will help you slow down before pressure writes the answer.',
}

// Business stage — also used by the standalone email forms (MailerLite field).
export const STAGES = [
  { value: 'exploring', label: 'Exploring whether to start a business' },
  { value: 'launching', label: 'Preparing to launch or make my first sale' },
  { value: 'operating', label: 'Operating but still building stability' },
  { value: 'growing', label: 'Growing and carrying more responsibility' },
  { value: 'leading', label: 'Leading employees, contractors, or a team' },
  { value: 'transitioning', label: 'Considering a change, transition, sale, or closure' },
  { value: 'unsure', label: 'I am not sure' },
]

export const QUESTIONS = [
  {
    id: 'stage',
    kind: 'single',
    lens: 'Your stage',
    prompt: 'Where are you right now?',
    options: STAGES.map((s) => ({ label: s.label, value: s.value, flag: 'context' })),
  },
  {
    id: 'decision',
    kind: 'single',
    lens: 'The decision',
    prompt: 'What decision are you facing right now?',
    options: [
      { label: 'Start a business or launch a new offer', value: 'start', flag: 'context' },
      { label: 'Take on a customer, contract, partnership, or investor', value: 'contract', flag: 'context' },
      { label: 'Borrow money, sign a lease, or make a major purchase', value: 'borrow', flag: 'context' },
      { label: 'Hire, fire, promote, reduce hours, or change a team decision', value: 'team', flag: 'context' },
      { label: 'Raise prices, change an offer, add a service, or pursue growth', value: 'grow', flag: 'context' },
      { label: 'Handle a customer, safety, quality, compliance, or integrity problem', value: 'problem', flag: 'context' },
      { label: 'Leave a job, change direction, sell, close, or release something', value: 'release', flag: 'context' },
      { label: 'Something else', value: 'other', flag: 'context' },
    ],
  },
  {
    id: 'pressure',
    kind: 'single',
    lens: 'The pressure',
    prompt: 'What are you most afraid will happen if you say no, slow down, or wait?',
    options: [
      { label: 'I will miss a rare opportunity', value: 'miss', flag: 'fear' },
      { label: 'I will lose money or needed income', value: 'money', flag: 'fear' },
      { label: 'Someone else will get ahead', value: 'behind', flag: 'fear' },
      { label: 'I will disappoint customers, employees, family, or partners', value: 'disappoint', flag: 'fear' },
      { label: 'I will have to stay in a difficult situation', value: 'stuck', flag: 'fear' },
      { label: 'I will look like I failed', value: 'failed', flag: 'fear' },
      { label: 'I do not know what happens next', value: 'unknown', flag: 'unsure' },
      { label: 'I am not sure', value: 'unsure', flag: 'unsure' },
    ],
  },
  {
    id: 'cost',
    kind: 'multi',
    lens: 'The real cost',
    prompt: 'Who carries the cost if this decision goes badly?',
    help: 'Choose all that apply.',
    options: [
      { label: 'Me', value: 'me', flag: 'self' },
      { label: 'My spouse, children, or household', value: 'household', flag: 'other' },
      { label: 'My employees or contractors', value: 'employees', flag: 'other' },
      { label: 'My customers', value: 'customers', flag: 'other' },
      { label: 'My business partners', value: 'partners', flag: 'other' },
      { label: 'My savings, debt capacity, or household finances', value: 'finances', flag: 'other' },
      { label: 'My health, rest, or current responsibilities', value: 'health', flag: 'other' },
      { label: 'No one else is directly affected', value: 'none', flag: 'none' },
      { label: 'I have not thought about this clearly', value: 'notclear', flag: 'notclear' },
    ],
  },
  {
    id: 'tested',
    kind: 'single',
    lens: 'What has not been tested',
    prompt: 'What fact, conversation, or professional input have you been avoiding?',
    options: [
      { label: 'I do not know whether customers actually want this', value: 'demand', flag: 'test' },
      { label: 'I have not run the numbers or tested the price', value: 'numbers', flag: 'test' },
      { label: 'I have not counted the time, workload, or capacity it will require', value: 'capacity', flag: 'test' },
      { label: 'I have not discussed it honestly with my spouse, family, team, or partner', value: 'people', flag: 'people' },
      { label: 'I have not asked someone qualified for legal, tax, financial, operational, or industry advice', value: 'counsel', flag: 'counsel' },
      { label: 'I do not know whether I can safely or consistently deliver what I am promising', value: 'deliver', flag: 'test' },
      { label: 'I do not think I am avoiding anything', value: 'clean', flag: 'clean' },
      { label: 'I am not sure', value: 'unsure', flag: 'unsure' },
    ],
  },
  {
    id: 'method',
    kind: 'single',
    lens: 'The method boundary',
    prompt: 'What would you have to compromise to get the result you want?',
    options: [
      { label: 'Nothing that I can see', value: 'nothing', flag: 'clean' },
      { label: 'Time with God, family, health, or needed rest', value: 'rest', flag: 'compromise' },
      { label: 'Truthfulness in sales, pricing, claims, or promises', value: 'truth', flag: 'compromise' },
      { label: 'Fair treatment of employees, contractors, customers, or partners', value: 'fairness', flag: 'compromise' },
      { label: 'Safety, quality, compliance, or professional standards', value: 'standards', flag: 'compromise' },
      { label: 'Financial boundaries I already know I need', value: 'financial', flag: 'compromise' },
      { label: 'I am not sure yet', value: 'unsure', flag: 'unsure' },
    ],
  },
  {
    id: 'attachment',
    kind: 'single',
    lens: 'Attachment and surrender',
    prompt: 'If the result you want does not happen, what are you most likely to do?',
    options: [
      { label: 'Keep obeying and adjust the plan', value: 'obey', flag: 'good' },
      { label: 'Slow down and gather more information', value: 'slow', flag: 'good' },
      { label: 'Test a smaller version first', value: 'test', flag: 'good' },
      { label: 'Seek counsel before moving', value: 'counsel', flag: 'good' },
      { label: 'I would probably keep pushing because I need this to work', value: 'push', flag: 'pushing' },
      { label: 'I honestly do not know', value: 'unknown', flag: 'unsure' },
    ],
  },
]

export const CLOSING = {
  lead: 'Your next faithful step is not always your biggest step.',
  body: 'It may be a conversation, a calculation, a smaller test, a boundary, qualified counsel, a repair, or a decision to wait.',
  motto: 'Build diligently. Steward faithfully. Hold the results loosely.',
}

export const RESULTS = {
  wisdom: {
    key: 'wisdom',
    title: 'Move With Wisdom',
    meaning:
      'Your decision appears to have a responsible foundation. You have considered the real cost, the people affected, the facts available, and the boundaries that must govern the decision. That does not guarantee the outcome you want. It means you may be ready to take the next faithful step without demanding certainty.',
    nextMove:
      'Write down what you are saying yes to, the boundaries that govern it, and the date you will review whether the decision is still being carried faithfully.',
    remember: 'Faithfulness belongs to you. Outcomes belong to God.',
  },
  test: {
    key: 'test',
    title: 'Slow Down and Test',
    meaning:
      'The opportunity may be real, but a major assumption has not yet been tested\u2014demand, price, delivery capacity, money, time, family cost, operational readiness, or the actual risk you are carrying. Slowing down does not mean you are afraid. It may mean you are being responsible.',
    nextMove:
      'Identify the biggest unproven assumption and test that before making the larger commitment.',
    examples: [
      'Ask a real customer whether they would buy',
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
      'The decision may affect people who are not yet fully in the room\u2014a spouse, household, employee, contractor, partner, customer, lender, qualified adviser, or professional\u2014who carry risk, exposure, or consequences that you cannot faithfully decide for alone. Seeking input is not weakness. It is stewardship.',
    nextMove:
      'Name the person whose perspective, consent, or expertise is missing and have that conversation before committing.',
    remember: 'Your family should not discover the business plan by absorbing its consequences.',
  },
  method: {
    key: 'method',
    title: 'Protect the Method',
    meaning:
      'Pressure may be asking you to compromise something you already know matters: truthfulness, fair treatment, safety, quality, compliance, professional standards, health, rest, family responsibility, or financial boundaries. A good outcome does not make a compromised method faithful.',
    nextMove:
      'Stop and identify the exact compromise the opportunity is asking for. Do not move forward until the method can remain faithful.',
    remember: 'Do not sacrifice God\u2019s method trying to obtain God\u2019s outcome.',
  },
  foundation: {
    key: 'foundation',
    title: 'Return to the Foundation',
    meaning:
      'The decision may be carrying more weight than it should. You may need the outcome to work because it represents security, identity, freedom, proof, relief, or control. That does not mean you are disqualified from building. It means the decision needs to come back under God\u2019s authority before pressure makes it harder to see clearly.',
    nextMove:
      'Before you decide, write down what you are afraid of losing, what you are hoping this decision will give you, and what you are willing to let God change.',
    remember:
      'A business does not become God\u2019s business because His name is on it. It belongs under His authority when you are willing to submit the motive, method, timing, scale, and outcome to Him.',
  },
}

// Rule-based branching. First match wins (most important flag first).
export function computeResult(answers) {
  const flagOf = (qid) => {
    const q = QUESTIONS.find((x) => x.id === qid)
    const opt = q?.options.find((o) => o.value === answers[qid])
    return opt?.flag
  }
  const costFlags = (answers.cost || []).map((v) => {
    const q = QUESTIONS.find((x) => x.id === 'cost')
    return q.options.find((o) => o.value === v)?.flag
  })

  const method = flagOf('method')
  const tested = flagOf('tested')
  const attachment = flagOf('attachment')
  const notClear = costFlags.includes('notclear')

  // 1. A concrete compromise is the most serious signal.
  if (method === 'compromise') return RESULTS.method

  // 2. Attachment / heart not yet ready to release the outcome.
  if (attachment === 'pushing' || attachment === 'unsure' || notClear || method === 'unsure') {
    return RESULTS.foundation
  }

  // 3. Missing people or qualified counsel.
  if (tested === 'people' || tested === 'counsel') return RESULTS.people

  // 4. Untested assumptions.
  if (tested === 'test' || tested === 'unsure') return RESULTS.test

  // 5. Responsible foundation.
  return RESULTS.wisdom
}
