import ActionButton from "@/shared/ActionButton";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  BeakerIcon,
  FaceSmileIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import closeup from "@/assets/closeup.jpg"

const benefits: Array<BenefitType> = [
  {
    icon: <BeakerIcon className="h-6 w-6" />,
    title: "Science Meets Beauty",
    description:
      "Our dermatologists blend scientific expertise with a passion for beauty, ensuring that every step of your skincare journey is backed by research and results.",
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6" />,
    title: "Your Skin, Your Rules",
    description:
      "No two skins are alike, and neither are our routines. Our dermatologists work closely with you to understand your unique skin type.",
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
    title: "Unveil Your Glow",
    description:
      "Our personalized routines are designed to target your specific needs, whether it's banishing pesky breakouts, smoothing out fine lines, or achieving that enviable lit-from-within glow.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ isTopOfPage, setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-full  md:mt-44 py-10 " >
      <div className="mx-auto min-h-full w-full  bg-gray-20 opacity-70 pb-12">
        <div className="w-5/6 mx-auto py-12">
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
          >
            {/* HEADER */}
            <motion.div
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="text-3xl font-medium mt-3"> Unlock Your Radiant Skin</p>
              <p className="my-5 text-md">
                Our cutting-edge platform connects you with certified dermatologists who are dedicated to crafting the ultimate skincare routine tailored just for you.
              </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
              className="mt-5 items-center justify-between gap-8 md:flex md:basis-4/12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {benefits.map((benefit: BenefitType) => (
                <Benefit
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>

          </motion.div>

        </div>

      </div>
      <div className="w-5/6 mx-auto relative pt-2">
        {/* GRAPHICS AND DESCRIPTION */}
        <div className=" mt-4 items-center justify-between gap-20 md:mt-14 md:flex sm:flex ">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-1/2 h-[450px] rounded-xl xs:w-3/4 xs:my-10 max-w-sm"
            alt="benefits-page-graphic"
            src={closeup}
          />

          {/* DESCRIPTION */}
          <div className="flex flex-col align-bottom before:absolute border-2  md:pt-44 pt-24 pr-16 pl-10 pb-10 rounded-xl border-primary-500 h-auto before:content-skincareSwatch before:-top-44 before:-right-24 before:-z-1" >
            {/* TITLE */}
            <div className="">


              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="text-3xl text-gray-600 font-medium">
                  Join Our Skincare Revolution:{" "}
                  <span className="text-primary-500">GLOW</span>
                </p>
              </motion.div>

            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 mb-5">
                Ready to take the first step towards the skin you've always dreamed of? Join the ranks of our satisfied clients who have discovered the power of personalized skincare. Say hello to confidence, radiance, and a newfound love for your skin.


              </p>

            </motion.div>

            {/* BUTTON */}
            <motion.div
              className="relative mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute ">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  isTopOfPage={isTopOfPage}
                >

                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
