// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function QuestionMarkIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16ZM12 6.5C9.82708 6.5 8 8.02257 8 10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10L10.0064 9.88299C10.0866 9.1462 10.9163 8.5 12 8.5C13.1408 8.5 14 9.21601 14 10C14 10.784 13.1408 11.5 12 11.5L11.8834 11.5067C11.386 11.5645 11 11.9872 11 12.5V13.5L11.0067 14.1166C11.0645 14.614 11.4872 15 12 15L12.1166 14.9933C12.614 14.9355 13 14.5128 13 14V13.389L13.2121 13.3366C14.8117 12.8936 16 11.5947 16 10C16 8.02257 14.1729 6.5 12 6.5Z" />
    </Icon>
  );
}
