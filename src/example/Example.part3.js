import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExampleDataPart3 } from "./selector";
import { updateExampleData } from "./actions";

const ExamplePart3 = memo(() => {
  const exampleDataPart3 = useSelector(getExampleDataPart3);
  const { e, f } = exampleDataPart3;
  const dispatch = useDispatch();

  const onChange = (key, e) => {
    const value = e.target.value;
    dispatch(updateExampleData(key, value));
  };
  return (
    <>
      <div>
        <label>e</label>
        <input value={e || ""} onChange={(event) => onChange("e", event)} />
      </div>
      <div>
        <label>f</label>
        <input value={f || ""} onChange={(event) => onChange("f", event)} />
      </div>
    </>
  );
});

export default ExamplePart3;
