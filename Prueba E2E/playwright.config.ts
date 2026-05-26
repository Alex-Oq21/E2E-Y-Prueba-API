import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  
  reporter: 'html',
  
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    
    
    screenshot: 'on', 
    
    
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