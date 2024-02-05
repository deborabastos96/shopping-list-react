import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function AppLayout() {
  return (
    <div className="mx-auto grid h-screen max-w-[1300px] grid-rows-[auto_1fr] gap-10 p-[2rem]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
