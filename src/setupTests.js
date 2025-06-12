import '@testing-library/jest-dom';
import crypto from 'crypto';

// Polyfill for libraries requiring crypto.getRandomValues
Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomFillSync(arr),
  },
});
