import { ComponentPropsWithoutRef } from "react";

export const PhpIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 512 258"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          d="M116.447824,54.1156555 C138.734515,54.302759 154.884213,60.7284251 164.896919,73.3819622 C174.909625,86.0354994 178.213337,103.31851 174.8134,125.230993 C173.492985,135.243699 170.56348,145.063956 166.030231,154.69711 C161.684086,164.330263 155.643318,173.017208 147.897237,180.763289 C138.451187,190.583546 128.347602,196.816763 117.581136,199.46294 C106.814671,202.109117 95.6686527,203.429532 84.1484277,203.429532 L50.149063,203.429532 L39.3825975,257.26186 L0,257.26186 L40.5159096,54.1156555 L116.447824,54.1156555 Z M452.341234,54.1156555 C474.627924,54.302759 490.777623,60.7284251 500.790329,73.3819622 C510.803035,86.0354994 514.106746,103.31851 510.70681,125.230993 C509.386394,135.243699 506.456889,145.063956 501.923641,154.69711 C497.577495,164.330263 491.536728,173.017208 483.790646,180.763289 C474.344596,190.583546 464.241011,196.816763 453.474546,199.46294 C442.70808,202.109117 431.562062,203.429532 420.041837,203.429532 L386.042473,203.429532 L375.276007,257.26186 L335.89341,257.26186 L376.409319,54.1156555 L452.341234,54.1156555 Z M258.774725,0 L247.724931,54.1156555 L282.857608,54.1156555 C302.123915,54.4952082 316.47742,58.4618008 325.92347,66.0154332 C335.556623,73.5690656 338.389904,87.9279169 334.423311,109.081295 L315.440333,203.429532 L275.774407,203.429532 L293.907402,113.331216 C295.794473,103.885166 295.227817,97.1815175 292.207433,93.214925 C289.18705,89.2483324 282.670505,87.2650362 272.657799,87.2650362 L241.208386,86.9817081 L217.975487,203.429532 L178.876218,203.429532 L219.675455,0 L258.774725,0 Z M85.848396,86.415052 C83.5817716,86.6021555 81.4113719,86.6983801 79.3318511,86.6983801 L73.608,86.698 L56.6656079,171.413464 C57.7989201,171.600567 58.9322322,171.696792 60.0655444,171.696792 L64.0321369,171.696792 L64.0321369,171.696792 C82.1651315,171.883895 97.2777422,170.093048 109.364623,166.313559 C121.451504,162.346967 129.577139,148.560117 133.730835,124.947665 C137.130771,105.114703 133.730835,93.6853565 123.531025,90.6649726 C113.518319,87.6445888 100.961007,86.2279486 85.848396,86.415052 Z M421.741805,86.415052 C419.475181,86.6021555 417.304781,86.6983801 415.225261,86.6983801 L409.501,86.698 L392.559017,171.413464 C393.69233,171.600567 394.825642,171.696792 395.958954,171.696792 L399.925546,171.696792 L399.925546,171.696792 C418.058541,171.883895 433.171152,170.093048 445.258033,166.313559 C457.344914,162.346967 465.470548,148.560117 469.624244,124.947665 C473.024181,105.114703 469.624244,93.6853565 459.424435,90.6649726 C449.411729,87.6445888 436.854416,86.2279486 421.741805,86.415052 Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};
