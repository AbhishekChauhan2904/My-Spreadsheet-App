'use client';

import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Toolbar from './components/Toolbar';
import Footer from './components/footer';
import { SpreadsheetProvider } from './Spreadsheet';

export default function Home() {
  return (
    <SpreadsheetProvider>
      <Header />
      <div className="container mx-auto p-4 mt-16">
      <Toolbar />
        <Grid />
        </div>
      <Footer/>
    </SpreadsheetProvider>
  );
}
