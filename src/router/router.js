const _import = require('src/utils/import.ts')._import(ENV);

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
