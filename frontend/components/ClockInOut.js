import { useState } from 'react';
import axios from 'axios';

export default function ClockInOut() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [clockedIn, setClockedIn] = useState(false);

  const handleClockIn = async () => {
    setStatus('loading');
    try {
      // TODO: Attach JWT token
      await axios.post('/api/attendance/clock-in');
      setClockedIn(true);
      setMessage('Clocked in successfully!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Clock-in failed');
    }
    setStatus('idle');
  };

  const handleClockOut = async () => {
    setStatus('loading');
    try {
      // TODO: Attach JWT token
      await axios.post('/api/attendance/clock-out');
      setClockedIn(false);
      setMessage('Clocked out successfully!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Clock-out failed');
    }
    setStatus('idle');
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96 text-center">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <button
        className={`w-full py-3 rounded text-white font-semibold mb-4 ${clockedIn ? 'bg-red-500' : 'bg-green-500'}`}
        onClick={clockedIn ? handleClockOut : handleClockIn}
        disabled={status === 'loading'}
      >
        {clockedIn ? 'End Work / Clock Out' : 'Start Work / Clock In'}
      </button>
      {message && <div className="text-sm text-gray-700">{message}</div>}
    </div>
  );
}
