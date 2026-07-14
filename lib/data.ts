export const site = {
  name: 'Mohdlana Preschool',
  tagline: 'Nurturing well-rounded, confident and curious critical thinkers.',
  phone1: '+233 20 300 9932',
  phone2: '+233 55 152 0883',
  email: 'admissions@mohdlanapreschool.com',
  address: 'Eduardo Mohdlana Road, Lartebiokorshie, Accra, Ghana',
  instagram: 'https://www.instagram.com/mohdlanapreschool/',
  hours: 'Monday – Friday, 7:00am – 5:00pm',
  mapQuery: 'Eduardo Mohdlana Road, Lartebiokorshie, Accra, Ghana'
};

export const stats = [
  { value: '12', unit: 'mo', label: 'Youngest learners welcomed, from our Creche' },
  { value: '1', unit: ':6', label: 'Teacher-to-child ratio in our youngest rooms' },
  { value: '0', unit: 'hrs', label: 'Screen time in our STEM & discovery program' },
  { value: '9+', unit: '', label: 'Cultures explored each year through Global Citizens' }
];

export type Program = {
  slug: string;
  name: string;
  ages: string;
  tagline: string;
  description: string;
  highlights: string[];
  schedule: string;
  color: 'teal' | 'sun' | 'bloom';
};

export const programs: Program[] = [
  {
    slug: 'creche',
    name: 'Creche',
    ages: '12 – 22 months',
    tagline: 'A gentle head start, held by loving hands.',
    description:
      'Our Creche wraps your toddler in warmth, routine and sensory play. Low ratios mean every child is seen, soothed and celebrated as they take their first steps toward independence.',
    highlights: [
      'Primary-caregiver system for secure attachment',
      'Sensory play, baby sign language & lullaby circles',
      'Daily digital log of naps, meals & milestones',
      'Home-style nap rooms with individual cots'
    ],
    schedule: 'Mon – Fri · 7:00am – 5:00pm',
    color: 'sun'
  },
  {
    slug: 'nursery',
    name: 'Nursery',
    ages: '2 – 3 years',
    tagline: 'Where curiosity learns to walk on its own.',
    description:
      'Toddlers explore language, movement and independence through play-based routines. We follow the child\u2019s pace, building confidence through repetition, rhythm and encouragement.',
    highlights: [
      'Emergent literacy through song, story & rhyme',
      'Fine & gross motor stations rotated weekly',
      'Toilet-learning partnership with families',
      'French vocabulary woven into daily routines'
    ],
    schedule: 'Mon – Fri · 7:00am – 5:00pm',
    color: 'teal'
  },
  {
    slug: 'kindergarten',
    name: 'Kindergarten',
    ages: '4 – 5 years',
    tagline: 'Confident thinkers, ready for big school.',
    description:
      'A structured, experiential curriculum builds pre-literacy, numeracy and reasoning skills, layered with our screen-free STEM program, public speaking and Ghanaian & global culture studies.',
    highlights: [
      'Phonics-based reading & handwriting readiness',
      'Hands-on STEM: robotics kits, coding unplugged, science trials',
      'Weekly public speaking & debate circle',
      'Portfolio-based reporting each term'
    ],
    schedule: 'Mon – Fri · 7:30am – 3:00pm',
    color: 'teal'
  },
  {
    slug: 'summer-school',
    name: 'Summer School',
    ages: '3 – 9 years',
    tagline: 'Two weeks of wonder — 10th–28th August.',
    description:
      'A screen-free holiday program packed with trivia, water play, reading, public speaking, French, music & dance, karate and arts & crafts — designed to keep minds curious between terms.',
    highlights: [
      'Daily 8:00am – 2:00pm, ages 3–9 welcome',
      'Trivia & science-of-everything mornings',
      'Water play & outdoor games',
      'Karate, music, dance, French & arts & crafts'
    ],
    schedule: '10 – 28 August · 8:00am – 2:00pm',
    color: 'bloom'
  }
];

export const pillars = [
  {
    title: 'Experiential Learning',
    description:
      'Children learn by doing — building, testing, mixing and moving — so ideas are felt in the hands before they are written in a book.',
    icon: 'hand'
  },
  {
    title: 'Screen-Free STEM',
    description:
      'Robotics, engineering and science come alive through tactile kits and real materials, keeping wonder analog and attention spans intact.',
    icon: 'spark'
  },
  {
    title: 'Global Citizens',
    description:
      'Through our Heritage & Culture Day, learners step into the dress, food and stories of nations near and far — starting with pride in Ghana.',
    icon: 'globe'
  },
  {
    title: 'Voice & Confidence',
    description:
      'Weekly public speaking circles and show-and-tell moments help every child find their voice, long before they need it in a classroom of forty.',
    icon: 'mic'
  },
  {
    title: 'Safety & Wellbeing',
    description:
      'CCTV-monitored classrooms, verified pick-up protocols and a full-time nurse on site give families total peace of mind.',
    icon: 'shield'
  },
  {
    title: 'Family Partnership',
    description:
      'Daily updates, termly portfolios and an always-open door mean parents are never guessing how their child\u2019s day went.',
    icon: 'heart'
  }
];

export const dayInTheLife = [
  { time: '7:00am', activity: 'Warm welcome & free play' },
  { time: '8:00am', activity: 'Breakfast & morning circle' },
  { time: '8:45am', activity: 'Literacy & numeracy stations' },
  { time: '10:00am', activity: 'Outdoor play & gross motor' },
  { time: '10:45am', activity: 'Screen-free STEM discovery' },
  { time: '12:00pm', activity: 'Lunch & rest / nap time' },
  { time: '2:00pm', activity: 'Culture, art or music studio' },
  { time: '3:15pm', activity: 'Public speaking circle & story time' },
  { time: '4:00pm', activity: 'Free play & pick-up' }
];

export const admissionsSteps = [
  {
    step: '01',
    title: 'Enquire',
    description: 'Submit the enquiry form or call our admissions line to tell us about your child.'
  },
  {
    step: '02',
    title: 'Tour the school',
    description: 'Visit Eduardo Mohdlana Road for a guided walkthrough of classrooms in session.'
  },
  {
    step: '03',
    title: 'Settle-in visit',
    description: 'Your child spends a supervised session with their future class and teacher.'
  },
  {
    step: '04',
    title: 'Enrol',
    description: 'Complete registration, receive your welcome pack and pick a start date.'
  }
];

export const testimonials = [
  {
    quote:
      'Our son started at 14 months barely walking and unsure of strangers. A year on, he runs to greet his teachers and tells us about his day in full sentences.',
    name: 'Parent of a Creche graduate',
    context: 'Airport Residential Area'
  },
  {
    quote:
      'The Heritage Day photos are precious, but what impressed us was how naturally our daughter now asks questions about other cultures — and her own.',
    name: 'Parent of a Kindergarten learner',
    context: 'Cantonments'
  },
  {
    quote:
      'No tablets, no screens — just building, testing and asking why. She comes home with mud on her shoes and ideas in her head. Exactly what we wanted.',
    name: 'Parent of a Nursery learner',
    context: 'Dzorwulu'
  }
];

export const faqs = [
  {
    q: 'What age groups does Mohdlana Preschool accept?',
    a: 'We welcome children from 12 months (Creche) through Kindergarten, and open our doors to ages 3–9 for Summer School.'
  },
  {
    q: 'What is your teacher-to-child ratio?',
    a: 'Ratios are kept deliberately low — as tight as 1:6 in Creche, rising modestly by classroom age — so every child gets individual attention.'
  },
  {
    q: 'Do you really keep screens out of the classroom?',
    a: 'Yes. Our STEM and discovery program is fully screen-free, using tactile kits, building materials and real experiments instead of tablets.'
  },
  {
    q: 'What are your hours and holiday programs?',
    a: 'Term-time hours run 7:00am – 5:00pm (7:30am – 3:00pm for Kindergarten). Our Summer School runs 10th–28th August, 8:00am – 2:00pm, for ages 3–9.'
  },
  {
    q: 'How do you keep children safe on site?',
    a: 'CCTV-monitored classrooms, verified guardian pick-up, a first-aid trained team and a full daily health check are standard for every learner.'
  },
  {
    q: 'How do I arrange a tour?',
    a: 'Submit the enquiry form on our Admissions page or call our admissions line — we\u2019ll schedule a walkthrough at a time that suits your family.'
  }
];

export const heritageGallery = [
  {
    src: '/images/heritage-ghana.jpg',
    country: 'Ghana',
    alt: 'Four children in Ghanaian kente and traditional dress holding the Ghana flag'
  },
  {
    src: '/images/heritage-italy.jpg',
    country: 'Italy',
    alt: 'Three children in Italian traditional dress holding the Italy flag'
  },
  {
    src: '/images/heritage-france.jpg',
    country: 'France',
    alt: 'Four children in French traditional dress holding the France flag'
  }
];
