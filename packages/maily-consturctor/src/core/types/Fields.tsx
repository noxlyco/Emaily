type FieldOptionType = {
  label: string;
  value: string | number | boolean;
};

export type BaseFieldType = {
  label?: string;
  defaultValue?: string | number | boolean;
};

export type TextField = BaseFieldType & {
  type: "text";
};

export type TextareaField = BaseFieldType & {
  type: "textarea";
};

export type NumberField = BaseFieldType & {
  type: "number";
  min?: number;
  max?: number;
};

export type SelectField = BaseFieldType & {
  type: "select";
  options: FieldOptionType[];
};

export type RadioField = BaseFieldType & {
  type: "radio";
  options: FieldOptionType[];
};

export type ObjectField = BaseFieldType;

export type ArrayField = BaseFieldType;

export type FieldType =
  | TextField
  | TextareaField
  | NumberField
  | SelectField
  | RadioField;

