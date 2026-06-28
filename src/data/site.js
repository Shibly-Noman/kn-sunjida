// Single source of truth for all site content.
// Swap placeholder Work items + "Add date" markers with real values later.

export const profile = {
  name: 'Kamrun Nahar',
  wordmark: { first: 'Kamrun', second: 'Nahar' },
  badge: 'Content Specialist · Former Journalist',
  tagline: 'Content Writer and Journalist',
  // Rotating phrases for the hero headline keyword.
  rotating: ['stories that move', 'copy that converts', 'news people trust'],
  heroLead: 'I turn complex ideas into',
  heroSub:
    'Content writer with 5+ years across B2B digital marketing and news journalism — covering the full lifecycle from interview to performance. AI for speed, human judgment for quality.',
  summary:
    'Content writer with 5+ years of experience spanning B2B digital marketing and news journalism. I specialize in turning defined content and branding strategy into clear, compelling work across blogs, case studies, news stories, and business communication. I cover the full content lifecycle — interviewing, writing, auditing, and tracking performance — using AI tools for speed and human judgment for quality.',
  email: 'kn.sunjida@gmail.com',
  phone: '+880 153 3362 768',
  phoneHref: 'tel:+8801533362768',
  linkedin: 'https://linkedin.com/in/kn-sunjida',
  linkedinLabel: 'linkedin.com/in/kn-sunjida',
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years writing' },
  { value: 150, suffix: '+', label: 'News pieces & case studies' },
  { value: 38, suffix: '', label: 'Portfolios shipped' },
  { value: 50, suffix: '+', label: 'Press releases & articles' },
]

export const lifecycle = [
  {
    step: '01',
    title: 'Research & Interview',
    desc: 'SME and customer interviews, market and competitor research — finding the real story before a word is written.',
  },
  {
    step: '02',
    title: 'Write & Edit',
    desc: 'Blogs, landing pages, email, ebooks, case studies and customer stories — drafted, edited, and on-brand.',
  },
  {
    step: '03',
    title: 'Audit & Optimize',
    desc: 'Auditing in-market content to keep positioning, messaging and quality current, with SEO baked in.',
  },
  {
    step: '04',
    title: 'Track & Report',
    desc: 'Performance tracking across engagement and organic traffic, with recommendations that compound.',
  },
]

// Work grid — placeholder pieces. Replace title/excerpt/link/source with real work.
export const workTypes = ['All', 'Blog', 'Case Study', 'News', 'Brand / PR']

export const work = [
  {
    type: 'Case Study',
    title: 'From technical docs to a customer story that closed deals',
    excerpt:
      'Interviewed an SME and a customer to tie a thorny pain point to a clean solution narrative.',
    source: 'Vivasoft',
    link: '#',
  },
  {
    type: 'Blog',
    title: 'The full content lifecycle, explained without the jargon',
    excerpt:
      'A pillar blog mapping interview → write → audit → track, written for busy marketing leads.',
    source: 'Vivasoft',
    link: '#',
  },
  {
    type: 'News',
    title: 'On the beat: a feature across politics, society and culture',
    excerpt:
      'Reported and written on deadline from primary sources, translated into a clear narrative.',
    source: 'Suprobhat Bangladesh',
    link: '#',
  },
  {
    type: 'Brand / PR',
    title: '50+ press releases and an award-winning submission',
    excerpt:
      'Managed award applications and PR that contributed to the Digital Bangladesh Award 2022.',
    source: 'Riseup Labs',
    link: '#',
  },
  {
    type: 'Case Study',
    title: 'One of 38 portfolios shipped end to end',
    excerpt:
      'Research, copy, visuals and publishing — owned from blank page to live page.',
    source: 'Riseup Labs',
    link: '#',
  },
  {
    type: 'News',
    title: 'Editing the desk: headlines that earned the click honestly',
    excerpt:
      'Sub-edited and fact-checked reporter copy, optimized for readability and the web.',
    source: 'CTGNews.com',
    link: '#',
  },
]

// Stories = career as chapters (chronological journalism → B2B arc).
export const chapters = [
  {
    n: 1,
    kicker: 'The Desk',
    company: 'CTGNews.com',
    role: 'Sub Editor',
    period: 'Oct 2020 – Aug 2021',
    title: 'Learning the craft at the desk',
    desc: 'Where precision became a habit — editing, fact-checking and headline-writing under a live publication’s standards.',
    points: [
      'Edited and proofread news copy; wrote headlines optimized for readability and web.',
      'Reviewed reporter submissions and fact-checked for accuracy and compliance.',
      'Managed editorial workflow and kept voice and tone consistent across the publication.',
    ],
    metrics: [
      { value: 'Daily', label: 'Editorial workflow' },
      { value: 'Web', label: 'Readability & SEO' },
      { value: '100%', label: 'Fact-checked' },
    ],
  },
  {
    n: 2,
    kicker: 'On the Beat',
    company: 'Suprobhat Bangladesh',
    role: 'Senior Reporter',
    period: 'Sep 2021 – May 2022',
    title: 'Reporting on deadline, from the source',
    desc: 'The newsroom years — chasing primary sources and turning raw information into clear, engaging stories.',
    points: [
      'Researched, reported and wrote news stories and features across politics, society and culture.',
      'Conducted primary-source interviews and translated them into clear narratives.',
      'Met daily and weekly deadlines while holding accuracy and editorial standards.',
    ],
    metrics: [
      { value: '3', label: 'Beats covered' },
      { value: 'Daily', label: 'Deadlines met' },
      { value: '1st', label: 'Primary sources' },
    ],
  },
  {
    n: 3,
    kicker: 'Crossing Into B2B',
    company: 'Riseup Labs',
    role: 'Marketing Executive',
    period: 'Add date – Add date',
    title: 'From newsroom to brand storytelling',
    desc: 'Carrying journalistic rigor into marketing — turning technical docs into audience-ready stories at scale.',
    points: [
      'Authored 150+ news pieces and case studies from technical documentation.',
      'Produced 38 portfolios end to end — research, copy, visuals and publishing.',
      'Published 50+ press releases; named Best Employee and contributed to the Digital Bangladesh Award 2022.',
    ],
    metrics: [
      { value: '150+', label: 'Pieces authored' },
      { value: '38', label: 'Portfolios shipped' },
      { value: '50+', label: 'Press releases' },
    ],
  },
  {
    n: 4,
    kicker: 'Full Lifecycle',
    company: 'Vivasoft',
    role: 'Digital Marketing Executive',
    period: 'Add date – Present',
    title: 'Owning content end to end',
    desc: 'Where it all comes together — strategy, interviews, writing, audits and performance across every format.',
    points: [
      'Write and publish blogs, landing pages, email and case studies aligned to brand messaging.',
      'Interview SMEs and customers to build case studies that tie pain points to solutions.',
      'Audit in-market content, track performance, and run off-page & local SEO plus PR.',
    ],
    metrics: [
      { value: 'Full', label: 'Content lifecycle' },
      { value: 'SEO', label: 'Off-page & local' },
      { value: 'GA4', label: 'Performance tracking' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Content & Writing',
    items: ['Blogs', 'Landing pages', 'Email', 'Ebooks', 'Case studies', 'Customer stories', 'Editing', 'Audits'],
  },
  {
    title: 'Research & Storytelling',
    items: ['SME & customer interviews', 'Market research', 'Competitor research', 'Narrative development'],
  },
  {
    title: 'Brand & Process',
    items: ['Voice / tone / messaging', 'Style-guide adherence', 'Positioning', 'Compliance'],
  },
  {
    title: 'Performance',
    items: ['Performance tracking', 'Engagement & traffic analysis', 'Optimization', 'SEO'],
  },
  {
    title: 'Collaboration & Tools',
    items: ['Product Marketing / Design / Content', 'AI-assisted content (human QA)', 'WordPress', 'GA4'],
  },
]

export const education = [
  {
    degree: 'Master of Social Science (MSS)',
    field: 'Communication & Journalism',
    detail: 'Second Class · 2020',
    school: 'University of Chittagong',
  },
  {
    degree: 'Bachelor of Science (BSc)',
    field: 'Communication & Journalism',
    detail: 'Second Class · 2019',
    school: 'University of Chittagong',
  },
]

// Styleguide = brand voice page.
export const voicePrinciples = [
  {
    title: 'Clear',
    desc: 'Jargon out, meaning in. If a reader has to re-read a sentence, it isn’t finished.',
  },
  {
    title: 'Compelling',
    desc: 'Every piece earns the next line. Story first, structure second, polish last.',
  },
  {
    title: 'Credible',
    desc: 'Primary sources, fact-checks and human QA. Speed from AI, trust from judgment.',
  },
]

export const voiceExamples = [
  {
    dont: 'We leverage synergistic solutions to optimize stakeholder outcomes.',
    do: 'We help your team ship content that actually moves the numbers.',
  },
  {
    dont: 'Our product is a best-in-class, industry-leading platform.',
    do: 'Here’s the one problem it solves — and the proof it works.',
  },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
]
