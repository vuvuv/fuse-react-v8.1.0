import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

export const homeNavigation = [
  {
    id: 'example-component',
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
    group: 'home',
  },
  {
    id: 'page-component-1',
    title: 'Page 1',
    translate: 'PAGE1',
    type: 'item',
    // icon: 'heroicons-outline:star',
    url: 'page_1',
    group: 'home',
  },
  {
    id: 'page-component-2',
    title: 'Page 2',
    translate: 'PAGE2',
    type: 'item',
    // icon: 'heroicons-outline:star',
    url: 'page_2',
    group: 'home',
  },
  {
    id: 'page-component-3',
    title: 'Page 3',
    translate: 'PAGE3',
    type: 'item',
    // icon: 'heroicons-outline:star',
    url: 'page_3',
    group: 'home',
  },
];

export const adminNavigation = [
  {
    id: 'table-component-1',
    title: 'Table 1',
    translate: 'TABLE1',
    type: 'item',
    // icon: 'heroicons-outline:star',
    url: 'table_1',
    group: 'admin',
  },
  {
    id: 'table-component-2',
    title: 'Table 2',
    translate: 'TABLE2',
    type: 'item',
    // icon: 'heroicons-outline:star',
    url: 'table_2',
    group: 'admin',
  },
  {
    id: 'table-component-3',
    title: 'Table 3',
    translate: 'TABLE3',
    type: 'item',
    // icon: 'heroicons-outline:star',
    url: 'table_3',
    group: 'admin',
  },
];
