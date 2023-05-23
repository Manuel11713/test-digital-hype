import { Card, Text } from "@chakra-ui/react";
import { Decoded } from "@/types";

type Props = {
  decoded: null | Decoded;
};

const ParsedKeys = {
  first_name: "First Name",
  last_name: "Last Name",
  id: "ID",
} as const;

type Key = keyof typeof ParsedKeys;

export const Result = ({ decoded }: Props) => {
  return (
    <Card padding={10}>
      {decoded && (
        <>
          {Object.keys(decoded).map((decodedKey) => (
            <Text key={decodedKey}>
              <Text fontWeight="bold" as="span">
                {ParsedKeys[decodedKey as Key]}
              </Text>
              <Text as="span">{decoded[decodedKey as Key]}</Text>
            </Text>
          ))}
        </>
      )}
    </Card>
  );
};
