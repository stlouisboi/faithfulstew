// Seven questions, each tied to one lens of the framework.
// Each answer carries a score 1 (drifting) to 4 (faithful). The lens with the
// lowest total surfaces as the reader's biggest tension.

export const STAGES = [
  { value: 'exploring', label: 'Exploring' },
  { value: 'starting', label: 'Starting' },
  { value: 'operating', label: 'Operating' },
  { value: 'growing', label: 'Growing' },
  { value: 'maintaining', label: 'Maintaining' },
  { value: 'transitioning', label: 'Transitioning' },
]

export const QUESTIONS = [
  {
    id: 'authority',
    lens: 'Authority',
    prompt:
      'When a big decision looms, whose ownership of the business shapes your first move?',
    options: [
      { label: 'Whatever grows revenue fastest decides it.', score: 1 },
      { label: 'I weigh the numbers, then maybe pray about it.', score: 2 },
      { label: 'I pray, but the pressure usually wins.', score: 3 },
      { label: 'I steward it as God\u2019s, seeking His will first.', score: 4 },
    ],
  },
  {
    id: 'motives',
    lens: 'Motives',
    prompt: 'Be honest\u2014what is most fueling your ambition right now?',
    options: [
      { label: 'Proving my worth and outrunning comparison.', score: 1 },
      { label: 'A mix of service and needing to be seen.', score: 2 },
      { label: 'Mostly service, with lingering fear.', score: 3 },
      { label: 'A settled desire to serve and obey.', score: 4 },
    ],
  },
  {
    id: 'method',
    lens: 'Method',
    prompt:
      'When integrity and a sale collide, what tends to happen?',
    options: [
      { label: 'I shade the truth to close the deal.', score: 1 },
      { label: 'I justify small compromises under pressure.', score: 2 },
      { label: 'I hold the line, though it costs me sleep.', score: 3 },
      { label: 'Truth-telling is non-negotiable, cost or not.', score: 4 },
    ],
  },
  {
    id: 'stewardship',
    lens: 'Stewardship',
    prompt: 'How tightly do you grip time, money, and influence?',
    options: [
      { label: 'They\u2019re mine to keep and prove I\u2019ve arrived.', score: 1 },
      { label: 'I give some away but hold the rest closely.', score: 2 },
      { label: 'I try to hold them loosely, imperfectly.', score: 3 },
      { label: 'Open hands\u2014tools for the Kingdom, not trophies.', score: 4 },
    ],
  },
  {
    id: 'people',
    lens: 'People',
    prompt: 'How do employees, partners, and customers register to you?',
    options: [
      { label: 'Mostly as utilities for profit and output.', score: 1 },
      { label: 'People I value when it serves the goal.', score: 2 },
      { label: 'People I care for, though margins press in.', score: 3 },
      { label: 'Image-bearers of God, always.', score: 4 },
    ],
  },
  {
    id: 'faithfulness',
    lens: 'Faithfulness',
    prompt: 'What is your true scorecard for success?',
    options: [
      { label: 'Revenue, growth, and status\u2014full stop.', score: 1 },
      { label: 'Results first, obedience if there\u2019s room.', score: 2 },
      { label: 'Obedience matters, but numbers still rule me.', score: 3 },
      { label: 'Daily faithfulness to God\u2019s calling.', score: 4 },
    ],
  },
  {
    id: 'eternity',
    lens: 'Eternity',
    prompt: 'If the business vanished tomorrow, what would remain of you?',
    options: [
      { label: 'I\u2019d be lost\u2014it has become my identity.', score: 1 },
      { label: 'A hard blow I\u2019m not sure I\u2019d recover from.', score: 2 },
      { label: 'Shaken, but my hope isn\u2019t only here.', score: 3 },
      { label: 'Grieved, yet anchored in the Kingdom that endures.', score: 4 },
    ],
  },
]

// Short, pastoral read-outs keyed by lens (the reader's weakest area).
export const RESULTS = {
  Authority: {
    tension: 'Ownership',
    body: 'The pull you feel most is treating the business as yours rather than God\u2019s. When you remember you are a steward, not an owner, decisions get lighter and clearer.',
  },
  Motives: {
    tension: 'Proving',
    body: 'Your ambition is quietly fueled by a need to prove your worth. Naming that frees you to build from calling instead of comparison or fear.',
  },
  Method: {
    tension: 'Compromise',
    body: 'Pressure tempts you to shade the truth to win. Deciding in advance that integrity is non-negotiable protects both the deal and your soul.',
  },
  Stewardship: {
    tension: 'Control',
    body: 'You tend to grip time, money, and influence tightly. Holding them with open hands turns resources into Kingdom tools rather than trophies.',
  },
  People: {
    tension: 'Utility',
    body: 'Under load, people can start to register as means to an end. Seeing them as image-bearers reshapes how you lead, hire, and sell.',
  },
  Faithfulness: {
    tension: 'Metrics',
    body: 'Your scorecard is still mostly numbers. Redefining success as daily obedience steadies you regardless of the commercial outcome.',
  },
  Eternity: {
    tension: 'Identity',
    body: 'The business has crept toward becoming your identity. A loose grip on earthly empires anchors you in the Kingdom that actually endures.',
  },
}
