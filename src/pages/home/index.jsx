import { useEffect, useState } from "react";
import BulletPoint from "../../components/bulletpoint";
import Header from "../../components/header";
import HeaderMobile from "../../components/headermobile";
import Pagination from "../../components/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Content01 from "./content01";
import Content02 from "./content02";
import Content03 from "./content03";

export default function Home() {
  const [animating, setAnimating] = useState(true);
  const [page, setPage] = useState(0);
  const [pageTimeout, setPageTimeout] = useState(null);

  const pages = [
    <Content01 key={0} />,
    <Content02 key={1} />,
    <Content03 key={2} />,
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextPage = () => {
    const pos = pages.indexOf(pages[page]);
    if (pos < pages.length - 1) {
      setPage(pos + 1);
    } else {
      setPage(0);
    }
  };

  const prevPage = () => {
    const pos = pages.indexOf(pages[page]);
    if (pos > 0) {
      setPage(pos - 1);
    } else {
      setPage(pages.length - 1);
    }
  };

  const autoChangePage = () => {
    if (pageTimeout) {
      clearTimeout(pageTimeout);
    }
    const timeout = setTimeout(() => {
      nextPage();
    }, 7000);
    setPageTimeout(timeout);
  };
  useEffect(() => {
    autoChangePage();
  }, [page]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`max-lg:px-5 max-md:pb-5 relative select-none max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:min-h-screen ${
        animating ? "overflow-hidden" : ""
      }`}
    >
      <Header />
      <HeaderMobile />

      <AnimatePresence mode="wait">
        <motion.div
          className="max-md:min-h-[611px]"
          key={page}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {pages[page]}
        </motion.div>
      </AnimatePresence>

      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Pagination nextPage={nextPage} prevPage={prevPage}>
          {pages.map((_, index) => (
            <BulletPoint
              key={index}
              onClick={() => setPage(index)}
              selected={page === index}
            />
          ))}
        </Pagination>
      </motion.footer>

      <div className="relative hidden lg:flex">
        <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed top-[35%] left-[50%] z-[-10]"></div>
        <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed bottom-[35%] left-[50%] z-[-10]"></div>
      </div>

      <div className="relative flex lg:hidden">
        <div className="w-[140%] aspect-square bg-[#EBD4F2] rounded-[50%] fixed top-[80%] left-[-20%] z-[-10]"></div>
        <div className="w-[140%] aspect-square bg-[#EBD4F2] rounded-[50%] fixed bottom-[80%] left-[-20%] z-[-10]"></div>
      </div>
    </motion.section>
  );
}
