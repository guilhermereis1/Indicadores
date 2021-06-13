import formJSON from "./formElement.json";
import { useState, useEffect } from "react";
import App from "./App";

function Form() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(formJSON);
  }, []);

  return (
    <div>
      {data.map((d) => (
        <App key={d.info.name} data={d} />
      ))}
    </div>
  );
}

export default Form;
