import { motion } from "framer-motion";
import { staggerContainer } from "./Motion";

type StarWrapperProps = {
  Component: React.ComponentType;
  idName: string;
};

const StarWrapper = (Component: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5)} // Provide default values or pass as arguments if needed
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
