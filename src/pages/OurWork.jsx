import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './About.css';
import './OurWork.css';

const COLORS = ['#e8a020','#c0622a','#1e6b9e','#6b4fa0'];
const projects = [
  { tag:'Warehouse Facility', title:'Inventory Audit', desc:'Detailed physical count and reconciliation process.', img:'/images/work-1.jpeg', c:0 },
  { tag:'Retail Partner', title:'Stock Arrangement', desc:'Optimizing shelf space and implementing FIFO systems.', img:'/images/work-2.jpeg', c:1 },
  { tag:'Distribution Center', title:'Compliance Check', desc:'Ensuring all stock meets regulatory and internal standards.', img:'/images/work-3.jpeg', c:2 },
  { tag:'Headquarters', title:'Data Entry Operations', desc:'Digitizing manual records for real-time inventory tracking.', img:'/images/work-4.jpeg', c:3 },
  { tag:'Field Site', title:'Team Briefing', desc:'Coordinating complex stock takes for large-scale warehouses.', img:'/images/work-5.jpeg', c:0 },
  { tag:'Client Site', title:'Quality Assurance', desc:'Verifying stock condition during the audit process.', img:'/images/work-6.jpeg', c:1 },
  { tag:'Tech Hub', title:'System Integration', desc:'Deploying custom ERP solutions for seamless stock management.', img:'/images/work-7.jpg', c:2 },
  { tag:'Partner Facility', title:'Final Certification', desc:'The double-check verification guaranteeing 99.9% accuracy.', img:'/images/work-8.jpeg', c:3 },
];

export default function OurWork() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.span className="eyebrow page-hero__eyebrow"
            initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }}>
            Excellence in Motion
          </motion.span>
          <motion.h1 className="page-hero__heading"
            initial={{ opacity:0,y:36 }} animate={{ opacity:1,y:0 }}
            transition={{ duration:0.8,delay:0.1,ease:[0.22,1,0.36,1] }}>
            Our Work &<br /><em>Distinguished Moments.</em>
          </motion.h1>
          <motion.p className="page-hero__sub"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6,delay:0.3 }}>
            A visual journey through the meticulous processes that define Elites Stock Solutions.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="work-grid">
            {projects.map((p, i) => (
              <motion.div key={p.title} className="work-card"
                initial={{ opacity:0,y:32 }} whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }} transition={{ duration:0.55, delay:(i%3)*0.08 }}>
                <div className="work-card__img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="work-card__overlay"><ArrowUpRight size={26} color="white"/></div>
                </div>
                <div className="work-card__content">
                  <span className="work-card__tag" style={{ color: COLORS[p.c] }}>{p.tag}</span>
                  <h3 className="work-card__title">{p.title}</h3>
                  <p className="work-card__desc">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-cta section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
            <h2 className="work-cta__heading">Ready for Flawless Records?</h2>
            <Link to="/quote" className="btn btn--primary btn--lg">
              Start Your Audit Journey <ArrowRight size={16}/>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
