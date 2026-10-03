import Header from "./components/Header";
import Hero from "./components/Hero";

import About from "./components/About";
import Skills from "./components/Skills";

//import OpenSource from "./components/OpenSource";
import Projects from "./components/Projects";
//import Blog from "./components/Blog";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          {/* <OpenSource /> */}
          <Projects />
          {/*  <Blog /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
