# webgl-metrics

WebGL Support Metrics

```
npm install webgl-metrics
```

## Usage

```
import webglMetrics from 'webgl-metrics';

var result = webglMetrics();
if (result.status && !result.hasCaveat) {
  // Render something challenging …
}
```

### Flags

- `status`: `true` when *getContext* was **successful**
- `unsupported`: `true` when WebGL API was **not found**
- `hasCaveat`: `true` when *getContext* is successful **only without** `failIfMajorPerformanceCaveat`
- `hasCaveatError`: Error message when *getContext* failed **without** `failIfMajorPerformanceCaveat`
- `failIfCaveatError`: Error message when *getContext* failed **with** `failIfMajorPerformanceCaveat`
- `exception`: Error message when detection threw an exception
