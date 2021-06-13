import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";

function App({ data }) {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    //
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      name: data.info.name,
      parameters: {
        settings: components
      }
    };
    console.log(newData);
  };

  const handleChange = (id, event) => {
    data.fields.forEach((field) => {
      const newElements = { ...field };
      const { field_id } = newElements;

      if (id === field_id) {
        field["field_value"] = event.target.value;
        setComponents((prevState) => ({
          ...prevState,
          [field_id]: field["field_value"]
        }));
      }
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h4>
          Indicador: <b>{data.info.name}</b>
        </h4>
        <form>
          {data.fields.map((field) => (
            <Element key={field.field_id} field={field} />
          ))}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Enviar
          </button>
          <br />
          <br />
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
