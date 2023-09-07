import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./class";

const classes: Array<ClassType> = [
  {
    name: "Certified Dermatologist Expertise",
    description:
      "With their in-depth knowledge of skin types, conditions, and treatments, you can trust that your regimen is not only effective but also safe for your unique skin.",
    image: "https://images.pexels.com/photos/3892675/pexels-photo-3892675.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Personalization Redefined",
    description: "Our routines go beyond the basics of skincare. We believe in the power of personalization, taking into account your individual skin concerns, goals, and lifestyle.",
    image: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Real-Time Adjustments",
    description:
      "As your skin evolves, so should your skincare routine. Unlike static routines from other companies, our dermatologists provide ongoing guidance and adjustments based on your progress. ",
    image: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Scientifically-Backed Formulations",
    description:
      "We prioritize the science behind skincare. Each product recommended in your routine is carefully chosen based on its proven efficacy and ingredients that are supported by scientific research.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHNraW5jYXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Holistic Approach to Beauty",
    description: "We believe that skincare is more than skin-deep. Our routines take a holistic approach to beauty, addressing factors such as lifestyle, diet, and environmental influences that can impact your skin's health",
    image: "https://images.pexels.com/photos/8142196/pexels-photo-8142196.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Proven Success Stories",
    description:
      "Our track record speaks for itself. Countless individuals have experienced transformative results with our personalized skincare routines. ",
    image: "https://images.unsplash.com/photo-1594843310428-7eb6729555e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
];

type Props = {
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
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
