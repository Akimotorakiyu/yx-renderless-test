import { inject, provide, reactive } from "vue";

const buttonCoreKey = "ButtonCore";

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
  const buttonCore = inject<ReturnType<typeof useButtonCore>>(buttonCoreKey);
  if (buttonCore) {
    return buttonCore;
  } else {
    throw new Error("未获取到注入信息");
  }
}
