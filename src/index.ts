import './styles.css';
import './views/todo-view';
import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
  registerSW();
});

function initRouter() {
  const router = new Router(document.querySelector('main'));

  router.setRoutes([
    {
      path: '/pwa-play/',
      component: 'todo-view'
    },
    {
      path: '/pwa-play/todo',
      component: 'todo-view'
    },
    {
      path: '/pwa-play/wired',
      component: 'wired-todo-view',
      action: () => import(/* webpackChunkName: "stats" */ './views/wired-todo-view')
    },
    {
      path: '/pwa-play/stats',
      component: 'stats-view',
      action: () => import(/* webpackChunkName: "stats" */ './views/stats-view')
    },
    {
      path: '(.*)',
      component: 'not-found-view',
      action: () => import(/* webpackChunkName: "not-found-view" */ './views/not-found-view')
    }
  ]);
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log('ServiceWorker registration failed. Sorry about that.', e);
    }
  } else {
    console.log('Your browser does not support ServiceWorker.');
  }
}
