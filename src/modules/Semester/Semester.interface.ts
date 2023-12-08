export type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TSemester = {
  name: "Autumn" | "Summer" | "Fall";
  code: "01" | "02" | "03";
  year: string;
  startMonth: TMonth;
  endMonth: TMonth;
};
