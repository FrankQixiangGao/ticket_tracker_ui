import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Checkout from './checkout';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<div>
    <Checkout />
</div>

);
