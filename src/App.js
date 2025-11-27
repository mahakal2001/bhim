import React from "react";
import "./App.css";
import Home from "./components/index/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">

      <Helmet>
        <title>Bhim Charan Bhakta - Full-Stack Developer - Leadstocompany</title>

        <meta
          name="description"
          content="Bhim Charan Bhakta is a Full-Stack Developer and Project Coordinator at Leadstocompany,skilled in web apps, ERP, CRM, SaaS solutions."
        />

        <link rel="canonical" href="https://bhim.vercel.app/" />
      </Helmet>

      <Home/>
    </div>
  );
}

export default App;



// Github Token

// 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

