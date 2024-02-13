import { RouteRecordRaw } from 'vue-router';
import { ShowListFolders, ShowListVideos } from '@views/index';

export const videosRoute: RouteRecordRaw = {
  path: '/videos',
  name: 'videos',
  children: [
    {
      path: '',
      name: 'videosDefault',
      component: () => Promise.resolve(ShowListFolders),
    },
    {
      path: ':folderId',
      props: true,
      component: () => Promise.resolve(ShowListVideos),
    },
  ],
};
