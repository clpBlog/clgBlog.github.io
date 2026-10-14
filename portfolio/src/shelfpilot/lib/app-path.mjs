/** Normalize the build/runtime mount path. An empty value means the domain root. */
export function normalizeBasePath(value = '') {
  const base = String(value).trim().replace(/\/+$/, '');
  if (!base) return '';
  if (!/^\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]+$/.test(base)) {
    throw new Error('SHELFPILOT_BASE_PATH must be a root-relative path such as /shelfpilot-web.');
  }
  return base;
}

function configuredBasePath() {
  // The browser value is fixed at build time. Server callers can pass their runtime value.
  return typeof window !== 'undefined'
    ? process.env.NEXT_PUBLIC_BASE_PATH || ''
    : process.env.SHELFPILOT_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? '';
}

/**
 * Prefix an app-root URL once; leave external, blob, data, and relative URLs alone.
 * @param {string} path
 * @param {string} [basePath]
 */
export function withBasePath(path, basePath = configuredBasePath()) {
  const base = normalizeBasePath(basePath);
  if (!base || !path.startsWith('/') || path.startsWith('//')) return path;
  const pathname = path.split(/[?#]/, 1)[0];
  if (pathname === base || pathname.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}

/**
 * Convert a mounted URL back to an app-root URL without changing query or fragment.
 * @param {string} path
 * @param {string} [basePath]
 */
export function stripBasePath(path, basePath = configuredBasePath()) {
  const base = normalizeBasePath(basePath);
  if (!base) return path;
  const pathname = path.split(/[?#]/, 1)[0];
  if (pathname === base) return `/${path.slice(base.length)}`;
  return pathname.startsWith(`${base}/`) ? path.slice(base.length) : path;
}
