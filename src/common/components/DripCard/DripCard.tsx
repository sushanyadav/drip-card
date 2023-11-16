import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

const DripLogo = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="80"
      viewBox="0 0 189 80"
      width="189"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3979_43020)">
        <mask
          height="24"
          id="mask0_3979_43020"
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
          width="133"
          x="28"
          y="28"
        >
          <path
            clipRule="evenodd"
            d="M43.5165 49.1715C39.972 52.9428 33.9812 52.9428 30.4372 49.1715C27.462 46.0076 27.1792 41.1688 29.7627 37.6813L36.905 28.0358C36.9133 28.0247 36.9241 28.0157 36.9366 28.0095C36.949 28.0032 36.9627 28 36.9766 28C36.9905 28 37.0042 28.0032 37.0166 28.0095C37.0291 28.0157 37.0399 28.0247 37.0482 28.0358L44.1905 37.6813C46.7745 41.1707 46.4912 46.0095 43.5165 49.1715ZM131.494 28.3072H131.885C133.477 28.3072 135.019 28.3067 136.536 28.3058C141.24 28.3044 145.703 28.3026 150.636 28.3186C152.521 28.3251 154.382 28.5767 156.128 29.3517C158.822 30.5454 160.213 32.6639 160.544 35.5546C160.721 37.1106 160.652 38.6431 160.182 40.1349C159.315 42.8865 157.314 44.4324 154.604 45.077C153.352 45.3745 152.045 45.5522 150.76 45.5669C147.392 45.6082 144.44 45.6022 141.312 45.5963H141.311C140.05 45.5935 138.76 45.5912 137.401 45.5917H137.069C136.982 45.5917 136.898 45.6263 136.837 45.6879C136.775 45.7496 136.74 45.8332 136.74 45.9204V51.379C136.74 51.4662 136.706 51.5497 136.644 51.6113C136.582 51.673 136.499 51.7076 136.412 51.7078H131.822C131.734 51.7078 131.651 51.6731 131.589 51.6113C131.527 51.5496 131.492 51.4659 131.492 51.3786V28.309C131.492 28.309 131.493 28.3072 131.494 28.3072ZM136.757 40.5724C136.757 40.6693 136.832 40.7496 136.929 40.7565C137.032 40.7643 137.127 40.7712 137.222 40.7712C138.454 40.7712 139.627 40.7721 140.772 40.7726C143.878 40.774 146.782 40.7758 150.125 40.7648C150.821 40.763 151.522 40.6973 152.211 40.5968C154.023 40.3305 155.029 39.3736 155.301 37.7189C155.633 35.6882 154.832 34.1372 153.084 33.5615C152.479 33.3608 151.821 33.2263 151.186 33.2194C147.139 33.1859 143.643 33.1776 139.795 33.1685H139.792L137.186 33.162C137.089 33.162 136.993 33.173 136.896 33.185C136.858 33.1894 136.823 33.2075 136.797 33.2361C136.772 33.2647 136.757 33.3017 136.757 33.3402V40.5724ZM51.189 28.3306C51.154 28.3348 51.1218 28.3516 51.0983 28.3779C51.0748 28.4042 51.0617 28.4381 51.0614 28.4734V51.4162C51.0614 51.5985 51.2087 51.7454 51.3906 51.7454H69.1612C70.8109 51.744 72.4472 51.6169 74.0473 51.1862C77.8613 50.1586 80.5367 47.8942 81.6436 44.0242C82.4086 41.3502 82.3902 38.645 81.6156 35.9659C80.7571 32.994 78.8957 30.8778 76.0836 29.5932C74.1001 28.6855 71.9927 28.332 69.8389 28.3219C65.0745 28.3012 60.8464 28.3039 56.363 28.3067C54.7693 28.3076 53.1435 28.309 51.4498 28.309C51.3635 28.309 51.2776 28.3196 51.189 28.3306ZM56.5999 46.874C56.5494 46.8708 56.4966 46.8671 56.4392 46.8648C56.4397 46.8648 56.4401 46.8646 56.4405 46.8643C56.4408 46.864 56.441 46.8635 56.441 46.863V33.3581C56.441 33.2617 56.5163 33.1822 56.6127 33.1767C56.7445 33.1689 56.8685 33.1616 56.9938 33.1616L61.2059 33.1611H61.2196C63.8082 33.1611 66.2618 33.1602 69.142 33.1611C70.5267 33.1611 71.8967 33.2621 73.2007 33.7979C75.3026 34.6611 76.4293 36.2795 76.7778 38.4719C77.0262 40.0375 76.9619 41.5963 76.3765 43.0898C75.6051 45.0549 74.0744 46.1385 72.0726 46.5714C71.1976 46.7628 70.3052 46.8635 69.4096 46.8722C66.1204 46.8938 63.3541 46.8905 60.3482 46.8878H60.345C59.2302 46.8864 58.0819 46.8855 56.862 46.8855C56.7775 46.8855 56.6931 46.88 56.5999 46.8736V46.874ZM94.7078 44.5035H94.7114C98.0512 44.504 101.217 44.5044 104.619 44.4971C104.723 44.4971 104.822 44.5467 104.884 44.6302L110.028 51.5755C110.09 51.6596 110.188 51.7087 110.292 51.7087H115.933C116.203 51.7087 116.359 51.4011 116.198 51.1839L111.051 44.2349C110.917 44.054 111.001 43.7942 111.211 43.7147C111.562 43.5816 111.905 43.4268 112.24 43.2533C112.639 43.0467 113.034 42.7997 113.381 42.5329C113.729 42.2674 114.05 41.9678 114.338 41.6385C114.629 41.3067 114.884 40.9445 115.098 40.5582C115.321 40.1551 115.504 39.7272 115.644 39.2882C116.039 38.0532 116.112 36.7768 115.993 35.4912C115.728 32.6625 114.382 30.5822 111.759 29.3898C109.857 28.5248 107.832 28.3209 105.777 28.3191C101.143 28.3131 96.7697 28.3145 92.2803 28.315L87.0908 28.3159H86.9117C86.8245 28.3159 86.7408 28.3505 86.6791 28.4121C86.6174 28.4738 86.5826 28.5574 86.5825 28.6446V51.379C86.5825 51.5608 86.7299 51.7082 86.9117 51.7082H91.4672C91.6486 51.7082 91.796 51.5613 91.796 51.379V44.678C91.796 44.5908 91.8648 44.5182 91.9525 44.5127H91.9534C92.0457 44.5076 92.1206 44.5035 92.1954 44.5035H94.7078ZM91.9764 39.9958L91.8221 39.9875C91.8212 39.9875 91.8208 39.9866 91.8208 39.9857V33.1859C91.8208 33.101 91.8873 33.0307 91.9727 33.0252C92.0774 33.0188 92.1761 33.0128 92.2744 33.0128C93.2812 33.0128 94.2656 33.0119 95.2371 33.011C98.8133 33.0082 102.214 33.0059 105.919 33.0224C106.661 33.0261 107.419 33.1 108.14 33.2658C109.982 33.6919 110.822 34.8218 110.765 36.6634C110.708 38.3957 109.761 39.4691 107.944 39.8084C107.359 39.9168 106.757 39.9907 106.161 39.9921C102.249 40.0059 98.6604 40.0049 94.8712 40.004H92.1679C92.1077 40.004 92.048 40.0003 91.9764 39.9958ZM125.811 28.343C125.992 28.343 126.139 28.4899 126.139 28.6717V32.6749C126.139 32.7621 126.105 32.8457 126.043 32.9073C125.981 32.969 125.898 33.0036 125.811 33.0036H121.143C121.056 33.0036 120.972 32.969 120.911 32.9073C120.849 32.8457 120.814 32.7621 120.814 32.6749V28.6717C120.814 28.4904 120.962 28.343 121.143 28.343H125.811ZM121.143 37.8649C121.056 37.8649 120.972 37.8996 120.911 37.9612C120.849 38.0229 120.814 38.1065 120.814 38.1937V51.3845C120.814 51.5663 120.962 51.7137 121.143 51.7137H125.811C125.992 51.7137 126.139 51.5668 126.139 51.3845V38.1937C126.139 38.1065 126.105 38.0229 126.043 37.9612C125.981 37.8996 125.898 37.8649 125.811 37.8649H121.143Z"
            fill="white"
            fillRule="evenodd"
          />
        </mask>
        <g mask="url(#mask0_3979_43020)">
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="30.2374"
            y2="30.2374"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="32.9054"
            y2="32.9054"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="35.5714"
            y2="35.5714"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="38.2374"
            y2="38.2374"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="40.9054"
            y2="40.9054"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="43.5714"
            y2="43.5714"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="46.2374"
            y2="46.2374"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28"
            x2="160.857"
            y1="48.9054"
            y2="48.9054"
          />
          <line
            stroke="white"
            strokeWidth="0.857142"
            x1="28.0001"
            x2="160.857"
            y1="51.5714"
            y2="51.5714"
          />
        </g>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="78.8571"
          id="filter0_d_3979_43020"
          width="187.714"
          x="0.571463"
          y="0.571463"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="13.7143" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.71 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_3979_43020"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3979_43020"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

interface DripCardProps extends ComponentPropsWithoutRef<'div'> {}

const DripCardHeader = ({ heading, description }) => {
  return (
    <div className="px-8 py-6">
      <DripLogo className="mb-2 -translate-x-7" />
      <h1
        className="mb-2 font-mono text-2xl uppercase text-[#EBECEF]"
        style={{
          textShadow: '0px 0px 8px rgba(255, 255, 255, 0.45)',
        }}
      >
        {heading}
      </h1>
      <p className="text-lg text-[#ADB1C2]">{description}</p>
    </div>
  );
};

interface DripCardBodyProps extends ComponentPropsWithoutRef<'div'> {}

const DripCardBody = ({
  children,
  className,
}: PropsWithChildren<DripCardBodyProps>) => {
  return <div className={`px-8 pb-8 ${className}`}>{children}</div>;
};
interface DripCardFooterProps extends ComponentPropsWithoutRef<'div'> {}

const DripCardFooter = ({
  children,
  className,
}: PropsWithChildren<DripCardFooterProps>) => {
  return (
    <div
      className={`relative
      border-t border-dashed border-t-[#282B39] p-8 px-8 pb-8 before:absolute
      before:-right-[16px] before:-top-[16px] before:h-8 before:w-8 before:rounded-full before:bg-[#0D0E13] after:absolute after:-left-[16px] after:-top-[16px] after:h-8 after:w-8 after:rounded-full after:bg-[#0D0E13] ${className}`}
    >
      {children}
    </div>
  );
};

export const DripCard = ({
  children,
  className,
  ...props
}: PropsWithChildren<DripCardProps>) => {
  const effects = (
    <>
      {/* circular radial gradient */}
      <div
        className={`pointer-events-none absolute inset-0 -translate-y-[60%] bg-[radial-gradient(300px_circle_at_50%_50%,rgba(255,255,255,0.06),transparent_100%)] blur-lg`}
      />

      {/* top line gradient */}
      <motion.div
        animate={{
          opacity: 1,
        }}
        className="absolute inset-x-0 top-0 h-0.5 w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.83)_50%,rgba(255,255,255,0.00)_100%)] opacity-0 shadow-[0px_0px_64px_0px_#FFF]"
        transition={{
          delay: 0.05,
          ease: 'easeIn',
        }}
      />

      {/* white flash effect */}
      <motion.div
        animate={{ y: -230, opacity: 0 }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[32%] bg-white blur-[20px]"
        transition={{
          duration: 0.3,
          ease: 'easeIn',
        }}
      />
    </>
  );
  return (
    <div
      className={`relative mx-5 w-full max-w-[600px] overflow-hidden rounded-md bg-[#15171E] text-white before:pointer-events-none before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-[12%] md:mx-0 ${className}`}
      {...props}
    >
      {effects}
      {children}
    </div>
  );
};

DripCard.Header = DripCardHeader;
DripCard.Body = DripCardBody;
DripCard.Footer = DripCardFooter;
