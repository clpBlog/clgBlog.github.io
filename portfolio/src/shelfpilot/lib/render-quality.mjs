const PIXEL_BUDGET = 2_800_000;
const MAX_DIMENSION = 4096;
const positive = (value, fallback) => typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : fallback;

/**
 * Choose a bounded drawing buffer for an on-demand canvas renderer.
 * Clear mode supersamples ordinary 1x screens while resting. Interaction lowers
 * the fill cost; the caller decides when to restore the resting resolution.
 * Size and pixel limits take priority over the requested sampling quality.
 */
export function resolutionForCanvas({width, height, devicePixelRatio = 1, quality = 'clear', interacting = false, maxDimension = MAX_DIMENSION} = {}) {
  const cssWidth = positive(width, 1), cssHeight = positive(height, 1);
  const dpr = positive(devicePixelRatio, 1);
  const dimensionLimit = Math.max(1, Math.floor(Math.min(MAX_DIMENSION, positive(maxDimension, MAX_DIMENSION))));
  const target = quality === 'smooth'
    ? Math.min(Math.max(1, dpr), interacting ? 1 : 1.25)
    : interacting ? Math.min(Math.max(1, dpr), 1.25) : Math.min(Math.max(2, dpr), 2.5);
  // Taking roots separately avoids overflow for otherwise finite CSS sizes.
  const pixelRatio = Math.min(target, dimensionLimit / cssWidth, dimensionLimit / cssHeight,
    Math.sqrt(PIXEL_BUDGET) / Math.sqrt(cssWidth) / Math.sqrt(cssHeight));
  return {
    pixelRatio,
    width: Math.max(1, Math.min(dimensionLimit, Math.floor(cssWidth * pixelRatio))),
    height: Math.max(1, Math.min(dimensionLimit, Math.floor(cssHeight * pixelRatio))),
  };
}
