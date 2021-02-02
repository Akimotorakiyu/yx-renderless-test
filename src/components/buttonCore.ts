import { inject, provide, reactive } from "vue";

class ComponentCore {
  readonly isComponentCoreInstance = true;
}

interface IButtonCore {
  status: {
    pending: boolean;
  };
  runner(event: Event): Promise<void>;
}

export class ButtonCore extends ComponentCore implements IButtonCore {
  static buttonCoreKey = "ButtonCore";
  status = reactive({
    pending: false,
  });

  /**
   * 使用箭头函数
   * @param event
   */
  runner = async (event: Event) => {
    this.status.pending = true;
    await this.props.logic?.(event);
    this.status.pending = false;
  };

  constructor(public props: { logic?: ((event: Event) => void) | undefined }) {
    super();
    provide(ButtonCore.buttonCoreKey, this);
  }
}

export function injectButtonCore() {
  // const buttonCore = inject<ReturnType<typeof useButtonCore>>(buttonCoreKey);
  const buttonCore = inject<ButtonCore>(ButtonCore.buttonCoreKey);
  if (buttonCore) {
    return buttonCore;
  } else {
    throw new Error("未获取到注入信息");
  }
}
