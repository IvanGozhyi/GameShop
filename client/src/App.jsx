import './App.css'
import AppRoutes from "./routes/AppRoutes.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Toast from "./components/Toast/Toast.jsx";

function App() {

  return (
    <>
        <Provider store={store}>
            <BrowserRouter>
                    <Header />
                    <Toast/>
                    <main className="app-content">
                        <AppRoutes />
                    </main>
                    <Footer />
            </BrowserRouter>
        </Provider>
    </>
  )
}

export default App
