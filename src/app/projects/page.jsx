import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import converter from "../image/converter.webp";
import helpdesk from "../image/helpdesk.webp";
import crm from "../image/crm.webp";

const page = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col justify-center lg:p-7">
        <div className="p-4 m-3 text-center mx-auto rounded-md text-style">
          <h1 className="text-2xl md:text-4xl font-extrabold fade-in">
            My Projects
          </h1>
        </div>
        <div className="p-4 m-5 md:p-1 md:m-1">
          <div className="grid grid-rows-3 md:grid-cols-2 justify-center gap-3 text-center">
            <div className="place-items-center">
              <h2 className="text-style">File Converter Web Application</h2>
              <div className="p-4 m-4 text-style">
                <div className="flex">
                  <div className="mt-2 md:pr-2 rounded-md">
                    <a href="https://github.com/ej84/all-converter">
                      <Image
                        src={converter}
                        alt="file converter"
                        width={265}
                        height={200}
                      />
                    </a>
                  </div>
                  <div className="xl:p-5 mt-1 md:mt-1 lg:mt-4 xl:mt-6 w-full h-40 lg:h-36 rounded-md bg-white text-slate-700">
                    <p className="text-xs p-2 md:text-sm lg:text-base">
                      An online file converter SaaS app that helps edit, modify
                      and create new format files such as image png to webp
                      file, video mp4 to audio mp3, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-items-center">
              <h2 className="text-style">IT HelpDesk Ticketing System</h2>
              <div className="p-4 m-4 text-style">
                <div className="flex">
                  <div className="mt-2 md:pr-2 rounded-md">
                    <a href="https://github.com/ej84/geneidhelpdesk">
                      <Image
                        src={helpdesk}
                        alt="IT Helpdesk"
                        width={265}
                        height={200}
                      />
                    </a>
                  </div>
                  <div className="xl:p-5 mt-1 md:mt-1 lg:mt-4 xl:mt-6 w-full h-40 lg:h-36 rounded-md bg-white text-slate-700">
                    <p className="text-xs p-2 md:text-sm lg:text-base">
                      A currently ongoing project to implement a ticketing
                      system to enable users to request IT technical issues to
                      be solved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-items-center">
              <h2 className="text-style">Django CRM Application</h2>
              <div className="p-4 m-4 text-style">
                <div className="flex">
                  <div className="mt-2 md:pr-2 rounded-md">
                    <a href="https://github.com/ej84/CRManager">
                      <Image src={crm} alt="CRM App" width={265} height={200} />
                    </a>
                  </div>
                  <div className="xl:p-5 mt-1 md:mt-1 lg:mt-4 xl:mt-6 w-full h-40 lg:h-36 rounded-md bg-white text-slate-700">
                    <p className="text-xs p-2 md:text-sm lg:text-base">
                      A full stack customer relationship management web
                      application built based on Python and Django framework
                      with MySQL database.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="place-items-center">
              <h2 className="text-style">Project 4</h2>
              <div className="md:p-10 md:m-4 space-y-3 text-style">
                <a href="https://github.com/ej84/all-converter"></a>
                <p> </p>
              </div>
            </div>*/}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
