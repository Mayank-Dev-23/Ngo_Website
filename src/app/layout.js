'use client'

import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import formDataReducer from "@/slices/formDataSlice";
import { configureStore } from "@reduxjs/toolkit";





const inter =Inter({
  subsets:['latin'],
})

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    // Other reducers if you have them
  },
});

// export const metadata = {
//   title: "Sikaria Foundation",
//   description: "Sikaria Foundation",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         
      <body className={inter.className}>
  
        <Provider store={store}>
        
          <Header />
          
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
