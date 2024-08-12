import React from 'react';
import QRCode from 'react-qr-code';

interface QRCodeComponentProps {
  value: string;
  size?: number;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ value, size = 256 }) => {
  return (
    <div style={{ height: 'auto', margin: '0 auto', maxWidth: size, width: '100%', background: 'white', padding: '16px', marginTop: '16px' }}>
      <QRCode
        size={size}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={value}
        viewBox={`0 0 ${size} ${size}`}
      />
    </div>
  );
};

export default QRCodeComponent;