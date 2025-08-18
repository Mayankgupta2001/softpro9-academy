import React from 'react'

export default function Service() {
  return (
    <>
       {/* Hero Section  */}
    <section className="hero-section d-flex align-items-center">
        <div className="container position-relative">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <h1 className="text-white display-4 fw-bold mb-4">
                        Complete Digital Solutions
                        <span class="d-block text-warning">Under One Roof</span>
                    </h1>
                    <p className="text-white-50 lead mb-4">
                        Transform your business with our comprehensive suite of services including Web Development, Digital Marketing, and Custom Software Solutions. We deliver excellence that drives results.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        <a href="#services" className="btn btn-custom btn-lg">
                            <i className="fas fa-rocket me-2"></i>Explore Services
                        </a>
                        <a href="#contact" className="btn btn-outline-light btn-lg">
                            <i className="fas fa-phone me-2"></i>Get Quote
                        </a>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <div className="float">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             alt="Digital Services" class="img-fluid rounded-3 shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Services Overview  */}
    <section id="services" class="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark">Our Core Services</h2>
                <p className="lead text-muted">Comprehensive digital solutions tailored for your business growth</p>
                <div className="w-25 mx-auto" style={{height: "4px",background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%);"}}></div>
            </div>
            
            <div Name="row g-4">
                  {/* Web Development  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="card service-card h-100">
                        <div className="card-body p-4">
                            <div className="service-icon gradient-bg-1 text-white">
                                <i className="fas fa-code"></i>
                            </div>
                            <h4 className="fw-bold mb-3 text-center">Web Development</h4>
                            <p className="text-muted mb-4 text-center">
                                Create stunning, responsive websites and web applications that deliver exceptional user experiences and drive business growth.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Responsive Design</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>E-commerce Solutions</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>CMS Development</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Performance Optimization</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>SEO Friendly</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>24/7 Support</li>
                            </ul>
                            <div className="text-center mt-4">
                                <a href="#web-dev-details" class="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                  {/* Digital Marketing  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="card service-card h-100">
                        <div className="card-body p-4">
                            <div className="service-icon gradient-bg-2 text-white">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h4 className="fw-bold mb-3 text-center">Digital Marketing</h4>
                            <p className="text-muted mb-4 text-center">
                                Boost your online presence and reach your target audience with our data-driven digital marketing strategies.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>SEO & SEM</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Social Media Marketing</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Content Marketing</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Email Campaigns</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Analytics & Reporting</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Brand Strategy</li>
                            </ul>
                            <div className="text-center mt-4">
                                <a href="#digital-marketing-details" class="btn btn-outline-danger">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                  {/* Software Solutions  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="card service-card h-100">
                        <div className="card-body p-4">
                            <div className="service-icon gradient-bg-3 text-white">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h4 className="fw-bold mb-3 text-center">Software Solutions</h4>
                            <p className="text-muted mb-4 text-center">
                                Custom software development to streamline your business operations and enhance productivity.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Custom Applications</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Enterprise Solutions</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>API Integration</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Database Design</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Cloud Solutions</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Maintenance & Support</li>
                            </ul>
                            <div className="text-center mt-4">
                                <a href="#software-details" class="btn btn-outline-info">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Stats Counter  */}
    <section className="stats-counter py-5 text-white position-relative">
        <div className="container">
            <div className="row g-4 text-center">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="position-relative">
                        <h2 className="display-4 fw-bold counter" data-target="500">0</h2>
                        <h5>Projects Completed</h5>
                        <i className="fas fa-project-diagram fa-2x opacity-50"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="position-relative">
                        <h2 className="display-4 fw-bold counter" data-target="300">0</h2>
                        <h5>Happy Clients</h5>
                        <i className="fas fa-users fa-2x opacity-50"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="position-relative">
                        <h2 className="display-4 fw-bold counter" data-target="5">0</h2>
                        <h5>Years Experience</h5>
                        <i className="fas fa-award fa-2x opacity-50"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="position-relative">
                        <h2 className="display-4 fw-bold counter" data-target="24">0</h2>
                        <h5>24/7 Support</h5>
                        <i className="fas fa-headset fa-2x opacity-50"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Detailed Services  */}
      {/* Web Development Details */}
    <section id="web-dev-details" className="py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <h2 className="display-6 fw-bold mb-4">Web Development Excellence</h2>
                    <p className="lead text-muted mb-4">
                        We create powerful, scalable web solutions that drive your business forward. Our expert team combines creativity with technical expertise to deliver exceptional results.
                    </p>
                    
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-mobile-alt text-primary me-2"></i>Responsive Design</h5>
                                <p className="text-muted mb-0">Mobile-first approach ensuring perfect display across all devices.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-tachometer-alt text-success me-2"></i>Fast Loading</h5>
                                <p className="text-muted mb-0">Optimized performance for lightning-fast page speeds.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-shield-alt text-warning me-2"></i>Secure</h5>
                                <p className="text-muted mb-0">Enterprise-level security implemented from the ground up.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-search text-info me-2"></i>SEO Ready</h5>
                                <p className="text-muted mb-0">Built with search engine optimization best practices.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tech-stack">
                        <div className="tech-item">HTML5</div>
                        <div className="tech-item">CSS3</div>
                        <div className="tech-item">JavaScript</div>
                        <div className="tech-item">React</div>
                        <div className="tech-item">Node.js</div>
                        <div className="tech-item">PHP</div>
                        <div className="tech-item">WordPress</div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                         alt="Web Development" class="img-fluid rounded-3 shadow-lg"/>
                </div>
            </div>
        </div>
    </section>

      {/* Digital Marketing Details  */}
    <section id="digital-marketing-details" className="py-5 bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2" data-aos="fade-left">
                    <h2 className="display-6 fw-bold mb-4">Digital Marketing That Delivers</h2>
                    <p className="lead text-muted mb-4">
                        Amplify your brand's reach and drive meaningful engagement with our comprehensive digital marketing strategies. We focus on results that matter to your bottom line.
                    </p>
                    
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i class="fas fa-bullseye text-danger me-2"></i>Targeted Campaigns</h5>
                                <p className="text-muted mb-0">Reach your ideal customers with precision targeting.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i class="fas fa-chart-bar text-success me-2"></i>Data Analytics</h5>
                                <p className="text-muted mb-0">Real-time insights and detailed performance reports.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i class="fas fa-users text-primary me-2"></i>Social Media</h5>
                                <p className="text-muted mb-0">Engage audiences across all major social platforms.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div Name="feature-highlight">
                                <h5 className="fw-bold mb-2"><i class="fas fa-envelope text-warning me-2"></i>Email Marketing</h5>
                                <p className="text-muted mb-0">Personalized campaigns that drive conversions.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tech-stack">
                        <div className="tech-item">Google Ads</div>
                        <div className="tech-item">Facebook Ads</div>
                        <div className="tech-item">Instagram</div>
                        <div className="tech-item">LinkedIn</div>
                        <div className="tech-item">Analytics</div>
                        <div className="tech-item">SEMrush</div>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                    <img src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                         alt="Digital Marketing" class="img-fluid rounded-3 shadow-lg"/>
                </div>
            </div>
        </div>
    </section>

      {/* Software Solutions Details  */}
    <section id="software-details" className="py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <h2 className="display-6 fw-bold mb-4">Custom Software Solutions</h2>
                    <p className="lead text-muted mb-4">
                        Streamline your business operations with tailor-made software solutions. We develop scalable applications that grow with your business needs.
                    </p>
                    
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-rocket text-info me-2"></i>Scalable Architecture</h5>
                                <p className="text-muted mb-0">Built to handle growth and increased demands.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-cloud text-primary me-2"></i>Cloud Integration</h5>
                                <p className="text-muted mb-0">Seamless integration with cloud services and APIs.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-cog text-secondary me-2"></i>Custom Features</h5>
                                <p className="text-muted mb-0">Tailored functionality specific to your business.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-highlight">
                                <h5 className="fw-bold mb-2"><i className="fas fa-life-ring text-success me-2"></i>Ongoing Support</h5>
                                <p className="text-muted mb-0">Continuous maintenance and feature updates.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tech-stack">
                        <div className="tech-item">Python</div>
                        <div className="tech-item">Java</div>
                        <div className="tech-item">.NET</div>
                        <div className="tech-item">MongoDB</div>
                        <div className="tech-item">MySQL</div>
                        <div className="tech-item">AWS</div>
                        <div className="tech-item">Azure</div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                         alt="Software Solutions" class="img-fluid rounded-3 shadow-lg"/>
                </div>
            </div>
        </div>
    </section>

       {/* Our Process  */}
    <section className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark">Our Work Process</h2>
                <p className="lead text-muted">How we deliver exceptional results for every project</p>
                <div className="w-25 mx-auto" style={{height: "4px",background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%);"}}></div>
            </div>
            
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="process-timeline">
                           {/* Step 1  */}
                        <div className="process-step" data-aos="fade-right" data-aos-delay="100">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="step-number">1</div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-2"><i class="fas fa-comments text-primary me-2"></i>Discovery & Consultation</h5>
                                            <p className="text-muted mb-0">We begin by understanding your business goals, target audience, and project requirements through detailed consultation and research.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                           {/* Step 2  */}
                        <div className="process-step" data-aos="fade-left" data-aos-delay="200">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="step-number">2</div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-2"><i className="fas fa-drafting-compass text-success me-2"></i>Strategy & Planning</h5>
                                            <p className="text-muted mb-0">Our team develops a comprehensive strategy and detailed project roadmap tailored to achieve your specific objectives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                           {/* Step 3  */}
                        <div className="process-step" data-aos="fade-right" data-aos-delay="300">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="step-number">3</div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-2"><i class="fas fa-palette text-warning me-2"></i>Design & Development</h5>
                                            <p className="text-muted mb-0">We create stunning designs and develop robust solutions using the latest technologies and best practices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                          {/* Step 4  */}
                        <div className="process-step" data-aos="fade-left" data-aos-delay="400">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="step-number">4</div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-2"><i class="fas fa-vial text-info me-2"></i>Testing & Quality Assurance</h5>
                                            <p className="text-muted mb-0">Rigorous testing across multiple devices and platforms ensures flawless functionality and optimal performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                          {/* Step 5  */}
                        <div className="process-step" data-aos="fade-right" data-aos-delay="500">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="step-number">5</div>
                                </div>
                                <div className="col">
                                    <div class="card border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-2"><i class="fas fa-rocket text-danger me-2"></i>Launch & Deployment</h5>
                                            <p className="text-muted mb-0">Seamless deployment and go-live support ensure your project launches successfully with minimal downtime.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                          {/* Step 6  */}
                        <div className="process-step" data-aos="fade-left" data-aos-delay="600">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <div className="step-number">6</div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-2"><i class="fas fa-headset text-purple me-2"></i>Ongoing Support</h5>
                                            <p className="text-muted mb-0">Continuous monitoring, maintenance, and support ensure your solution performs optimally and evolves with your business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Pricing Packages  */}
    <section className="py-5">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark">Service Packages</h2>
                <p className="lead text-muted">Choose the perfect package for your business needs</p>
                <div className="w-25 mx-auto" style={{height: "4px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%);"}}></div>
            </div>
            
            <div className="row g-4">
                 {/* Starter Package  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="card pricing-card h-100 shadow">
                        <div className="card-header gradient-bg-1 text-white text-center py-4">
                            <h4 className="fw-bold mb-0">Starter</h4>
                            <p className="mb-0 opacity-75">Perfect for small businesses</p>
                        </div>
                        <div className="card-body p-4 text-center">
                            <div className="mb-4">
                                <span className="display-4 fw-bold">₹25,000</span>
                                <span className="text-muted">/ project</span>
                            </div>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>5-Page Website</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Responsive Design</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Basic SEO Setup</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Contact Forms</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Social Media Integration</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>3 Months Support</li>
                                <li className="mb-2"><i class="fas fa-times text-danger me-2"></i>E-commerce Features</li>
                                <li className="mb-2"><i class="fas fa-times text-danger me-2"></i>Advanced Analytics</li>
                            </ul>
                        </div>
                        <div className="card-footer border-0 p-4">
                            <a href="#contact" class="btn btn-outline-primary w-100">Get Started</a>
                        </div>
                    </div>
                </div>
                
                  {/* Professional Package  */}
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="card pricing-card featured h-100 shadow-lg">
                        <div className="card-header gradient-bg-2 text-white text-center py-4 position-relative">
                            <div className="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle px-3 py-2">
                                Most Popular
                            </div>
                            <h4 className="fw-bold mb-0 mt-3">Professional</h4>
                            <p className="mb-0 opacity-75">Ideal for growing businesses</p>
                        </div>
                        <div className="card-body p-4 text-center">
                            <div className="mb-4">
                                <span className="display-4 fw-bold">₹50,000</span>
                                <span className="text-muted">/ project</span>
                            </div>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>10-Page Website</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Premium Design</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Advanced SEO</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>E-commerce Ready</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Analytics Integration</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>6 Months Support</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Digital Marketing Setup</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Performance Optimization</li>
                            </ul>
                        </div>
                        <div className="card-footer border-0 p-4">
                            <a href="#contact" className="btn btn-custom w-100">Choose Professional</a>
                        </div>
                    </div>
                </div>
                
                 {/* Enterprise Package  */}
                <div className="col-lg-4 col-md-6 mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div className="card pricing-card h-100 shadow">
                        <div className="card-header gradient-bg-3 text-white text-center py-4">
                            <h4 className="fw-bold mb-0">Enterprise</h4>
                            <p className="mb-0 opacity-75">Complete business solution</p>
                        </div>
                        <div className="card-body p-4 text-center">
                            <div className="mb-4">
                                <span className="display-4 fw-bold">₹1,00,000</span>
                                <span className="text-muted">/ project</span>
                            </div>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Unlimited Pages</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Custom Development</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Enterprise SEO</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Full E-commerce Solution</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Advanced Analytics</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>12 Months Support</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Complete Marketing Campaign</li>
                                <li className="mb-2"><i class="fas fa-check text-success me-2"></i>Custom Software Integration</li>
                            </ul>
                        </div>
                        <div className="card-footer border-0 p-4">
                            <a href="#contact" className="btn btn-outline-info w-100">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Why Choose Us  */}
    <section className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark">Why Choose SoftPro9?</h2>
                <p className="lead text-muted">What makes us the perfect partner for your digital journey</p>
                <div className="w-25 mx-auto" style={{height: "4px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%);"}}></div>
            </div>
            
            <div className="row g-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="text-center h-100">
                        <div className="mb-4">
                            <div className="service-icon gradient-bg-1 text-white mx-auto">
                                <i className="fas fa-trophy"></i>
                            </div>
                        </div>
                        <h4 className="fw-bold mb-3">5+ Years Experience</h4>
                        <p className="text-muted">
                            With over 5 years in the industry, we've honed our skills and perfected our processes to deliver exceptional results consistently.
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="text-center h-100">
                        <div className="mb-4">
                            <div className="service-icon gradient-bg-2 text-white mx-auto">
                                <i className="fas fa-users-cog"></i>
                            </div>
                        </div>
                        <h4 className="fw-bold mb-3">Expert Team</h4>
                        <p className="text-muted">
                            Our team consists of certified professionals with expertise in the latest technologies and digital marketing strategies.
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="text-center h-100">
                        <div className="mb-4">
                            <div className="service-icon gradient-bg-3 text-white mx-auto">
                                <i className="fas fa-clock"></i>
                            </div>
                        </div>
                        <h4 className="fw-bold mb-3">On-Time Delivery</h4>
                        <p className="text-muted">
                            We understand the importance of deadlines and consistently deliver projects on time without compromising on quality.
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="text-center h-100">
                        <div className="mb-4">
                            <div className="service-icon gradient-bg-1 text-white mx-auto">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                        <h4 className="fw-bold mb-3">Competitive Pricing</h4>
                        <p className="text-muted">
                            Get premium quality services at competitive prices. We offer transparent pricing with no hidden costs.
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="text-center h-100">
                        <div className="mb-4">
                            <div className="service-icon gradient-bg-2 text-white mx-auto">
                                <i className="fas fa-headset"></i>
                            </div>
                        </div>
                        <h4 className="fw-bold mb-3">24/7 Support</h4>
                        <p className="text-muted">
                            Round-the-clock support ensures your business never stops. We're always here when you need us most.
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                    <div className="text-center h-100">
                        <div className="mb-4">
                            <div className="service-icon gradient-bg-3 text-white mx-auto">
                                <i className="fas fa-chart-line"></i>
                            </div>
                        </div>
                        <h4 className="fw-bold mb-3">Proven Results</h4>
                        <p className="text-muted">
                            Our track record speaks for itself with 500+ successful projects and 300+ satisfied clients worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Client Testimonials  */}
    <section className="py-5">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark">What Our Clients Say</h2>
                <p className="lead text-muted">Don't just take our word for it - hear from our satisfied clients</p>
                <div className="w-25 mx-auto" style={{height:"4px", background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%);"}}></div>
            </div>
            
            <div className="row g-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body p-4">
                            <div className="mb-3">
                                <div className="text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-muted mb-4">
                                "SoftPro9 transformed our online presence completely. The website they built is not only beautiful but also highly functional. Our sales have increased by 150% since launch!"
                            </p>
                            <div className="d-flex align-items-center">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                                     alt="Client" class="rounded-circle me-3" width="50" height="50"/>
                                <div>
                                    <h6 className="fw-bold mb-0">Rajesh Kumar</h6>
                                    <small className="text-muted">CEO, TechSolutions</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body p-4">
                            <div className="mb-3">
                                <div className="text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-muted mb-4">
                                "Their digital marketing expertise is unmatched. We saw a 200% increase in our social media engagement and our brand visibility has improved tremendously."
                            </p>
                            <div className="d-flex align-items-center">
                                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                                     alt="Client" class="rounded-circle me-3" width="50" height="50"/>
                                <div>
                                    <h6 className="fw-bold mb-0">Priya Sharma</h6>
                                    <small className="text-muted">Marketing Director, Fashion Hub</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body p-4">
                            <div className="mb-3">
                                <div className="text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-muted mb-4">
                                "The custom software solution they developed for us has streamlined our entire operation. What used to take hours now takes minutes. Highly recommended!"
                            </p>
                            <div className="d-flex align-items-center">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                                     alt="Client" class="rounded-circle me-3" width="50" height="50"/>
                                <div>
                                    <h6 className="fw-bold mb-0">Amit Patel</h6>
                                    <small className="text-muted">Operations Manager, LogiCorp</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Call to Action  */}
    <section className="cta-section py-5 text-white position-relative">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8" data-aos="fade-right">
                    <h2 className="display-5 fw-bold mb-3">Ready to Transform Your Business?</h2>
                    <p className="lead mb-4">
                        Let's discuss your project and create something amazing together. Get a free consultation and project quote today!
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        <a href="#contact" className="btn btn-light btn-lg px-4">
                            <i class="fas fa-phone me-2"></i>Get Free Consultation
                        </a>
                        <a href="mailto:info@softpro9.com" className="btn btn-outline-light btn-lg px-4">
                            <i className="fas fa-envelope me-2"></i>Send Message
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 text-center" data-aos="fade-left">
                    <div className="float">
                        <i className="fas fa-rocket fa-10x opacity-25"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* FAQ Section  */}
    <section className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark">Frequently Asked Questions</h2>
                <p className="lead text-muted">Get answers to common questions about our services</p>
                <div className="w-25 mx-auto" style={{height: "4px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%);"}}></div>
            </div>
            
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="accordion" id="faqAccordion">
                         {/* FAQ 1  */}
                        <div className="accordion-item border-0 shadow-sm mb-3" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    How long does it take to complete a project?
                                </button>
                            </h2>
                            <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div className="accordion-body text-muted">
                                    Project timelines vary depending on scope and complexity. Typically, a standard website takes 2-4 weeks, while custom software solutions may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.
                                </div>
                            </div>
                        </div>
                        
                         {/* FAQ 2  */}
                        <div className="accordion-item border-0 shadow-sm mb-3" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    Do you provide ongoing support after project completion?
                                </button>
                            </h2>
                            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body text-muted">
                                    Yes! We offer comprehensive support packages ranging from 3 months to 1 year depending on your chosen package. This includes bug fixes, updates, security monitoring, and technical assistance.
                                </div>
                            </div>
                        </div>
                        
                               {/* FAQ Item 3  */}
      <div className="border border-gray-200 rounded-lg p-6 shadow-sm" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">What technologies do you specialize in?</h3>
        <p className="text-gray-600">We specialize in Bootstrap, Tailwind CSS, JavaScript, React, Node.js, and other modern web technologies.</p>
      </div>

        {/* FAQ Item 4  */}
      <div className="border border-gray-200 rounded-lg p-6 shadow-sm" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Can you help with redesigning an existing website?</h3>
        <p className="text-gray-600">Absolutely! We can revamp your existing site to make it modern, faster, and more user-friendly.</p>
      </div>

       {/* FAQ Item 5  */}
      <div className="border border-gray-200 rounded-lg p-6 shadow-sm" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I get started with a project?</h3>
        <p className="text-gray-600">Simply fill out our contact form with your requirements, and we’ll get back to you with a custom proposal.</p>
      </div>
          </div>
        </div>
        </div>
        </div>
    </section>


       {/* Contact Section  */}
    <section className="py-20 bg-gray-100" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800">Let's Work Together</h2>
          <p className="text-gray-600 mt-2">Have a project in mind? We’d love to hear from you!</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
          <form action="#" method="POST" class="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input type="tel" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Service</label>
                <select name="service" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">-- Choose Service --</option>
                  <option>Website Design</option>
                  <option>Web App Development</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Budget</label>
                <select name="budget" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">-- Select Budget --</option>
                  <option>₹25K - Starter</option>
                  <option>₹50K - Professional</option>
                  <option>₹1L+ - Enterprise</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Contact Time</label>
                <input type="text" name="contact_time" placeholder="e.g., 10am to 6pm" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
              <textarea name="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us more about your project..."></textarea>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>


      {/* Back to Top Button  */}
    <button id="backToTop" className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 hidden z-50" aria-label="Back to top">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>

    </>
  )
}
