"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, TextArea } from "..";

type InputProps = {
  name: string;
  description: string;
};

export const FormHookForms = () => {
  const { register, handleSubmit } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Teste" {...register("name")} label="Teste" />
      <TextArea
        label="TextArea:"
        placeholder="Testando"
        {...register("description")}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
