import { BrowserRouter } from 'react-router-dom';
import { PageRouter } from './components/PageRouter';
import { NavBar } from './components/nav/NavBar';

export default () => {
    return (
        <>
            <BrowserRouter>
                <div className="fixed inset-0 w-screen h-screen bg-gradient-to-r from-blue-950 via-sky-700 to-blue-950 z-0"></div>
                
                <NavBar />
                
                <PageRouter />
            </BrowserRouter>
        </>
    )
}