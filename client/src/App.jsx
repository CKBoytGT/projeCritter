import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex grow mx-auto w-full max-w-7xl p-6">
        {/* <h1 className="mx-auto self-center text-3xl font-bold">
          Hello, World!
        </h1> */}

        {/* add auth to these */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
