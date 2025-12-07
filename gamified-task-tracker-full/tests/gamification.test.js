import { xpForTask, applyCompletionRewards } from '../src/services/gamificationService';

test('xpForTask scales with priority and estimated time', () => {
  const task = { priority: 3, estimatedMinutes: 45 };
  const xp = xpForTask(task);
  expect(xp).toBeGreaterThanOrEqual(10);
});

test('applyCompletionRewards increases xp, coins, and updates level', () => {
  const user = { xp: 0, coins: 0, level: 1, streak: 0 };
  const task = { priority: 2, estimatedMinutes: 20 };
  const updated = applyCompletionRewards(user, task);
  expect(updated.xp).toBeGreaterThan(user.xp);
  expect(updated.coins).toBeGreaterThan(user.coins);
});
