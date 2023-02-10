import { motion } from 'framer-motion'
import { isEven } from '../../utils/isEven'

interface Props {
  data: {
    icon: string
    title: string
    description: string
  }
  index: number
}

export const MinWidth768RoadmapListItem = ({
  index,
  data: { icon, title, description },
}: Props) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: {
            opacity: 0,
            scale: 0.5,
          },
        }}
        className={`${
          isEven(index)
            ? 'col-start-1 w-[50%] md:w-auto justify-end flex-row-reverse'
            : 'col-start-2 w-[50%] md:w-auto justify-end'
        } col-span-1 w-full h-full flex items-center`}
      >
        <img
          src={icon}
          className={`${isEven(index) ? 'ml-[30px]' : 'mr-[30px]'} w-10 h-10`}
        />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="font-light text-lg mt-2 !leading-snug inline-block w-[290px]">
            {description}
          </span>
        </div>
      </motion.div>
      <div
        style={{ gridColumnStart: !isEven(index) ? 'hidden' : '2' }}
        className="col-span-1 h-[150px]"
      >
        {/* PLACEHOLDER */}
      </div>
    </>
  )
}
