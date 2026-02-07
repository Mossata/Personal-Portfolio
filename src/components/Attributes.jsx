import { memo } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion"


const Attributes = () => {
  return (
    <div>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Attributions.</h3>
        <ul className='mt-1 list-disc ml-5 space-y-2'>
          <li
            className='text-secondary text-[16px] pl-1 tracking-wider'
          >
            <a href="https://www.flaticon.com/free-icons/game-development" title="game development icons">Game development icons created by bsd - Flaticon</a>
          </li>
          <li
            className='text-secondary text-[16px] pl-1 tracking-wider'
          >
            <a href="https://www.flaticon.com/free-icons/3d-programming" title="3d programming icons">3d programming icons created by Ardiansyah - Flaticon</a>
          </li>
          <li
            className='text-secondary text-[16px] pl-1 tracking-wider'
          >
            <a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Zaenul Yahya - Flaticon</a>
          </li>
          <li
            className='text-secondary text-[16px] pl-1 tracking-wider'
          >
            <a href="https://www.flaticon.com/free-icons/proxy" title="proxy icons">Proxy icons created by rukanicon - Flaticon</a>
          </li>
          <li
            className='text-secondary text-[16px] pl-1 tracking-wider'
          >
            <a href="https://jsmastery.com/#membership" title="Tutorial">Many icons/assets and tutorial for website created by Adrian Hajdin - Javascript Mastery</a>
          </li>
        </ul>
      </motion.div>   
    </div>
  );
};

export default SectionWrapper(Attributes, '');