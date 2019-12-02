const isProd = process.env.NODE_ENV === 'production';
export const webSeverBase = isProd ? 'https://plataforma.tuclase.net':'http://localhost:8080';
export const apiSeverBase = isProd ? 'https://ltiapps.tuclase.net':'http://localhost:3000';