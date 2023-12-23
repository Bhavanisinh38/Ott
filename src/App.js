import React from "react";
import MyRouter from "./routers/index";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Adstar</title>
        <meta name="description" content="Adstar"/>
      </Helmet>


      <MyRouter />

    </HelmetProvider>
  );
}

export default App;





