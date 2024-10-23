import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@pages/Layout';
import { QuestionsPage } from '@pages/QuestionsPage/QuestionsPage';
import { NewQuestion } from '@pages/NewQuestion/NewQuestion';
import { TagPage } from '@pages/TagPage/TagPage';
import { QuestionPage } from '@pages/QuestionPage/QuestionPage';

import '@app/style.scss';

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
                element: <TagPage />
            },
            {
                path: '/questions/:id',
                element: <QuestionPage />
            }
        ]
    }
])

export function App() {
    return (
        <RouterProvider router={router} />
    );
}


