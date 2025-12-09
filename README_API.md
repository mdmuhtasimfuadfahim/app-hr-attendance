# API Documentation (Stub)

## Auth
- POST `/api/auth/login` – Login
- POST `/api/auth/register` – Register

## Attendance
- POST `/api/attendance/clock-in` – Employee clock-in
- POST `/api/attendance/clock-out` – Employee clock-out
- GET `/api/attendance` – Admin/HR: List/filter attendance
- PATCH `/api/attendance/:id` – Admin/HR: Edit attendance
- GET `/api/attendance/export` – Admin/HR: Export attendance (CSV/Excel/PDF)

## Notes
- All endpoints require JWT except `/auth/*`.
- See code for request/response details.
