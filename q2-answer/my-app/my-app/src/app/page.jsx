
import {getData} from "../../utils/getData";
import MultiActionAreaCard from "../../component/Card";
export default async function Home() {
  const url="https://67936e815eae7e5c4d8e9f86.mockapi.io/users";
 const data=await getData(url);
  return (
    <div >
      <MultiActionAreaCard members={data}/>
    </div>
  );
}
