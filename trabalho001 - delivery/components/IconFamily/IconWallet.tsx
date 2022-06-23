import { IconProps } from "types";

export const IconWallet = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "24px"}
      height={size || "24px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.44444C0 2.1 1.12421 1 2.52632 1H20.2105C21.6058 1 22.7368 2.09442 22.7368 3.44444V6.23111C23.4821 6.65889 24 7.42889 24 8.33333V15.6667C24 16.5711 23.4821 17.3411 22.7368 17.7689V20.5556C22.7368 21.9056 21.6058 23 20.2105 23H2.52632C1.13107 23 0 21.9056 0 20.5556V3.44444ZM20.2105 3.44444H2.52632V20.5556H20.2105V18.1111H12.6316C11.2363 18.1111 10.1053 17.0167 10.1053 15.6667V8.33333C10.1053 6.9833 11.2363 5.88889 12.6316 5.88889H20.2105V3.44444ZM12.6316 8.33333H21.4737V15.6667H12.6316V8.33333ZM14.5263 12C14.5263 10.9875 15.3746 10.1667 16.4211 10.1667C17.4675 10.1667 18.3158 10.9875 18.3158 12C18.3158 13.0125 17.4675 13.8333 16.4211 13.8333C15.3746 13.8333 14.5263 13.0125 14.5263 12Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
