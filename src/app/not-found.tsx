// "use client";

// this page for ERROR 404

import Image from "next/image";

const NotFound = () => {
  return (
    <main className=" m-auto my-10 flex max-w-5xl flex-col space-y-5 px-3 text-center">
      <Image
        src={"/assets/IconLogo.png"}
        alt="Logo"
        className="m-auto flex  justify-center "
        width={250}
        height={250}
      />
      <h1>Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </main>
  );
};

export default NotFound;
