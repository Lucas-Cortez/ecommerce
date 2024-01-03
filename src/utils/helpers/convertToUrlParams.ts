type Native = string | number | boolean;

export const convertToUrlParams = (obj: Record<string, Native | Native[]>): string => {
  const params = new URLSearchParams();

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else {
      params.append(key, String(value));
    }
  });

  return params.toString();
};
