import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import List from './pages/List';
import PageNotFound from './pages/PageNotFound';
import { ShoppingListProvider } from './context/ShoppingListContexts';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <ShoppingListProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="list" element={<List />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ShoppingListProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#f9fafb)',
            color: '#374151',
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
