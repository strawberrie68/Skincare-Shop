// import Product from "@/shared/products"
import { ProductType } from "@/shared/types"
import ProductCard from "@/componets/ProductCard";
import NavBar from "@/componets/NavBar";
import Footer from "@/scenes/footer";


const products: Array<ProductType> = [
    {
        img: "https://versedskin.com/cdn/shop/products/Versed-Skincare-Weekend-Glow-Daily-Brightening-Solution-03_1800x.jpg?v=1625114116",
        name: "CeraVe SALICYLIC ACID Cleanser",
        concerns: ["barrier", "acne"],
        skintype: ["acne", "normal", "dry", "oily", "barrier-broken"],
        price: 20,
        category: "Cleanser"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/HYDRATINGMILKTONER_LABEL_241_v2_1800x.jpg?v=1656434566",
        name: "Isntree Yam Root Cleanser",
        concerns: ["dry", "barrier-brokwn", "normal", "acne", "sensitive"],
        skintype: ["sensitive", "dry", "normal", "acne"],
        price: 12,
        category: "Cleanser"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/MoistureMaker_01_1800x.jpg?v=1659404200",
        name: "I'm from Mugwort",
        concerns: ["broken-barrier", "acne"],
        skintype: ["sensitive", "acne"],
        price: 30,
        category: "Toner"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/SundayMorning_BottleFront_1800x.jpg?v=1625113997",
        name: "I'm rice Toner",
        concerns: ["uneven"],
        skintype: ["sensitive", "acne"],
        price: 30,
        category: "Toner"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/Dermaplaner_CapOff_PDP_54693c7f-b18a-450a-acef-c45378172b9b_1800x.jpg?v=1622745393",
        name: "ANUA - Heartleaf 77% Soothing Toner",
        concerns: ["barrier-broken", "sensitive"],
        skintype: ["sensitive", "acne", "all"],
        price: 30,
        category: "Toner"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/Versed-Skincare-Silk-Slip-Conditioning-Lip-Oil-01_1800x.jpg?v=1625114228",
        name: "Roundlab Toner",
        concerns: ["uneven", "acne", "normal", "barrier-broken"],
        skintype: ["sensitive", "acne", "all", "normal"],
        price: 30,
        category: "Toner"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/2022_RetinolBundle_01_1cc900b3-a554-46e8-af06-b9f161ec0b1e_1800x.jpg?v=1669846382",
        name: "Dynasty Cream",
        concerns: ["dry", "wrinkles"],
        skintype: ["dry"],
        price: 30,
        category: "Moisturizer"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/SmoothLanding_01_42bf8331-c0f6-4b91-907c-a6cf90ddd8dc_1800x.jpg?v=1675983294",
        name: "Hatmugi moisturizer",
        concerns: ["oily"],
        skintype: ["oily", "all"],
        price: 30,
        category: "Moisturizer"

    },
    {
        img: "https://versedskin.com/cdn/shop/products/SHOT9_SKINSOAK_FRONT_V1_1800x.jpg?v=1681155870",
        name: "Dynasty Cream",
        concerns: ["dry", "wrinkles"],
        skintype: ["dry"],
        price: 30,
        category: "Moisturizer"

    },


];

const Shop = () => {
    
    return (
        <div>
            <NavBar />

            <div className="bg-white h-full gap-16 py-10 md:pb-0  w-full mt-12 mb-16">
                <div className="mx-auto w-5/6 max-w-screen-md mt-12" >
                    <img
                        src="https://versedskin.com/cdn/shop/files/230629_SweetReliefLaunch_CBH_Desktop_1650x450_b96567c0-8950-44fb-a16e-f698f9a229c3.jpg?v=1691446250"
                    />
                    <h1 className="mt-16 text-3xl bold ">
                        Shop
                    </h1>
                    <p className="mb-6 mt-3 text-gray-100">Explore our products</p>
                    <div className=" grid grid-cols-3 gap-12">
                        {products.map((product: ProductType) => (
                            <ProductCard
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                product={product}
                            />
                        ))}
                    </div>

                </div>





            </div>
            <Footer />
        </div>
    )
}


export default Shop