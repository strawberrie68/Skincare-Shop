// import Product from "@/shared/products"
import { ProductType } from "@/shared/types"
import ProductCard from "@/componets/ProductCard";
import NavBar from "@/componets/NavBar";
import Footer from "@/scenes/footer";
import products from "@/shared/products"


const Shop = () => {

    return (
        <div className="">
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
                    <div className="m-auto  grid  grid-cols-2 sm:grid-cols-3">
                        {products.map((product: ProductType, index) => (
                            <ProductCard
                                key={index}
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