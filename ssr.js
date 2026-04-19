import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.js';

// We need to compile the React code on the fly or use ts-node.
// Actually, it's easier to build an SSR entry point with Vite.
