function fn() {
  var env = karate.env;
  if (!env) {
    env = 'dev';
  }

  var config = {
    env: env,
    baseUrl: 'https://petstore.swagger.io/v2',
  };

  // Tiempos de espera por defecto
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);

  return config;
}