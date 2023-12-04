import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import babelJsx from '@locator/babel-jsx/dist';
import ReactInspector from 'vite-plugin-react-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactInspector(),react()],
  define: {
    'process.env.VITE_KEY': JSON.stringify(process.env.VITE_KEY),
  }
})
