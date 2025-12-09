import express from 'express';
import { clockIn, clockOut, getAttendance, updateAttendance, exportAttendance } from '../controllers/attendance.controller.js';
import { authenticate, authorize } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/clock-in', authenticate, clockIn);
router.post('/clock-out', authenticate, clockOut);
router.get('/', authenticate, authorize(['admin', 'hr']), getAttendance);
router.patch('/:id', authenticate, authorize(['admin', 'hr']), updateAttendance);
router.get('/export', authenticate, authorize(['admin', 'hr']), exportAttendance);

export default router;
