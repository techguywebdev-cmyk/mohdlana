import Image from 'next/image';
import { motion } from 'framer-motion';
import { FlowerDoodle, SunDoodle, HeartDoodle } from '@/components/Doodles';

const features = [
  {
    title: 'Experiential Learning',
    text: 'Children learn by doing — building, testing, mixing and moving — so ideas are felt in the hands before they are written in a book.',
    image: '/images/experiential-learning.jpg',
    icon: <HeartDoodle className="h-8 w-8" />,
  },
  {
    title: 'Screen-Free STEM',
    text: 'Robotics, engineering and science come alive through tactile kits and real materials, keeping wonder analog and attention spans intact.',
    image: '/images/stem-learning.jpg',
    icon: <SunDoodle className="h-8 w-8" />,
  },
  {
    title: 'Global Citizens',
    text: 'Through our Heritage & Culture programme, children grow in identity, empathy and awareness — ready to thrive in a diverse world.',
    image: '/images/global-citizens.jpg',
    icon: <FlowerDoodle className="h-8 w-8" />,
  },
];

export default function ImprovedPillarsSection() {
  return (
    <section className="bg-paper-warm py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-teal-600">Our approach</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink">Learning that feels like childhood</h2>
          <p className="mt-4 text-lg text-ink/65">Curiosity, creativity and confidence built through meaningful experiences.</p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[35%] border-8 border-white shadow-card">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>

              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-teal-600 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink/65">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
