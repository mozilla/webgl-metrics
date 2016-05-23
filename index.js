/* global define */

;(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : global.detectWebgl = factory();
}(this, function() {
  'use strict';

  function detectWebgl() {
    if (!window.WebGLRenderingContext) {
      return {
        status: false,
        unsupported: true
      };
    }
    try {
      var caveatOptions = {
        failIfMajorPerformanceCaveat: true
      };
      var canvas = document.createElement('canvas');
      var lastError = '';
      canvas.addEventListener('webglcontextcreationerror', function(e) {
        lastError = e.statusMessage || 'No error message';
      });
      // Only request experimental as every browser will support it as alias.
      if (canvas.getContext('experimental-webgl', caveatOptions)) {
        return {
          status: true
        };
      }
      var failIfCaveatError = lastError;
      if (canvas.getContext('experimental-webgl')) {
        return {
          status: true,
          hasPerformanceCaveat: true,
          failIfCaveatError: failIfCaveatError
        };
      }
      return {
        status: false,
        failIfCaveatError: failIfCaveatError,
        hasCaveatError: lastError
      };
    } catch (e) {
      return {
        status: false,
        exception: e.message
      };
    }
  }
  return detectWebgl;
}));
