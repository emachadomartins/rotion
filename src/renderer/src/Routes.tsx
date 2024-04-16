import { Route, Router } from 'electron-router-dom'
import React from 'react'
import { Blank } from './pages/blank'
import { Document } from './pages/document'

export const Routes: React.FC = () => (
  <Router
    main={
      <>
        <Route path="/" element={<Blank></Blank>} />
        <Route path="/document" element={<Document></Document>} />
      </>
    }
  />
)
