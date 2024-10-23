import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@pages/Layout';
import { QuestionsPage } from '@pages/QuestionsPage/QuestionsPage';
import { NewQuestion } from '@pages/NewQuestion/NewQuestion';
import { TagPage } from '@pages/TagPage/TagPage';
import { QuestionPage } from '@pages/QuestionPage/QuestionPage';

import '@app/style.scss';
import { LoginPage } from '@pages/LoginPage/LoginPage';
import { RegisterPage } from '@pages/RegisterPage/RegisterPage';
import { SettingsPage } from '@pages/SettingsPage/SettingsPage';

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
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/settings',
                element: <SettingsPage />
            }
        ]
    }
])

export function App() {
    return (
        <RouterProvider router={router} />
    );
}


