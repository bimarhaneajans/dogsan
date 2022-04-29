import { useCallback, useEffect, useState } from 'react';
import { noop } from "@thalesrc/js-utils";

export function useFetch(
  fetcher,
  defaultValue = null,
  { setLoading = noop, deps = [], reloadDeps = [] } = {}
) {
  const [data, setData] = useState(defaultValue);
  const fetch = useCallback(async () => {
    setLoading(true);
    setData(await fetcher());
    setLoading(false);
  }, deps); // eslint-disable-line

  useEffect(() => {
    fetch();
  }, reloadDeps); // eslint-disable-line

  return [data, fetch, setData];
}
