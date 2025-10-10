const ZIcon = (props) => {
  return (
    <svg
      width={30}
      height={30}
      className="w-5 inline-block transition-transform group-hover:rotate-[30deg]"
      viewBox="0 0 800 800"
      fill="currentColor"
      {...props}
    >
      <defs>
        <radialGradient id="my-radial-gradient" r="0.75" cx="0.5" cy="0.5">
          <stop offset="0" stopColor="hsl(197, 28%, 73%)" />
          <stop offset="1" stopColor="hsl(210, 7%, 53%)" />
        </radialGradient>
      </defs>
      <circle fill="url(#my-radial-gradient)" r="300" cx="400" cy="400" />
      <text
        fontSize="450"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Verdana"
        fontWeight="bold"
        x="400"
        y="430"
        transform-origin="40 40"
        fill="white"
        stroke="#FFFFFF"
        strokeWidth="4"
        aria-hidden="true"
      >
        Z
      </text>
    </svg>
  );
};

export default ZIcon;
