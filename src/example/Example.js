import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ExamplePart1 from "./Example.part1";
import ExamplePart2 from "./Example.part2";
import ExamplePart3 from "./Example.part3";

import { isSubmitExample } from "./selector";
import { submitExample } from "./actions";
const Example = () => {
  const isSubmit = useSelector(isSubmitExample);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(submitExample());
  };

  return (
    <div>
      <ExamplePart1 />
      <ExamplePart2 />
      <ExamplePart3 />
      <button disabled={isSubmit} onClick={() => onSubmit()}>
        submit
      </button>
    </div>
  );
};

export default Example;
