import React, { useRef, useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollBoundary } from '@/hooks/useScrollBoundary';
import { Cover } from '@/components/ui/cover';
import { FocusCards } from '@/components/ui/focus-cards';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Carousel, Card as AppleCard } from '@/components/ui/apple-cards-carousel';
import { AnimatedCursor } from '@/components/ui/animated-cursor';
import emailjs from 'emailjs-com';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';

const Index = () => {
  useScrollAnimation();
  useScrollBoundary();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const cards = [
    {
      title: 'Web Development',
      src: '/Web Development.png',
    },
    {
      title: 'Mobile Development',
      src: '/Mobile Development.png',
    },
    {
      title: 'SEO Optimization',
      src: '/SEOOptimization.png',
    },
    {
      title: 'Social Media Marketing',
      src: '/SocialMediaMarketing.png',
    },
    {
      title: 'Software Development',
      src: '/SoftwareDevelopment.png',
    },
    {
      title: 'AI Solutions',
      src: '/AISolutions.png',
    }
  ];

  const reviews = [
    {
      name: "Bhawantha",
      title: "Director",
      avatar: "baw.jpg",
      review: "Absolutely fantastic service and results!",
      rating: 5
    },
    {
      name: "Buddhika",
      title: "Business Owner",
      avatar: "buddhika.jpg",
      review: "The team delivered on time and exceeded expectations.",
      rating: 5
    },
    {
      name: "Ishini",
      title: "Marketing Lead",
      avatar: "ish.jpg",
      review: "Professional, creative, and easy to work with.",
      rating: 4
    },
    {
      name: "Channa",
      title: "Senior Manager",
      avatar: "cha.jpg",
      review: "Our new website is stunning and effective.",
      rating: 5
    },
    {
      name: "Sasindu",
      title: "COO at MIGS",
      avatar: "gym.jpg",
      review: "Highly recommended for any digital project.",
      rating: 4
    },
    {
      name: "Garuka",
      title: "Senior Engineer",
      avatar: "gar.jpg",
      review: "Excellent work and great communication throughout the project.",
      rating: 5
    },
    {
      name: "Nalaka",
      title: "Executive Manager",
      avatar: "nal.jpg",
      review: "Good service, highly recommended this agency",
      rating: 5
    },
  ];

  const teamCards = [
    {
      src: "ravindu.png",
      title: "Ravindu",
      category: "Co-Founder & CEO",
    },
    {
      src: "dinuja.png",
      title: "Dinuja",
      category: "Co-Founder & CTO",
    },
    {
      src: "Samith.png",
      title: "Samith",
      category: "Co-Founder & COO",
    },
        {
      src: "Inuka.png",
      title: "Inuka",
      category: "Co-Founder & CGO",
    },
    {
      src: "Dineth.png",
      title: "Dineth",
      category: "Head of Project Management",
    },
    {
      src: "radila.png",
      title: "Radila",
      category: "Head of Creative Design",
    },
   
    {
      src: "hamdhan.png",
      title: "Hamdhan",
      category: "Software Engineering Director",
    },
    {
      src: "Shalitha.png",
      title: "Shalitha",
      category: "Lead Product Manager",
    },
    {
      src: "Senuka.png",
      title: "Senuka",
      category: "Lead Content Strategist",
    },
    {
      src: "Binura.png",
      title: "Binura",
      category: "Head of Human Resources",
    },
    // {
    //   src: "theekshana.png",
    //   title: "Theekshana",
    //   category: "Head of Human Resources",
    // },
    
  ];

  const brands = [
    // { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    // { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    // { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    // { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    // { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Logo.svg" },
    // { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    // { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" },
    // { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    // { name: "Wiseway", logo: "wisewaylogo.png" },
    { name: "Auquio", logo: "l1.png" },
    { name: "MIGS", logo: "l2.png" },
    { name: "Technova Academy", logo: "l3.png" },
    { name: "Upuli furniture", logo: "i7.png" },
    { name: "meaw lk", logo: "l4.png" },
    { name: "hairloon", logo: "l5.png" },
    { name: "Serandib Traders", logo: "l6.png" },
  ];

  const half = Math.ceil(brands.length / 2);

  // Marquee animation for reviews
  const marqueeAnimation = {
    animation: 'marquee 32s linear infinite',
  };

  // AboutText component to handle intersection observer and animation
  const AboutText = () => {
    const [animate, setAnimate] = React.useState(false);
    const aboutRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      if (typeof window === 'undefined') return;
      const observer = new window.IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setAnimate(true);
            localStorage.setItem('lashura_about_animated', '1');
            observer.disconnect();
          }
        },
        { threshold: 0.7 }
      );
      if (aboutRef.current) {
        observer.observe(aboutRef.current);
      }
      return () => observer.disconnect();
    }, []);
    return (
      <div ref={aboutRef}>
        {animate ? (
          <TextGenerateEffect
            words="Lashura Global is a full service digital agency dedicated to delivering innovative, high quality web solutions. Our team of experts partners with businesses of all sizes to create impactful digital experiences that drive results."
            className="text-base md:text-lg text-white max-w-2xl mx-auto mb-6"
            filter={animate}
          />
        ) : (
          <div className="text-base md:text-lg max-w-2xl mx-auto mb-6" style={{visibility: 'hidden'}}>
            Lashura Global is a full service digital agency dedicated to delivering innovative, high-quality web solutions. Our team of experts partners with businesses of all sizes to create impactful digital experiences that drive results.
          </div>
        )}
      </div>
    );
  };

  // EmailJS integration
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setEmailStatus(null);
    if (!formRef.current) return;
    emailjs.sendForm(
      'service_tcz8ook',
      'template_u15g7w7',
      formRef.current,
      '85eD7yYAPaWKhK7KK'
    )
      .then(
        (result) => {
          setEmailStatus('success');
          setSending(false);
          formRef.current?.reset();
        },
        (error) => {
          setEmailStatus('error');
          setSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen relative">
      {!(isMobile || isTablet) && <AnimatedCursor />}
      <main className="relative z-10">
        <div className="min-h-screen w-full flex items-center justify-center px-4 pt-8 pb-4">
          <div className="text-4xl md:text-7xl font-bold text-white text-center">
            We turn ideas into impact<br />
            <Cover containerClassName="!p-0 !bg-transparent !hover:bg-transparent">
              <span className="text-white transition-all duration-200 group-hover/cover:[text-shadow:0_0_8px_#93c5fd]">
                with speed
              </span>
            </Cover>
          </div>
        </div>
        {/* Spacer to push services section further down */}
        <div className="h-12 md:h-24"></div>
        <section id="services" className="py-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Our services</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">We offer a full spectrum of digital solutions to help your business thrive in the modern world. Explore our core services below.</p>
          <div className="px-2 md:px-0">
            <FocusCards cards={cards} />
          </div>
        </section>
        <div className="h-20 md:h-32"></div>
        <section id="about" className="py-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Lashura Global</h2>
          <AboutText />
        </section>
        <div className="h-20 md:h-32"></div>
        <section id="reviews" className="py-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client Reviews</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            See what our clients say about working with Lashura Global.
          </p>
          <div className="relative w-full overflow-x-hidden">
            <div
              className="flex gap-4 sm:gap-6 py-4 px-2 md:px-0 w-max"
              style={marqueeAnimation}
            >
              {[...reviews, ...reviews].map((review, idx) => (
                <div
                  key={idx}
                  className="inline-block bg-gradient-to-br from-white/10 to-blue-900/10 border border-white/10 rounded-xl p-2 sm:p-4 md:p-6 min-w-[200px] sm:min-w-[280px] md:min-w-[320px] max-w-[200px] sm:max-w-xs text-left text-white shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <img src={review.avatar} alt={review.name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-400 object-cover" />
                    <div>
                      <div className="font-semibold text-xs sm:text-sm md:text-base">{review.name}</div>
                      <div className="text-xs text-blue-200">{review.title}</div>
                    </div>
                  </div>
                  <div className="font-medium text-xs sm:text-base md:text-lg leading-tight sm:leading-snug line-clamp-2 sm:line-clamp-none mb-1 sm:mb-2">"{review.review}"</div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                        fill={i < review.rating ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Brands That Work With Us Section */}
          <section id="brands" className="py-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Trusted Partners</h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Leading companies trust us to deliver exceptional digital solutions.
            </p>
            {/* Mobile View (2 rows) */}
            <div className="sm:hidden">
              <div className="relative w-full overflow-hidden">
                {/* First Row */}
                <div className="w-full overflow-hidden mb-6">
                  <div 
                    className="flex gap-6 py-2 w-max"
                    style={{ 
                      animation: 'marquee 20s linear infinite',
                      willChange: 'transform'
                    }}
                  >
                    {[...brands.slice(0, half), ...brands.slice(0, half), ...brands.slice(0, half)].map((brand, idx) => (
                      <div 
                        key={`row1-${idx}`} 
                        className="inline-flex flex-col items-center min-w-[100px]"
                      >
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="h-8 object-contain mb-2 grayscale hover:grayscale-0 transition" 
                        />
                        <span className="text-xs text-gray-200 font-semibold tracking-wide">{brand.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Second Row */}
                <div className="w-full overflow-hidden">
                  <div 
                    className="flex gap-6 py-2 w-max"
                    style={{ 
                      animation: 'marquee 20s linear infinite reverse',
                      willChange: 'transform'
                    }}
                  >
                    {[...brands.slice(half), ...brands.slice(half), ...brands.slice(half)].map((brand, idx) => (
                      <div 
                        key={`row2-${idx}`} 
                        className="inline-flex flex-col items-center min-w-[100px]"
                      >
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="h-8 object-contain mb-2 grayscale hover:grayscale-0 transition" 
                        />
                        <span className="text-xs text-gray-200 font-semibold tracking-wide">{brand.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop View */}
            <div className="hidden sm:block relative w-full overflow-hidden">
              <div 
                className="flex gap-8 py-4 w-max"
                style={{ 
                  animation: 'marquee-right 150s linear infinite',
                  willChange: 'transform'
                }}
              >
                {Array.from({ length: 20 }, () => brands).flat().map((brand, idx) => (
                  <div 
                    key={idx} 
                    className="inline-flex flex-col items-center min-w-[160px]"
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-12 object-contain mb-3 grayscale hover:grayscale-0 transition" 
                    />
                    <span className="text-sm text-gray-200 font-semibold tracking-wide">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
        <div className="h-20 md:h-32"></div>
        <section id="team" className="py-12 md:py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Our Leaders Who Turn Ideas Into Impact</h2>
          <div className="px-4 md:px-8">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {teamCards.map((card, idx) => (
                <div key={card.title} className={`flex flex-col items-center ${idx >= 9 ? 'hidden lg:flex' : ''}`}>
                  {/* Circular Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-blue-400/30 mb-4 !rounded-full !overflow-hidden">
                    <img 
                      src={card.src} 
                      alt={card.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="font-sans text-xs font-medium text-blue-200 md:text-sm mb-1">
                      {card.category}
                    </div>
                    <div className="font-sans text-lg font-semibold text-white md:text-xl">
                      {card.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="h-20 md:h-32"></div>
        <section id="get-started" className="py-8 md:py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Let's talk</h2>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                  We diligently screen prospective clients for fit with our work principles, so that we can stay true to our mission of building high quality, bespoke software products.
                </p>
                <div className="mt-4 md:mt-8">
                  <p className="text-sm sm:text-base text-gray-200">
                    An introduction from an existing client of ours will get you priority access to our client engagement team.
                  </p>
                  <p className="text-sm sm:text-base text-gray-200 mt-4">
                    Leave your details below and we will be in touch.
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Hey, Lashura team!</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  {/* Name and Company */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-gray-200 text-sm sm:text-base">My name is</label>
                      <input 
                        type="text" 
                        name="user_name"
                        placeholder="Your name" 
                        className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/40 outline-none px-2 py-1 text-white placeholder-gray-400 text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-gray-200 text-sm sm:text-base">from</label>
                      <input 
                        type="text" 
                        name="user_company"
                        placeholder="Your website or company" 
                        className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/40 outline-none px-2 py-1 text-white placeholder-gray-400 text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label className="block text-gray-200 text-sm sm:text-base">I have an inquiry related to</label>
                    <select 
                      name="user_inquiry"
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/40 outline-none px-2 py-1 text-white text-sm sm:text-base"
                      required
                    >
                      <option value="" className="bg-gray-900">Select type...</option>
                      <option value="web" className="bg-gray-900">Web Development</option>
                      <option value="mobile" className="bg-gray-900">Mobile Development</option>
                      <option value="seo" className="bg-gray-900">SEO Optimization</option>
                      <option value="marketing" className="bg-gray-900">Digital Marketing</option>
                      <option value="software" className="bg-gray-900">Software Development</option>
                      <option value="ai" className="bg-gray-900">AI Solutions</option>
                    </select>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-gray-200 text-sm sm:text-base">and you can reach me at</label>
                    <input 
                      type="text" 
                      name="user_email"
                      placeholder="Your email or Contact Number" 
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/40 outline-none px-2 py-1 text-white placeholder-gray-400 text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Referral */}
                  <div className="space-y-2">
                    <label className="block text-gray-200 text-sm sm:text-base">By the way, I heard about Lashura from</label>
                    <input 
                      type="text" 
                      name="user_referral"
                      placeholder="Name of your referrer, if any" 
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/40 outline-none px-2 py-1 text-white placeholder-gray-400 text-sm sm:text-base"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-xs sm:text-sm text-gray-200">
                      I agree with Lashura terms and conditions*
                    </label>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-xs sm:text-sm text-gray-300">
                    By submitting this form you consent to Lashura saving and processing the personal data given. 
                    For more information on how we protect and secure your data, please see our{' '}
                    <a href="#" className="text-white underline hover:text-gray-200">Privacy Policy</a>.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Submit'}
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {emailStatus === 'success' && (
                    <div className="text-green-400 text-sm mt-2">Thank you! Your message has been sent.</div>
                  )}
                  {emailStatus === 'error' && (
                    <div className="text-red-400 text-sm mt-2">Oops! Something went wrong. Please try again.</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
