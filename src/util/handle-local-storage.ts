const runningInBrowser = typeof window !== "undefined";

export const handleLocalStorage = () => {
  const setLocalStorage = (key: string, data: unknown) => {
    if (!runningInBrowser) return;
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      localStorage.clear();
    }
  };

  const getLocalStorage = <T = string>(key: string): T | null => {
    if (!runningInBrowser) return null;
    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;
      return JSON.parse(item) as T;
    } catch (e) {
      return null;
    }
  };

  const removeLocalStorage = (key: string) => {
    if (!runningInBrowser) return;
    try {
      localStorage.removeItem(key);
    } catch (e) {
      return;
    }
  };

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  };
};
