const fs = require('fs');
const path = require('path');

const lock = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'package-lock.json'), 'utf8')
);

// GHSA-rp65-9cf3-cjxr is fixed in nth-check 2.0.1.
const FIXED_NTH_CHECK = [2, 0, 1];

function collectNthCheckVersions(node, versions, location) {
  Object.entries(node.dependencies || {}).forEach(([name, info]) => {
    const where = `${location} > ${name}`;
    if (name === 'nth-check') {
      versions.push({ version: info.version, where });
    }
    collectNthCheckVersions(info, versions, where);
  });
  return versions;
}

function isAtLeast(version, minimum) {
  const parts = String(version)
    .split(/[.-]/)
    .slice(0, 3)
    .map(Number);
  for (let i = 0; i < minimum.length; i += 1) {
    if ((parts[i] || 0) > minimum[i]) return true;
    if ((parts[i] || 0) < minimum[i]) return false;
  }
  return true;
}

test('every nth-check copy is patched against GHSA-rp65-9cf3-cjxr', () => {
  const versions = collectNthCheckVersions(
    lock,
    [],
    'package-lock.json'
  );

  expect(versions.length).toBeGreaterThan(0);
  const vulnerable = versions.filter(
    ({ version }) => !isAtLeast(version, FIXED_NTH_CHECK)
  );

  expect(vulnerable).toEqual([]);
});
