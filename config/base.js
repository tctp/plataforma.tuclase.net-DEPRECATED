const isProd = process.env.NODE_ENV === 'production';
export const webSeverBase = isProd ? 'https://plataforma.tuclase.net':'http://localhost:8080';
export const apiSeverBase = 'https://ltiapps.tuclase.net';

/*Para DEV*/
//export const apiSeverBase = isProd ? 'https://ltiapps.tuclase.net':'http://localhost:3000';

/*para QA*/
//export const apiSeverBase = 'https://ltiapps-stage.tuclase.net';



