export function xpForTask(task) {
  const base = 10;
  const priorityBonus = (task.priority || 1) * 5;
  const timeBonus = task.estimatedMinutes ? Math.min(20, Math.round(task.estimatedMinutes / 10)) : 0;
  return base + priorityBonus + timeBonus;
}

export function applyCompletionRewards(user, task) {
  const xp = xpForTask(task);
  const newXP = (user.xp || 0) + xp;
  const level = Math.floor(newXP / 100) + 1;
  const coinReward = Math.max(1, Math.round(xp / 5));
  const streak = (user.lastCompletionDate && isYesterday(user.lastCompletionDate)) ? (user.streak || 0) + 1 : 1;

  return {
    ...user,
    xp: newXP,
    level,
    coins: (user.coins || 0) + coinReward,
    streak,
    lastCompletionDate: new Date().toISOString(),
  };
}

function isYesterday(isoDate) {
  if (!isoDate) return false;
  const d = new Date(isoDate);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return d.getFullYear() === yesterday.getFullYear() && d.getMonth() === yesterday.getMonth() && d.getDate() === yesterday.getDate();
}
