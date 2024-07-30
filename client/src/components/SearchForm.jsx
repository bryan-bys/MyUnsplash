import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ special }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    navigate(`/results/${data.query}`);
  });

  return (
    <>
      <div className={`form-container ${special ? "special" : ""}`}>
        <form onSubmit={onSubmit}>
          <input type="text" {...register("query", { required: true })} />
          <button>Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
