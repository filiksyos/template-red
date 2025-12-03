"use client";

import { TypewriterEffect } from '@/components/TypewriterEffect';
import { FaGithub, FaDiscord, FaReddit, FaProductHunt, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { Zap, Code, Palette, Rocket, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { VideoModal } from '@/components/VideoModal';

const features = [
  {
    title: "Lightning Fast",
    description: "Built with Next.js 15 for optimal performance",
    icon: <Zap className="h-6 w-6 text-primary" />,
    bgGradient: "from-red-500/10 to-orange-500/10"
  },
  {
    title: "Developer Friendly",
    description: "Clean TypeScript code with intuitive structure",
    icon: <Code className="h-6 w-6 text-primary" />,
    bgGradient: "from-red-600/10 to-red-500/10"
  },
  {
    title: "Modern Design",
    description: "Stunning reddish theme with Tailwind CSS",
    icon: <Palette className="h-6 w-6 text-primary" />,
    bgGradient: "from-red-400/10 to-pink-500/10"
  },
  {
    title: "Production Ready",
    description: "Fully configured with best practices",
    icon: <Rocket className="h-6 w-6 text-primary" />,
    bgGradient: "from-red-700/10 to-red-600/10"
  }
];

const steps = [
  { number: 1, title: "Clone Repository", description: "Get started by cloning the template" },
  { number: 2, title: "Install Dependencies", description: "Run npm install to set up packages" },
  { number: 3, title: "Customize", description: "Modify components and pages to your needs" },
  { number: 4, title: "Deploy", description: "Deploy to Vercel with one click" }
];

const platforms = [
  { name: 'GitHub', icon: FaGithub },
  { name: 'Discord', icon: FaDiscord },
  { name: 'Reddit', icon: FaReddit },
  { name: 'Product Hunt', icon: FaProductHunt },
  { name: 'Twitter', icon: FaXTwitter },
  { name: 'Instagram', icon: FaInstagram },
  { name: 'TikTok', icon: FaTiktok },
  { name: 'YouTube', icon: FaYoutube }
];

export default function LandingPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: stepsRef, inView: stepsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-neutral dark:bg-neutral-darker relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light text-sm font-semibold">🎨 Modern Template with Reddish Theme</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-darker dark:text-white mb-6 leading-tight">Build Your Next Project with <span className="text-primary">Template Red</span></h1>
            
            <p className="text-xl text-text-light dark:text-slate-300 max-w-2xl mx-auto mb-8">A beautiful, production-ready Next.js template with Stripe integration. No auth required, just pure speed and style.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsVideoModalOpen(true)} className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold shadow-lg hover:shadow-hover transition-all inline-flex items-center gap-2">
                <span>Watch Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 secondary-button font-semibold inline-flex items-center gap-2">
                <span>Explore Components</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl bg-neutral-darker dark:bg-neutral-darker overflow-hidden border border-primary/20 shadow-2xl">
              <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-4 border-b border-primary/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
              </div>
              <pre className="p-8 text-sm sm:text-base text-slate-100 overflow-x-auto">
                <code>
                  <TypewriterEffect text={`// ✨ Template Red - Production Ready
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center"
    >
      <h1>Build with Template Red</h1>
      <p>Beautiful, fast, ready to go</p>
    </motion.div>
  );
};`} />
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-dark border-t border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-darker dark:text-white mb-4">Powerful Features</h2>
            <p className="text-lg text-text-light dark:text-slate-300">Everything you need to build modern web applications</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={featuresInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="feature-card p-6">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${feature.bgGradient} mb-4`}>{feature.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-darker dark:text-white mb-2">{feature.title}</h3>
                <p className="text-text-light dark:text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-darker dark:text-white mb-4">Get Started in Minutes</h2>
            <p className="text-lg text-text-light dark:text-slate-300">Simple steps to launch your project</p>
          </motion.div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.5, delay: index * 0.1 }} onClick={() => setActiveStep(index)} className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 ${ activeStep === index ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center ${ activeStep === index ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-neutral-darker dark:text-white'}`}>{step.number}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-darker dark:text-white mb-1">{step.title}</h3>
                    <p className="text-text-light dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-dark border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-darker dark:text-white mb-4">Share Your Project</h2>
            <p className="text-text-light dark:text-slate-300">Launch on multiple platforms with Template Red</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                  <span className="text-sm text-neutral-darker dark:text-white text-center">{platform.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-accent" />
            <div className="relative bg-gradient-to-r from-primary/95 via-primary-dark/95 to-accent/95 p-12 text-center">
              <Star className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Template Red is everything you need to launch your next project with style and speed.</p>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-slate-50 transition-all shadow-lg">Get Started Now</motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoId="S1cnQG0-LP4" />
    </div>
  );
}
