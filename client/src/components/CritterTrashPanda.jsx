import { useState } from "react";

const CritterTrashPanda = ({ mood = "Content" }) => {
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
    <figure className="mx-auto h-full w-full max-w-[360px] p-4 md:p-1">
      <svg
        role="img"
        id="red-panda"
        aria-label="Red Panda"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 810 1080"
        preserveAspectRatio="xMinYMin meet"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`blink ${mood} ${hover && waveStyle}`}
      >
        <g id="tail">
          <path
            className="fill-neutral-500 stroke-0"
            d="M126.38,1072.9c-15.07,0-27.05-5.55-35.62-16.49-11.03-14.08-11.99-31.46-2.86-51.64,11.29-24.94,37.5-53.63,77.91-85.29,76.38-59.84,176.53-110.39,218.7-110.39,5.35,0,12.41.86,15.61,4.95,6.56,8.38,0,34.6-38.1,83.08-31.89,40.57-76.88,85.13-120.36,119.19-47.93,37.55-86.72,56.59-115.28,56.59Z"
          />
          <path
            className="fill-black stroke-0"
            d="M384.51,803.1v12c6.5,0,9.89,1.37,10.89,2.65,1.42,1.82,2.11,8.78-4.36,23.33-6.3,14.19-17.97,32.29-33.73,52.34-31.61,40.21-76.22,84.39-119.34,118.17-58.35,45.72-92.89,55.31-111.58,55.31-13.31,0-23.42-4.64-30.9-14.19-9.68-12.35-10.37-27.23-2.11-45.46,10.89-24.05,36.51-51.98,76.14-83.04,35.28-27.64,78.8-55.37,119.39-76.07,41.18-21,76.03-33.05,95.61-33.05v-12M384.5,803.1c-46.08,0-149.29,54.39-222.4,111.67-88.04,68.97-99.07,116-76.07,145.35,9.14,11.67,22.29,18.79,40.35,18.79,27.35,0,65.96-16.32,118.98-57.87,88.04-68.97,182.47-181.35,159.48-210.69-3.9-4.98-10.93-7.25-20.34-7.25h0Z"
          />
          <path
            className="fill-black stroke-black stroke-[4px]"
            d="M169.51,924.21c-3.91,3.06-7.68,6.1-11.32,9.1l68.23,87.09c3.79-2.81,7.63-5.75,11.55-8.81,13.48-10.56,27.11-22.14,40.43-34.29l-65.92-84.14c-14.99,10.03-29.49,20.49-42.97,31.05Z"
          />
          <path
            className="fill-black stroke-black stroke-[4px]"
            d="M312.81,836.62c-14.26,6.44-29.17,13.98-44.23,22.31l56.48,72.09c11.69-12.63,22.58-25.3,32.24-37.6,4.23-5.38,8.15-10.61,11.76-15.67l-38.23-48.79c-5.78,2.3-11.8,4.85-18.03,7.67Z"
          />
          <path
            className="fill-black stroke-black stroke-[4px]"
            d="M109.83,981.05c-7.22,9.18-12.72,17.92-16.47,26.21-8.26,18.24-7.57,33.11,2.11,45.46,9.68,12.35,23.95,16.58,43.64,12.93,8.94-1.66,18.75-4.91,29.38-9.72l-58.67-74.88Z"
          />
        </g>
        <g id="leg-left">
          <path
            className="fill-neutral-500 stroke-0"
            d="M292.54,1074c-10.87,0-21.6-15.53-30.2-43.73-7.48-24.53-11.72-53.26-13.08-70.42-4.45-56.11-3.85-107.51,1.78-152.77,6.1-49.07,25.7-71.04,42.41-71.04s35.65,21.92,40.58,70.9c5.09,50.63,5.71,103.51,1.79,152.91-1.36,17.16-5.6,45.9-13.08,70.42-8.6,28.2-19.32,43.73-30.2,43.73Z"
          />
          <path
            className="fill-black stroke-0"
            d="M293.44,742.04c6.54,0,13.34,4.86,19.16,13.68,5.51,8.35,12.66,24.11,15.44,51.81,5.05,50.28,5.67,102.78,1.78,151.83-1.08,13.57-4.99,43.41-12.84,69.15-8.89,29.14-18.73,39.48-24.46,39.48s-15.57-10.34-24.46-39.48c-7.85-25.74-11.76-55.57-12.84-69.15-4.41-55.71-3.83-106.7,1.75-151.55,3.45-27.74,11-43.55,16.73-51.93,6.1-8.93,13.11-13.85,19.73-13.85M293.44,730.04c-20.87,0-42.04,25.43-48.36,76.3-6.25,50.26-5.81,103.41-1.8,153.98,2.51,31.63,16.6,119.68,49.26,119.68s46.75-88.05,49.26-119.68c4.01-50.57,3.27-103.52-1.8-153.98-5.11-50.86-25.68-76.3-46.55-76.3h0Z"
          />
        </g>
        <g id="leg-right">
          <path
            className="fill-neutral-500 stroke-0"
            d="M517.86,1074c-10.87,0-21.6-15.53-30.2-43.73-7.48-24.52-11.72-53.26-13.08-70.42-4.45-56.11-3.85-107.51,1.78-152.77,6.1-49.07,25.7-71.04,42.41-71.04s35.65,21.92,40.58,70.9c5.09,50.63,5.71,103.5,1.79,152.91-1.36,17.16-5.6,45.9-13.08,70.42-8.6,28.2-19.33,43.73-30.2,43.73Z"
          />
          <path
            className="fill-black stroke-0"
            d="M518.77,742.04c6.54,0,13.34,4.86,19.16,13.68,5.51,8.35,12.66,24.11,15.44,51.81,5.05,50.28,5.67,102.78,1.78,151.83-1.08,13.57-4.99,43.41-12.84,69.15-8.89,29.14-18.73,39.48-24.46,39.48s-15.57-10.34-24.46-39.48c-7.85-25.74-11.76-55.57-12.84-69.15-4.41-55.71-3.83-106.7,1.75-151.55,3.45-27.74,11-43.55,16.73-51.93,6.1-8.93,13.11-13.85,19.73-13.85M518.77,730.04c-20.87,0-42.04,25.43-48.36,76.3-6.25,50.26-5.81,103.41-1.8,153.98,2.51,31.63,16.6,119.68,49.26,119.68s46.75-88.05,49.26-119.68c4.01-50.57,3.27-103.52-1.8-153.98-5.11-50.86-25.68-76.3-46.55-76.3h0Z"
          />
        </g>
        <g id="arms" className="transformable">
          <g id="arm-left" className="transformable">
            <path
              className="fill-neutral-500 stroke-0"
              d="M192.27,853.26c-3.12,0-5.83-.69-8.3-2.11-22.27-12.78-3.06-76.02,9.13-102.91,19.23-42.43,40.87-78.97,64.33-108.6,16.52-20.86,35.43-32.83,51.9-32.83,9.67,0,17.51,4.12,22.68,11.91,9.22,13.92,8.32,36.54-2.49,62.08-16.42,38.83-37.63,77.04-61.33,110.51-16.95,23.95-52.56,61.93-75.92,61.93Z"
            />
            <path
              className="fill-black stroke-0"
              d="M309.33,612.82c7.56,0,13.67,3.19,17.67,9.22,7.97,12.03,6.85,33.13-3.01,56.43-16.26,38.43-37.25,76.26-60.7,109.38-6.57,9.28-19.17,24.64-33.05,37.4-20.83,19.14-32.73,22-37.97,22-2.07,0-3.76-.42-5.32-1.31-7.13-4.09-9.14-18.66-5.52-39.97,3.75-22.07,12.53-45.11,17.12-55.25,19.03-41.99,40.42-78.11,63.57-107.35,15.37-19.41,32.57-30.55,47.2-30.55h0M309.33,600.82c-16.74,0-37.31,10.73-56.61,35.1-26.16,33.04-47.7,71.48-65.09,109.85-10.87,23.99-34.97,94.34-6.65,110.59,3.49,2,7.28,2.9,11.29,2.9,28.49,0,67.47-45.62,80.82-64.47,24.34-34.38,45.54-72.83,61.96-111.64,21.04-49.73,3.47-82.33-25.72-82.33h0Z"
            />
          </g>
          <g id="arm-right" className="transformable">
            <path
              className="fill-neutral-500 stroke-0"
              d="M617.73,853.26c-23.36,0-58.97-37.99-75.92-61.93-23.7-33.47-44.91-71.69-61.33-110.51-10.8-25.54-11.71-48.17-2.49-62.08,5.16-7.79,13.01-11.91,22.68-11.91,16.47,0,35.39,11.96,51.9,32.83,23.46,29.63,45.1,66.17,64.33,108.6,12.18,26.89,31.4,90.13,9.13,102.91-2.47,1.42-5.19,2.11-8.3,2.11h0Z"
            />
            <path
              className="fill-black stroke-0"
              d="M500.67,612.82c14.62,0,31.83,11.14,47.2,30.55,23.15,29.25,44.54,65.36,63.57,107.35,4.6,10.14,13.37,33.19,17.12,55.25,3.62,21.31,1.61,35.88-5.52,39.97-1.56.89-3.25,1.31-5.32,1.31-5.24,0-17.14-2.86-37.97-22-13.89-12.76-26.48-28.12-33.05-37.4-23.46-33.13-44.45-70.95-60.7-109.38-9.86-23.3-10.98-44.4-3.01-56.43,4-6.03,10.11-9.22,17.68-9.22M500.67,600.82c-29.19,0-46.75,32.6-25.72,82.33,16.42,38.81,37.62,77.26,61.96,111.64,13.35,18.85,52.32,64.47,80.82,64.47,4,0,7.8-.9,11.29-2.9,28.33-16.25,4.23-86.59-6.65-110.59-17.39-38.37-38.93-76.81-65.09-109.85-19.3-24.37-39.87-35.1-56.61-35.1h0Z"
            />
          </g>
        </g>
        <g id="body" className="transformable">
          <path
            className="fill-neutral-500 stroke-0"
            d="M405,981.96c-31.55,0-63.73-11.05-90.62-31.12-26.83-20.03-46.54-47.63-55.49-77.73-9.22-31.01-10.16-65.38-2.8-102.13,6.11-30.5,18.14-63.52,35.75-98.17,20.96-41.22,57.6-90.37,113.15-90.37s92.19,49.14,113.15,90.37c17.61,34.65,29.64,67.68,35.75,98.17,7.37,36.75,6.43,71.11-2.8,102.13-8.95,30.1-28.66,57.71-55.49,77.73-26.89,20.07-59.07,31.12-90.62,31.12Z"
          />
          <path
            className="fill-black stroke-0"
            d="M405,576.44v12c52.51,0,87.61,47.36,107.8,87.09,17.36,34.16,29.21,66.67,35.22,96.63,7.17,35.78,6.28,69.17-2.67,99.24-8.58,28.87-27.52,55.37-53.33,74.63-25.86,19.3-56.77,29.93-87.03,29.93s-61.17-10.63-87.03-29.93c-25.8-19.26-44.74-45.77-53.33-74.63-8.94-30.07-9.84-63.46-2.67-99.24,6-29.96,17.85-62.47,35.22-96.63,20.19-39.73,55.29-87.09,107.8-87.09v-12M405,576.44c-56.57,0-94.99,47.4-118.5,93.65-31.66,62.29-53.98,135.36-33.36,204.73,19.24,64.69,83.88,113.14,151.86,113.14s132.62-48.45,151.86-113.14c20.63-69.37-1.7-142.44-33.36-204.73-23.51-46.25-61.93-93.65-118.5-93.65h0Z"
          />
        </g>
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
                className="fill-black stroke-0"
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
                className="fill-black stroke-0"
                d="M641.32,75.15c26.36-2.35,50.69-2.6,72.48-1.67,12.14.52,21.86,10.17,22.45,22.31,1.07,21.8.92,46.26-1.44,72.85-2.56,28.8-7.26,54.9-12.84,77.92l-158.73-158.73c23.16-5.49,49.3-10.11,78.08-12.68Z"
              />
            </g>
          </g>
          <g id="head-main">
            <path
              className="fill-neutral-500 stroke-0"
              d="M405,650.69c-19.71,0-39.66-.94-59.28-2.8-99.79-9.45-183.1-35.65-240.93-75.79C39.24,526.61,6,464.1,6,386.31c0-101.87,40.05-197,112.77-267.87C192.97,46.13,294.62,6.31,405,6.31s212.03,39.82,286.23,112.13c72.72,70.87,112.77,166,112.77,267.87,0,77.79-33.24,140.3-98.79,185.8-57.83,40.13-141.14,66.34-240.93,75.79-19.63,1.86-39.57,2.8-59.28,2.8Z"
            />
            <path
              className="fill-black stroke-0"
              d="M405,12.31c55.56,0,108.62,10.01,157.7,29.76,46.96,18.89,88.79,46.03,124.33,80.67,35.08,34.19,62.54,74.2,81.61,118.91,19.48,45.67,29.35,94.34,29.35,144.67,0,75.71-32.37,136.56-96.21,180.87-29.24,20.29-65.04,37.02-106.42,49.71-39.32,12.06-83.61,20.48-131.65,25.03-19.44,1.84-39.19,2.77-58.72,2.77s-39.28-.93-58.72-2.77c-48.04-4.55-92.33-12.97-131.65-25.03-41.38-12.69-77.19-29.42-106.42-49.71-63.84-44.31-96.21-105.16-96.21-180.87,0-50.33,9.88-99,29.35-144.67,19.07-44.71,46.53-84.71,81.61-118.9,35.55-34.64,77.38-61.78,124.33-80.67,49.09-19.75,102.15-29.76,157.7-29.76M405,.31C170.57.31,0,175.19,0,386.31h0c0,169.84,155.27,249.58,345.15,267.56,19.91,1.88,39.88,2.83,59.85,2.83s39.94-.94,59.85-2.83c189.88-17.97,345.15-97.72,345.15-267.56h0C810,175.19,639.43.31,405,.31h0Z"
            />
            <path
              className="fill-white stroke-0"
              d="M771.25,493.2s-89.48-139.29-239.29-169.48c-20.28-4.09-40.79-6.29-56.39,7.3h0c-9.99,8.7-16.22,20.93-17.4,34.13l-18.35,166.01h0c-10.94-2.91-22.65-4.49-34.83-4.49h0c-12.18,0-23.89,1.58-34.83,4.49h0l-18.35-166.01c-1.17-13.2-7.4-25.43-17.4-34.13h0c-15.6-13.59-36.11-11.39-56.39-7.3-149.8,30.19-239.29,169.48-239.29,169.48h0s0,0,0,0c16.02,28.25,39.2,52.98,69.46,73.98,17.48,12.13,37.33,22.98,59.29,32.46,1.94.84,3.9,1.66,5.87,2.48,2.8,1.16,5.62,2.29,8.49,3.4,10.5,4.08,21.42,7.88,32.77,11.36,27.03,8.29,56.41,14.86,87.75,19.64,5.7.87,11.46,1.68,17.28,2.43,8.74,1.12,17.61,2.11,26.62,2.96,19.44,1.84,39.19,2.77,58.72,2.77h0c19.52,0,39.28-.93,58.72-2.77,9.01-.85,17.88-1.84,26.62-2.96,5.82-.75,11.59-1.56,17.28-2.43,31.33-4.78,60.72-11.35,87.75-19.64,11.36-3.48,22.28-7.28,32.77-11.36,2.86-1.11,5.69-2.25,8.49-3.4,1.97-.82,3.93-1.64,5.87-2.48,21.97-9.48,41.81-20.33,59.29-32.46,15.06-10.45,28.37-21.83,39.91-34.11.18-.19.35-.38.53-.57,11.41-12.22,21.09-25.33,29.02-39.3h0,0Z"
            />
            <path
              className="fill-black stroke-black stroke-[4px]"
              d="M657.21,441.41c-41.88-33.43-75.73-44.87-79.45-46.07l-.09.18c-4.35-1.38-8.98-2.13-13.79-2.13-25.23,0-45.75,20.52-45.75,45.75,0,15.53,7.78,29.26,19.64,37.54l-.13.26s31.69,31.79,41,63.06c7.25,24.35,10.59,51.14,10.98,78.6,1.92-.57,3.84-1.13,5.74-1.71,41.38-12.69,77.19-29.42,106.42-49.71,13.57-9.42,25.71-19.6,36.43-30.5-21.46-38.87-49.57-70.18-81.01-95.27Z"
            />
            <path
              className="fill-black stroke-black stroke-[4px]"
              d="M246.12,393.39c-4.8,0-9.43.75-13.79,2.13l-.09-.18c-3.72,1.19-37.57,12.64-79.45,46.07-31.43,25.09-59.55,56.4-81.01,95.27,10.72,10.9,22.85,21.08,36.43,30.5,29.24,20.29,65.04,37.02,106.42,49.71,1.9.58,3.82,1.15,5.74,1.71.39-27.46,3.73-54.25,10.98-78.6,9.31-31.27,41-63.06,41-63.06l-.13-.26c11.86-8.27,19.64-22.01,19.64-37.54,0-25.23-20.52-45.75-45.75-45.75Z"
            />
          </g>
          <g id="face" className="transformable">
            <g
              id="eyes-and-shine"
              className={`transformable ${mood === "Wiped-Out" && "hidden"}`}
            >
              <g id="eyes" className="transformable">
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
                      : mood == "Wiped-Out"
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

export default CritterTrashPanda;
