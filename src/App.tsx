import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import FooterContact from './components/footer/contact/FooterContact'
import HeaderNav from './components/header/nav/HeaderNav'
import NavOverlay from './components/overlay/nav/NavOverlay'
import Resume from './pages/resume'
import { useToggleStore } from './store/store'
const Home = React.lazy(() => import('./pages'))
const Contact = React.lazy(() => import('./pages/contact'))
const Introduction = React.lazy(() => import('./pages/introduction'))
const Learning = React.lazy(() => import('./pages/learning'))
const Projects = React.lazy(() => import('./pages/projects'))
const UXCaseStudy = React.lazy(() => import('./pages/ux-case-study'))
import './styles/App.css'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)
  const menuState = useToggleStore(state => state.menu)
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<div>Loading ...</div>}>

        <main>


          <HeaderNav />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/introduction' >
              <Route index element={<Introduction />} />
              <Route path='resume' element={<Resume />} />
            </Route>
            <Route path='/projects' element={<Projects />} />
            <Route path='/ux-case-study' element={<UXCaseStudy />} />
            <Route path='/learning' element={<Learning />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <FooterContact />
        </main>
        <AnimatePresence mode='sync'>

          {menuState && <NavOverlay />}
        </AnimatePresence>
      </React.Suspense>
    </QueryClientProvider>
  )
}

export default App
