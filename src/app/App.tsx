import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@pages/Layout';
import '@app/style.scss';
import { QuestionsPage } from '@pages/QuestionsPage/QuestionsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <QuestionsPage />
            },
            {
                path: 'ask',
                element: <div>ask</div>
            }
        ]
    }
])

export function App() {
    return (
        <RouterProvider router={router} />
    );
}


