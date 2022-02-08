import "./css/Common.css";
import "./css/Body.css";

export function Header() {
  return (
    <div style={{ position: "relative" }}>
      <svg
        className="svg-header"
        viewBox="0 0 1440 558"
        fill="none"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        z={-1}
      >
        <path
          className="hide-mobile"
          d="M1448.31-12.376C1305.6-12.376 71.665-13-16-13c0 425.986 19.594 489.762 104.994 543.753 43.64 27.59 182.381 44.138 284.402 0 149.658-64.746 252.48-215.204 340.541-153.792 88.061 61.411 102.313 54.246 120.638 54.246 18.325 0 34.613-21.61 58.028-60.19 23.415-38.579 53.323 59.582 76.863 79.926C1062.56 531.4 1229.33 284.03 1335.96 345.232c129.29 74.205 114.23-96.124 114.39-106.645 1.05-67.033 1.11-183.696-2.04-250.963z"
          fill="#3DDC97"
        />
        <path
          className="hide-mobile"
          d="M103.548 118.8C94.6817 118.8 87.5817 117.133 82.2483 113.8C76.915 110.4 74.2483 105.233 74.2483 98.3C74.2483 94.6333 74.8817 91.8333 76.1483 89.9C77.415 87.9667 79.2817 87 81.7483 87C83.5483 87 85.015 87.4667 86.1483 88.4C87.2817 89.3333 87.8483 90.5333 87.8483 92C87.8483 93.3333 87.7483 94.5 87.5483 95.5C87.5483 95.7667 87.4817 96.2333 87.3483 96.9C87.2817 97.5667 87.2483 98.2667 87.2483 99C87.2483 102 88.7483 104.233 91.7483 105.7C94.815 107.167 99.0817 107.9 104.548 107.9C110.215 107.9 114.648 106.9 117.848 104.9C121.048 102.833 122.648 99.9667 122.648 96.3C122.648 94.0333 121.915 92.1 120.448 90.5C118.982 88.8333 117.148 87.4667 114.948 86.4C112.748 85.2667 109.648 83.9 105.648 82.3C100.515 80.3 96.315 78.4 93.0483 76.6C89.8483 74.8 87.0817 72.3667 84.7483 69.3C82.4817 66.1667 81.3483 62.3 81.3483 57.7C81.3483 52.9 82.615 48.6333 85.1483 44.9C87.7483 41.1667 91.4483 38.2667 96.2483 36.2C101.115 34.1333 106.815 33.1 113.348 33.1C118.215 33.1 122.682 33.8333 126.748 35.3C130.815 36.7 134.048 38.8667 136.448 41.8C138.915 44.7333 140.148 48.3333 140.148 52.6C140.148 56.8 139.515 59.9667 138.248 62.1C136.982 64.2333 135.115 65.3 132.648 65.3C130.915 65.3 129.448 64.7667 128.248 63.7C127.115 62.6333 126.548 61.3667 126.548 59.9C126.548 58.6333 126.648 57.4667 126.848 56.4C127.048 54.4 127.148 53.1333 127.148 52.6C127.148 49.8 125.782 47.6667 123.048 46.2C120.315 44.7333 116.915 44 112.848 44C107.115 44 102.715 45.0667 99.6483 47.2C96.6483 49.2667 95.1483 52.2 95.1483 56C95.1483 58.5333 95.915 60.7 97.4483 62.5C99.0483 64.3 101.015 65.8 103.348 67C105.682 68.2 108.948 69.6333 113.148 71.3C118.215 73.3667 122.282 75.2333 125.348 76.9C128.415 78.5667 131.015 80.8333 133.148 83.7C135.348 86.5667 136.448 90.1 136.448 94.3C136.448 102.167 133.448 108.233 127.448 112.5C121.515 116.7 113.548 118.8 103.548 118.8ZM163.676 118.5C157.143 118.5 152.043 116.667 148.376 113C144.776 109.267 142.976 104.367 142.976 98.3C142.976 92.9 144.043 88.1667 146.176 84.1C148.31 80.0333 151.076 76.9 154.476 74.7C157.876 72.5 161.443 71.4 165.176 71.4C168.843 71.4 171.676 72.5 173.676 74.7C175.743 76.8333 176.776 79.6 176.776 83C176.776 85.8 176.143 88.1667 174.876 90.1C173.676 92.0333 172.076 93 170.076 93C168.81 93 167.776 92.7 166.976 92.1C166.243 91.5 165.876 90.6667 165.876 89.6C165.876 89.1333 165.943 88.6 166.076 88C166.21 87.4 166.31 86.9667 166.376 86.7C166.71 85.7 166.876 84.7667 166.876 83.9C166.876 83.0333 166.643 82.3667 166.176 81.9C165.776 81.4333 165.176 81.2 164.376 81.2C162.843 81.2 161.41 81.9 160.076 83.3C158.743 84.6333 157.676 86.4667 156.876 88.8C156.076 91.1333 155.676 93.7 155.676 96.5C155.676 104.233 159.043 108.1 165.776 108.1C168.51 108.1 171.443 107.2 174.576 105.4C177.776 103.533 180.91 100.767 183.976 97.1C184.776 96.1667 185.676 95.7 186.676 95.7C187.543 95.7 188.21 96.1 188.676 96.9C189.21 97.7 189.476 98.8 189.476 100.2C189.476 102.733 188.843 104.8 187.576 106.4C184.443 110.267 180.676 113.267 176.276 115.4C171.943 117.467 167.743 118.5 163.676 118.5ZM236.485 95.7C237.351 95.7 238.018 96.1 238.485 96.9C239.018 97.7 239.285 98.8 239.285 100.2C239.285 102.867 238.651 104.933 237.385 106.4C234.318 109.933 231.151 112.833 227.885 115.1C224.685 117.367 221.018 118.5 216.885 118.5C213.485 118.5 210.918 117.533 209.185 115.6C207.451 113.6 206.585 110.733 206.585 107C206.585 105.133 207.051 101.8 207.985 97C208.851 92.8 209.285 89.9 209.285 88.3C209.285 87.2333 208.918 86.7 208.185 86.7C207.318 86.7 206.085 87.8333 204.485 90.1C202.885 92.3 201.285 95.2333 199.685 98.9C198.085 102.567 196.785 106.433 195.785 110.5C194.518 115.833 191.385 118.5 186.385 118.5C184.385 118.5 183.051 117.8 182.385 116.4C181.785 114.933 181.485 112.333 181.485 108.6C181.485 106.467 181.518 104.767 181.585 103.5L181.685 95.5C181.685 85.2333 182.718 74.5333 184.785 63.4C186.918 52.2667 190.018 42.9333 194.085 35.4C198.218 27.8 203.151 24 208.885 24C211.951 24 214.418 25.3333 216.285 28C218.218 30.6 219.185 34 219.185 38.2C219.185 44.9333 217.218 51.9333 213.285 59.2C209.351 66.4 202.951 74.8333 194.085 84.5C193.885 87.9667 193.785 91.5333 193.785 95.2C195.985 89.5333 198.418 84.9333 201.085 81.4C203.818 77.8 206.485 75.2333 209.085 73.7C211.751 72.1667 214.185 71.4 216.385 71.4C220.718 71.4 222.885 73.5667 222.885 77.9C222.885 80.5 222.151 85.2 220.685 92C219.418 97.8 218.785 101.633 218.785 103.5C218.785 106.167 219.751 107.5 221.685 107.5C223.018 107.5 224.585 106.7 226.385 105.1C228.251 103.433 230.718 100.767 233.785 97.1C234.585 96.1667 235.485 95.7 236.485 95.7ZM206.785 33.9C205.585 33.9 204.251 35.6333 202.785 39.1C201.318 42.5 199.885 47.1333 198.485 53C197.151 58.8 196.051 65.1333 195.185 72C199.318 67.1333 202.718 61.8333 205.385 56.1C208.118 50.3667 209.485 45.1667 209.485 40.5C209.485 38.3667 209.251 36.7333 208.785 35.6C208.318 34.4667 207.651 33.9 206.785 33.9ZM237.872 118.5C235.339 118.5 233.539 117.167 232.472 114.5C231.472 111.833 230.972 107.567 230.972 101.7C230.972 93.0333 232.205 84.8 234.672 77C235.272 75.0667 236.239 73.6667 237.572 72.8C238.972 71.8667 240.905 71.4 243.372 71.4C244.705 71.4 245.639 71.5667 246.172 71.9C246.705 72.2333 246.972 72.8667 246.972 73.8C246.972 74.8667 246.472 77.2667 245.472 81C244.805 83.6667 244.272 86 243.872 88C243.472 89.9333 243.139 92.3667 242.872 95.3C244.672 90.1 246.805 85.7 249.272 82.1C251.805 78.5 254.372 75.8333 256.972 74.1C259.639 72.3 262.139 71.4 264.472 71.4C266.805 71.4 268.439 71.9333 269.372 73C270.372 74.0667 270.872 75.7 270.872 77.9C270.872 80.0333 270.239 83.9 268.972 89.5C268.439 91.9 268.072 93.7 267.872 94.9C271.205 86.7 274.905 80.7333 278.972 77C283.039 73.2667 286.839 71.4 290.372 71.4C294.705 71.4 296.872 73.5667 296.872 77.9C296.872 80.5 296.139 85.2 294.672 92C293.405 97.8 292.772 101.633 292.772 103.5C292.772 106.167 293.739 107.5 295.672 107.5C297.005 107.5 298.572 106.7 300.372 105.1C302.239 103.433 304.705 100.767 307.772 97.1C308.572 96.1667 309.472 95.7 310.472 95.7C311.339 95.7 312.005 96.1 312.472 96.9C313.005 97.7 313.272 98.8 313.272 100.2C313.272 102.867 312.639 104.933 311.372 106.4C308.505 109.933 305.405 112.833 302.072 115.1C298.805 117.367 295.072 118.5 290.872 118.5C287.472 118.5 284.905 117.533 283.172 115.6C281.439 113.6 280.572 110.733 280.572 107C280.572 105.133 281.039 101.8 281.972 97C282.839 92.8 283.272 89.9 283.272 88.3C283.272 87.2333 282.905 86.7 282.172 86.7C281.305 86.7 280.072 87.8333 278.472 90.1C276.872 92.3 275.272 95.2333 273.672 98.9C272.072 102.567 270.772 106.433 269.772 110.5C269.039 113.7 268.172 115.833 267.172 116.9C266.239 117.967 264.705 118.5 262.572 118.5C260.372 118.5 258.705 117.467 257.572 115.4C256.505 113.267 255.972 110.7 255.972 107.7C255.972 105.167 256.305 101.5 256.972 96.7C257.505 92.4333 257.772 89.6333 257.772 88.3C257.772 87.2333 257.405 86.7 256.672 86.7C255.672 86.7 254.405 87.9 252.872 90.3C251.339 92.7 249.839 95.7667 248.372 99.5C246.972 103.233 245.839 106.9 244.972 110.5C244.239 113.633 243.372 115.767 242.372 116.9C241.439 117.967 239.939 118.5 237.872 118.5ZM355.778 87.3C356.645 87.3 357.311 87.7333 357.778 88.6C358.245 89.4667 358.478 90.5667 358.478 91.9C358.478 95.1 357.511 97 355.578 97.6C351.578 99 347.178 99.8 342.378 100C341.111 105.6 338.611 110.1 334.878 113.5C331.145 116.833 326.911 118.5 322.178 118.5C318.178 118.5 314.745 117.533 311.878 115.6C309.078 113.667 306.945 111.1 305.478 107.9C304.011 104.7 303.278 101.233 303.278 97.5C303.278 92.4333 304.245 87.9333 306.178 84C308.111 80 310.778 76.9 314.178 74.7C317.578 72.4333 321.345 71.3 325.478 71.3C330.545 71.3 334.611 73.0667 337.678 76.6C340.811 80.0667 342.645 84.3667 343.178 89.5C346.311 89.3 350.045 88.6333 354.378 87.5C354.911 87.3667 355.378 87.3 355.778 87.3ZM322.978 107.9C325.111 107.9 326.945 107.033 328.478 105.3C330.078 103.567 331.145 101.067 331.678 97.8C329.611 96.4 328.011 94.5667 326.878 92.3C325.811 90.0333 325.278 87.6333 325.278 85.1C325.278 84.0333 325.378 82.9667 325.578 81.9H325.078C322.411 81.9 320.178 83.2 318.378 85.8C316.645 88.3333 315.778 91.9333 315.778 96.6C315.778 100.267 316.478 103.067 317.878 105C319.345 106.933 321.045 107.9 322.978 107.9ZM400.487 87.3C401.354 87.3 402.021 87.7333 402.487 88.6C402.954 89.4667 403.187 90.5667 403.187 91.9C403.187 95.1 402.221 97 400.287 97.6C396.287 99 391.887 99.8 387.087 100C385.821 105.6 383.321 110.1 379.587 113.5C375.854 116.833 371.621 118.5 366.887 118.5C362.887 118.5 359.454 117.533 356.587 115.6C353.787 113.667 351.654 111.1 350.187 107.9C348.721 104.7 347.987 101.233 347.987 97.5C347.987 92.4333 348.954 87.9333 350.887 84C352.821 80 355.487 76.9 358.887 74.7C362.287 72.4333 366.054 71.3 370.187 71.3C375.254 71.3 379.321 73.0667 382.387 76.6C385.521 80.0667 387.354 84.3667 387.887 89.5C391.021 89.3 394.754 88.6333 399.087 87.5C399.621 87.3667 400.087 87.3 400.487 87.3ZM367.687 107.9C369.821 107.9 371.654 107.033 373.187 105.3C374.787 103.567 375.854 101.067 376.387 97.8C374.321 96.4 372.721 94.5667 371.587 92.3C370.521 90.0333 369.987 87.6333 369.987 85.1C369.987 84.0333 370.087 82.9667 370.287 81.9H369.787C367.121 81.9 364.887 83.2 363.087 85.8C361.354 88.3333 360.487 91.9333 360.487 96.6C360.487 100.267 361.187 103.067 362.587 105C364.054 106.933 365.754 107.9 367.687 107.9ZM451.128 95.7C451.994 95.7 452.661 96.1 453.128 96.9C453.661 97.7 453.928 98.8 453.928 100.2C453.928 102.667 453.294 104.733 452.028 106.4C448.894 110.467 444.994 113.667 440.328 116C435.728 118.333 430.528 119.5 424.728 119.5C420.194 119.5 416.261 118.833 412.928 117.5C409.594 116.1 407.028 114.233 405.228 111.9C403.494 109.5 402.628 106.833 402.628 103.9C402.628 99.5 404.394 95.6 407.928 92.2C411.461 88.8 416.528 85.5333 423.128 82.4L406.728 82.8C405.261 82.8667 404.128 82.3667 403.328 81.3C402.594 80.1667 402.228 78.8333 402.228 77.3C402.228 75.7 402.594 74.3 403.328 73.1C404.128 71.8333 405.194 71.2 406.528 71.2C409.594 71.2 413.694 71.4333 418.828 71.9C419.894 71.9667 421.828 72.1 424.628 72.3C427.494 72.5 429.894 72.6 431.828 72.6C432.494 72.6 433.761 72.3333 435.628 71.8C435.961 71.7333 436.594 71.5667 437.528 71.3C438.528 71.0333 439.361 70.9 440.028 70.9C441.094 70.9 441.961 71.3667 442.628 72.3C443.361 73.2333 443.728 74.6667 443.728 76.6C443.728 78.7333 443.228 80.4 442.228 81.6C441.228 82.8 439.661 83.8667 437.528 84.8C431.461 87.4 426.428 90.2 422.428 93.2C418.428 96.1333 416.428 99.0667 416.428 102C416.428 103.867 417.294 105.4 419.028 106.6C420.761 107.8 423.328 108.4 426.728 108.4C430.461 108.4 434.228 107.467 438.028 105.6C441.894 103.733 445.361 100.9 448.428 97.1C449.228 96.1667 450.128 95.7 451.128 95.7Z"
          fill="white"
        />

        <image className="hide-mobile" x={750} y={80} href="banner-image.svg" />
        <text color="black" fontSize="36">
          Canada
        </text>
      </svg>
    </div>
  );
}
