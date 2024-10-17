import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000 
  },
  build: {
    rollupOptions: {
      external: [
        'assets/vendor/aos/aos.js',
        'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        'assets/vendor/glightbox/js/glightbox.min.js',
        'assets/vendor/isotope-layout/isotope.pkgd.min.js',
        'assets/vendor/php-email-form/validate.js',
        'assets/vendor/purecounter/purecounter.js',
        'assets/vendor/swiper/swiper-bundle.min.js',
        'assets/vendor/waypoints/noframework.waypoints.js',
        'assets/js/main.js'
      ]
    }
  }
})
