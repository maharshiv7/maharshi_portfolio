import { useOrbitParallax } from '../hooks/useOrbitParallax';

/**
 * Reusable satellite dot component.
 * When prefersReducedMotion is false: continuously travels along the path via <animateMotion>.
 * When prefersReducedMotion is true: sits statically at (staticX, staticY) on the ring.
 */
function SatelliteDot({
  pathId,
  duration,
  staticX,
  staticY,
  haloStroke = 'rgba(0, 168, 240, 0.45)',
  dotFill = 'rgba(58, 70, 214, 0.60)',
  prefersReducedMotion = false,
}) {
  if (prefersReducedMotion) {
    return (
      <g transform={`translate(${staticX}, ${staticY})`}>
        <circle
          cx="0"
          cy="0"
          r="7.5"
          fill="none"
          stroke={haloStroke}
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="0" cy="0" r="3.5" fill={dotFill} />
      </g>
    );
  }

  return (
    <g>
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        rotate="0"
        calcMode="linear"
      >
        <mpath href={`#${pathId}`} xlinkHref={`#${pathId}`} />
      </animateMotion>
      <circle
        cx="0"
        cy="0"
        r="7.5"
        fill="none"
        stroke={haloStroke}
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="0" cy="0" r="3.5" fill={dotFill} />
    </g>
  );
}

/**
 * Closed ellipse path generator for SVG <path> elements that can be referenced by <mpath>.
 * direction 'cw' = clockwise, 'ccw' = counter-clockwise (reversed direction)
 */
function getEllipsePathD(cx, cy, rx, ry, direction = 'cw') {
  const sweep = direction === 'cw' ? 1 : 0;
  return `M ${cx} ${cy - ry} a ${rx} ${ry} 0 1 ${sweep} 0 ${2 * ry} a ${rx} ${ry} 0 1 ${sweep} 0 ${-2 * ry} Z`;
}

/**
 * OrbitBackground renders complete closed orbital rings with smooth scroll parallax
 * and continuous SVG <animateMotion> satellite dots.
 */
export default function OrbitBackground() {
  const { farRef, midRef, nearRef, isMobile, prefersReducedMotion } = useOrbitParallax();

  return (
    <div
      className="orbit-background"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg
        style={{
          position: 'absolute',
          top: '-30%',
          left: '-30%',
          width: '160%',
          height: '160%',
          overflow: 'visible',
          pointerEvents: 'none',
        }}
        viewBox="0 0 2400 1600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* =================================================================
            FAR LAYER: Very large rings (radius 580-1600px), centered at (2100, 150)
            Rendered only on screens >= 640px
           ================================================================= */}
        {!isMobile && (
          <g
            ref={farRef}
            style={{
              willChange: 'transform',
              transformBox: 'view-box',
              transformOrigin: '2100px 150px',
            }}
          >
            {/* Tilted orbital plane (-20 degrees) */}
            <g transform="rotate(-20 2100 150)">
              {/* Ring 1: Cyan full closed ellipse */}
              <ellipse
                cx="2100"
                cy="150"
                rx="620"
                ry="410"
                fill="none"
                stroke="rgba(0, 168, 240, 0.26)"
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />

              {/* Ring 2: Indigo full closed ellipse with moving satellite dot (Clockwise, 54s) */}
              <path
                id="far-ring-2"
                d={getEllipsePathD(2100, 150, 800, 530, 'cw')}
                fill="none"
                stroke="rgba(58, 70, 214, 0.28)"
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />
              <SatelliteDot
                pathId="far-ring-2"
                duration={54}
                staticX={2100}
                staticY={-380}
                haloStroke="rgba(0, 168, 240, 0.45)"
                prefersReducedMotion={prefersReducedMotion}
              />

              {/* Ring 3: Cyan full dotted closed ellipse */}
              <ellipse
                cx="2100"
                cy="150"
                rx="980"
                ry="650"
                fill="none"
                stroke="rgba(0, 168, 240, 0.30)"
                strokeWidth="1.25"
                strokeDasharray="3 12"
                vectorEffect="non-scaling-stroke"
              />

              {/* Ring 4: Indigo full closed ellipse with moving satellite dot (Reversed, 92s) */}
              <path
                id="far-ring-4"
                d={getEllipsePathD(2100, 150, 1180, 780, 'ccw')}
                fill="none"
                stroke="rgba(58, 70, 214, 0.26)"
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />
              <SatelliteDot
                pathId="far-ring-4"
                duration={92}
                staticX={2100}
                staticY={-630}
                haloStroke="rgba(58, 70, 214, 0.45)"
                prefersReducedMotion={prefersReducedMotion}
              />

              {/* Ring 5: Cyan full closed ellipse */}
              <ellipse
                cx="2100"
                cy="150"
                rx="1380"
                ry="915"
                fill="none"
                stroke="rgba(0, 168, 240, 0.24)"
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />

              {/* Ring 6: Indigo full dotted closed ellipse */}
              <ellipse
                cx="2100"
                cy="150"
                rx="1600"
                ry="1060"
                fill="none"
                stroke="rgba(58, 70, 214, 0.30)"
                strokeWidth="1.25"
                strokeDasharray="3 14"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </g>
        )}

        {/* =================================================================
            MID LAYER: Medium rings (radius 420-1200px), centered at (150, 850)
           ================================================================= */}
        <g
          ref={midRef}
          style={{
            willChange: 'transform',
            transformBox: 'view-box',
            transformOrigin: '150px 850px',
          }}
        >
          {/* Tilted orbital plane (-20 degrees) */}
          <g transform="rotate(-20 150 850)">
            {!isMobile ? (
              <>
                {/* Ring 1: Cyan full closed ellipse */}
                <ellipse
                  cx="150"
                  cy="850"
                  rx="420"
                  ry="280"
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Ring 2: Indigo full closed ellipse with moving satellite dot (Clockwise, 68s) */}
                <path
                  id="mid-ring-2"
                  d={getEllipsePathD(150, 850, 600, 400, 'cw')}
                  fill="none"
                  stroke="rgba(58, 70, 214, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <SatelliteDot
                  pathId="mid-ring-2"
                  duration={68}
                  staticX={150}
                  staticY={450}
                  haloStroke="rgba(0, 168, 240, 0.45)"
                  prefersReducedMotion={prefersReducedMotion}
                />

                {/* Ring 3: Cyan full dotted closed ellipse */}
                <ellipse
                  cx="150"
                  cy="850"
                  rx="780"
                  ry="520"
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.30)"
                  strokeWidth="1.25"
                  strokeDasharray="3 12"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Ring 4: Indigo full closed ellipse with moving satellite dot (Reversed, 115s) */}
                <path
                  id="mid-ring-4"
                  d={getEllipsePathD(150, 850, 980, 650, 'ccw')}
                  fill="none"
                  stroke="rgba(58, 70, 214, 0.26)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <SatelliteDot
                  pathId="mid-ring-4"
                  duration={115}
                  staticX={150}
                  staticY={200}
                  haloStroke="rgba(58, 70, 214, 0.45)"
                  prefersReducedMotion={prefersReducedMotion}
                />

                {/* Ring 5: Cyan full closed ellipse */}
                <ellipse
                  cx="150"
                  cy="850"
                  rx="1200"
                  ry="800"
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.24)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
              </>
            ) : (
              /* Mobile version: 3 complete closed rings (2 moving dots) */
              <>
                <ellipse
                  cx="150"
                  cy="850"
                  rx="450"
                  ry="300"
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  id="mid-ring-m-2"
                  d={getEllipsePathD(150, 850, 750, 500, 'cw')}
                  fill="none"
                  stroke="rgba(58, 70, 214, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <SatelliteDot
                  pathId="mid-ring-m-2"
                  duration={68}
                  staticX={150}
                  staticY={350}
                  haloStroke="rgba(0, 168, 240, 0.45)"
                  prefersReducedMotion={prefersReducedMotion}
                />

                <path
                  id="mid-ring-m-3"
                  d={getEllipsePathD(150, 850, 1100, 730, 'ccw')}
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.26)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <SatelliteDot
                  pathId="mid-ring-m-3"
                  duration={115}
                  staticX={150}
                  staticY={120}
                  haloStroke="rgba(58, 70, 214, 0.45)"
                  prefersReducedMotion={prefersReducedMotion}
                />
              </>
            )}
          </g>
        </g>

        {/* =================================================================
            NEAR LAYER: Rings (radius 380-960px), centered at (2200, 1450)
           ================================================================= */}
        <g
          ref={nearRef}
          style={{
            willChange: 'transform',
            transformBox: 'view-box',
            transformOrigin: '2200px 1450px',
          }}
        >
          {/* Tilted orbital plane (-20 degrees) */}
          <g transform="rotate(-20 2200 1450)">
            {!isMobile ? (
              <>
                {/* Ring 1: Indigo full closed ellipse */}
                <ellipse
                  cx="2200"
                  cy="1450"
                  rx="380"
                  ry="255"
                  fill="none"
                  stroke="rgba(58, 70, 214, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Ring 2: Cyan full closed ellipse with moving satellite dot (Clockwise, 48s) */}
                <path
                  id="near-ring-2"
                  d={getEllipsePathD(2200, 1450, 560, 375, 'cw')}
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <SatelliteDot
                  pathId="near-ring-2"
                  duration={48}
                  staticX={2200}
                  staticY={1075}
                  haloStroke="rgba(58, 70, 214, 0.45)"
                  prefersReducedMotion={prefersReducedMotion}
                />

                {/* Ring 3: Indigo full dotted closed ellipse */}
                <ellipse
                  cx="2200"
                  cy="1450"
                  rx="760"
                  ry="510"
                  fill="none"
                  stroke="rgba(58, 70, 214, 0.30)"
                  strokeWidth="1.25"
                  strokeDasharray="3 12"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Ring 4: Cyan full closed ellipse with moving satellite dot (Clockwise, 82s) */}
                <path
                  id="near-ring-4"
                  d={getEllipsePathD(2200, 1450, 960, 640, 'cw')}
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.26)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <SatelliteDot
                  pathId="near-ring-4"
                  duration={82}
                  staticX={2200}
                  staticY={810}
                  haloStroke="rgba(0, 168, 240, 0.45)"
                  prefersReducedMotion={prefersReducedMotion}
                />
              </>
            ) : (
              /* Mobile version: 3 complete closed rings (1 moving dot) */
              <>
                <ellipse
                  cx="2200"
                  cy="1450"
                  rx="420"
                  ry="280"
                  fill="none"
                  stroke="rgba(58, 70, 214, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  id="near-ring-m-2"
                  d={getEllipsePathD(2200, 1450, 680, 455, 'cw')}
                  fill="none"
                  stroke="rgba(0, 168, 240, 0.28)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <SatelliteDot
                  pathId="near-ring-m-2"
                  duration={48}
                  staticX={2200}
                  staticY={995}
                  haloStroke="rgba(58, 70, 214, 0.45)"
                  prefersReducedMotion={prefersReducedMotion}
                />

                <ellipse
                  cx="2200"
                  cy="1450"
                  rx="980"
                  ry="650"
                  fill="none"
                  stroke="rgba(58, 70, 214, 0.26)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
              </>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}
