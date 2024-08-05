// Type

export function calculate(
  unit_as_string: string | any = "",
  option_input: number,
  option_output: number,
  inputvalue: number
): number {
  //
  let result: number;

  //
  if (!inputvalue || !option_input || !option_output) return (result = 0);
  //
  if (option_input === option_output) return (result = inputvalue);
  //
  result = inputvalue * (option_input / option_output);

  return result;
}
