// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function LightBulbIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M12 4C15.3137 4 18 6.68629 18 10C18 11.8202 17.1895 13.4511 15.9097 14.5514L14.9806 19.1961C14.8949 19.6246 14.5429 19.943 14.1176 19.9931L14 20H10C9.56304 20 9.18177 19.7173 9.04925 19.3101L9.01942 19.1961L8.0903 14.5514C6.81051 13.4511 6 11.8202 6 10C6 6.68629 8.68629 4 12 4ZM12 6C9.79086 6 8 7.79086 8 10C8 11.8636 9.2744 13.4295 10.9992 13.8738L11 11C9.71264 11 9.66825 9.13555 10.8668 9.00697L11 9H13C13.5523 9 14 9.44772 14 10C14 10.5128 13.614 10.9355 13.1166 10.9933L13 11L12.9998 13.874C14.7251 13.4301 16 11.8639 16 10C16 7.79086 14.2091 6 12 6Z" />
    </Icon>
  );
}
