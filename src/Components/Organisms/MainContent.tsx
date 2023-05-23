import { useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { FormEncoded } from "../Molecules/FormEncoded";
import { Result } from "../Molecules/Result";
import { Decoded } from "@/types";

export const MainContent = () => {
  const [decoded, setDecoded] = useState<null | Decoded>(null);
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={10} padding={10}>
      <Box>
        <FormEncoded setDecoded={setDecoded} />
      </Box>
      <Box>
        <Result decoded={decoded} />
      </Box>
    </SimpleGrid>
  );
};

export default MainContent;
