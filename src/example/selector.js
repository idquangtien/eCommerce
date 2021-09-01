import { isEmpty, every } from "lodash";

export const getExampleDataPart1 = (state) => ({
  a: state.example.a,
  b: state.example.b,
});

export const getExampleDataPart2 = (state) => ({
  c: state.example.c,
  d: state.example.d,
});

export const getExampleDataPart3 = (state) => ({
  e: state.example.e,
  f: state.example.f,
});

export const isSubmitExample = (state) => {
  if (every(state.example, isEmpty)) {
    return true;
  }
  return false;
};
