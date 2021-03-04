export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

/**
 * Взято из https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts
 * Ошибка и успешный результат поменяны местами (сначала успешный)
 *
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[undefined, U] | [T, null]> {
  return promise
    .then<[T, null]>((data: T) => [data, null])
    .catch<[undefined, U]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [undefined, err];
    });
}

function trimInner(str: string): string {
  return str.replace(/\s/g, "");
}

export function toNumber<T>(value: T): number {
  if (typeof value === "number") {
    return value;
  }
  if (!value) {
    return 0;
  }
  if (typeof value === "boolean") {
    return Number(value);
  }
  return parseInt(trimInner(String(value)), 10);
}

export function generateId(): string {
  return Math.random().toString(16).slice(2);
}

export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const ret: any = {};
  keys.forEach((key) => {
    ret[key] = obj[key];
  });
  return ret;
}
