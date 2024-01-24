import {defineConfig} from 'vite'
import { resolve } from 'path';


export default defineConfig({
	plugins: [],
	build: { 
		rollupOptions: { 
			input: { 
				main: resolve(__dirname, 'index.html'), 
				portfolio_item_1: resolve(__dirname, 'portfolio-item-1.html'), 
				portfolio_item_2: resolve(__dirname, 'portfolio-item-2.html'),
				portfolio_item_3: resolve(__dirname, 'portfolio-item-3.html'),
				portfolio_item_4: resolve(__dirname, 'portfolio-item-4.html'),
				portfolio_item_5: resolve(__dirname, 'portfolio-item-5.html'),
				portfolio_item_6: resolve(__dirname, 'portfolio-item-6.html'),
				app: resolve(__dirname, './js/index.js')
			 }, 
			},
		 }, 
})
