
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyProfile from "../components/MyProfile";
import Accordion from "../components/Accordion";
import Interests from "../components/Interests";
import AlertBox from "../components/AlertBox";
import MiddleColumns from "../components/MiddleColumns";
import RightColumns from "../components/RightColumns";
export default function SocialPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-3">
            <MyProfile />
            <Accordion />
            <Interests />
            <AlertBox />
          </aside>
          <MiddleColumns />
          <RightColumns />
        </div>
        <Footer />
      </main>
    </div>
  );
}