export const createAuditLog = (editor, summary) => ({
  editor,
  timestamp: new Date().toISOString(),
  summary
});
