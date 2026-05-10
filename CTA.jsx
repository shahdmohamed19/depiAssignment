import { motion } from 'framer-motion'

function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="cta"
    >
      <h2>Start Your Fitness Journey Today</h2>
      <button>Join Now</button>
    </motion.section>
  )
}

export default CTA
