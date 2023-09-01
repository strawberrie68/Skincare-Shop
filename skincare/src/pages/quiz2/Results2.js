import { WizardStore } from "@/store";
import NavBar from "@/componets/NavBar"
import products from "@/shared/products"
import { useState } from "react";



const Results2 = () => {
    const state = WizardStore.useState((s) => s);
    const [theirSkintype, setTheirSkintype] = useState("")
    const [productForSkintype, setProductForSkintype] = useState([])
    

    console.log(state)

   function checkSensitive (){
    if(state.isSensitive == "true" || state.acneLevel == "high" || state.acneLevel == "some"){
        setTheirSkintype("reparing")
    } else {
        setTheirSkintype(state.skintype)
    }

    findProducts()
   }

   function findProducts (){
    if (theirSkintype == "reparing"){
        setProductForSkintype(products.filter((item)=> item.skintype == "sensitive"))
    }
    else{
        setProductForSkintype(products.filter((item)=> item.skintype == "sensitive"))

    }

   }
   console.log(productForSkintype)

    return (

        <div className="bg-white h-full">
            <NavBar />
            <div className=" mt-40 w-4/5 m-auto">
                <p className="text-3xl">Find Your Perfect Routine</p>
                <div>
                    <p>your skin type is {state.skintype}</p>
                </div>


                
             
            </div>

        </div>
    );
};

export default Results2;