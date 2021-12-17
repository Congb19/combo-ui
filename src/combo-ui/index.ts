import { App } from 'vue';

export * as C from './components';

export const create = (components?: any[]) => {
  const registerComponent = (app: App, name: string, component: any) => {
    const registered = app.component(name);
    if (!registered) app.component(name, component);
  };
  const install = (app: App) => {
    if (components?.length && components.length > 0)
      components.forEach((component) => {
        const { name } = component;
        if (import.meta.env.DEV) console.log('component registered, ', name);
        registerComponent(app, name, component);
      });
  };
  return {
    install,
  };
};
