"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight, BarChart3, Bot, Code2, Globe2, Megaphone, Search,
  Smartphone, Sparkles, Target, TrendingUp, Users, X, Menu,
  Instagram, Linkedin, Facebook, Youtube, Check
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: [string, string, string, LucideIcon][] = [
  ["01","Website Design & Development","High-converting websites engineered to turn attention into action.",Globe2],
  ["02","Meta Ads","Facebook & Instagram campaigns built around testing, tracking and profitable growth.",Megaphone],
  ["03","Google Ads","Capture high-intent demand with search, shopping, PMax and remarketing.",Search],
  ["04","SEO","Technical, on-page and content systems that compound organic visibility.",TrendingUp],
  ["05","App Development","Modern mobile experiences, APIs and analytics built for scale.",Smartphone],
  ["06","Social Media Marketing","Content, creative direction and distribution that builds attention.",Users],
  ["07","Branding & Creative","Visual identities and campaign creative designed to be remembered.",Sparkles],
  ["08","Marketing Automation","Lead, CRM, WhatsApp, email and AI workflows that remove repetitive work.",Bot]
];

const stats = [
  ["100+","Campaigns Managed"],
  ["50+","Brands Worked With"],
  ["4.8x","Illustrative ROAS"],
  ["90%","Automation Potential"]
];

const steps = [
  ["01","Discover","Understand your business, audience, offer and growth targets."],
  ["02","Strategy","Build the channel, creative, funnel and technology roadmap."],
  ["03","Create","Design the website, campaigns, content and conversion experience."],
  ["04","Launch","Put the system live with clean tracking and measurable goals."],
  ["05","Optimize","Turn campaign and customer data into continuous improvements."],
  ["06","Scale","Double down on what works and expand the growth engine."]
];

const cases = [
  ["E-commerce Growth","Meta Ads + Website","ROAS 4.8x"],
  ["Real Estate Lead Generation","Meta Ads + Landing Page","+127 Leads"],
  ["Fashion Brand","Google Ads + SEO","+64% Organic Traffic"],
  ["D2C Launch","Creative + Performance Marketing","3.2x ROAS"]
];

const testimonials = [
  ["“Scale Media brought creative and performance thinking into the same room. The execution became much faster.”","Founder, D2C Brand"],
  ["“The new website finally feels like our brand. More importantly, the funnel is built around conversion.”","Marketing Lead, Growth Company"],
  ["“We stopped guessing and started reading the numbers. The reporting made optimization much clearer.”","Founder, Consumer Brand"]
];

function FloatingBackground() {
  const cards = [
    ["ROAS","4.8x ↑"],["LEADS","+127"],["CTR","4.82%"],["REVENUE","+38%"],
    ["META ADS","ACTIVE"],["SEO TRAFFIC","↑ 64%"],["CPC","₹18.40"],["CONVERSIONS","+247"]
  ];
  return <div className="bg-stage" aria-hidden="true">
    <div className="aurora a1"/><div className="aurora a2"/><div className="grid"/>
    <div className="orbit orbit1"/><div className="orbit orbit2"/>
    {cards.map((c,i)=><div className={`float-card f${i+1}`} key={c[0]}>
      <span>{c[0]}</span><strong>{c[1]}</strong>
    </div>)}
    <div className="data-line dl1"/><div className="data-line dl2"/>
    <div className="dot-field">{Array.from({length:38}).map((_,i)=><i key={i}/>)}</div>
  </div>
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [cursor, setCursor] = useState({x:50,y:50});
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({x:(e.clientX/window.innerWidth)*100,y:(e.clientY/window.innerHeight)*100});
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTestimonial(v => (v+1)%testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return <main style={{"--mx":`${cursor.x}%`,"--my":`${cursor.y}%`} as CSSProperties}>
    <FloatingBackground />
    <nav className="nav">
      <a href="#home" className="brand"><span className="brand-mark">S</span><span>Scale<span>Media</span></span></a>
      <div className={`nav-links ${menu ? "open":""}`}>
        {["Home","Services","Work","Process","About","Testimonials","Contact"].map(x=>
          <a href={`#${x.toLowerCase()}`} onClick={()=>setMenu(false)} key={x}>{x}</a>
        )}
      </div>
      <a className="nav-cta" href="#contact">Let’s Scale <ArrowRight size={15}/></a>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
    </nav>

    <section id="home" className="hero section">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> PERFORMANCE MARKETING • TECHNOLOGY • GROWTH</div>
        <h1>We Build.<br/><em>We Market.</em><br/>We Scale.</h1>
        <p>Digital marketing and technology built to turn attention into measurable growth.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#contact">Start Scaling <ArrowRight size={18}/></a>
          <a className="btn ghost" href="#services">Explore Services</a>
        </div>
        <div className="hero-proof"><span><Check size={15}/> Data-led</span><span><Check size={15}/> Full funnel</span><span><Check size={15}/> Built to scale</span></div>
      </div>
      <div className="hero-visual">
        <div className="halo"/>
        <div className="dashboard">
          <div className="dash-top"><span>CAMPAIGN OVERVIEW</span><b>● LIVE</b></div>
          <div className="dash-main">
            <div><small>Revenue</small><strong>₹5,80,000</strong><span className="up">+38.2%</span></div>
            <div><small>ROAS</small><strong>4.64x</strong><span className="up">↑ 0.72</span></div>
          </div>
          <div className="chart"><svg viewBox="0 0 520 180" preserveAspectRatio="none"><path d="M0 155 C50 145,70 150,105 125 S165 145,205 102 S270 120,310 78 S365 105,405 54 S460 70,520 18" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M0 155 C50 145,70 150,105 125 S165 145,205 102 S270 120,310 78 S365 105,405 54 S460 70,520 18 L520 180 L0 180Z" fill="currentColor" opacity=".08"/></svg></div>
          <div className="dash-bottom"><span>Spend <b>₹1,25,000</b></span><span>Conversions <b>247</b></span><span>CPC <b>₹18.40</b></span></div>
        </div>
      </div>
      <a className="scroll" href="#services"><span/> Scroll to explore</a>
    </section>

    <section className="ticker"><div>{["META ADS","GOOGLE ADS","SEO","WEB DEVELOPMENT","APP DEVELOPMENT","PERFORMANCE MARKETING","SOCIAL MEDIA","BRANDING","ANALYTICS","AUTOMATION"].map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></section>

    <section className="stats section">
      <div className="section-intro"><span className="kicker">BUILT FOR MEASURABLE GROWTH</span><h2>Attention is nice.<br/><span>Growth is better.</span></h2></div>
      <div className="stat-grid">{stats.map(([n,l], i)=><div className="stat" key={i}><strong>{n}</strong><span>{l}</span></div>)}</div>
    </section>

    <section id="services" className="section services">
      <div className="heading-row"><div><span className="kicker">WHAT WE DO</span><h2>Everything you need<br/><span>to scale.</span></h2></div><p>Strategy, creative, media, technology and analytics — connected into one growth system.</p></div>
      <div className="service-grid">{services.map(([num,title,desc,Icon],i)=><article className="service-card" key={i}><span className="num">{num}</span><div className="icon"><Icon /></div><h3>{title}</h3><p>{desc}</p><a href="#contact"><ArrowRight size={18}/></a></article>)}</div>
    </section>

    <section id="work" className="section ecosystem">
      <div className="eco-copy"><span className="kicker">THE SCALE ENGINE</span><h2>One ecosystem.<br/><span>Every growth channel.</span></h2><p>Paid media, organic discovery, conversion experiences and data should not live in separate silos. We connect them.</p><a className="text-link" href="#contact">Build my growth engine <ArrowRight size={17}/></a></div>
      <div className="eco-map">
        <div className="eco-center"><span className="brand-mark">S</span><b>SCALE<br/>MEDIA</b></div>
        {["META ADS","GOOGLE ADS","SEO","WEBSITE","SOCIAL","ANALYTICS","CRM","APP"].map((x,i)=><div className={`node n${i+1}`} key={x}>{x}</div>)}
        <div className="eco-ring"/>
        <div className="beam b1"/><div className="beam b2"/><div className="beam b3"/>
      </div>
    </section>

    <section className="section performance">
      <div className="performance-card">
        <div className="perf-copy"><span className="kicker">PERFORMANCE MARKETING</span><h2>Marketing without<br/><span>guesswork.</span></h2><p>Every campaign generates data. We turn that data into decisions, optimizations and growth.</p><div className="mini-points"><span><BarChart3/> Live reporting</span><span><Target/> Conversion focused</span><span><TrendingUp/> Continuous optimization</span></div></div>
        <div className="mini-dashboard">
          <div className="md-head"><span>PERFORMANCE</span><span>Last 30 days</span></div>
          {[["Spend","₹1,25,000",""],["Revenue","₹5,80,000",""],["ROAS","4.64x",""],["CTR","3.92%",""]].map(x=><div className="metric" key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><i><span style={{width:`${Math.min(94,30+x[0].length*12)}%`}}/></i></div>)}
        </div>
      </div>
    </section>

    <section id="process" className="section process">
      <div className="center-heading"><span className="kicker">HOW WE WORK</span><h2>From idea <span>to scale.</span></h2></div>
      <div className="steps">{steps.map(([n,t,d],i)=><div className="step" key={i}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div>{i<5&&<ArrowRight className="step-arrow"/>}</div>)}</div>
    </section>

    <section className="section cases">
      <div className="center-heading"><span className="kicker">SELECTED WORK</span><h2>Built <span>to perform.</span></h2></div>
      <div className="case-grid">{cases.map(([a,b,c],i)=><article className="case" key={i}><div className={`case-art art${i+1}`}><div className="fake-window"><div/><div/><div/></div><span>{c}</span></div><div className="case-meta"><div><b>{a}</b><small>{b}</small></div><ArrowRight/></div></article>)}</div>
    </section>

    <section id="about" className="section why">
      <div className="heading-row"><div><span className="kicker">WHY SCALE MEDIA</span><h2>Creative thinking.<br/><span>Performance discipline.</span></h2></div></div>
      <div className="why-grid">{[
        ["Performance First","Every decision connects to a measurable business outcome."],
        ["Creative + Data","Great creative gets attention. Data tells us what to scale."],
        ["Technology Driven","Websites, apps, automation and analytics work together."],
        ["Full-Funnel Thinking","From first impression to conversion and retention."],
        ["Fast Execution","Strategy only matters when it becomes action."],
        ["Built to Scale","Systems designed to grow with your business."]
      ].map(([t,d])=><div className="why-card" key={t}><Sparkles/><h3>{t}</h3><p>{d}</p></div>)}</div>
    </section>

    <section id="testimonials" className="section testimonials">
      <div className="testimonial-main"><span className="kicker">CLIENT VOICE</span><h2>What clients<br/><span>say.</span></h2><div className="quote">★★★★★</div><blockquote>{testimonials[testimonial][0]}</blockquote><p className="author">— {testimonials[testimonial][1]}</p><div className="dots">{testimonials.map((_,i)=><button type="button" className={i===testimonial?"active":""} onClick={()=>setTestimonial(i)} key={i}/>)}</div></div>
      <div className="quote-orb">“</div>
    </section>

    <section id="contact" className="section contact">
      <div className="contact-head"><span className="kicker">LET’S TALK</span><h2>Ready to <span>scale?</span></h2><p>Tell us what you are building. We’ll bring the strategy, creative and technology.</p></div>
      <form className="contact-form" onSubmit={e=>e.preventDefault()}>
        <div className="field-row"><label>Name<input placeholder="Your name"/></label><label>Email<input type="email" placeholder="you@company.com"/></label></div>
        <div className="field-row"><label>Company<input placeholder="Company name"/></label><label>Phone<input placeholder="+91 XXXXX XXXXX"/></label></div>
        <div className="field-row"><label>Service<select defaultValue=""><option value="" disabled>Select a service</option>{services.map((s,i)=><option key={i}>{s[1]}</option>)}</select></label><label>Budget<select defaultValue=""><option value="" disabled>Select budget</option><option>₹25K – ₹50K</option><option>₹50K – ₹1L</option><option>₹1L – ₹3L</option><option>₹3L+</option></select></label></div>
        <label>Message<textarea placeholder="Tell us about your project..."/></label>
        <button className="btn primary submit">Send Inquiry <ArrowRight size={18}/></button>
      </form>
    </section>

    <footer className="footer">
      <div className="footer-brand"><a href="#home" className="brand"><span className="brand-mark">S</span><span>Scale<span>Media</span></span></a><p>Digital marketing, technology and creative solutions built for growth.</p></div>
      <div className="footer-links"><div><b>Explore</b><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a></div><div><b>Connect</b><a href="#contact">Contact</a><a href="mailto:hello@scalemedia.in">hello@scalemedia.in</a><a href="tel:+910000000000">+91 XXXXX XXXXX</a></div></div>
      <div className="footer-bottom"><span>© 2026 Scale Media. All rights reserved.</span><span>Privacy · Terms</span><div className="social"><Instagram/><Linkedin/><Facebook/><Youtube/></div></div>
    </footer>
  </main>
}