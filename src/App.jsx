import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import useAuthChek from './hooks/useAuthChek';
import Conversation from './pages/Conversation';
import Inbox from './pages/Inbox';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const authCheck = useAuthChek();
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: 'register',
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
    {
      path: 'inbox',
      element: (
        <PrivateRoute>
          <Conversation />
        </PrivateRoute>
      ),
    },
    {
      path: 'inbox/:id',
      element: (
        <PrivateRoute>
          <Inbox />
        </PrivateRoute>
      ),
    },
  ]);
  return !authCheck ? (
    <div>Checking Authentication</div>
  ) : (
    <RouterProvider router={router} />
  );
}

export default App;
