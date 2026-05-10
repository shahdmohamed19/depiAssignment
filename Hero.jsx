import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hero-text"
      >
        <h1>Transform Your Body & Mind</h1>

        <p>
          Build strength, confidence, and healthy habits with personalized fitness programs.
        </p>

        <div className="hero-buttons">
          <button>Start Now</button>
          <button className="secondary">Explore Plans</button>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
        alt="fitness"
      />
    </section>
  )
}

export default Hero
