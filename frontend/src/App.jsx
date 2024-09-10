import Header from "./components/header/header";
import Home from "./components/pages/home";
import { AuthProvider } from "./contexts/authContext/AuthProvider";
import './tailwind-output.css';
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow"> 
        <AppRoutes /> 
      </div>
      </div>
    </AuthProvider>
  );
}

export default App;