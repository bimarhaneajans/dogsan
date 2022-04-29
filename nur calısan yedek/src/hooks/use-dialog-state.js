import { useCallback, useMemo, useState } from "react";

export function useDialogState() {
  const [opened, setOpened] = useState();

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  return useMemo(() => ([opened, open, close]), [opened, open, close]);
}
