import React, { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import './style.css';


export default function Carrer() {
      useEffect(() => {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.8;
    }

    function handleScrollAnimation() {
      const elements = document.querySelectorAll(".fade-in-up");
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("active");
        }
      });
    }

    function animateCounters() {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        let current = 0;
        const increment = target / 100;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        updateCounter();
      });
    }

    window.addEventListener("scroll", handleScrollAnimation);
    window.addEventListener("load", animateCounters);

    handleScrollAnimation();
    animateCounters();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
      window.removeEventListener("load", animateCounters);
    };
  }, []);

  return (
    <>
    {/* Hero Section  */}
    <section className="hero-careers">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="hero-content fade-in-up">
                        <h1 className="hero-title">Join Our <span style={{color:"#ffd89b;"}}>Innovation</span> Journey</h1>
                        <p className="hero-subtitle">Shape the future of technology with SoftPro9. We're not just building software - we're crafting tomorrow's digital experiences.</p>
                        <div className="cta-buttons">
                            <a href="#open-positions" className="btn-primary-custom">
                                <i className="fas fa-briefcase me-2"></i>View Open Positions
                            </a>
                            <a href="#company-culture" className="btn-secondary-custom">
                                <i className="fas fa-heart me-2"></i>Our Culture
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero-visual fade-in-up">
                        <div style={{textAlign: "center",fontSize: "15rem",color: "rgba(255,255,255,0.1)"}}>
                            <i className="fas fa-rocket"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Stats Section  */}
    <section className="stats-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="stat-item fade-in-up">
                        <div className="stat-number counter" data-target="150">0</div>
                        <div className="stat-label">Team Members</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stat-item fade-in-up">
                        <div className="stat-number counter" data-target="500">0</div>
                        <div className="stat-label">Projects Delivered</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stat-item fade-in-up">
                        <div className="stat-number counter" data-target="98">0</div>
                        <div className="stat-label">Client Satisfaction %</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stat-item fade-in-up">
                        <div className="stat-number counter" data-target="8">0</div>
                        <div className="stat-label">Years of Excellence</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Company Culture Section  */}
    <section id="company-culture" className="culture-section">
        <div className="container">
            <h2 className="section-titles fade-in-up">Why SoftPro9?</h2>
            <p className="section-subtitles fade-in-up">Discover what makes our workplace extraordinary and why top talents choose to grow with us.</p>
            
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <i className="fas fa-lightbulb"></i>
                        </div>
                        <h3 className="culture-title">Innovation First</h3>
                        <p className="culture-description">We encourage creative thinking and provide the freedom to experiment with cutting-edge technologies. Your innovative ideas are not just heard - they're implemented.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="culture-title">Career Growth</h3>
                        <p className="culture-description">Structured learning paths, mentorship programs, and opportunities to lead projects. We invest in your growth because your success is our success.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <i className="fas fa-balance-scale"></i>
                        </div>
                        <h3 className="culture-title">Work-Life Balance</h3>
                        <p className="culture-description">Flexible working hours, remote work options, and a supportive environment that values your personal time and well-being.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="culture-title">Collaborative Team</h3>
                        <p className="culture-description">Work alongside passionate professionals who share knowledge freely and support each other's growth in a positive, inclusive environment.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <h3 className="culture-title">Recognition & Rewards</h3>
                        <p clasNames="culture-description">We celebrate achievements, recognize hard work, and offer competitive compensation packages with performance-based bonuses.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3 className="culture-title">Latest Technology</h3>
                        <p className="culture-description">Work with the latest tools, frameworks, and technologies. We ensure our team always stays ahead of the technological curve.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Job Openings Section  */}
    <section id="open-positions" className="jobs-section">
        <div className="container">
            <h2 className="section-titles fade-in-up">Open Positions</h2>
            <p className="section-subtitle fade-in-up">Join our talented team and be part of exciting projects that shape the digital future.</p>
            
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">Senior Full Stack Developer</h3>
                        <span className="job-department">Development Team</span>
                        <p className="job-description">Lead the development of scalable web applications using modern technologies. Work on challenging projects that serve thousands of users globally.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>5+ years experience in React/Node.js</li>
                                <li>Strong knowledge of databases (MySQL, MongoDB)</li>
                                <li>Experience with cloud platforms (AWS/Azure)</li>
                                <li>Leadership and mentoring skills</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('Senior Full Stack Developer')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">Digital Marketing Specialist</h3>
                        <span className="job-department">Marketing Team</span>
                        <p className="job-description">Drive digital marketing campaigns, SEO strategies, and social media presence. Help brands achieve exceptional online visibility and growth.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>3+ years in digital marketing</li>
                                <li>Google Ads & Facebook Ads expertise</li>
                                <li>SEO/SEM knowledge</li>
                                <li>Analytics and reporting skills</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('Digital Marketing Specialist')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">UI/UX Designer</h3>
                        <span className="job-department">Design Team</span>
                        <p className="job-description">Create beautiful, intuitive user experiences that delight customers. Work on diverse projects from mobile apps to enterprise software.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>4+ years in UI/UX design</li>
                                <li>Proficiency in Figma, Adobe XD</li>
                                <li>User research and testing experience</li>
                                <li>Portfolio of successful projects</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('UI/UX Designer')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">Training Specialist</h3>
                        <span className="job-department">SoftPro9 Academy</span>
                        <p className="job-description">Shape the next generation of developers through our academy programs. Deliver high-quality training in web development and software engineering.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>5+ years software development experience</li>
                                <li>Teaching or training background</li>
                                <li>Expertise in multiple programming languages</li>
                                <li>Excellent communication skills</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('Training Specialist')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">Business Development Executive</h3>
                        <span className="job-department">Sales Team</span>
                        <p className="job-description">Drive business growth by identifying opportunities, building client relationships, and expanding our market presence across various industries.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>3+ years in B2B sales</li>
                                <li>Technology industry experience</li>
                                <li>Strong negotiation skills</li>
                                <li>Target-driven mindset</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('Business Development Executive')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">DevOps Engineer</h3>
                        <span className="job-department">Infrastructure Team</span>
                        <p className="job-description">Build and maintain robust CI/CD pipelines, manage cloud infrastructure, and ensure seamless deployment processes for all our applications.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>4+ years DevOps experience</li>
                                <li>Docker, Kubernetes expertise</li>
                                <li>AWS/Azure certification preferred</li>
                                <li>Infrastructure as Code (Terraform)</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('DevOps Engineer')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Benefits Section  */}
    <section className="benefits-section">
        <div className="container">
            <h2 className="section-titles fade-in-up" style={{color: "#2c3e50"}}>Employee Benefits</h2>
            <p className="section-subtitles fade-in-up">We believe in taking care of our people with comprehensive benefits and perks.</p>
            
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="benefit-item fade-in-up">
                        <div className="benefit-icon">
                            <i className="fas fa-user-md"></i>
                        </div>
                        <h3 className="benefit-title">Health & Wellness</h3>
                        <p className="benefit-description">Comprehensive health insurance, regular health checkups, gym membership, and wellness programs to keep you healthy and energetic.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="benefit-item fade-in-up">
                        <div className="benefit-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h3 className="benefit-title">Learning & Development</h3>
                        <p className="benefit-description">Annual learning budget, conference attendance, certification support, and access to premium online courses and training platforms.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="benefit-item fade-in-up">
                        <div className="benefit-icon">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h3 className="benefit-title">Flexible Time Off</h3>
                        <p className="benefit-description">Generous vacation policy, paid sick leave, personal days, and sabbatical opportunities for long-term employees.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="benefit-item fade-in-up">
                        <div className="benefit-icon">
                            <i className="fas fa-home"></i>
                        </div>
                        <h3 className="benefit-title">Remote Work Options</h3>
                        <p className="benefit-description">Hybrid work model, fully remote positions available, flexible working hours, and modern collaboration tools for seamless remote work experience.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="benefit-item fade-in-up">
                        <div className="benefit-icon">
                            <i className="fas fa-piggy-bank"></i>
                        </div>
                        <h3 className="benefit-title">Financial Benefits</h3>
                        <p className="benefit-description">Competitive salary, performance bonuses, provident fund, employee stock options, and financial planning assistance.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="benefit-item fade-in-up">
                        <div className="benefit-icon">
                            <i className="fas fa-coffee"></i>
                        </div>
                        <h3 className="benefit-title">Office Perks</h3>
                        <p className="benefit-description">Modern workspace, free meals and snacks, recreational facilities, team outings, and a vibrant office culture that makes work enjoyable.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Application Process Section  */}
    <section className="process-section">
        <div className="container">
            <h2 className="section-titles fade-in-up">Application Process</h2>
            <p className="section-subtitles fade-in-up">Our streamlined hiring process ensures we find the right fit while respecting your time.</p>
            
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">1</div>
                        <h3 className="step-title">Apply Online</h3>
                        <p className="step-description">Submit your application through our career portal with your resume and cover letter.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">2</div>
                        <h3 className="step-title">Initial Screening</h3>
                        <p className="step-description">Our HR team reviews your application and conducts a brief phone/video screening call.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">3</div>
                        <h3 className="step-title">Technical Interview</h3>
                        <p className="step-description">Meet with our technical team for role-specific discussions and skill assessments.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">4</div>
                        <h3 className="step-title">Final Decision</h3>
                        <p className="step-description">Final interview with leadership team followed by offer letter and onboarding.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Contact Section  */}
    <section className="contact-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-info">
                        <h2 className="section-titles fade-in-up" style={{color: "white"}}>Ready to Join Us?</h2>
                        <p className="section-subtitles fade-in-up" style={{color: "rgba(255,255,255,0.8)"}}>Have questions about our opportunities? We'd love to hear from you!</p>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-item fade-in-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <h4>Email Us</h4>
                                    <p>careers@softpro9.com</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-item fade-in-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <h4>Call Us</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-item fade-in-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <h4>Visit Us</h4>
                                    <p>Malviya Nagar, Jaipur</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-5">
                            <a href="mailto:careers@softpro9.com" className="btn-primary-custom">
                                <i className="fas fa-paper-plane me-2"></i>Send Your Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Application Modal  */}
    <div className="modal fade" id="applicationModal" tabindex="-1" aria-labelledby="applicationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="applicationModalLabel">Apply for Position</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id="applicationForm">
                        <div className="mb-3">
                            <label for="applicantName" className="form-label">Full Name *</label>
                            <input type="text" className="form-control" id="applicantName" required/>
                        </div>
                        <div className="mb-3">
                            <label for="applicantEmail" className="form-label">Email Address *</label>
                            <input type="email" className="form-control" id="applicantEmail" required/>
                        </div>
                        <div className="mb-3">
                            <label for="applicantPhone" className="form-label">Phone Number *</label>
                            <input type="tel" className="form-control" id="applicantPhone" required/>
                        </div>
                        <div className="mb-3">
                            <label for="applicantPosition" className="form-label">Position Applied For</label>
                            <input type="text" className="form-control" id="applicantPosition" readonly/>
                        </div>
                        <div className="mb-3">
                            <label for="applicantExperience" className="form-label">Years of Experience</label>
                            <select class="form-control" id="applicantExperience">
                                <option>0-1 years</option>
                                <option>2-3 years</option>
                                <option>4-5 years</option>
                                <option>6-8 years</option>
                                <option>9+ years</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="applicantResume" className="form-label">Resume/CV *</label>
                            <input type="file" class="form-control" id="applicantResume" accept=".pdf,.doc,.docx" required/>
                        </div>
                        <div className="mb-3">
                            <label for="applicantCoverLetter" className="form-label">Why do you want to join SoftPro9?</label>
                            <textarea className="form-control" id="applicantCoverLetter" rows="4" placeholder="Tell us about your motivation and what you can bring to our team..."></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onclick="submitApplication()">Submit Application</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
