import React from 'react'
import './style.css';
export default function Academy() {
  return (
    <>
      {/* Hero Section  */}
    <section id="home" className="hero-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 hero-content" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="hero-title">Transform Your Career with India's Leading Tech Academy</h1>
                    <p className="hero-subtitle">Join 10,000+ successful professionals who transformed their careers through our industry-focused training programs. Get job-ready skills with 100% placement assistance.</p>
                    
                    <div className="d-flex flex-wrap gap-3 mb-4">
                        <button className="btn btn-hero btn-hero-secondary">
                            <i className="fas fa-play me-2"></i>Explore Programs
                        </button>
                        <button className="btn btn-hero">
                            <i className="fas fa-calendar-alt me-2"></i>Book Free Demo
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10,000+</span>
                            <span className="stat-label">Students Trained</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Placement Rate</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Hiring Partners</span>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 hero-image" data-aos="fade-left" data-aos-duration="1000">
                    <div className="position-relative">
                        <div className="floating-card floating-card-1">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-code fs-2 me-3 text-warning"></i>
                                <div>
                                    <div className="fw-bold">Full Stack Development</div>
                                    <small>Master Modern Technologies</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="floating-card floating-card-2">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-chart-line fs-2 me-3 text-success"></i>
                                <div>
                                    <div className="fw-bold">Data Science & AI</div>
                                    <small>Future-Ready Skills</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="floating-card floating-card-3">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-rocket fs-2 me-3 text-info"></i>
                                <div>
                                    <div className="fw-bold">Career Growth</div>
                                    <small>300% Salary Increase</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Why Choose Section  */}
    <section id="about" className="why-choose-section">
        <div className="container">
            <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="section-title">Why Choose SoftPro9 Academy?</h2>
                    <p className="section-subtitle">We don't just teach technology, we build careers. Our comprehensive approach ensures you're industry-ready from day one.</p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-industry"></i>
                        </div>
                        <h4 className="feature-title">Industry Veteran Faculty</h4>
                        <p className="feature-description">Learn from professionals with 15+ years of experience at top tech companies like Google, Microsoft, and Amazon. Real industry insights, not just theory.</p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-project-diagram"></i>
                        </div>
                        <h4 className="feature-title">Real Project Experience</h4>
                        <p className="feature-description">Build production-ready applications and contribute to open-source projects. Graduate with a portfolio that impresses recruiters.</p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <h4 className="feature-title">100% Placement Guarantee</h4>
                        <p className="feature-description">Money-back guarantee if we can't place you in a tech role within 6 months of graduation. Over 500+ hiring partner companies.</p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h4 className="feature-title">Small Batch Size</h4>
                        <p className="feature-description">Maximum 25 students per batch ensures personalized attention, doubt clearing sessions, and one-on-one mentorship throughout your journey.</p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h4 className="feature-title">Flexible Learning</h4>
                        <p className="feature-description">Weekend batches, evening classes, and online options available. Learn at your own pace without compromising your current job or studies.</p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <h4 className="feature-title">Industry Certifications</h4>
                        <p className="feature-description">Get certified by leading tech companies including AWS, Google Cloud, Microsoft Azure, and exclusive SoftPro9 industry-recognized certificates.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Training Programs Section  */}
    <section id="programs" className="programs-section">
        <div className="container">
            <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="section-title">Premium Training Programs</h2>
                    <p className="section-subtitle">Comprehensive curriculum designed by industry experts to make you job-ready in emerging technologies.</p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="program-card">
                        <div className="program-header">
                            <div className="program-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className="program-title">Full Stack Web Development</h3>
                            <p className="program-subtitle">Complete End-to-End Development</p>
                        </div>
                        <div className="program-body">
                            <ul className="program-features">
                                <li>Frontend: HTML5, CSS3, JavaScript, React.js</li>
                                <li>Backend: Node.js, Express.js, MongoDB</li>
                                <li>Database: MySQL, PostgreSQL, NoSQL</li>
                                <li>DevOps: Git, Docker, AWS Deployment</li>
                                <li>5+ Live Projects & Portfolio</li>
                                <li>Mock Interviews & Resume Building</li>
                                <li>Industry Internship Opportunity</li>
                            </ul>
                            <div className="program-price">₹75,000 <small class="text-muted"><s>₹1,20,000</s></small></div>
                            <div className="program-duration">6 Months Program</div>
                            <button className="btn btn-program">Enroll Now - Limited Seats</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="program-card">
                        <div className="program-header">
                            <div className="program-icon">
                                <i className="fas fa-brain"></i>
                            </div>
                            <h3 className="program-title">Data Science & AI</h3>
                            <p className="program-subtitle">Machine Learning & Analytics</p>
                        </div>
                        <div className="program-body">
                            <ul className="program-features">
                                <li>Python, R Programming, SQL</li>
                                <li>Machine Learning & Deep Learning</li>
                                <li>Data Visualization: Tableau, Power BI</li>
                                <li>Big Data: Hadoop, Spark, Kafka</li>
                                <li>AI/ML Model Deployment</li>
                                <li>Real Industry Use Cases</li>
                                <li>Kaggle Competition Participation</li>
                            </ul>
                            <div className="program-price">₹95,000 <small className="text-muted"><s>₹1,50,000</s></small></div>
                            <div className="program-duration">8 Months Program</div>
                            <button className="btn btn-program">Enroll Now - High Demand</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="program-card">
                        <div className="program-header">
                            <div className="program-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3 className="program-title">Mobile App Development</h3>
                            <p className="program-subtitle">iOS & Android Development</p>
                        </div>
                        <div className="program-body">
                            <ul className="program-features">
                                <li>React Native & Flutter</li>
                                <li>Native iOS (Swift) & Android (Kotlin)</li>
                                <li>API Integration & Database</li>
                                <li>App Store & Play Store Publishing</li>
                                <li>UI/UX Design Principles</li>
                                <li>Push Notifications & Analytics</li>
                                <li>Freelancing & Monetization Guide</li>
                            </ul>
                            <div className="program-price">₹65,000 <small className="text-muted"><s>₹1,10,000</s></small></div>
                            <div className="program-duration">5 Months Program</div>
                            <button className="btn btn-program">Enroll Now - Trending</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="program-card">
                        <div className="program-header">
                            <div className="program-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3 className="program-title">Cyber Security</h3>
                            <p className="program-subtitle">Ethical Hacking & Security</p>
                        </div>
                        <div className="program-body">
                            <ul className="program-features">
                                <li>Ethical Hacking & Penetration Testing</li>
                                <li>Network Security & Cryptography</li>
                                <li>Security Tools: Kali Linux, Metasploit</li>
                                <li>Web Application Security Testing</li>
                                <li>Digital Forensics & Incident Response</li>
                                <li>Security Compliance & Risk Assessment</li>
                                <li>Industry Certifications Preparation</li>
                            </ul>
                            <div className="program-price">₹85,000 <small class="text-muted"><s>₹1,40,000</s></small></div>
                            <div className="program-duration">7 Months Program</div>
                            <button className="btn btn-program">Enroll Now - High Salary</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div className="program-card">
                        <div className="program-header">
                            <div className="program-icon">
                                <i className="fas fa-cloud"></i>
                            </div>
                            <h3 className="program-title">Cloud Computing</h3>
                            <p className="program-subtitle">AWS, Azure & Google Cloud</p>
                        </div>
                        <div className="program-body">
                            <ul className="program-features">
                                <li>AWS Solutions Architect Training</li>
                                <li>Microsoft Azure Administration</li>
                                <li>Google Cloud Platform</li>
                                <li>DevOps & Container Technologies</li>
                                <li>Serverless Computing & Microservices</li>
                                <li>Cloud Security & Cost Optimization</li>
                                <li>Multi-Cloud Strategy & Migration</li>
                            </ul>
                            <div className="program-price">₹70,000 <small className="text-muted"><s>₹1,25,000</s></small></div>
                            <div className="program-duration">6 Months Program</div>
                            <button className="btn btn-program">Enroll Now - Future Ready</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="program-card">
                        <div className="program-header">
                            <div className="program-icon">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <h3 className="program-title">Digital Marketing</h3>
                            <p className="program-subtitle">Complete Digital Marketing</p>
                        </div>
                        <div className="program-body">
                            <ul className="program-features">
                                <li>SEO, SEM & Social Media Marketing</li>
                                <li>Google Ads & Facebook Advertising</li>
                                <li>Content Marketing & Email Campaigns</li>
                                <li>Analytics: Google Analytics, GTM</li>
                                <li>Conversion Rate Optimization</li>
                                <li>Influencer & Affiliate Marketing</li>
                                <li>Agency Setup & Client Management</li>
                            </ul>
                            <div className="program-price">₹45,000 <small className="text-muted"><s>₹80,000</s></small></div>
                            <div className="program-duration">4 Months Program</div>
                            <button className="btn btn-program">Enroll Now - Quick ROI</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Success Stories Section  */}
    <section id="success" className="success-section">
        <div className="container">
            <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="section-title text-white">Success Stories That Inspire</h2>
                    <p className="section-subtitle text-white-50">Real transformations from our alumni working at top companies worldwide</p>
                </div>
            </div>
            
            <div className="success-stats">
                <div className="success-stat" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <span className="success-number" data-count="12000">0</span>
                    <span className="success-label">Students Graduated</span>
                </div>
                <div className="success-stat" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <span className="success-number" data-count="96">0</span>
                    <span className="success-label">% Placement Rate</span>
                </div>
                <div className="success-stat" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <span className="success-number" data-count="650">0</span>
                    <span className="success-label">+ Hiring Partners</span>
                </div>
                <div className="success-stat" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <span className="success-number" data-count="15">0</span>
                    <span className="success-label">LPA Highest Package</span>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"SoftPro9 Academy transformed my career completely. I went from a non-tech background to landing a Full Stack Developer role at Microsoft with 12 LPA package. The industry-focused curriculum and placement support is exceptional."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">AM</div>
                            <div className="author-info">
                                <h5>Arjun Mehta</h5>
                                <small>Full Stack Developer at Microsoft</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"The Data Science program gave me hands-on experience with real projects. Today I'm working as a Senior Data Scientist at Amazon with 15 LPA. The mentorship and job assistance team is outstanding."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">PS</div>
                            <div className="author-info">
                                <h5>Priya Sharma</h5>
                                <small>Senior Data Scientist at Amazon</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Started as a fresher, now earning 8 LPA as a React Developer at Flipkart. SoftPro9's project-based learning approach is amazing."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">RK</div>
                            <div className="author-info">
                                <h5>Rohit Kumar</h5>
                                <small>React Developer at Flipkart</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Mobile App Development course helped me launch my startup. Built 3 successful apps with 1M+ downloads. Best investment ever!"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">NK</div>
                            <div className="author-info">
                                <h5>Neha Kapoor</h5>
                                <small>App Entrepreneur & CEO</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Cyber Security program made me a Certified Ethical Hacker. Now working with government agencies earning 10 LPA."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">VS</div>
                            <div className="author-info">
                                <h5>Vikram Singh</h5>
                                <small>Cyber Security Expert</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Learning Methodology Section  */}
    <section className="methodology-section">
        <div className="container">
            <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="section-title">Our Proven Learning Methodology</h2>
                    <p className="section-subtitle">A systematic approach that guarantees your success in the tech industry</p>
                </div>
            </div>
            
            <div className="methodology-steps">
                <div className="step-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="step-number">1</div>
                    <h4 className="step-title">Foundation Building</h4>
                    <p className="step-description">Start with fundamentals and gradually build expertise. Our curriculum is designed for beginners to advanced professionals with clear learning paths.</p>
                </div>
                
                <div className="step-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="step-number">2</div>
                    <h4 className="step-title">Hands-on Practice</h4>
                    <p className="step-description">Learn by doing with real-world projects, live coding sessions, and practical assignments. Build a professional portfolio while learning.</p>
                </div>
                
                <div className="step-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="step-number">3</div>
                    <h4 className="step-title">Industry Mentorship</h4>
                    <p className="step-description">Get guidance from industry veterans, participate in mock interviews, and receive career counseling to accelerate your growth.</p>
                </div>
                
                <div className="step-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="step-number">4</div>
                    <h4 className="step-title">Job Placement</h4>
                    <p className="step-description">Dedicated placement team works with you to land your dream job. Resume building, interview preparation, and direct company connections.</p>
                </div>
            </div>
        </div>
    </section>

      {/* Faculty Section  */}
    <section id="faculty" className="faculty-section">
        <div className="container">
            <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="section-title">Meet Our Expert Faculty</h2>
                    <p className="section-subtitle">Learn from industry veterans with proven track records at leading tech companies</p>
                </div>
            </div>
            
            <div className="faculty-grid">
                <div className="faculty-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="faculty-avatar">RG</div>
                    <h4 className="faculty-name">Rajesh Gupta</h4>
                    <p className="faculty-role">Lead Full Stack Instructor</p>
                    <p className="faculty-experience">Ex-Google Senior Engineer • 15+ Years Experience</p>
                    <div className="faculty-skills">
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">AWS</span>
                        <span className="skill-tag">System Design</span>
                    </div>
                </div>
                
                <div className="faculty-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="faculty-avatar">SM</div>
                    <h4 className="faculty-name">Dr. Sunita Mishra</h4>
                    <p className="faculty-role">Data Science & AI Head</p>
                    <p className="faculty-experience">Ex-Microsoft Principal Data Scientist • PhD in ML</p>
                    <div className="faculty-skills">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">TensorFlow</span>
                        <span className="skill-tag">Deep Learning</span>
                        <span className="skill-tag">Research</span>
                    </div>
                </div>
                
                <div className="faculty-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="faculty-avatar">AK</div>
                    <h4 className="faculty-name">Amit Kumar</h4>
                    <p className="faculty-role">Mobile App Development Expert</p>
                    <p className="faculty-experience">Ex-Facebook Mobile Lead • 12+ Years Experience</p>
                    <div className="faculty-skills">
                        <span className="skill-tag">React Native</span>
                        <span className="skill-tag">Flutter</span>
                        <span className="skill-tag">iOS</span>
                        <span className="skill-tag">Android</span>
                    </div>
                </div>
                
                <div className="faculty-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="faculty-avatar">PV</div>
                    <h4 className="faculty-name">Pradeep Verma</h4>
                    <p className="faculty-role">Cyber Security Specialist</p>
                    <p className="faculty-experience">Ex-IBM Security Architect • CEH Certified</p>
                    <div className="faculty-skills">
                        <span className="skill-tag">Ethical Hacking</span>
                        <span className="skill-tag">Network Security</span>
                        <span className="skill-tag">Forensics</span>
                        <span className="skill-tag">Compliance</span>
                    </div>
                </div>
                
                <div className="faculty-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div className="faculty-avatar">RS</div>
                    <h4 className="faculty-name">Ravi Shankar</h4>
                    <p className="faculty-role">Cloud Computing Architect</p>
                    <p className="faculty-experience">Ex-Amazon AWS Solutions Architect • 14+ Years</p>
                    <div className="faculty-skills">
                        <span className="skill-tag">AWS</span>
                        <span className="skill-tag">Azure</span>
                        <span className="skill-tag">DevOps</span>
                        <span className="skill-tag">Kubernetes</span>
                    </div>
                </div>
                
                <div className="faculty-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="faculty-avatar">NK</div>
                    <h4 className="faculty-name">Neelam Khatri</h4>
                    <p className="faculty-role">Digital Marketing Strategist</p>
                    <p className="faculty-experience">Ex-Flipkart Growth Manager • Google Certified</p>
                    <div className="faculty-skills">
                        <span className="skill-tag">SEO/SEM</span>
                        <span className="skill-tag">Social Media</span>
                        <span className="skill-tag">Analytics</span>
                        <span className="skill-tag">Strategy</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* CTA Section  */}
    <section className="cta-section">
        <div className="container text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h2 className="cta-title">Ready to Transform Your Career?</h2>
                <p className="cta-subtitle">Join thousands of successful professionals who chose SoftPro9 Academy. Limited seats available for next batch starting this month!</p>
                
                <div className="cta-buttons">
                    <button className="btn btn-cta btn-cta-primary">
                        <i className="fas fa-rocket me-2"></i>Start Your Journey Today
                    </button>
                    <button className="btn btn-cta btn-cta-secondary">
                        <i className="fas fa-calendar-alt me-2"></i>Book Free Counseling
                    </button>
                </div>
                
                <div className="mt-4">
                    <small className="text-white-50">
                        <i className="fas fa-shield-alt me-2"></i>100% Job Guarantee
                        <span className="mx-3">|</span>
                        <i className="fas fa-undo me-2"></i>Money Back Guarantee
                        <span className="mx-3">|</span>
                        <i className="fas fa-certificate me-2"></i>Industry Certification
                    </small>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
