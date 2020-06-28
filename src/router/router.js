const _import = require('src/utils/import.ts')._import(process.env.NODE_ENV);

export default [
    {
        path: '/',
        component: _import('Home'),
        name: '',
    },
    {
        path: '*',
        redirect: '/',
    },
];
