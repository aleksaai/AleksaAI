import React, { useEffect } from 'react';
import { Tools } from '../components/Tools/Tools';

export function ToolsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Tools />;
}