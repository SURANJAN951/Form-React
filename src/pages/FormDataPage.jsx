import { useSelector } from "react-redux";

const FormDataPage = () => {
  const data = useSelector((state) => state.form.data);

  return (
    <div>
      <h2>Form Data</h2>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
    </div>
  );
};

export default FormDataPage;
