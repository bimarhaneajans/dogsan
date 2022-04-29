import { uniqueId } from '@thalesrc/js-utils';
import { useState } from 'react';

export function useUniqueId(prefix) {
  const [id] = useState(() => uniqueId(prefix));

  return id;
}
