import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"


const Tech = () => {
  return (
    <div>
      <motion.div 
        variants={fadeIn('', '', 0.5, 1)}
        className="mb-8 "
      >
        <p className= {styles.sectionSubText} >Technologies I am familiar with:</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}> 
            <BallCanvas icon={technology.icon}/>
            <p style={{ color: '#fffff' }} className="font-bold text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default SectionWrapper(Tech, "")