import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute w-full h-screen flex justify-center items-center">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-50 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <Sidebar />
    </div>
  );
}
