import products from "@/shared/products"
import ProductCard from "@/componets/ProductCard"
import { ProductType } from "@/shared/types"
import { motion } from "framer-motion";




const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
};

const Shop = () => {
  const threeProducts = products.slice(0, 4)

  return (


    <section id="shop" className="mx-auto w-full pt-24 pb-32 bg-gray-20">
      <div className="mx-auto w-5/6">
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
          <p className="text-gray-100 text-3xl font-medium mt-3"> Explore Our Products</p>
          <p className="mt-4 mb-12 text-md ">
            Our cutting-edge platform connects you with certified dermatologists who are dedicated to crafting the ultimate skincare routine tailored just for you.
          </p>

        </motion.div>

        <motion.div
          className="md:flex gap-16 w-full justify-between mt-8 m-auto xs:grid xs:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}

        >

          {threeProducts.map((product: ProductType, index) => (
            <ProductCard
              key={index}
              img={product.img}
              name={product.name}
              price={product.price}
              category={product.category}
              product={product}
            />
          ))}

        </motion.div>
      </div>




    </section>
  )
}

export default Shop