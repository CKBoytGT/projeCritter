import "./CritterAnimations.css";
import { useState } from "react";

const CritterGiantPanda = ({ mood = "Content" }) => {
  // hover detection for wave animation
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  // non-tailwind stroke style
  const customStyle = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12px",
  };

  // wave condition
  let waveStyle;
  if (
    mood === "Chipper" ||
    mood === "Content" ||
    mood === "Nervous" ||
    mood == "Stressed"
  ) {
    waveStyle = "wave";
  } else if (mood === "Happy" || mood === "Panicking") {
    waveStyle = "wave-double";
  }

  return (
    <figure className="mx-auto h-full w-full max-w-[360px] p-4 md:p-0">
      <svg
        role="img"
        id="giant-panda"
        aria-label="Giant Panda"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 810 1080"
        preserveAspectRatio="xMinYMin meet"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`blink ${mood} ${hover && waveStyle}`}
      >
        <path
          id="leg-left"
          className="fill-black stroke-0"
          d="M339.99,806.34c5.07,50.46,5.81,103.41,1.8,153.98-2.51,31.63-16.6,119.68-49.26,119.68-32.65,0-46.75-88.05-49.26-119.68-4.01-50.57-4.44-103.72,1.8-153.98,12.65-101.73,84.69-101.73,94.91,0Z"
        />
        <path
          id="leg-right"
          className="fill-black stroke-0"
          d="M565.31,806.34c5.07,50.46,5.81,103.41,1.8,153.98-2.51,31.63-16.6,119.68-49.26,119.68-32.65,0-46.75-88.05-49.26-119.68-4.01-50.57-4.44-103.72,1.8-153.98,12.65-101.73,84.69-101.73,94.91,0Z"
        />
        <g id="arms" className="transformable">
          <path
            id="arm-left"
            className="transformable fill-black stroke-0"
            d="M335.05,683.15c-16.42,38.81-37.62,77.26-61.96,111.64-15.22,21.5-63.78,77.81-92.1,61.56-28.33-16.25-4.23-86.59,6.65-110.59,17.39-38.37,38.93-76.81,65.09-109.85,52.94-66.87,115.43-31.03,82.33,47.23Z"
          />
          <path
            id="arm-right"
            className="transformable fill-black stroke-0"
            d="M474.95,683.15c16.42,38.81,37.62,77.26,61.96,111.64,15.22,21.5,63.78,77.81,92.1,61.56,28.33-16.25,4.23-86.59-6.65-110.59-17.39-38.37-38.93-76.81-65.09-109.85-52.94-66.87-115.43-31.03-82.33,47.23Z"
          />
        </g>
        <g id="body" className="transformable">
          <g id="body-main">
            <g>
              <path
                className="fill-white stroke-0"
                d="M405,981.96c-31.55,0-63.73-11.05-90.62-31.12-26.83-20.03-46.54-47.63-55.49-77.73-9.22-31.01-10.16-65.38-2.8-102.13,6.11-30.5,18.14-63.52,35.75-98.17,20.96-41.22,57.6-90.37,113.15-90.37s92.19,49.14,113.15,90.37c17.61,34.65,29.64,67.68,35.75,98.17,7.37,36.75,6.43,71.11-2.8,102.13-8.95,30.1-28.66,57.71-55.49,77.73-26.89,20.07-59.07,31.12-90.62,31.12Z"
              />
              <path
                className="fill-black stroke-0"
                d="M405,576.44v12c52.51,0,87.61,47.36,107.8,87.09,17.36,34.16,29.21,66.67,35.22,96.63,7.17,35.78,6.28,69.17-2.67,99.24-8.58,28.87-27.52,55.37-53.33,74.63-25.86,19.3-56.77,29.93-87.03,29.93s-61.17-10.63-87.03-29.93c-25.8-19.26-44.74-45.77-53.33-74.63-8.94-30.07-9.84-63.46-2.67-99.24,6-29.96,17.85-62.47,35.22-96.63,20.19-39.73,55.29-87.09,107.8-87.09v-12M405,576.44c-56.57,0-94.99,47.4-118.5,93.65-31.66,62.29-53.98,135.36-33.36,204.73,19.24,64.69,83.88,113.14,151.86,113.14s132.62-48.45,151.86-113.14c20.63-69.37-1.7-142.44-33.36-204.73-23.51-46.25-61.93-93.65-118.5-93.65h0Z"
              />
            </g>
          </g>
          <path
            id="body-stripe"
            className="fill-black"
            d="M286.5,670.08c-15.11,29.73-28.1,61.93-35.3,95,65.5-31.18,242.09-31.18,307.59,0-7.2-33.07-20.18-65.27-35.3-95-23.51-46.25-61.93-93.65-118.5-93.65-56.57,0-94.99,47.4-118.5,93.65Z"
          />
        </g>
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

export default CritterGiantPanda;
