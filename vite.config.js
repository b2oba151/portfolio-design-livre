import { defineConfig } from 'vite'

export default defineConfig({

    root: './', // Répertoire de base pour la résolution des chemins relatifs
    base: '/', // URL de base pour le développement des assets ici c est /assets/...

  // Configuration du processus de build
  build: {
    // Options spécifiques à Rollup
    rollupOptions: {
      // Point d'entrée de l'application
      input: ['index.html'],

      // Options spécifiques à la sortie générée par Rollup
      output: {
        // Format des noms de fichiers pour les fichiers d'entrée
        entryFileNames: 'assets/[name].js',
        // Format des noms de fichiers pour les chunks
        chunkFileNames: 'assets/[name].js',
        // Format des noms de fichiers pour les assets
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Répertoire de sortie du build
    outDir: 'dist',
    // Vide le répertoire de sortie avant chaque build
    emptyOutDir: true,
    // Contrôle si le code doit être minifié
    minify: false,
    // Active la génération de fichiers source map pour le débogage
    sourcemap: true,
    // Active le rapport de la taille compressée des fichiers générés
    // reportCompressedSize: true,
    // Active le rapport de la taille des fichiers après la compression Brotli
    // brotliSize: true,
    // Active la génération d'un fichier de manifeste
    manifest: true,
    // Active la gestion du chemin public
    publicPath: true,
    // Limite de taille (en kilo-octets) pour les avertissements de taille des chunks
    // chunkSizeWarningLimit: 1024,
    copyPublicDir: false,


  },
  server: {
    // Configuration de l'origine du serveur (peut être utile pour CORS)
    origin: 'http://127.0.0.1:8080',

    // Port sur lequel le serveur de développement écoutera les requêtes
    port: 8080,

    // Activation de la vérification stricte du port (erreur si déjà utilisé)
    strictPort: true,

    //  Ouvre pas automatiquement le navigateur lorsque le serveur démarre
    open: false,

    // Adresse IP à laquelle le serveur sera lié
    host: '127.0.0.1',

    // Activation du Hot Module Replacement (HMR)  rafraichissement automatique
    hmr: true,

    // Désactivation du support HTTPS pour le serveur de développement
    https: false,

    // Activation de la gestion des en-têtes CORS
    cors: true,

    // Configuration des règles de proxy pour rediriger certaines requêtes
    proxy: {
        // Toute requête commençant par "/api" est redirigée vers "http://127.0.0.1:5000"
        '/api': {
            target: 'http://127.0.0.1:5000',
            
            // Change l'en-tête d'origine de la requête vers celui du serveur cible
            changeOrigin: true,

            // Réécrit le chemin de la requête en retirant le préfixe "/api" avant de la rediriger
            rewrite: (path) => path.replace(/^\/api/, '')
        },
    },
},

})
