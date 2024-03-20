import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold">
          Hello! My name is Richard and I am a Full Stack Web Developer.
        </h1>
      </div>
      <div>
        <h3>About Me</h3>
      </div>
      <div>
        <p>Projects</p>
      </div>
    </main>
  );
}
