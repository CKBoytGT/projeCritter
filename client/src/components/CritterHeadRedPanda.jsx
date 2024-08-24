const CritterHeadRedPanda = ({ mood = "Chipper" }) => {
  // non-tailwind stroke style
  const customStyle = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12px",
  };

  return (
    <figure className="mx-auto h-full w-full max-w-[360px] p-4 md:p-1">
      <svg
        role="img"
        id="red-panda"
        aria-label="Red Panda"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 810 658"
        preserveAspectRatio="xMinYMin meet"
        className={`blink homepage ${mood}`}
      >
        <g id="head" className="transformable">
          <g id="ears" className="transformable">
            <g id="ear-left">
              <path
                id="ear-outer-left"
                className="fill-white stroke-0"
                d="M51.76,264c-11.51,0-21.47-7.8-24.23-18.96-9.02-36.55-15.28-74.05-18.61-111.48-2.98-33.54-3.66-67.62-2.01-101.29.68-13.98,11.75-24.97,25.73-25.57,10.9-.47,21.96-.71,32.87-.71,22.59,0,45.45,1.02,67.94,3.02,37.42,3.34,74.94,9.5,111.52,18.33,11.21,2.71,19.05,12.68,19.05,24.25v.13c0,6.67-2.6,12.93-7.31,17.64l-187.32,187.32c-4.71,4.71-10.98,7.31-17.64,7.31Z"
              />
              <path
                className="fill-black stroke-0"
                d="M65.52,12c22.42,0,45.1,1.01,67.41,3,37.12,3.31,74.35,9.43,110.65,18.18,8.51,2.05,14.45,9.63,14.45,18.42v.13c0,5.06-1.97,9.82-5.55,13.4L65.17,252.45c-3.58,3.58-8.34,5.55-13.4,5.55-8.74,0-16.31-5.92-18.4-14.4-8.95-36.25-15.16-73.45-18.46-110.57-2.96-33.27-3.63-67.07-1.99-100.47.53-10.86,9.13-19.4,20-19.87,10.82-.46,21.79-.7,32.61-.7M65.52,0C54.07,0,43.02.25,32.4.71,15.38,1.44,1.76,14.97.93,31.98-.57,62.53-.36,96.83,2.95,134.09c3.71,41.7,10.61,79.36,18.76,112.38,3.41,13.82,15.82,23.52,30.05,23.52,8.21,0,16.08-3.26,21.89-9.07l187.32-187.32c5.8-5.8,9.07-13.68,9.07-21.89v-.13c0-14.28-9.76-26.73-23.64-30.08-33.18-8-70.84-14.77-112.4-18.47C109.9.9,87,0,65.52,0h0Z"
              />
              <path
                id="ear-inner-left"
                className="fill-yellow-900 stroke-0"
                d="M168.68,75.15c-26.36-2.35-50.69-2.6-72.48-1.67-12.14.52-21.86,10.17-22.45,22.31-1.07,21.8-.92,46.26,1.44,72.85,2.56,28.8,7.26,54.9,12.84,77.92L246.76,87.83c-23.16-5.49-49.3-10.11-78.08-12.68Z"
              />
            </g>
            <g id="ear-right">
              <path
                id="ear-outer-right"
                className="fill-white stroke-0"
                d="M758.24,264c-6.67,0-12.93-2.6-17.64-7.31l-187.32-187.32c-4.71-4.71-7.31-10.98-7.31-17.64v-.13c0-11.57,7.83-21.54,19.05-24.25,36.58-8.83,74.11-14.99,111.52-18.33,22.49-2.01,45.35-3.02,67.94-3.02,10.91,0,21.97.24,32.87.71,13.99.6,25.05,11.59,25.73,25.57,1.65,33.68.97,67.76-2.01,101.29-3.33,37.42-9.59,74.93-18.61,111.48-2.76,11.16-12.72,18.96-24.23,18.96Z"
              />
              <path
                className="fill-black stroke-0"
                d="M744.48,12c10.82,0,21.79.24,32.61.7,10.87.47,19.47,9.01,20,19.87,1.63,33.4.96,67.2-1.99,100.47-3.3,37.12-9.51,74.32-18.46,110.57-2.09,8.48-9.66,14.4-18.4,14.4-5.06,0-9.82-1.97-13.4-5.55l-187.32-187.32c-3.58-3.58-5.55-8.34-5.55-13.4v-.13c0-8.79,5.94-16.36,14.45-18.42,36.3-8.76,73.53-14.87,110.65-18.18,22.31-1.99,44.99-3,67.41-3h0M744.48,0c-21.48,0-44.38.9-68.48,3.05-41.56,3.71-79.21,10.47-112.4,18.47-13.88,3.35-23.64,15.8-23.64,30.08v.13c0,8.21,3.26,16.08,9.07,21.89l187.32,187.32c5.8,5.8,13.68,9.07,21.89,9.07h0c14.24,0,26.64-9.7,30.05-23.52,8.15-33.02,15.06-70.69,18.76-112.38,3.31-37.27,3.52-71.56,2.03-102.11-.83-17.01-14.46-30.54-31.47-31.27C766.98.25,755.93,0,744.48,0h0Z"
              />
              <path
                id="ear-inner-right"
                className="fill-yellow-900 stroke-0"
                d="M641.32,75.15c26.36-2.35,50.69-2.6,72.48-1.67,12.14.52,21.86,10.17,22.45,22.31,1.07,21.8.92,46.26-1.44,72.85-2.56,28.8-7.26,54.9-12.84,77.92l-158.73-158.73c23.16-5.49,49.3-10.11,78.08-12.68Z"
              />
            </g>
          </g>
          <g id="head-main">
            <path
              className="fill-orange-400 stroke-0"
              d="M405,650.69c-19.71,0-39.66-.94-59.28-2.8-99.79-9.45-183.1-35.65-240.93-75.79C39.24,526.61,6,464.1,6,386.31c0-101.87,40.05-197,112.77-267.87C192.97,46.13,294.62,6.31,405,6.31s212.03,39.82,286.23,112.13c72.72,70.87,112.77,166,112.77,267.87,0,77.79-33.24,140.3-98.79,185.8-57.83,40.13-141.14,66.34-240.93,75.79-19.63,1.86-39.57,2.8-59.28,2.8Z"
            />
            <path
              className="fill-black stroke-0"
              d="M405,12.31c55.56,0,108.62,10.01,157.7,29.76,46.96,18.89,88.79,46.03,124.33,80.67,35.08,34.19,62.54,74.2,81.61,118.91,19.48,45.67,29.35,94.34,29.35,144.67,0,75.71-32.37,136.56-96.21,180.87-29.24,20.29-65.04,37.02-106.42,49.71-39.32,12.06-83.61,20.48-131.65,25.03-19.44,1.84-39.19,2.77-58.72,2.77s-39.28-.93-58.72-2.77c-48.04-4.55-92.33-12.97-131.65-25.03-41.38-12.69-77.19-29.42-106.42-49.71-63.84-44.31-96.21-105.16-96.21-180.87,0-50.33,9.88-99,29.35-144.67,19.07-44.71,46.53-84.71,81.61-118.9,35.55-34.64,77.38-61.78,124.33-80.67,49.09-19.75,102.15-29.76,157.7-29.76M405,.31C170.57.31,0,175.19,0,386.31h0c0,169.84,155.27,249.58,345.15,267.56,19.91,1.88,39.88,2.83,59.85,2.83s39.94-.94,59.85-2.83c189.88-17.97,345.15-97.72,345.15-267.56h0C810,175.19,639.43.31,405,.31h0Z"
            />
            <path
              className="fill-white stroke-0"
              d="M797.88,376.69c-4.67-15.27-12.51-28.89-23.69-40.07-32.71-32.71-86.26-36.9-141.08-16.47-22.29,8.3-28.95,36.4-12.88,53.94.12.13.23.25.34.38,35.48,39.05,38.86,93.76,7.54,122.21-31.31,28.45-85.45,19.86-120.93-19.19-10.59-11.66-18.31-24.71-23.11-38.05-3.21-8.93-11.04-15.38-20.34-17.25-18.59-3.75-38.31-5.78-58.74-5.78s-40.15,2.02-58.74,5.78c-9.3,1.88-17.13,8.32-20.34,17.25-4.8,13.34-12.52,26.39-23.11,38.05-35.48,39.05-89.62,47.64-120.93,19.19-31.31-28.45-27.93-83.17,7.54-122.21.11-.13.23-.25.34-.38,16.07-17.54,9.42-45.63-12.88-53.94-54.82-20.42-108.37-16.24-141.08,16.47-11.18,11.18-19.02,24.8-23.69,40.07-.08,3.2-.12,6.4-.12,9.62,0,75.71,32.37,136.56,96.21,180.87,29.24,20.29,65.04,37.02,106.42,49.71,39.32,12.06,83.61,20.48,131.65,25.03,19.44,1.84,39.19,2.77,58.72,2.77s39.28-.93,58.72-2.77c48.04-4.55,92.33-12.97,131.65-25.03,41.38-12.69,77.19-29.42,106.42-49.71,63.84-44.31,96.21-105.16,96.21-180.87,0-3.21-.04-6.42-.12-9.62Z"
            />
            <path
              className="fill-yellow-900 stroke-yellow-900 stroke-[4px]"
              d="M655.47,495.64c-18.66-40.81-43.5-70.94-54.4-83.09-8.31-11.59-21.88-19.16-37.19-19.16-25.23,0-45.75,20.52-45.75,45.75,0,12.22,4.83,23.33,12.66,31.54l-.65.64-.11-.12c.26.27,26.03,27.21,42.67,64.69,13.96,31.44,17.17,59.44,9.61,84.8,4.41-1.23,8.76-2.49,13.05-3.81,30.73-9.43,58.38-21.08,82.56-34.77-1.58-28.23-9.1-57.28-22.45-86.48Z"
            />
            <path
              className="fill-yellow-900 stroke-yellow-900 stroke-[4px]"
              d="M246.12,393.39c-12.79,0-24.36,5.28-32.67,13.77l-.2-.2c-3.66,3.74-36.4,37.97-59.59,88.68-13.27,29.04-20.79,57.93-22.42,86.01,24.37,13.89,52.31,25.7,83.4,35.24,3.98,1.22,8.02,2.39,12.1,3.54-7.46-25.28-4.22-53.2,9.69-84.53,16.64-37.48,42.42-64.43,42.67-64.69l-.11.12-.2-.2c8.08-8.26,13.08-19.54,13.08-31.98,0-25.23-20.52-45.75-45.75-45.75Z"
            />
          </g>
          <g id="face" className="transformable">
            <g id="eyebrows">
              <ellipse
                id="eyebrow-left"
                className="fill-white stroke-0"
                cx="286.1"
                cy="347.32"
                rx="42.18"
                ry="30.84"
              />
              <ellipse
                id="eyebrow-right"
                className="fill-white stroke-0"
                cx="523.9"
                cy="347.32"
                rx="42.18"
                ry="30.84"
              />
            </g>
            <g
              id="eyes-and-shine"
              className={`transformable ${mood === "Wiped-Out" && "hidden"}`}
            >
              <g id="eyes" className="transformable">
                <g id="eye-left" className="transformable">
                  <path
                    className={`transformable ${
                      mood === "Happy"
                        ? "fill-black"
                        : mood === "Panicking"
                          ? "fill-white"
                          : "fill-amber-900"
                    } stroke-0`}
                    d="M246.12,478.89c-21.92,0-39.75-17.83-39.75-39.75s17.83-39.75,39.75-39.75,39.75,17.83,39.75,39.75-17.83,39.75-39.75,39.75Z"
                  />
                  <path
                    className={`${
                      mood === "Happy" ? "fill-yellow-900" : "fill-black"
                    } stroke-0`}
                    d="M246.12,405.39c18.64,0,33.75,15.11,33.75,33.75s-15.11,33.75-33.75,33.75-33.75-15.11-33.75-33.75,15.11-33.75,33.75-33.75M246.12,393.39c-25.23,0-45.75,20.52-45.75,45.75s20.52,45.75,45.75,45.75,45.75-20.52,45.75-45.75-20.52-45.75-45.75-45.75h0Z"
                  />
                </g>
                <g id="eye-right" className="transformable">
                  <path
                    className={`transformable ${
                      mood === "Happy"
                        ? "fill-black"
                        : mood === "Panicking"
                          ? "fill-white"
                          : "fill-amber-900"
                    } stroke-0`}
                    d="M563.88,478.89c-21.92,0-39.75-17.83-39.75-39.75s17.83-39.75,39.75-39.75,39.75,17.83,39.75,39.75-17.83,39.75-39.75,39.75Z"
                  />
                  <path
                    className={`${
                      mood === "Happy" ? "fill-yellow-900" : "fill-black"
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
                      : mood == "Wiped-Out"
                        ? "hidden"
                        : ""
              }`}
            >
              <circle
                id="eyelid-left"
                className={`transformable ${
                  mood === "Nervous"
                    ? "fill-black"
                    : mood === "Stressed"
                      ? "fill-black"
                      : "fill-yellow-900"
                } stroke-0`}
                cx="246.12"
                cy="439.14"
                r="33.75"
              />
              <circle
                id="eyelid-right"
                className={`transformable ${
                  mood === "Nervous"
                    ? "fill-black"
                    : mood === "Stressed"
                      ? "fill-black"
                      : "fill-yellow-900"
                } stroke-0`}
                cx="563.88"
                cy="439.14"
                r="33.75"
              />
            </g>
            <g id="eyes-ded" className={mood !== "Wiped-Out" ? "hidden" : ""}>
              <g id="eyes-ded-left">
                <line
                  style={customStyle}
                  className="fill-none stroke-black"
                  x1="269.98"
                  y1="415.28"
                  x2="222.25"
                  y2="463.01"
                />
                <line
                  style={customStyle}
                  className="fill-none stroke-black"
                  x1="269.98"
                  y1="463.01"
                  x2="222.25"
                  y2="415.28"
                />
              </g>
              <g id="eyes-ded-right">
                <line
                  style={customStyle}
                  className="transformable fill-none stroke-black"
                  x1="587.75"
                  y1="415.28"
                  x2="540.02"
                  y2="463.01"
                />
                <line
                  style={customStyle}
                  className="transformable fill-none stroke-black"
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

export default CritterHeadRedPanda;
