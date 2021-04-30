import { createRef } from 'react';

export const navigationRef = createRef<any>();

export function navigate(name: string, params: Object = {}) {
  navigationRef.current?.navigate(name, params);
}

