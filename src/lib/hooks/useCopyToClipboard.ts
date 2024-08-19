// hooks/useCopyToClipboard.ts

import { useCallback } from 'react';

const useCopyToClipboard = () => {
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      //console.log('Texto copiado para o clipboard:', text);
    } catch (err) {
      console.error('Falha ao copiar o texto para o clipboard:', err);
    }
  }, []);

  return copyToClipboard;
};

export default useCopyToClipboard;
