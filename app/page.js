"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import hero from "./images/hero.png";
import { motion } from "framer-motion";

import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  const products = [
    // Best Seller Products
    {
      id: 1,
      name: "Classic Blazer",
      price: "$120",
      image: hero,
    },
    {
      id: 2,
      name: "Summer Dress",
      price: "$90",
      image: hero,
    },
    {
      id: 3,
      name: "Stylish Shoes",
      price: "$150",
      image: hero,
    },
    {
      id: 4,
      name: "Designer Bag",
      price: "$200",
      image: hero,
    },
    // Additional Products for 'Our Products'
    {
      id: 5,
      name: "Denim Jacket",
      price: "$110",
      image: hero,
    },
    {
      id: 6,
      name: "Casual Tee",
      price: "$40",
      image: hero,
    },
    {
      id: 7,
      name: "Leather Wallet",
      price: "$60",
      image: hero,
    },
    {
      id: 8,
      name: "Elegant Watch",
      price: "$300",
      image: hero,
    },
  ];

  const ProductCard = ({ product }) => (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={350}
        className="w-full h-64 object-cover bg-lightgreen"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <p className="text-black font-bold">{product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="">
      <Header />
      <motion.section
        className="bg-lightgreen"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-16 px-4">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-green mb-6 mt-6">
              SLAY IN STYLE LIKE THE QUEEN YOU ARE!
            </h1>
            <p className="text-green  text-lg mb-6">
              Get premium ready-made fitted women’s outfits at an affordable
              price…
            </p>
            <Link href="/shop">
              <p className="inline-block bg-green text-white text-lg font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition">
                Shop Now
              </p>
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={hero}
              alt="Fashionable Model"
              width={300}
              height={300}
              className="rounded-lg shadow-lg bg-green"
              style={{
                borderRadius: "100px 20px 100px 20px", // Applies custom border-radius to each corner
              }}
            />
          </div>
        </div>
      </motion.section>
      {/* Best Sellers Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green mb-4">Best Sellers</h2>
          <p className="text-green mb-2">
            All you need is getting clothes that are well Fitted
          </p>
          <p className="text-green mb-12">
            The difference between well-fitted clothes and non-fitted clothes
            are clear as day
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Products Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green mb-4">Our Products</h2>
          <p className="text-green mb-2">
            At X-flair we ensure that we deliver to our ladies only the fittest,
            snuggiest and most versatile outfits that accentuates your body
            figure and brings out your natural body curves.
          </p>
          <p className="text-green mb-12">
            So the question is… do you want to slay with style and class?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.section>
      {/* Split Section */}
      <motion.section
        className="py-16 bg-lightgreen"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-evenly">
          {/* Left Section (Image) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={hero}
              alt="Special Offer"
              width={300}
              height={350}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Right Section (Content) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-green mb-4">
              Let’s get you styled and fitted, you don’t need to worry about how
              to style the dresses or wear them.
            </h2>
            <p className="text-green mb-4">
              We have unique sets waiting for you, like our Amara and Kali
              premium boubou gown and our 2 piece jolie linen set.
            </p>
            <button className="bg-green text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition">
              More Information
            </button>
          </div>
        </div>
      </motion.section>
      {/* Cards Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green mb-4">
            Also for our ladies that are worried about weight…
          </h2>
          <p className="text-green mb-2">
            Apart from that, they are also very multi-purpose dresses, you can
            literally wear them to different types of events, you also don’t
            have to worry about quality, our dresses would last you a very very
            long time!
          </p>
          <p className="text-green mb-12">
            So what are you waiting for, these dresses are limited stock!
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 border rounded-lg shadow-md overflow-hidden">
              <Image
                src={hero}
                alt="Quality Products"
                width={400}
                height={300}
                className="w-full h-64 object-cover bg-gray"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  Premium Quality
                </h3>
                <p className="text-black">
                  Our products are crafted with the finest materials to ensure
                  durability and style.
                </p>
              </div>
            </div>
            <div className="flex-1 border rounded-lg shadow-md overflow-hidden">
              <Image
                src={hero}
                alt="Stylish Designs"
                width={400}
                height={300}
                className="w-full h-64 object-cover bg-gray"
              />{" "}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  Stylish Designs
                </h3>
                <p className="text-black">
                  Stay ahead of the trends with our modern and chic collections.
                </p>
              </div>
            </div>
            <div className="flex-1 border rounded-lg shadow-md overflow-hidden">
              <Image
                src={hero}
                alt="Customer Support"
                width={400}
                height={300}
                className="w-full h-64 object-cover bg-gray"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  Exceptional Support
                </h3>
                <p className="text-black">
                  Our dedicated team is always ready to assist you with your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
