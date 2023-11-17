function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const AUTH_ROOTS = {
    root:ROOTS_AUTH,
    login:path(ROOTS_AUTH, '/login'),
    register:path(ROOTS_AUTH, '/register'),
    verify:path(ROOTS_AUTH,'/verify'),
    resetPassword:path(ROOTS_AUTH, '/resetPassword'),
    newPassword:path(ROOTS_AUTH, '/newPassword'),
}

export const DASHBOARD_ROOTS = {
    root:ROOTS_DASHBOARD,
    notes:{
        root:path(ROOTS_DASHBOARD, '/notes'),
        onlineNotes:path(ROOTS_DASHBOARD, '/onlinenotes'),
        browseNotes:path(ROOTS_DASHBOARD, '/browsenotes'),
    },
    profile:{
        root:path(ROOTS_DASHBOARD, '/profile'),
        edit:path(ROOTS_DASHBOARD, '/edit'),
    },
    publication:{
        root:path(ROOTS_DASHBOARD, '/publications'),
        newPubication:path(ROOTS_DASHBOARD, '/newpublication'),
        editPublication:path(ROOTS_DASHBOARD, '/editpublication'),
    }
}

export const PAGE_ROOTS = {
    comingSoon: '/coming-soon',
    maintenance: '/maintenance',
    pricing: '/pricing',
    payment: '/payment',
    about: '/about-us',
    contact: '/contact-us',
    faqs: '/faqs',
    page403: '/403',
    page404: '/404',
    page500: '/500',
    components: '/components',
}

export const DOCS = {
    root: 'https://example.com',
    changelog: 'https://docs.example.com/changelog',
}