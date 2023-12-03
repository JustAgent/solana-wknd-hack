import {RouterProvider} from "react-router-dom";
import {router} from "./app/pages/router.tsx";
import {Providers} from "./providers.tsx";

function App() {
    return (
        <Providers>
            <RouterProvider router={router}/>
        </Providers>
    );
}

export default App
