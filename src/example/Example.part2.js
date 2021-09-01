import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExampleDataPart2 } from "./selector";
import { updateExampleData } from "./actions";

const ExamplePart2 = memo(() => {
  const exampleDataPart2 = useSelector(getExampleDataPart2);
  const { c, d } = exampleDataPart2;
  const dispatch = useDispatch();

  const onChange = (key, e) => {
    const value = e.target.value;
    dispatch(updateExampleData(key, value));
  };
  return (
    <>
      <div>
        <label>c</label>
        <input value={c || ""} onChange={(e) => onChange("c", e)} />
      </div>
      <div>
        <label>d</label>
        <input value={d || ""} onChange={(e) => onChange("d", e)} />
      </div>
    </>
  );
});

export default ExamplePart2;
