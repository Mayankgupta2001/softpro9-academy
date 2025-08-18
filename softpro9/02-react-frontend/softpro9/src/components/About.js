import React from 'react'
import './style.css';

export default function About() {
  return (
    <>
    <main>
        <section className="hero-bg text-white">
            <div className="container mx-auto px-6 text-center py-24 md:py-36">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Pioneering Tech Education for the Real World
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                    We're not just a platform; we are your launchpad into the tech industry. Discover our story, our mission, and what makes us different.
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-5/12">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80" alt="A collaborative team planning on a whiteboard" class="rounded-xl shadow-2xl object-cover w-full h-full"/>
                    </div>
                    <div className="w-full lg:w-7/12">
                        <span className="font-bold text-purple-600">WHO WE ARE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Crafting Future-Proof Careers in Tech</h2>
                        <p className="text-gray-600 mb-8 text-base md:text-lg">
                            Founded by a team of industry veterans, we saw a critical gap between traditional education and the fast-paced demands of the technology sector. We are on a mission to fill that gap with practical, hands-on learning experiences that build not just knowledge, but true capability and confidence.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
                                    <p className="mt-1 text-gray-600">To deliver accessible, affordable, and highly relevant tech education that directly translates to career success.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
                                    <p className="mt-1 text-gray-600">To become the world's most trusted learning partner for aspiring technology professionals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-bold text-purple-600">HOW IT WORKS</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Your Roadmap to Success</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">We follow a proven, four-step methodology designed to take you from a beginner to a job-ready professional.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-purple-200"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                        <div className="relative text-center">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-gray-50">1</div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Project-Based Curriculum</h3>
                            <p className="text-gray-600 mt-2">Learn by building. Our curriculum is centered around real-world projects that build a portfolio you can be proud of.</p>
                        </div>
                        <div className="relative text-center">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-gray-50">2</div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Live Expert Mentorship</h3>
                            <p className="text-gray-600 mt-2">Never get stuck. Get instant help from industry experts during live classes and dedicated support sessions.</p>
                        </div>
                        <div className="relative text-center">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-gray-50">3</div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Personalized Feedback</h3>
                            <p className="text-gray-600 mt-2">Receive detailed, constructive feedback on your projects and assignments to master every concept.</p>
                        </div>
                        <div className="relative text-center">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-purple-600 text-white font-bold rounded-full border-4 border-gray-50">4</div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Career & Placement Support</h3>
                            <p className="text-gray-600 mt-2">We prepare you for the job market with resume reviews, mock interviews, and direct connections to hiring partners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-bold text-purple-600">OUR TEAM</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">The Experts Behind Your Success</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center bg-white p-6 rounded-lg border-2 border-transparent team-card shadow-lg">
                        <img src="https://placehold.co/200x200/E9D5FF/4C1D95?text=Aarav+S." alt="Founder" class="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <h3 className="font-bold text-xl text-gray-900">Aarav Sharma</h3>
                        <p className="text-purple-600 font-semibold">Founder & CEO</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg border-2 border-transparent team-card shadow-lg">
                        <img src="https://placehold.co/200x200/FED7AA/9A3412?text=Priya+M." alt="Lead Instructor" class="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <h3 className="font-bold text-xl text-gray-900">Priya Mehta</h3>
                        <p className="text-orange-600 font-semibold">Lead Instructor</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg border-2 border-transparent team-card shadow-lg">
                        <img src="https://placehold.co/200x200/E9D5FF/4C1D95?text=Rohan+V." alt="Head of Product" class="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <h3 className="font-bold text-xl text-gray-900">Rohan Verma</h3>
                        <p className="text-purple-600 font-semibold">Head of Product</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg border-2 border-transparent team-card shadow-lg">
                        <img src="https://placehold.co/200x200/FED7AA/9A3412?text=Sneha+P." alt="Student Success" class="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <h3 className="font-bold text-xl text-gray-900">Sneha Patel</h3>
                        <p className="text-orange-600 font-semibold">Student Success</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-purple-700">
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-extrabold text-white">Ready to Start Your Tech Journey?</h2>
                <p className="mt-4 text-lg text-purple-200 max-w-2xl mx-auto">
                    Explore our courses and find the perfect path to your dream career. Your future starts now.
                </p>
                <a href="/courses.html" className="mt-8 inline-block bg-white text-purple-700 font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
                    View All Courses
                </a>
            </div>
        </section>

    </main>
Name
    </>
  )
}
