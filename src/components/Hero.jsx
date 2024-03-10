import { motion } from "framer-motion"
import { styles } from "./styles"
import { ComputersCanvas } from "./canvas"
const Hero = ({isMobile}) => {
  return (
    <section className="relative w-full h-[900px] mx-auto" >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center top-5 w-5 rounded-full" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
        <div >
          <h1 className={`${styles.heroHeadText} text-white `}>Hi i'm<span className="text-[#915eff]"> Abdul-Muqaddam</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I developed 3d visuals user <br className="sm:block hidden" /> interface and web application </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className={`absolute ${isMobile?"bottom-0":"bottom-12"} w-full flex justify-center items-center`}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:'loop'}} className="w-3 h-3 rounded-full bg-secondary ">

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero