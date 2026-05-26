import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  
  // 💡 VOLVEMOS A LO SEGURO: Reporte HTML limpio y nativo
  reporter: 'html',
  
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    
    // 📸 EL TRUCO BRUTAL: Playwright tomará una foto automática en cada acción/interacción
    screenshot: 'on', 
    
    // Mantenemos tus banderas para bloquear las alertas del llavero de contraseñas de Google
    launchOptions: {
      args: [
        '--disable-features=PasswordLeakDetection', 
        '--credentials-enable-service=false',       
        '--password-store=basic'                    
      ]
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});