"use client";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input, TextArea } from "..";
import { SelectItems } from "./types";
import { Select } from "../select";

type InputProps = {
  name: string;
  description: string;
  items: string;
};

const selectItems: SelectItems[] = [
  { name: "Federer", id: 1 },
  { name: "Nadal", id: 2 },
];

export const FormHookForms = () => {
  const { register, handleSubmit, control } = useForm<InputProps>();

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
      <Controller
        name="items"
        control={control}
        render={({ field }) => (
          <Select {...field} items={selectItems} label="Items:" />
        )}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
