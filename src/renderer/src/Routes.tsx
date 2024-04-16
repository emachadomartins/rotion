import { Route, Router } from 'electron-router-dom'
import React from 'react'
import { Blank } from './pages/blank'
import { Document } from './pages/document'
import { Default } from './pages/layouts/default'

export const Routes: React.FC = () => (
  <Router
    main={
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Blank></Blank>} />
        <Route path="/document" element={<Document></Document>} />
      </Route>
    }
  />
)
