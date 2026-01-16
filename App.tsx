import React, { useState, useEffect } from 'react';
import { SERVICES, PUBLICATIONS, BUSINESS_NAME, CONTACT_EMAIL } from './constants';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activePillar, setActivePillar] = useState<number | null>(null);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reveal Animation Logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optimization: Stop observing once revealed to save resources
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing delay for UX then trigger mailto
    setTimeout(() => {
      const subject = encodeURIComponent(`Strategic Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <ScrollToTop />
      
      <main>
        <Hero />

        {/* Credentials Ticker Ribbon */}
        <div className="bg-slate-900 py-8 md:py-10 overflow-hidden relative border-b border-slate-800">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-12 md:gap-20 items-center px-4 md:px-10">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-400 flex items-center gap-3"><i className="fa-solid fa-graduation-cap"></i> JD • MBA • LLM • M.ENG</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400 flex items-center gap-3"><i className="fa-solid fa-shield-halved"></i> CAPP & CIPP/C CERTIFIED</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-400 flex items-center gap-3"><i className="fa-solid fa-gavel"></i> SUPREME COURT COUNSEL</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400 flex items-center gap-3"><i className="fa-solid fa-landmark"></i> BARRISTER & SOLICITOR</span>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee { animation: marquee 60s linear infinite; }
          `}</style>
        </div>

        {/* Methodology: The Synthesis Matrix */}
        <section id="about" className="py-16 md:py-32 lg:py-40 px-6 reveal overflow-hidden bg-slate-50/50">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-8 md:mb-10 flex items-center justify-center gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-blue-600"></span> The Synthesis Advantage <span className="w-8 md:w-12 h-[1px] bg-blue-600"></span>
            </h4>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-[1.1] mb-8 md:mb-10 tracking-tight text-slate-900">
              Interdisciplinary <br/><span className="italic text-slate-400">Logic</span>.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 md:mb-16 font-light">
              Modern challenges do not exist in silos. I provide a multidimensional advisory synthesis—integrating <strong>engineering precision</strong>, <strong>financial intelligence</strong>, and <strong>legal rigor</strong> to advance objectives in highly regulated landscapes.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="group p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 group-hover:bg-blue-600 transition-colors duration-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <i className="fa-solid fa-brain-circuit text-blue-600 group-hover:text-white transition-colors text-lg md:text-xl"></i>
                </div>
                <h5 className="font-bold text-lg mb-3 md:mb-4 text-slate-900">Domain Convergence</h5>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">Strategic solutions that satisfy the board, the regulators, and the engineers simultaneously.</p>
              </div>
              <div className="group p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 group-hover:bg-blue-600 transition-colors duration-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <i className="fa-solid fa-location-crosshairs text-blue-600 group-hover:text-white transition-colors text-lg md:text-xl"></i>
                </div>
                <h5 className="font-bold text-lg mb-3 md:mb-4 text-slate-900">Precision Hub</h5>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">Headquartered in Northern Ontario with the infrastructure to serve international digital and industrial interests.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas: Interactive Strategic Pillars */}
        <section id="services" className="py-16 md:py-32 lg:py-40 bg-slate-950 text-white rounded-[2rem] md:rounded-[5rem] mx-2 md:mx-10 my-8 md:my-12 relative overflow-hidden reveal shadow-2xl">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="max-w-4xl mb-16 md:mb-24">
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold serif mb-6 md:mb-10 leading-[1] tracking-tight">
                Structural <br/><span className="text-blue-500 italic">Pillars</span>.
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light">
                Specialized advisory designed for organizations navigating the convergence of technology, law, and capital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {SERVICES.map((service, idx) => (
                <div 
                  key={idx} 
                  onMouseEnter={() => setActivePillar(idx)}
                  onMouseLeave={() => setActivePillar(null)}
                  className={`group relative bg-white/[0.03] backdrop-blur-md p-8 md:p-10 lg:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 transition-all duration-700 flex flex-col h-full hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/50 ${activePillar !== null && activePillar !== idx ? 'lg:opacity-40 lg:scale-95' : 'opacity-100 scale-100'}`}
                >
                  <div className="absolute top-6 right-8 md:top-10 md:right-14 text-white/[0.03] text-6xl md:text-8xl font-bold serif group-hover:text-blue-500/[0.1] transition-all duration-700 pointer-events-none select-none">
                    0{idx + 1}
                  </div>

                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl md:rounded-3xl flex items-center justify-center text-2xl md:text-3xl mb-8 md:mb-10 shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ring-1 ring-white/10">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 serif tracking-tight">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-8 md:mb-10 flex-grow text-base md:text-lg font-light">{service.description}</p>
                    
                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="text-sm lg:text-base flex gap-4 text-slate-300 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="leading-relaxed opacity-90">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-8 md:pt-10 border-t border-white/5">
                    {service.tags.map(t => (
                      <span key={t} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] bg-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-600/10 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights: Publications & Thought Leadership */}
        <section id="insights" className="py-16 md:py-32 lg:py-40 px-6 reveal">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8 md:gap-12">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif mb-6 md:mb-8 tracking-tight text-slate-900">Thought Leadership.</h2>
                <p className="text-slate-500 text-xl md:text-2xl font-light">Academic contributions at the intersection of municipal law, technology, and finance.</p>
              </div>
              <a href="https://www.linkedin.com/in/tim-harmar-jd-mba-llm-m-eng-capp-cipp-c-71954546/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 md:px-10 py-5 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full text-slate-900 font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] transition-all flex justify-center items-center gap-4 shadow-sm hover:shadow-xl">
                Full Portfolio <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {PUBLICATIONS.map((pub, i) => (
                <div key={i} className="h-full">
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col p-8 md:p-10 bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-blue-100">
                      <span className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 md:mb-8 block">{pub.date} • {pub.outlet}</span>
                      <h3 className="text-lg md:text-xl font-bold serif mb-4 md:mb-6 leading-tight text-slate-900 group-hover:text-blue-700 transition-colors">{pub.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6 md:mb-8 font-medium flex-grow">{pub.summary}</p>
                      <div className="flex items-center gap-3 text-blue-600 pt-6 md:pt-8 border-t border-slate-50 mt-auto">
                        <span className="text-[10px] font-black uppercase tracking-widest">Read Article</span>
                        <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
                      </div>
                    </a>
                  ) : (
                    <div className="h-full flex flex-col p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] md:rounded-[3rem]">
                      <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 md:mb-8 block">{pub.date} • {pub.outlet}</span>
                      <h3 className="text-lg md:text-xl font-bold serif mb-4 md:mb-6 leading-tight text-slate-900">{pub.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{pub.summary}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-32 bg-slate-950 relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-bold serif mb-6 md:mb-8 text-white">Initiate <br/><span className="text-blue-500 italic">Dialogue</span>.</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 md:mb-12 font-light max-w-md mx-auto lg:mx-0">
                  Discretion and precision are the hallmarks of my practice. Use the secure form to outline your strategic requirements.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 text-slate-300 mb-6 group cursor-pointer hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 flex items-center justify-center text-blue-500 text-xl transition-all">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <span className="text-base md:text-lg font-mono break-all">{CONTACT_EMAIL}</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                {!isSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5 md:space-y-6">
                    <div>
                      <label htmlFor="name" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">Identity</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-base md:text-sm text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-600" 
                        placeholder="Full Name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">Secure Return Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-base md:text-sm text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-600" 
                        placeholder="Email Address" 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">Brief</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-base md:text-sm text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none placeholder-slate-600" 
                        placeholder="Outline strategic objectives..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-600/25 tracking-[0.2em] text-[9px] md:text-[10px] uppercase flex items-center justify-center gap-4 group disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-wait"
                    >
                      {isSubmitting ? 'Encrypting...' : (
                        <>
                          Execute Transmission <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-[fadeIn_0.5s_ease-out]">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-6 md:mb-8 shadow-[0_0_40px_rgba(74,222,128,0.2)] animate-[bounce_1s_ease-in-out_1]">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Inquiry Initiated.</h3>
                    <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-sm font-light">
                      Thank you. Your strategic brief has been prepared for encryption and transmission. Please confirm the send via your secure email client.
                    </p>
                    <button 
                      onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }} 
                      className="group flex items-center gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors"
                    >
                      <i className="fa-solid fa-rotate-left group-hover:-rotate-180 transition-transform duration-500"></i> Reset Interface
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-slate-100 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          <Logo />
          <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 text-left md:text-right leading-loose">
            © {new Date().getFullYear()} {BUSINESS_NAME}<br/>
            Barrister & Solicitor • Ontario, Canada<br/>
            <span className="text-blue-600/50">Veritas • Integritas • Consilium</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;