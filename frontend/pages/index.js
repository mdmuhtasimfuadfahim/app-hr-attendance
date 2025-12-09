import { useState } from 'react';
import ClockInOut from '../components/ClockInOut';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ClockInOut />
    </div>
  );
}
