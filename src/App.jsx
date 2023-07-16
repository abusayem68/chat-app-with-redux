import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Conversation from './pages/Conversation';
import Inbox from './pages/Inbox';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'inbox',
      element: <Conversation />,
    },
    {
      path: 'inbox/:id',
      element: <Inbox />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
