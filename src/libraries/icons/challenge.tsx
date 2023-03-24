import clsx from 'clsx';
import { IconProps } from '.';

export default function Challenge({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-8', 'w-8')}
      transform={transform}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.01" width="32" height="32" fill="currentColor" />
      <g clipPath="url(#challenge_icon)">
        <path
          d="M11.2522 14.468L10.4399 15.0223C10.9592 15.7839 11.6218 16.4266 12.3809 16.9232L12.919 16.0994C12.2666 15.6732 11.6983 15.1201 11.2522 14.468Z"
          fill="currentColor"
        />
        <path
          d="M14.7858 5.71515C15.1978 5.62921 15.6062 5.58795 16.01 5.58795C16.3806 5.58795 16.7466 5.62213 17.1033 5.68915L17.2845 4.7229C16.8679 4.64532 16.4419 4.604 16.01 4.604C15.5403 4.604 15.0624 4.65228 14.5858 4.75116L14.567 4.75592L14.7695 5.71747L14.7858 5.71515Z"
          fill="currentColor"
        />
        <path
          d="M12.8181 6.46692L12.2625 5.65601C11.5022 6.17615 10.8596 6.83887 10.364 7.59803L11.188 8.13587C11.6128 7.48377 12.166 6.91297 12.8181 6.46692Z"
          fill="currentColor"
        />
        <path
          d="M10.2739 11.2434C10.2739 10.8715 10.3091 10.5043 10.3762 10.1453L9.41016 9.96411C9.33106 10.3819 9.29004 10.8092 9.29004 11.2434C9.29004 11.7142 9.33814 12.1909 9.43823 12.6687L9.44067 12.6805L10.4033 12.4792L10.4009 12.4687C10.3149 12.0568 10.2739 11.6472 10.2739 11.2434V11.2434Z"
          fill="currentColor"
        />
        <path
          d="M17.2145 16.8911C16.8024 16.977 16.3939 17.0182 15.9903 17.0182C15.6161 17.0182 15.2464 16.983 14.8863 16.9146L14.704 17.8809C15.1229 17.9598 15.5538 18.001 15.9904 18.001C16.4598 18.001 16.9366 17.9527 17.4144 17.8539L17.4203 17.8526L17.2201 16.8899L17.2145 16.8911Z"
          fill="currentColor"
        />
        <path
          d="M22.5614 9.83667L22.5568 9.81299L21.594 10.0166L21.5986 10.0378C21.6846 10.4486 21.7258 10.8581 21.7258 11.2618C21.7258 11.6385 21.6893 12.0093 21.621 12.3706L22.5874 12.5542C22.6674 12.1328 22.7085 11.7008 22.7085 11.2618C22.7085 10.7922 22.6616 10.3144 22.5614 9.83666V9.83667Z"
          fill="currentColor"
        />
        <path
          d="M19.173 16.0415L19.7273 16.8536C20.4888 16.3346 21.1326 15.672 21.6292 14.9139L20.8065 14.375C20.3793 15.027 19.8262 15.5956 19.173 16.0415L19.173 16.0415Z"
          fill="currentColor"
        />
        <path
          d="M20.7421 8.02496L21.5531 7.46936C21.0317 6.70905 20.3678 6.06641 19.6086 5.57202L19.072 6.39593C19.7252 6.82086 20.2949 7.3728 20.7421 8.02496Z"
          fill="currentColor"
        />
        <path
          d="M19.3721 10.1399L17.0415 9.80139L15.9995 7.68994L14.9575 9.80139L12.627 10.1399L14.3132 11.7837L13.9153 14.1044L15.9995 13.0087L18.0837 14.1044L17.6858 11.7837L19.3721 10.1399Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.1128 11.5726C26.1128 8.65613 24.979 6.00561 23.1521 4.09534C22.1625 3.06079 20.9657 2.23926 19.6339 1.70374C18.5046 1.2483 17.2798 1 16.001 1C14.7119 1 13.4746 1.25293 12.3387 1.71558C11.0171 2.2522 9.83167 3.06787 8.84888 4.09534C7.02173 6.00562 5.88794 8.65613 5.88794 11.5726C5.88794 14.4879 7.02173 17.1361 8.84888 19.0463C10.676 20.9589 13.2112 22.144 16.001 22.144C18.7895 22.144 21.3248 20.9589 23.1521 19.0463C24.979 17.1361 26.1128 14.4879 26.1128 11.5726ZM16.001 20.1774C13.7246 20.1774 11.6735 19.217 10.1796 17.6575C8.68896 16.0957 7.76928 13.9524 7.76928 11.5726C7.76928 9.19287 8.68896 7.04602 10.1796 5.48767C11.1533 4.47192 12.3623 3.70935 13.719 3.3009C14.4416 3.08557 15.2084 2.96789 16.001 2.96789C16.7811 2.96789 17.5365 3.07958 18.2513 3.29382C19.6193 3.69751 20.8406 4.46496 21.8213 5.48767C23.3119 7.04602 24.2316 9.19287 24.2316 11.5726C24.2316 13.9524 23.3119 16.0957 21.8213 17.6575C20.3273 19.217 18.2773 20.1774 16.001 20.1774H16.001Z"
          fill="currentColor"
        />
        <path
          d="M8.73693 20.2417C8.5841 20.118 8.42992 19.9956 8.28161 19.8638L8.28051 19.8674L8.26867 19.8579L4.60461 27.7047L4.5 27.986L4.63892 28.206C4.73902 28.3591 4.90125 28.4498 5.08265 28.4498H5.16847L8.67006 27.3611L10.0552 30.6754C10.1413 30.8707 10.327 31.0002 10.5426 31.0002C10.7473 31.0002 10.9334 30.8802 11.0192 30.6942L13.8534 24.6258L14.6901 22.8428L14.6867 22.8415L14.6925 22.8274C12.4611 22.5096 10.4225 21.5869 8.73695 20.2417L8.73693 20.2417Z"
          fill="currentColor"
        />
        <path
          d="M24.5542 21.6375L23.7314 19.8685L23.728 19.8709L23.7222 19.8579C22.0745 21.3091 20.0334 22.3248 17.7903 22.7356C17.6323 22.7639 17.4761 22.7957 17.3159 22.8168L17.3171 22.8203L17.303 22.8239L20.9763 30.6942C21.062 30.8814 21.248 31.0002 21.4529 31.0002C21.6685 31.0002 21.8542 30.8707 21.9402 30.6754L23.3254 27.3611L26.7598 28.4262L26.8408 28.4498H26.9128C27.094 28.4498 27.2563 28.3591 27.3564 28.2061L27.5002 27.939L24.5542 21.6375Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="challenge_icon">
          <rect width="23.0002" height="30.0003" fill="white" transform="translate(4.5 1)" />
        </clipPath>
      </defs>
    </svg>
  );
}
