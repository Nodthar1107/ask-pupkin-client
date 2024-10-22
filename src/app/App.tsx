import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@pages/Layout';
import '@app/style.scss';
import { QuestionsPage } from '@pages/QuestionsPage/QuestionsPage';
import { NewQuestion } from '@pages/NewQuestion/NewQuestion';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <QuestionsPage />
            },
            {
                path: '/new-question',
                element: <NewQuestion />
            },
            {
                path: '/questions',

            }
        ]
    }
])

export function App() {
    return (
        <RouterProvider router={router} />
    );
}


