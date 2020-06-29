import { Link } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import exitvim from "../images/exitvim.jpg";


function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        keywords={[`how do you exit vim`, `how exit vim`, `exit vim`, `vim`, `quit vim`, `how do you quit vim`]}
        title="Main"
      />

      <main className="text-center mt-8">
        <img
          alt="A funny doctored image from the movie 'Arrival' showing how to exit vim"
          className="block w-11/12 md:w-4/5 lg:w-2/5 mx-auto mb-8"
          src={exitvim}
        />
        <h1 className="text-lg sm:text-2xl"><a className="text-blue-300 hover:underline" href="https://stackoverflow.com/a/11828573/10578398">How to exit vim guide on StackOverflow</a></h1>
      </main>
      <footer className="mx-auto flex mt-16">
          <h2 className="text-md sm:text-lg text-blue-300 hover:underline"><Link to="/about">About</Link></h2>
      </footer>
    </div>
  );
}

export default IndexPage;
