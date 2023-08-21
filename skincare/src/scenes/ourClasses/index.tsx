import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/gallery/lotion.jpg";
import image2 from "@/assets/gallery/oil.jpg";
import image3 from "@/assets/gallery/skincare-set.jpg";
import image4 from "@/assets/closeup.jpg";
import image5 from "@/assets/gallery/mirror.jpg";
import image6 from "@/assets/gallery/bath.jpg";
import { motion } from "framer-motion";
import Class from "./class";

const classes: Array<ClassType> = [
  {
    name: "Certified Dermatologist Expertise",
    description:
      "With their in-depth knowledge of skin types, conditions, and treatments, you can trust that your regimen is not only effective but also safe for your unique skin.",
    image: image1,
  },
  {
    name: "Personalization Redefined",
    description: "Our routines go beyond the basics of skincare. We believe in the power of personalization, taking into account your individual skin concerns, goals, and lifestyle.",
    image: image2,
  },
  {
    name: "Real-Time Adjustments",
    description:
      "As your skin evolves, so should your skincare routine. Unlike static routines from other companies, our dermatologists provide ongoing guidance and adjustments based on your progress. ",
    image: image3,
  },
  {
    name: "Scientifically-Backed Formulations",
    description:
      "We prioritize the science behind skincare. Each product recommended in your routine is carefully chosen based on its proven efficacy and ingredients that are supported by scientific research.",
    image: image4,
  },
  {
    name: "Holistic Approach to Beauty",
    description:"We believe that skincare is more than skin-deep. Our routines take a holistic approach to beauty, addressing factors such as lifestyle, diet, and environmental influences that can impact your skin's health",
    image: image5,
  },
  {
    name: "Proven Success Stories",
    description:
      "Our track record speaks for itself. Countless individuals have experienced transformative results with our personalized skincare routines. ",
    image: image6,
  },
];

type Props = {
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ isTopOfPage, setSelectedPage }: Props) => {
  return (
    <section id="ourroutines" className="w-full bg-primary-100 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurRoutines)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <div>
              <p className="text-3xl font-medium mt-3 text-gray-500 w-fit border-2 py-2 px-10 mb-8 rounded-lg border-gray-50 bg-white">
                OUR ROUTINES
              </p>
            </div>
            
            <p className="py-5 text-gray-500">
            Experience the Future of Skincare: Elevate your skincare journey with our curated routines, meticulously designed by certified dermatologists. Unleash your skin's potential with personalized solutions that adapt to your evolving needs. 
            </p>
            <p className="py-5 text-gray-500">
            Embrace the science of beauty and join countless others who have witnessed remarkable transformations. Try Daily.ROUTINE today and discover the personalized path to radiant, healthier skin.
            </p>
          </div>
        </motion.div>
        <div className="relative">

          <div className="after:absolute mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden after:content-starCircle after:right-0 after:top-56 after:z-30">
            <ul className=" w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index) => (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    
    </section>
  );
};

export default OurClasses;
