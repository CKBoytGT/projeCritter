import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import ProjectPage from "./pages/ProjectPage";
//uncomment to access animation tester
// import AnimationTester from "./components/AnimationTester";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/ui/Footer";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import ProjectPageSkeleton from "./components/ui/ProjectPageSkeleton";
import DashboardPageSkeleton from "./components/ui/DashboardPageSkeleton";

function App() {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);

  return (
    <div className="flex flex-col min-h-screen">
      <Header auth={data?.authUser} loadingAuth={loading} />
      {error && (
        <div className="w-full border-b border-b-red-800 p-1 bg-red-100 text-sm text-red-800 text-center font-medium">
          <p>Error logging in.</p>
        </div>
      )}
      {/* mt is for mobile sticky header */}
      <main className="flex flex-col grow mx-auto mt-[3.5rem] md:mt-0 w-full max-w-7xl p-4 md:p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <>
            <Route
              path="/dashboard"
              element={
                loading ? (
                  <DashboardPageSkeleton />
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
                  <ProjectPageSkeleton />
                ) : data?.authUser ? (
                  <ProjectPage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </>
          {/* uncomment to access animation tester */}
          {/* <Route path="/animtester" element={<AnimationTester />} /> */}
          {/* <Route path="/spinnertest" element={<LoadingSpinner />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
