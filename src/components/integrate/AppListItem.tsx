import { motion } from 'framer-motion'

interface Props {
  icon: string
  title: string
  description: string
}

export const AppListItem = ({ icon, title, description }: Props) => {
  return (
    <>
      <motion.li
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: {
            opacity: 0,
            x: -100,
          },
        }}
        className="flex mt-8 md:mt-0 flex-col md:flex-row text-center md:text-left items-center"
      >
        <img src={icon} className="w-8 h-8 md:ml-2 md:mr-7" />
        <div>
          <h3 className="text-xl font-semibold mt-2 md:mt-0 mb-3">{title}</h3>
          <p className="md:w-[90%] font-light md:text-lg !leading-snug">
            {description}
          </p>
        </div>
      </motion.li>
      <div className="inline-block borderGradient my-8 md:my-4 border-t border-t-[#00E7F9] h-0 w-[50%] md:w-full" />
    </>
  )
}
