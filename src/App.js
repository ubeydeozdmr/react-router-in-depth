import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Help/Faq';
import Contact from './pages/Help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/Careers/Careers';
import CareerDetails, {
  careerDetailsLoader,
} from './pages/Careers/CareerDetails';
import CareersError from './pages/Careers/CareersError';

// layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          errorElement={<CareersError />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
