import { FaDumbbell, FaAppleAlt, FaHeartbeat } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Features() {
  const data = [
    {
      icon: <FaDumbbell />,
      title: 'Personal Training',
      desc: 'Customized workouts to help you achieve your goals.'
    },
    {
      icon: <FaAppleAlt />,
      title: 'Healthy Nutrition',
      desc: 'Meal plans and nutrition guidance for a better lifestyle.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Workout Plans',
      desc: 'Daily routines designed for all fitness levels.'
    }
  ]

  return (
    <section className="features">
      <h2>Why Choose Us?</h2>

      <div className="cards">
        {data.map((item, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index} className="card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
