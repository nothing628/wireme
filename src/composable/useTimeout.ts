import { ref, Ref, unref, isRef, watchEffect } from "vue";

export default function (duration: number | Ref<number>, callback: () => any) {
  const timeoutId = ref<number | null>(null);

  function resetTimeout() {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
    }

    timeoutId.value = setTimeout(callback, unref(duration));
  }

  if (isRef(duration)) {
    watchEffect(resetTimeout);
  } else {
    resetTimeout();
  }

  return { timeoutId };
}
