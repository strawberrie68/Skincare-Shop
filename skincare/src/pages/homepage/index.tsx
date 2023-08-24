
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import Quiz from "@/scenes/quiz";
import Footer from "@/scenes/footer";



function Homepage() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className='app bg-gray-20'> 

    <Home 
      setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}
    />
    <Benefits 
      setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}
    />
    <OurClasses
      setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}
    />
    <Quiz
    setSelectedPage={setSelectedPage}
    isTopOfPage={isTopOfPage} 
    />
    <Footer />
    

    
   </div>
  )
}

export default Homepage
