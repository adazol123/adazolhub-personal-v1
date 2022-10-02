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
import LearningLayout from './layouts/LearningLayout';
import FormStep from './components/learning/FormStep'
import GettingStarted from './components/learning/GettingStarted'
import useScrollToTop from './utils/helper/useScrollToTop';
import ImagePreviewWithFileReader from './components/learning/ImagePreviewWithFileReader'

const queryClient = new QueryClient()

function App() {
  useScrollToTop()
  const [count, setCount] = useState(0)
  const menuState = useToggleStore(state => state.menu)
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<div className='min-h-screen grid place-content-center place-items-center gap-2'>
        <h5>ADAZOLHUB</h5>
        <span className='relative h-6 w-16'>
          <img className='absolute inset-0' src='/images/1484.gif' alt='loading...' />

        </span>
      </div>}>

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
            <Route path='/learning' element={<Learning />} >
              <Route index element={<GettingStarted />} />
              <Route path='zustand' element={<LearningLayout />} />
              <Route path='image-preview' element={<ImagePreviewWithFileReader />} />
              <Route path='form-stepper' element={<FormStep />} />
            </Route>
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
