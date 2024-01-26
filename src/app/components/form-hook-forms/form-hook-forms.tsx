"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "..";

type InputProps = {
  name: string;
};

export const FormHookForms = () => {
  const { register, handleSubmit } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Teste" {...register("name")} label="Teste" />
      <button type="submit">Enviar</button>
    </form>
  );
};
