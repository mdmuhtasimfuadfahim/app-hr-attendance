# AGENTS.md – AI Agent Protocol for Employee Attendance Tracking

## Purpose
This file defines the AI agents, their roles, and usage instructions for the Employee Attendance Tracking project. It ensures clear separation of responsibilities and enables multi-agent workflows in VS Code.

---

## Agent Definitions

### 1. AttendanceAgent
- **Role:** Handles attendance record creation, validation, and business logic.
- **Scope:** Backend (API, DB, validation)
- **Example Usage:**
  - "AttendanceAgent, clock in employee #123 for today."
  - "AttendanceAgent, flag missing clock-out for employee #456."

### 2. AuthAgent
- **Role:** Manages authentication, authorization, and user management.
- **Scope:** Backend (JWT, login, registration)
- **Example Usage:**
  - "AuthAgent, register new employee with email foo@bar.com."
  - "AuthAgent, verify JWT for user #789."

### 3. FrontendAgent
- **Role:** Handles UI logic, state management, and API integration for attendance features.
- **Scope:** Frontend (React/Next.js, API calls)
- **Example Usage:**
  - "FrontendAgent, render clock-in button for logged-in user."
  - "FrontendAgent, show attendance dashboard for HR."

---

## How to Test Agents in VS Code

1. **Open Chat Panel:**
   - Use the Copilot or AI chat panel in VS Code.

2. **Invoke Agent by Name:**
   - Prefix your request with the agent name, e.g.,
     - `AttendanceAgent, create attendance for employee 101.`
     - `AuthAgent, test login for user foo@bar.com.`
     - `FrontendAgent, show clock-in UI.`

3. **Review Response:**
   - The agent will respond according to its defined role and logic in AGENTS.md.

4. **Combine Agents (Advanced):**
   - For complex flows, you can chain requests:
     - `AuthAgent, login user foo@bar.com. Then AttendanceAgent, clock in for today.`

---

## Notes
- AGENTS.md is experimental and may require VS Code Insider or Copilot Labs for full multi-agent support.
- Place this file in the project root for global effect.
- For subfolder-specific agents, duplicate AGENTS.md in the relevant folder.
