import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import womanProduct from "@/assets/woman-product.jpg"
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Quiz = ({ isTopOfPage, setSelectedPage }: Props) => {


  return (

    <section id="quiz" className="mx-auto w-5/6 pt-24 pb-32">
      {/* QUIZ SECTION*/}
      <motion.div
        className="flex m-auto w-full xs:flex-col md:flex-row sm:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Quiz)}
      >
        <div className="md:w-3/4  flex flex-col md:pt-20 sm:pb-10 sm:pt-20 px-10 ml-5 rounded-lg bg-primary-10 xs:py-6">

          {/* QUIZ TEXT*/}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-3xl">
              <span className="text-primary-500 text-3xl">FIND YOUR</span> PERFECT ROUTINE
            </p>
            <p className="mt-12 mb-3 text-gray-500">
              Embark on a personalized skincare journey by taking our expert-guided quiz.
              Our team of dedicated scientists and dermatologists are here to craft the perfect routine tailored to your unique needs.

            </p>
            <p className="mb-12">Start the quiz now and reveal the science-backed
              path to your ultimate skincare success.</p>

          </motion.div>


          {/* QUIZ PICTURE */}

          <motion.div
            className="flex p-2 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}

          >
            <ActionButton
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            >
              Start Quiz
            </ActionButton>

            <AnchorLink
              className="text-md pl-4 font-bold text-primary-500 underline hover:text-white"
              onClick={() => setSelectedPage(SelectedPage.Quiz)}
              href={`#${SelectedPage.Quiz}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* FORM AND IMAGE */}


        <div className=" relative w-full  m-auto  ">

          <img
            className="rounded-lg md:w-1/2 ml-4 md:ml-24 xs:hidden md:block sm:block sm:h-[500px] sm:ml-10 sm:object-cover md:h-[500px]"
            alt="woman product"
            src={womanProduct}
          />
          <div className="after:absolute md:after:content-skincareSwatch after:-bottom-40 after:-z-10">

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Quiz;
