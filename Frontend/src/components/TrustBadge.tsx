import { motion } from "framer-motion";

export function TrustBadge(){
    return (
      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {[
            {
              name: "Forbes",
              logo: "https://static-00.iconduck.com/assets.00/brand-forbes-icon-2048x532-fvsol7zd.png",
            },
            {
              name: "amazon",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
            },
            {
              name: "Wired",
              logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Google_Adsense_logo.png",
            },
            {
              name: "Flipkart",
              logo: "https://cdn.worldvectorlogo.com/logos/flipkart.svg",
            },
          ].map((brand) => (
            <motion.img
              key={brand.name}
              whileHover={{ scale: 1.05 }}
              src={brand.logo}
              alt={brand.name}
              className="h-8 opacity-50 hover:opacity-75 transition-opacity cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
    );
}