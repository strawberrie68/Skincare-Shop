import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import womanProduct from "@/assets/woman-product.jpg"
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  isTopOfPage: Boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Quiz = ({ isTopOfPage, setSelectedPage }: Props) => {


  return (
    <section id="quiz" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        className="flex m-auto w-full "
        onViewportEnter={() => setSelectedPage(SelectedPage.Quiz)}
      >
        <div className="md:w-4/5 flex flex-col pt-56 px-10 ml-5 rounded-lg bg-primary-10">

            {/* HEADER */}
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
            <p className="my-5">
                Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
            </p>

            </motion.div>
            <div className="flex p-2 items-center">
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
            </div>
        </div>

        {/* FORM AND IMAGE */}
        
            
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-1/2 m-auto rounded-lg"
                alt="woman product"
                src={womanProduct}
              />
            </div>
      
      </motion.div>
    </section>
  );
};

export default Quiz;
