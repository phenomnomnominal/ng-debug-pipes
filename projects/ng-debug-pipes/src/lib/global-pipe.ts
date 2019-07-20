import { ComponentFactory, Pipe } from '@angular/core';

const GLOBAL_PIPES = [];

Object.defineProperty(ComponentFactory.prototype, 'componentDef', (() => {
  let componentDef;
  return {
    get () {
      return componentDef;
    },
    set (newComponentDef) {
      componentDef = newComponentDef;
      const pipeDefs = componentDef.pipeDefs || (() => []);
      componentDef.pipeDefs = () => {
        return [...pipeDefs(), ...GLOBAL_PIPES];
      };
    }
  };
})());

export function GlobalPipe (pipe: Pipe) {
  GLOBAL_PIPES.push((pipe as any).ngPipeDef);
}
