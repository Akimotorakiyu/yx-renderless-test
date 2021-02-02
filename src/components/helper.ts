class ComponentCore {
  readonly isComponentCoreInstance = true;
}

function provideHelper<T extends ComponentCore>(rootkey: string, data: T) {}
