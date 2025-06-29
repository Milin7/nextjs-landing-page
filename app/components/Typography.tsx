import { createElement, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  color?: "white" | "neon" | "grey";
  component?: "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4";
  id?: string;
  itemProp?: string;
  mb?: "0" | "2" | "4" | "6" | "8" | "12" | "16" | "20" | "24" | "32";
  mt?: "0" | "2" | "4" | "6" | "8" | "12" | "16" | "20" | "24" | "32";
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "mainHeading"
    | "paragraph"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "center"
    | "start";
};

const colorStyles = {
  white: "text-white",
  neon: "text-landing-neon",
  grey: "text-gray-400",
};

const variantStyles = {
  heading1: "text-9xl opacity-10 font-extrabold tracking-wide-50 uppercase",
  heading2: "text-2xl tracking-wider uppercase ",
  heading3: "text-xl font-semibold tracking-wider ",
  heading4: "text-xl  uppercase",
  mainHeading: "text-xl tracking-wide-5 uppercase",
  paragraph: "text-base leading-relaxed",
  "text-sm": "text-sm",
  "text-base": "text-base",
  "text-lg": "text-lg",
  "text-xl": "text-xl",
  "text-2xl": "text-2xl",
  "text-3xl": "text-3xl",
  "text-4xl": "text-4xl",
  center: "flex justify-center",
  start: "flex justify-start",
};

const marginBottomStyles = {
  "0": "mb-0",
  "2": "mb-2",
  "4": "mb-4",
  "6": "mb-6",
  "8": "mb-8",
  "12": "mb-12",
  "16": "mb-16",
  "20": "mb-20",
  "24": "mb-24",
  "32": "mb-32",
};

const marginTopStyles = {
  "0": "mt-0",
  "2": "mt-2",
  "4": "mt-4",
  "6": "mt-6",
  "8": "mt-8",
  "12": "mt-12",
  "16": "mt-16",
  "20": "mt-20",
  "24": "mt-24",
  "32": "mt-32",
};

export default function Typography({
  children,
  className,
  color = "white",
  component = "span",
  id,
  mb,
  mt,
  variant,
  itemProp,
}: PropsWithChildren<Props>) {
  const baseStyles = variant ? variantStyles[variant] : "";
  const colorStyle = colorStyles[color];
  const mbStyle = mb ? marginBottomStyles[mb] : "";
  const mtStyle = mt ? marginTopStyles[mt] : "";

  const combinedClassName = twMerge(
    baseStyles,
    colorStyle,
    mbStyle,
    mtStyle,
    className
  );

  return createElement(
    component,
    {
      className: combinedClassName,
      id,
      itemProp,
    },
    children
  );
}
