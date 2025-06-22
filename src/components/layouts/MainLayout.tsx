
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom'
import WhatsAppFloat from '../common/WhatsappFloat';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col px-1 pt-25">
      <Header />
      <main className="flex-1">
        <Outlet />
        <WhatsAppFloat/>
      </main>
      <Footer />
    </div>
  );
}