import React from "react";
import {Link} from 'gatsby';
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <SEO
        keywords={[`404`, `vim`, `how to exit vim 404`, `404 vim`, `vim 404`]}
        title="404 Not Found"
      />

      <h1 className="text-gray-200 text-2xl text-center">404 Not Found</h1>
      <h2 className="text-blue-300 text-2xl text-center hover:underline"><Link to="/">Main Page</Link></h2>

    </div>
  );
}

export default NotFoundPage;
