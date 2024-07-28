import "./CritterAnimations.css";

const CritterHeadGiantPanda = ({ mood = "Chipper" }) => {
  // non-tailwind stroke style
  const customStyle = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12px",
  };

  return (
    <figure className="mx-auto w-full h-full max-w-[360px] p-4 md:p-0">
      <svg
        role="img"
        id="giant-panda-head"
        aria-label="Giant Panda Head"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 810 658"
        preserveAspectRatio="xMinYMin meet"
        className={`blink homepage ${mood}`}
      >
        <g id="head" className="transformable">
          <g id="ears" className="transformable">
            <g id="ear-left">
              <circle
                id="ear-outer"
                className="fill-black stroke-0"
                cx="135"
                cy="135"
                r="135"
              />
            </g>
            <g id="ear-right">
              <circle
                id="ear-outer-2"
                data-name="ear-outer"
                className="fill-black stroke-0"
                cx="675"
                cy="135"
                r="135"
              />
            </g>
          </g>
          <g id="head-main">
            <g>
              <path
                className="fill-white stroke-0"
                d="M405,650.69c-19.71,0-39.66-.94-59.28-2.8-99.79-9.45-183.1-35.65-240.93-75.79C39.24,526.61,6,464.1,6,386.31c0-101.87,40.05-197,112.77-267.87C192.97,46.13,294.62,6.31,405,6.31s212.03,39.82,286.23,112.13c72.72,70.87,112.77,166,112.77,267.87,0,77.79-33.24,140.3-98.79,185.8-57.83,40.13-141.14,66.34-240.93,75.79-19.63,1.86-39.57,2.8-59.28,2.8Z"
              />
              <path
                className="fill-black stroke-0"
                d="M405,12.31c55.56,0,108.62,10.01,157.7,29.76,46.96,18.89,88.79,46.03,124.33,80.67,35.08,34.19,62.54,74.2,81.61,118.91,19.48,45.67,29.35,94.34,29.35,144.67,0,75.71-32.37,136.56-96.21,180.87-29.24,20.29-65.04,37.02-106.42,49.71-39.32,12.06-83.61,20.48-131.65,25.03-19.44,1.84-39.19,2.77-58.72,2.77s-39.28-.93-58.72-2.77c-48.04-4.55-92.33-12.97-131.65-25.03-41.38-12.69-77.19-29.42-106.42-49.71-63.84-44.31-96.21-105.16-96.21-180.87,0-50.33,9.88-99,29.35-144.67,19.07-44.71,46.53-84.71,81.61-118.9,35.55-34.64,77.38-61.78,124.33-80.67,49.09-19.75,102.15-29.76,157.7-29.76M405,.31C170.57.31,0,175.19,0,386.31h0c0,169.84,155.27,249.58,345.15,267.56,19.91,1.88,39.88,2.83,59.85,2.83s39.94-.94,59.85-2.83c189.88-17.97,345.15-97.72,345.15-267.56h0C810,175.19,639.43.31,405,.31h0Z"
              />
            </g>
          </g>
          <g id="face" className="transformable">
            <g id="eyespots">
              <ellipse
                id="eyespot-left"
                className="fill-black stroke-0"
                cx="196.89"
                cy="447.51"
                rx="125.74"
                ry="100.83"
                transform="translate(-266.73 292.29) rotate(-47.74)"
              />
              <ellipse
                id="eyespot-right"
                className="fill-black stroke-0"
                cx="613.11"
                cy="447.51"
                rx="100.83"
                ry="125.74"
                transform="translate(-141.61 528.6) rotate(-42.26)"
              />
            </g>
            <g
              id="eyes-and-shine"
              className={`transformable ${mood === "Wiped-Out" && "hidden"}`}
            >
              <g id="eyes">
                <g id="eye-left" className="transformable">
                  <path
                    className={`transformable ${
                      mood === "Happy"
                        ? "fill-white"
                        : mood === "Panicking"
                        ? "fill-white"
                        : "fill-amber-900"
                    } stroke-0`}
                    d="M246.12,478.89c-21.92,0-39.75-17.83-39.75-39.75s17.83-39.75,39.75-39.75,39.75,17.83,39.75,39.75-17.83,39.75-39.75,39.75Z"
                  />
                  <path
                    className={`${
                      mood === "Panicking" ? "fill-amber-900" : "fill-black"
                    } stroke-0`}
                    d="M246.12,405.39c18.64,0,33.75,15.11,33.75,33.75s-15.11,33.75-33.75,33.75-33.75-15.11-33.75-33.75,15.11-33.75,33.75-33.75M246.12,393.39c-25.23,0-45.75,20.52-45.75,45.75s20.52,45.75,45.75,45.75,45.75-20.52,45.75-45.75-20.52-45.75-45.75-45.75h0Z"
                  />
                </g>
                <g id="eye-right" className="transformable">
                  <path
                    className={`transformable ${
                      mood === "Happy"
                        ? "fill-white"
                        : mood === "Panicking"
                        ? "fill-white"
                        : "fill-amber-900"
                    } stroke-0`}
                    d="M563.88,478.89c-21.92,0-39.75-17.83-39.75-39.75s17.83-39.75,39.75-39.75,39.75,17.83,39.75,39.75-17.83,39.75-39.75,39.75Z"
                  />
                  <path
                    className={`${
                      mood === "Panicking" ? "fill-amber-900" : "fill-black"
                    } stroke-0`}
                    d="M563.88,405.39c18.64,0,33.75,15.11,33.75,33.75s-15.11,33.75-33.75,33.75-33.75-15.11-33.75-33.75,15.11-33.75,33.75-33.75M563.88,393.39c-25.23,0-45.75,20.52-45.75,45.75s20.52,45.75,45.75,45.75,45.75-20.52,45.75-45.75-20.52-45.75-45.75-45.75h0Z"
                  />
                </g>
              </g>
              <g
                id="eyeshine"
                className={`transformable ${
                  mood === "Panicking" ? "hidden" : ""
                }`}
              >
                <circle
                  id="eyeshine-left"
                  className="transformable fill-white stroke-0"
                  cx="231.18"
                  cy="425.97"
                  r="9.57"
                />
                <circle
                  id="eyeshine-right"
                  className="transformable fill-white stroke-0"
                  cx="550"
                  cy="425.97"
                  r="9.57"
                />
              </g>
            </g>
            <g
              id="eyelids"
              className={`transformable ${
                mood === "Content"
                  ? "hidden"
                  : mood === "Chipper"
                  ? "hidden"
                  : mood === "Panicking"
                  ? "hidden"
                  : mood === "Wiped Out"
                  ? "hidden"
                  : ""
              }`}
            >
              <circle
                id="eyelid-left"
                className="transformable fill-black stroke-0"
                cx="246.12"
                cy="439.14"
                r="33.75"
              />
              <circle
                id="eyelid-right"
                className="transformable fill-black stroke-0"
                cx="563.88"
                cy="439.14"
                r="33.75"
              />
            </g>
            <g id="eyes-ded" className={mood !== "Wiped-Out" ? "hidden" : ""}>
              <g id="eyes-ded-left">
                <line
                  style={customStyle}
                  className="fill-none stroke-white"
                  x1="269.98"
                  y1="415.28"
                  x2="222.25"
                  y2="463.01"
                />
                <line
                  style={customStyle}
                  className="fill-none stroke-white"
                  x1="269.98"
                  y1="463.01"
                  x2="222.25"
                  y2="415.28"
                />
              </g>
              <g id="eyes-ded-right">
                <line
                  style={customStyle}
                  className="transformable fill-none stroke-white"
                  x1="587.75"
                  y1="415.28"
                  x2="540.02"
                  y2="463.01"
                />
                <line
                  style={customStyle}
                  className="transformable fill-none stroke-white"
                  x1="587.75"
                  y1="463.01"
                  x2="540.02"
                  y2="415.28"
                />
              </g>
            </g>
            <ellipse
              id="nose"
              className="fill-black stroke-0"
              cx="405"
              cy="540"
              rx="38.67"
              ry="21.33"
            />
            <polyline
              id="mouth"
              style={customStyle}
              className={`transformable ${
                mood === "Happy"
                  ? "hidden"
                  : mood === "Nervous"
                  ? "hidden"
                  : mood === "Stressed"
                  ? "hidden"
                  : mood === "Panicking"
                  ? "hidden"
                  : mood === "Wiped-Out"
                  ? "hidden"
                  : ""
              } fill-none stroke-black`}
              points="337.5 611.87 405 585.14 472.5 611.87"
            />
            <polyline
              id="mouth-sad"
              style={customStyle}
              className={`transformable ${
                mood === "Nervous" ? "" : "hidden"
              } fill-none stroke-black`}
              points="366.64,611.87 405,585.14 443.36,611.87"
            />
            <polygon
              id="mouth-open"
              style={customStyle}
              className={`transformable ${
                mood === "Content"
                  ? "hidden"
                  : mood === "Chipper"
                  ? "hidden"
                  : mood === "Nervous"
                  ? "hidden"
                  : ""
              } fill-red-200 stroke-black`}
              points="472.5 611.87 405 576.44 337.5 611.87 472.5 611.87"
            />
          </g>
        </g>
      </svg>
    </figure>
  );
};

export default CritterHeadGiantPanda;
