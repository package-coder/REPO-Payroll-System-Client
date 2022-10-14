import MainLayout from '../layouts/Main'


const appRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <div>This is children</div>
        }
    ]
}


export default appRoutes