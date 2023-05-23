import { Decoded } from "@/types";

export const parseEncoded = (encoded: string): Decoded => {
  if (!encoded) throw new Error("Invalid string");

  const breakpoint = /0+/;
  const splitted = encoded.split(breakpoint);

  if (splitted.length !== 3) throw new Error("Invalid string");

  return {
    first_name: splitted[0],
    last_name: splitted[1],
    id: splitted[2],
  };
};
