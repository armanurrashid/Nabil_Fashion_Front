import Navbar from 'assets/Navbar';
import CardDesign from 'components/cardDesign';
import Catelouge from 'components/dashboardComponents/catelouge';
import SortBy from 'components/sortBy';
import YouMayLike from 'components/YouMayLike';
import FilterData from 'components/filterBy';
import { likeData } from "data/youMayLikeData";

const SubCategory =()=> {
  return (
    <div classNameName='mb-8'>
    <Navbar />
    <div className="container mx-auto flex items-center justify-between my-5">
        <FilterData />
        <SortBy />
    </div>
    <CardDesign likeData={likeData} title="Sub Category" slice={20}/>
    <Catelouge />
    <YouMayLike />
</div>
  )
}
export default SubCategory;