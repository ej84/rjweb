import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import converter from "../image/converter.webp";

const page = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col justify-center lg:p-8">
        <div className="p-4 m-4 text-center mx-auto rounded-md text-style">
          <h1 className="text-2xl md:text-4xl font-extrabold fade-in">
            My Projects
          </h1>
        </div>
        <div className="p-4 m-5 md:p-1 md:m-1">
          <div className="grid grid-rows-3 md:grid-cols-2 justify-center gap-3 text-center">
            <div className="">
              <h2 className="text-style">File Converter Web Application</h2>
              <div className="md:p-4 md:m-4 text-style space-y-3">
                <div className="">
                  <a href="https://github.com/ej84/all-converter">
                    <Image
                      src={converter}
                      alt="file converter"
                      width={140}
                      height={200}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-style">
                File Converter Web Application Project
              </h2>
              <div className="md:p-10 md:m-4 space-y-3 text-style">
                <a href="https://github.com/ej84/all-converter"></a>
                <p> </p>
              </div>
            </div>
            <div>
              <h2 className="text-style">
                File Converter Web Application Project
              </h2>
              <div className="md:p-10 md:m-4 space-y-3 text-style">
                <a href="https://github.com/ej84/all-converter"></a>
                <p> </p>
              </div>
            </div>
            <div>
              <h2 className="text-style">
                File Converter Web Application Project
              </h2>
              <div className="md:p-10 md:m-4 space-y-3 text-style">
                <a href="https://github.com/ej84/all-converter"></a>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
