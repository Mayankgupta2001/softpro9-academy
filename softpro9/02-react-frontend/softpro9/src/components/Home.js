import React from 'react'
import './style.css';

export default function Home() {
  return (
    <>
       {/* Hero Section  */}
    <section className="gradient-bg pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="slide-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Transform Your Career with
                        <span className="block text-blue-200">Professional Training</span>
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-xl">
                        Master in-demand skills with our expert-led courses in Web Development, Digital Marketing, and SAP Training. Join 10,000+ successful graduates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg pulse-blue">
                            Explore Courses
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                            Book Free Demo
                        </button>
                    </div>
                </div>
                <div className="floating-animation">
                    <div className="glass-effect rounded-3xl p-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">10K+</div>
                                <div className="text-blue-200">Students Trained</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">95%</div>
                                <div className="text-blue-200">Placement Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-blue-200">Industry Partners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">8+</div>
                                <div className="text-blue-200">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Trusted Companies Section  */}
    <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-600">Trusted by the World's Leading Startups and Enterprises since 2011</h3>
            </div>
            <div className="overflow-hidden">
                <div className="flex company-slider">
                    <div className="flex items-center space-x-12 mr-12">
                        <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                        <div className="text-2xl font-bold text-gray-400">Google</div>
                        <div className="text-2xl font-bold text-gray-400">Amazon</div>
                        <div className="text-2xl font-bold text-gray-400">IBM</div>
                        <div className="text-2xl font-bold text-gray-400">Accenture</div>
                        <div className="text-2xl font-bold text-gray-400">TCS</div>
                        <div className="text-2xl font-bold text-gray-400">Infosys</div>
                        <div className="text-2xl font-bold text-gray-400">Wipro</div>
                    </div>
                    <div className="flex items-center space-x-12">
                        <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                        <div className="text-2xl font-bold text-gray-400">Google</div>
                        <div className="text-2xl font-bold text-gray-400">Amazon</div>
                        <div className="text-2xl font-bold text-gray-400">IBM</div>
                        <div className="text-2xl font-bold text-gray-400">Accenture</div>
                        <div className="text-2xl font-bold text-gray-400">TCS</div>
                        <div className="text-2xl font-bold text-gray-400">Infosys</div>
                        <div className="text-2xl font-bold text-gray-400">Wipro</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Professional Training Categories  */}
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Training Programs</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive range of industry-focused courses designed to accelerate your career growth</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                   {/* Web Development  */}
                <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <i data-lucide="code" className="h-10 w-10 text-blue-600"></i>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Full Stack Web Development</h3>
                            <p className="text-gray-600 mb-4">Master modern web technologies including React, Node.js, MongoDB, and deployment strategies. Build real-world applications with industry best practices.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-3xl font-bold text-blue-600">₹15,999</div>
                                <div className="text-sm text-gray-500">6 Months Program</div>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                   {/* SAP Training  */}
                <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <i data-lucide="database" className="h-10 w-10 text-purple-600"></i>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">SAP S/4 HANA Finance</h3>
                            <p className="text-gray-600 mb-4">Comprehensive SAP Finance training with real-time projects, industry case studies, and certification preparation. 100% placement assistance.</p>
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-3xl font-bold text-purple-600">₹25,999</div>
                                <div className="text-sm text-gray-500">4 Months Program</div>
                            </div>
                            <button className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

             {/* Branding Services  */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">Professional Branding & Marketing Services</h3>
                    <p className="text-xl text-blue-100">Transform your business with our expert branding and digital marketing solutions</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-effect rounded-2xl p-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                                <i data-lucide="palette" className="h-6 w-6 text-white"></i>
                            </div>
                            <h4 className="text-xl font-bold">Professional Branding</h4>
                        </div>
                        <p className="text-blue-100 mb-4">Complete brand identity design, logo creation, and brand strategy development for startups and enterprises.</p>
                        <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="glass-effect rounded-2xl p-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                                <i data-lucide="trending-up" className="h-6 w-6 text-white"></i>
                            </div>
                            <h4 className="text-xl font-bold">Digital Marketing</h4>
                        </div>
                        <p className="text-blue-100 mb-4">SEO, Social Media Marketing, Google Ads, Content Marketing, and Analytics to grow your online presence.</p>
                        <button onclick="window.location.href='services.html'" className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-400 transition-colors">
                            View Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Why Choose Us  */}
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SoftPro?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">We provide industry-relevant training with practical experience and guaranteed placement assistance</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                    <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                        <i data-lucide="users" className="h-10 w-10 text-blue-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Trainers</h3>
                    <p className="text-gray-600">Learn from industry professionals with 10+ years of real-world experience in leading tech companies</p>
                </div>
                
                <div className="text-center group">
                    <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                        <i data-lucide="clock" className="h-10 w-10 text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Timing</h3>
                    <p className="text-gray-600">Weekend and weekday batches available with online and offline learning options</p>
                </div>
                
                <div className="text-center group">
                    <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                        <i data-lucide="award" className="h-10 w-10 text-purple-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Certification</h3>
                    <p className="text-gray-600">Industry recognized certificates and practical project portfolios upon course completion</p>
                </div>
                
                <div className="text-center group">
                    <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                        <i data-lucide="briefcase" className="h-10 w-10 text-orange-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Assistance</h3>
                    <p className="text-gray-600">100% placement assistance with interview preparation and direct company tie-ups</p>
                </div>
            </div>
        </div>
    </section>

     {/* Student Testimonials with Auto Slider  */}
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
                <p className="text-xl text-gray-600">Real success stories from our graduates working in top companies worldwide</p>
            </div>
            
            <div className="testimonial-slider">
                <div className="testimonial-track">
                      {/* Testimonial 1  */}
                    <div className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                            <div className="flex items-start space-x-6">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Rahul Sharma" class="w-20 h-20 rounded-full object-cover"/>
                                <div className="flex-1">
                                    <div className="flex text-yellow-400 mb-4">
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-4 italic">"The web development course at SoftPro completely transformed my career. The hands-on approach and real-world projects helped me land a position at a top MNC. The instructors are industry experts who provide practical insights."</p>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">Sneha Reddy</div>
                                        <div className="text-blue-600 font-medium">Software Engineer at Google</div>
                                        <div className="text-sm text-gray-500">Salary: ₹15 LPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                      {/* Testimonial 2  */}
                    <div className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                            <div className="flex items-start space-x-6">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Rahul Sharma" class="w-20 h-20 rounded-full object-cover"/>
                                <div className="flex-1">
                                    <div className="flex text-yellow-400 mb-4">
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-4 italic">"SoftPro's digital marketing course opened up amazing opportunities for me. The practical approach and real campaign experience helped me start my own successful digital marketing agency. Best investment I ever made!"</p>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">Priya Patel</div>
                                        <div className="text-green-600 font-medium">Founder, Digital Success Agency</div>
                                        <div className="text-sm text-gray-500">Monthly Revenue: ₹2 Lakhs+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* Testimonial 3  */}
                    <div className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                            <div className="flex items-start space-x-6">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Amit Kumar" class="w-20 h-20 rounded-full object-cover"/>
                                <div className="flex-1">
                                    <div className="flex text-yellow-400 mb-4">
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-4 italic">"The SAP S/4 HANA Finance course was comprehensive with real-time projects and industry scenarios. The placement support was excellent - I got placed within 2 weeks of course completion. Now working as SAP Consultant!"</p>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">Amit Kumar</div>
                                        <div className="text-purple-600 font-medium">SAP Consultant at Accenture</div>
                                        <div className="text-sm text-gray-500">Salary: ₹12 LPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* Testimonial 4  */}
                    <div className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                            <div className="flex items-start space-x-6">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Amit Kumar" class="w-20 h-20 rounded-full object-cover"/>
                                <div className="flex-1">
                                    <div className="flex text-yellow-400 mb-4">
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                        <i data-lucide="star" className="h-5 w-5 fill-current"></i>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-4 italic">"As a fresher, I was worried about getting a good job. SoftPro's comprehensive training and mock interviews gave me confidence. The personalized attention and career guidance helped me secure a position at Google!"</p>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">Sneha Reddy</div>
                                        <div className="text-blue-600 font-medium">Software Engineer at Google</div>
                                        <div className="text-sm text-gray-500">Salary: ₹15 LPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Statistics Section  */}
    <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
                <p className="text-xl text-blue-100">Transforming careers and building success stories since 2011</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">10,000+</div>
                    <div className="text-blue-200 text-lg">Students Trained</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">95%</div>
                    <div className="text-blue-200 text-lg">Placement Rate</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">500+</div>
                    <div className="text-blue-200 text-lg">Company Partners</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">₹8.5L</div>
                    <div className="text-blue-200 text-lg">Average Package</div>
                </div>
            </div>
        </div>
    </section>

     {/* CTA Section  */}
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">Join thousands of successful students who transformed their careers with us. Take the first step towards your dream job today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
                    Enroll Now - Limited Seats
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Book Free Consultation
                </button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
                <p>⚡ Next batch starts in 7 days | 💯 100% Money Back Guarantee</p>
            </div>
        </div>
    </section>


    </>
  )
}
