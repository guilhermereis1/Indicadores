import formJSON from "./formElement.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";

function App() {
  const [data, setData] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    setData(formJSON);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = {
    //   name: "ma/SimpleMA",
    //   parameters: {
    //     settings: components
    //   }
    // };
    console.log("c", components);
  };

  const handleChange = (id, event) => {
    data.forEach((field) => {
      const newElements = { ...field };

      newElements.fields.forEach((f) => {
        const { field_id } = f;

        if (id === field_id) {
          field["field_value"] = event.target.value;
          setComponents((prevState) => ({
            ...prevState,
            [field_id]: field["field_value"]
          }));
        }
      });
    });
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        {data &&
          data.map((e, i) => (
            <form key={i}>
              <br />
              <br />
              <h4>Indicador: {e.info.name}</h4>
              {e.fields
                ? e.fields.map((field, i) => <Element key={i} field={field} />)
                : null}
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleSubmit(e)}
              >
                Enviar
              </button>
            </form>
          ))}
      </div>
    </FormContext.Provider>
  );
}

export default App;
