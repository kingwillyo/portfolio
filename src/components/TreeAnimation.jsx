import React from "react";

const TreeAnimation = () => {
  return (
    <div className="w-full flex justify-center mb-8">
      <svg
        width="280"
        height="160"
        viewBox="0 0 280 160"
        className="tree-animation"
      >
        {/* Main trunk */}
        <path
          d="M140 160 L140 110"
          stroke="#fafafa"
          strokeWidth="4"
          fill="none"
          className="branch branch-1"
        />

        {/* Left primary branch */}
        <path
          d="M140 120 Q110 105 85 90"
          stroke="#fafafa"
          strokeWidth="3"
          fill="none"
          className="branch branch-2"
        />

        {/* Right primary branch */}
        <path
          d="M140 120 Q170 105 195 90"
          stroke="#fafafa"
          strokeWidth="3"
          fill="none"
          className="branch branch-3"
        />

        {/* Left secondary branches - multiple */}
        <path
          d="M85 90 Q70 80 55 70"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-4"
        />
        <path
          d="M85 90 Q75 75 65 60"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-5"
        />
        <path
          d="M85 90 Q80 65 75 40"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-6"
        />

        {/* Right secondary branches - multiple */}
        <path
          d="M195 90 Q210 80 225 70"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-7"
        />
        <path
          d="M195 90 Q205 75 215 60"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-8"
        />
        <path
          d="M195 90 Q200 65 205 40"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-9"
        />

        {/* Center top branches */}
        <path
          d="M140 115 Q125 95 110 75"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-10"
        />
        <path
          d="M140 115 Q155 95 170 75"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-11"
        />
        <path
          d="M140 115 Q135 85 130 55"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-12"
        />
        <path
          d="M140 115 Q145 85 150 55"
          stroke="#fafafa"
          strokeWidth="2.5"
          fill="none"
          className="branch branch-13"
        />

        {/* Left tertiary branches - dense canopy */}
        <path
          d="M55 70 Q45 60 35 50"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-14"
        />
        <path
          d="M55 70 Q50 55 45 40"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-15"
        />
        <path
          d="M55 70 Q55 45 55 20"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-16"
        />
        <path
          d="M65 60 Q60 50 55 40"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-17"
        />
        <path
          d="M65 60 Q65 45 65 30"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-18"
        />
        <path
          d="M75 40 Q70 35 65 30"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-19"
        />
        <path
          d="M75 40 Q75 25 75 10"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-20"
        />

        {/* Right tertiary branches - dense canopy */}
        <path
          d="M225 70 Q235 60 245 50"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-21"
        />
        <path
          d="M225 70 Q230 55 235 40"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-22"
        />
        <path
          d="M225 70 Q225 45 225 20"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-23"
        />
        <path
          d="M215 60 Q210 50 205 40"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-24"
        />
        <path
          d="M215 60 Q215 45 215 30"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-25"
        />
        <path
          d="M205 40 Q200 35 195 30"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-26"
        />
        <path
          d="M205 40 Q205 25 205 10"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-27"
        />

        {/* Center tertiary branches */}
        <path
          d="M110 75 Q100 65 90 55"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-28"
        />
        <path
          d="M110 75 Q105 60 100 45"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-29"
        />
        <path
          d="M130 55 Q125 45 120 35"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-30"
        />
        <path
          d="M130 55 Q130 40 130 25"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-31"
        />
        <path
          d="M170 75 Q180 65 190 55"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-32"
        />
        <path
          d="M170 75 Q175 60 180 45"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-33"
        />
        <path
          d="M150 55 Q155 45 160 35"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-34"
        />
        <path
          d="M150 55 Q150 40 150 25"
          stroke="#fafafa"
          strokeWidth="2"
          fill="none"
          className="branch branch-35"
        />

        {/* Quaternary branches - tiny tips */}
        <path
          d="M35 50 Q30 45 25 40"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-36"
        />
        <path
          d="M45 40 Q40 35 35 30"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-37"
        />
        <path
          d="M55 20 Q50 15 45 10"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-38"
        />
        <path
          d="M65 30 Q60 25 55 20"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-39"
        />
        <path
          d="M75 10 Q70 5 65 0"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-40"
        />
        <path
          d="M245 50 Q250 45 255 40"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-41"
        />
        <path
          d="M235 40 Q240 35 245 30"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-42"
        />
        <path
          d="M225 20 Q230 15 235 10"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-43"
        />
        <path
          d="M215 30 Q210 25 205 20"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-44"
        />
        <path
          d="M205 10 Q200 5 195 0"
          stroke="#fafafa"
          strokeWidth="1.5"
          fill="none"
          className="branch branch-45"
        />

        {/* Pink blossom tips - many more */}
        <circle
          cx="25"
          cy="40"
          r="3"
          fill="#ec4899"
          className="blossom blossom-1"
        />
        <circle
          cx="35"
          cy="30"
          r="3"
          fill="#ec4899"
          className="blossom blossom-2"
        />
        <circle
          cx="45"
          cy="10"
          r="3"
          fill="#ec4899"
          className="blossom blossom-3"
        />
        <circle
          cx="55"
          cy="20"
          r="3"
          fill="#ec4899"
          className="blossom blossom-4"
        />
        <circle
          cx="65"
          cy="0"
          r="3"
          fill="#ec4899"
          className="blossom blossom-5"
        />
        <circle
          cx="90"
          cy="55"
          r="3"
          fill="#ec4899"
          className="blossom blossom-6"
        />
        <circle
          cx="100"
          cy="45"
          r="3"
          fill="#ec4899"
          className="blossom blossom-7"
        />
        <circle
          cx="120"
          cy="35"
          r="3"
          fill="#ec4899"
          className="blossom blossom-8"
        />
        <circle
          cx="130"
          cy="25"
          r="3"
          fill="#ec4899"
          className="blossom blossom-9"
        />
        <circle
          cx="190"
          cy="55"
          r="3"
          fill="#ec4899"
          className="blossom blossom-10"
        />
        <circle
          cx="180"
          cy="45"
          r="3"
          fill="#ec4899"
          className="blossom blossom-11"
        />
        <circle
          cx="160"
          cy="35"
          r="3"
          fill="#ec4899"
          className="blossom blossom-12"
        />
        <circle
          cx="150"
          cy="25"
          r="3"
          fill="#ec4899"
          className="blossom blossom-13"
        />
        <circle
          cx="255"
          cy="40"
          r="3"
          fill="#ec4899"
          className="blossom blossom-14"
        />
        <circle
          cx="245"
          cy="30"
          r="3"
          fill="#ec4899"
          className="blossom blossom-15"
        />
        <circle
          cx="235"
          cy="10"
          r="3"
          fill="#ec4899"
          className="blossom blossom-16"
        />
        <circle
          cx="205"
          cy="20"
          r="3"
          fill="#ec4899"
          className="blossom blossom-17"
        />
        <circle
          cx="195"
          cy="0"
          r="3"
          fill="#ec4899"
          className="blossom blossom-18"
        />
      </svg>

      <style jsx>{`
        .tree-animation {
          opacity: 0;
          animation: fadeIn 2s ease-in-out 0.5s forwards;
        }

        .branch {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawBranch 2s ease-in-out forwards;
        }

        .branch-1 {
          animation-delay: 0.5s;
        }
        .branch-2 {
          animation-delay: 0.7s;
        }
        .branch-3 {
          animation-delay: 0.9s;
        }
        .branch-4 {
          animation-delay: 1.1s;
        }
        .branch-5 {
          animation-delay: 1.3s;
        }
        .branch-6 {
          animation-delay: 1.5s;
        }
        .branch-7 {
          animation-delay: 1.7s;
        }
        .branch-8 {
          animation-delay: 1.9s;
        }
        .branch-9 {
          animation-delay: 2.1s;
        }
        .branch-10 {
          animation-delay: 2.3s;
        }
        .branch-11 {
          animation-delay: 2.5s;
        }
        .branch-12 {
          animation-delay: 2.7s;
        }
        .branch-13 {
          animation-delay: 2.9s;
        }
        .branch-14 {
          animation-delay: 3.1s;
        }
        .branch-15 {
          animation-delay: 3.3s;
        }
        .branch-16 {
          animation-delay: 3.5s;
        }
        .branch-17 {
          animation-delay: 3.7s;
        }
        .branch-18 {
          animation-delay: 3.9s;
        }
        .branch-19 {
          animation-delay: 4.1s;
        }
        .branch-20 {
          animation-delay: 4.3s;
        }
        .branch-21 {
          animation-delay: 4.5s;
        }
        .branch-22 {
          animation-delay: 4.7s;
        }
        .branch-23 {
          animation-delay: 4.9s;
        }
        .branch-24 {
          animation-delay: 5.1s;
        }
        .branch-25 {
          animation-delay: 5.3s;
        }
        .branch-26 {
          animation-delay: 5.5s;
        }
        .branch-27 {
          animation-delay: 5.7s;
        }
        .branch-28 {
          animation-delay: 5.9s;
        }
        .branch-29 {
          animation-delay: 6.1s;
        }
        .branch-30 {
          animation-delay: 6.3s;
        }
        .branch-31 {
          animation-delay: 6.5s;
        }
        .branch-32 {
          animation-delay: 6.7s;
        }
        .branch-33 {
          animation-delay: 6.9s;
        }
        .branch-34 {
          animation-delay: 7.1s;
        }
        .branch-35 {
          animation-delay: 7.3s;
        }
        .branch-36 {
          animation-delay: 7.5s;
        }
        .branch-37 {
          animation-delay: 7.7s;
        }
        .branch-38 {
          animation-delay: 7.9s;
        }
        .branch-39 {
          animation-delay: 8.1s;
        }
        .branch-40 {
          animation-delay: 8.3s;
        }
        .branch-41 {
          animation-delay: 8.5s;
        }
        .branch-42 {
          animation-delay: 8.7s;
        }
        .branch-43 {
          animation-delay: 8.9s;
        }
        .branch-44 {
          animation-delay: 9.1s;
        }
        .branch-45 {
          animation-delay: 9.3s;
        }

        .blossom {
          opacity: 0;
          animation: blossomGrow 1s ease-in-out forwards;
        }

        .blossom-1 {
          animation-delay: 9.5s;
        }
        .blossom-2 {
          animation-delay: 9.6s;
        }
        .blossom-3 {
          animation-delay: 9.7s;
        }
        .blossom-4 {
          animation-delay: 9.8s;
        }
        .blossom-5 {
          animation-delay: 9.9s;
        }
        .blossom-6 {
          animation-delay: 10s;
        }
        .blossom-7 {
          animation-delay: 10.1s;
        }
        .blossom-8 {
          animation-delay: 10.2s;
        }
        .blossom-9 {
          animation-delay: 10.3s;
        }
        .blossom-10 {
          animation-delay: 10.4s;
        }
        .blossom-11 {
          animation-delay: 10.5s;
        }
        .blossom-12 {
          animation-delay: 10.6s;
        }
        .blossom-13 {
          animation-delay: 10.7s;
        }
        .blossom-14 {
          animation-delay: 10.8s;
        }
        .blossom-15 {
          animation-delay: 10.9s;
        }
        .blossom-16 {
          animation-delay: 11s;
        }
        .blossom-17 {
          animation-delay: 11.1s;
        }
        .blossom-18 {
          animation-delay: 11.2s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes drawBranch {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes blossomGrow {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default TreeAnimation;
