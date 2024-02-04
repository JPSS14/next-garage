"use client";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input, TextArea } from "..";
import { SelectItems } from "./types";
import { Select } from "../select";
import { useState } from "react";

type InputProps = {
  name: string;
  description?: {
    title?: string;
    textDescription?: string;
  }[];
  items: string;
};

const selectItems: SelectItems[] = [
  { name: "Federer", id: 1 },
  { name: "Nadal", id: 2 },
];

export const FormHookForms = () => {
  const { register, handleSubmit, control } = useForm<InputProps>();
  const [descriptionIndex, setDescriptionIndex] = useState<number[]>([0]);

  const handleAddDescription = () => {
    setDescriptionIndex([...descriptionIndex, descriptionIndex.length]);
  };

  const onSubmit: SubmitHandler<InputProps> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Teste" {...register("name")} label="Teste" />
      {descriptionIndex.map((index) => (
        <div key={index}>
          <Input
            placeholder="Title"
            {...register(`description.${index}.title`)}
            label="Title"
          />
          <TextArea
            label="TextArea:"
            placeholder="Testando"
            {...register(`description.${index}.textDescription`)}
          />
        </div>
      ))}
      <Controller
        name="items"
        control={control}
        render={({ field }) => (
          <Select {...field} items={selectItems} label="Items:" />
        )}
      />
      <button type="submit">Enviar</button>
      <button onClick={() => handleAddDescription()}>
        Adiconar Description
      </button>
    </form>
  );
};
