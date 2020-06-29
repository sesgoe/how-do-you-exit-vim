import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SEO
        keywords={[`about`, `tailwind`, `gatsby`, `gatsbyjs`, `tailwindcss`, `twitter`, `jeff atwood`, `@codinghorror`, `arrival`, `arrival movie`, `vim`, `how to exit vim`, `how do you exit vim`, `vim about`]}
        title="About"
      />

      <main className="mx-auto mt-4 flex flex-col justify-start sm:justify-center sm:content-center sm:items-center p-4">
        <section>
          <h1 className="text-lg text-gray-300 text-left sm:text-center">Hi there, I&#39;m <a className="text-blue-300 hover:underline" href="https://twitter.com/sesgoe/">@sesgoe</a>. I built this tiny site as a joke in reference to a <a className="text-blue-300 hover:underline" href="https://twitter.com/codinghorror/status/1276934067015974912">tweet by Jeff Atwood</a>:</h1>
        </section>
        <section className="mt-4 flex justify-center w-full sm:w-2/5">
          <blockquote className="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/z82f2HsVE2">pic.twitter.com/z82f2HsVE2</a></p>&mdash; Jeff Atwood (@codinghorror) <a href="https://twitter.com/codinghorror/status/1276934067015974912?ref_src=twsrc%5Etfw">June 27, 2020</a></blockquote>
        </section>
        <section className="mt-4">
          <h1 className="text-lg text-gray-300 text-left sm:text-center">I added the [Enter] to complete the joke. I hope you smiled!</h1>
          <h2 className="text-lg text-gray-500 text-left sm:text-center mt-2">The picture is in reference to the movie <a className="text-blue-300 hover:underline" href="https://en.wikipedia.org/wiki/Arrival_(film)">Arrival</a>.</h2>
        </section>
        <section className="mt-4">
          <h2 className="text-sm text-gray-500 text-left sm:text-center">This site was built with <a className="text-blue-300 hover:underline" href="https://www.gatsbyjs.org/">Gatsby</a>, <a className="text-blue-300 hover:underline" href="https://tailwindcss.com/">TailwindCSS</a>, and is deployed on <a className="text-blue-300 hover:underline" href="https://www.netlify.com/">Netlify</a> with <a className="text-blue-300 hover:underline" href="https://www.cloudflare.com/">Cloudflare</a> acting as a cache.</h2>
          <h2 className="text-sm text-gray-500 text-left sm:text-center">You can find the source at <a className="text-blue-300 hover:underline" href="https://github.com/sesgoe/how-do-you-exit-vim">github.com/sesgoe/how-do-you-exit-vim</a></h2>
        </section>
        <footer className="mt-4">
          <h3 className="text-lg text-blue-300 hover:underline text-center"><Link to="/">Main Page</Link></h3>
        </footer>
      </main>
    </div>
  );
}

export default AboutPage;
