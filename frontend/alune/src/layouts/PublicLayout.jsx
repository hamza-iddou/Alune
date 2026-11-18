import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#212121] w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
