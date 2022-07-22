import { ideas } from "./assets/ideas";
import { Credits, DatesList, Introduction, RandomDate } from "./components";

export const App = () => {

  return (
    <>
      <div className="info">
        <div></div>
        <div>
        <Introduction/>
        <RandomDate ideas={ideas}/>
        <DatesList ideas={ideas}/>
        <Credits/>
        </div>

        <div></div>
      </div>
    </>
  );
};
