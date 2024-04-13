import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/ui/Footer";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";

function App() {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);
  console.log("Loading: " + loading);
  console.log("Authenticated user: " + JSON.stringify(data));
  console.log("Error: " + error);

  if (loading) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header auth={data.authUser} />
      <main className="flex flex-col grow mx-auto mt-[82px] lg:mt-0 w-full max-w-7xl p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/dashboard"
            element={data.authUser ? <DashboardPage /> : <Navigate to="/" />}
          />
          <Route
            path="/project/:id"
            element={data.authUser ? <ProjectPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
