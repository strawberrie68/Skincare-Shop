import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import foundations from "@/assets/foundations.png"
import foundationSwatch from "@/assets/foundationswatch1.png"
import waterDropler2 from "@/assets/waterdroplet2.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import SponsorForbes from "@/assets/sponsors/Forbes.png"
import SponsorFortune from "@/assets/sponsors/Fortune.png"
import SponsorSephora from "@/assets/sponsors/Sephora.png"
import SponsorVogue from "@/assets/sponsors/Vogue.png"
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

const Home = ({ isTopOfPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


  return (
    
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0 bg-woman-glass md:bg-cover bg-contain w-full">
        

        {/* IMAGE AND MAIN HEADER */}
        <div className="z-10 mt-12 md:basis-3/5 md:mt-3" >
            <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-screen ">
                <div>
                <div className="md:w-3/5 sm:w-2/5 xs:w-4/5">
                    <motion.div 
                        className="bg-gray-10 p-12 rounded-xl opacity-75 w-3/4 xs:w-full xs:text-md"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <h1 className="mb-6 md:text-2xl text-gray-600 xs:text-md">WHERE THE EXPERTS HELP YOU FIND YOU PERFECT ROUTINE</h1>
                        <img src={foundations} />
                        <img src={foundationSwatch} />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p
                            className="mt-8 text-white text-lg tracking-wide w-3/4"

                        >
                            Find the perfect routine with the help of 
                            certified Dermatologist
                        </p>

                    </motion.div>

                    <div>
                    {/* ACTIONS */}
                        <motion.div
                            className="mt-8 flex items-center gap-8 mb-6"
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
                            className="text-md font-bold text-primary-500 underline hover:text-white"
                            onClick={() => setSelectedPage(SelectedPage.Quiz)}
                            href={`#${SelectedPage.Quiz}`}
                            >
                            <p>Learn More</p>
                            </AnchorLink>
                        </motion.div>

                    </div>
                
                </div>
                <div>
                        <p className="md:text-9xl text-8xl tracking-widest text-white font-extralight overflow-hidden">
                            SKINCARE
                        </p>
                </div>


                </div>
                
                {/* IMAGE */}
                <div className="w-3/4 "> 
                    <div className="relative">
                        <div className="absolute md:right-0 md:bottom-44 ">
                            <img className="w-16 " src={waterDropler2} />
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
           {/* SPONSORS */}
           {isAboveMediumScreens && (
        <section>
            <div className="h-1/5 w-full bg-white py-10 ">
            <div className="mx-auto w-5/6 h-[180px] ">
                {/* <p className="text-xl bold capitalize">As seen on</p> */}
                <div className="flex items-center justify-between gap-16 h-1/5">
                <img alt="sephora-sponsor" src={SponsorSephora} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
                <img alt="vouge-sponsor" src={SponsorVogue} />
                </div>
            </div>
            </div>
        </section>
        
      )}




    </section>
  )
}

export default Home