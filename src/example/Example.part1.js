import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExampleDataPart1 } from "./selector";
import { updateExampleData } from "./actions";

const ExamplePart1 = memo(() => {
  const exampleDataPart1 = useSelector(getExampleDataPart1);
  const { a, b } = exampleDataPart1;
  const dispatch = useDispatch();

  const onChange = (key, e) => {
    const value = e.target.value;
    dispatch(updateExampleData(key, value));
  };
  return (
    <>
      <div>
        <label>a</label>
        <input value={a || ""} onChange={(e) => onChange("a", e)} />
      </div>
      <div>
        <label>b</label>
        <input value={b || ""} onChange={(e) => onChange("b", e)} />
      </div>
    </>
  );
});

export default ExamplePart1;
