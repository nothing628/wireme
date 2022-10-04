import { ref, Ref, unref, isRef, watchEffect } from "vue";

export default function (interval: number | Ref<number>, callback: () => any) {
  const intervalId = ref<number | null>(null);

  function resetInterval() {
    if (intervalId.value) {
      clearInterval(intervalId.value);
    }
  }

  function doInterval() {
    resetInterval();

    intervalId.value = setInterval(callback, unref(interval));
  }

  if (isRef(interval)) {
    watchEffect(doInterval);
  } else {
    doInterval();
  }

  return { intervalId, resetInterval };
}
