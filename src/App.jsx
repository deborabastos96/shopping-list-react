import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import List from './pages/List';
import PageNotFound from './pages/PageNotFound';
import { ShoppingListProvider } from './context/ShoppingListContexts';

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
    </BrowserRouter>
  );
}

export default App;
