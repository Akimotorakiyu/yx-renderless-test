import { inject, provide, reactive } from "vue";

const buttonCoreKey = "ButtonCore";

class ComponentCore {
  readonly isComponentCoreInstance = true;
}

interface IButtonCore {
  status: {
    pending: boolean;
  };
  runner(event: Event): Promise<void>;
}

class ButtonCore extends ComponentCore implements IButtonCore {
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
  }
}

export function useButtonCore(props: {
  logic?: ((event: Event) => void) | undefined;
}) {
  const status = reactive({
    pending: false,
  });

  async function runner(event: Event) {
    status.pending = true;
    await props.logic?.(event);
    status.pending = false;
  }

  const buttonCore = { status, runner };

  provide(buttonCoreKey, buttonCore);

  return buttonCore;
}

export function injectButtonCore() {
  // const buttonCore = inject<ReturnType<typeof useButtonCore>>(buttonCoreKey);
  const buttonCore = inject<ButtonCore>(buttonCoreKey);
  if (buttonCore) {
    return buttonCore;
  } else {
    throw new Error("未获取到注入信息");
  }
}
