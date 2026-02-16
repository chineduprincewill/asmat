import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./public/login"
import ThemeToggle from "./components/theme-toggle"
import Footer from "./components/footer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./auth-pages/layout/protected-route";
import Dashboard from "./auth-pages/dashboard/Dashboard";
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster as Sonner, Toaster } from "./components/ui/sonner"; 
import DefaultLayout from "./auth-pages/layout/DefaultLayout";
import Requests from "./auth-pages/requests/request";
import Reports from "./auth-pages/reports/reports";
import Settings from "./auth-pages/settings/settings";
import AppContextProvider from "./context/AppContext";
import Assets from "./auth-pages/equipments/equipments";
import { setupAxiosInterceptors } from "./utils/axiosConfig";
import { useEffect } from "react";
import Log from "./auth-pages/activity-log/log";

function App() {

  
  const queryClient = new QueryClient();
  
  useEffect(() => {
      setupAxiosInterceptors(() => {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_user');
          window.location.href = '/';
          alert('Your session has expired. Please log in again.');
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <ThemeToggle />
        <div className='w-full'>
          <TooltipProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>}>
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
                    <Route path="/requests" element={<ProtectedRoute><Requests /></ProtectedRoute>} />
                    <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
                    <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                    <Route path="/activity-log" element={<ProtectedRoute><Log /></ProtectedRoute>} />
                  </Route>
              </Routes>
            </Router>
            <Sonner position="top-right" />
          </TooltipProvider>
          <Footer />
        </div>
      </AppContextProvider>
    </QueryClientProvider>
  )
}

export default App
