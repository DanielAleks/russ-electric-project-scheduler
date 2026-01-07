const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/inventory', component: () => import('pages/InventoryOverview.vue') },
      { path: '/inventory/details', component: () => import('pages/InventoryDetails.vue') },
      { path: '/daily-equipment', component: () => import('pages/DailyEquipment.vue') },
      { path: '/upload-receipts', component: () => import('pages/UploadReceipts.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
