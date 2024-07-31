import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
// uncomment import and route path to access animation tester
// import AnimationTester from "./components/AnimationTester";
import SessionExpiredPage from "./pages/SessionExpiredPage";
import { useQuery } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

function App() {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);

  // for random critter
  let randomNum = Math.floor(Math.random() * 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header auth={data?.authUser} loadingAuth={loading} />
      {error && (
        <div className="w-full border-b border-b-red-800 bg-red-100 p-1 text-center text-sm font-medium text-red-800">
          <p>Error logging in.</p>
        </div>
      )}
      {/* mt is for mobile sticky header */}
      <main className="mx-auto mt-[3.5rem] flex w-full max-w-7xl grow flex-col p-4 md:mt-0 md:p-6">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                randomCritter={randomNum}
                userName={data?.authUser?.name}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/dashboard"
            element={
              loading ? (
                ""
              ) : data?.authUser ? (
                <DashboardPage userId={data?.authUser?._id} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route
            path="/project/:id"
            element={
              loading ? (
                ""
              ) : data?.authUser ? (
                <ProjectPage />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/* uncomment import and route path to access animation tester */}
          {/* <Route path="/animtester" element={<AnimationTester />} /> */}
          <Route path="expired" element={<SessionExpiredPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
