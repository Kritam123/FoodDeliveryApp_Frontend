import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import SearchPage from "./pages/SearchPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Layout showHero>
            <HomePage />
          </Layout>
        } />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route
          path="/search/:city"
          element={
            <Layout showHero={false}>
              <SearchPage />
            </Layout>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/user-profile"
            element={
              <Layout>
                <UserProfilePage />
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
