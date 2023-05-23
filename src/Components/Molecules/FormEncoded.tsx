import {
  Button,
  Card,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { parseEncoded } from "@/utils/encoded";
import { Decoded } from "@/types";

/**
 * @setDecoded function: sets the state of the decoded value
 **/

type Props = {
  setDecoded: (v: Decoded) => void;
};

export const FormEncoded = ({ setDecoded }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ encoded: string }>();

  const toast = useToast();

  const onSubmit = (data: { encoded: string }) => {
    try {
      const decoded = parseEncoded(data.encoded);
      setDecoded(decoded);
      reset();
    } catch (err: any) {
      toast({
        title: String(err.message),
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Card padding={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.encoded)}>
          <FormLabel>Encoded</FormLabel>
          <Input
            id="encoded"
            type="text"
            {...register("encoded", { required: true })}
          />
          {errors.encoded && (
            <FormErrorMessage>Encoded value is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit" mt={5} w="full" colorScheme="twitter">
          Decode
        </Button>
      </form>
    </Card>
  );
};
