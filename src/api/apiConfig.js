const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5e4cba6ffe0438c87866f70ca24d47fa',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;