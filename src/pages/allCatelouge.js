import Navbar from '../assets/Navbar';
import CardDesign from '../components/cardDesign';
import { likeData } from "data/youMayLikeData";
import Catelouge from 'components/dashboardComponents/catelouge';
import YouMayLike from 'components/YouMayLike';
import SortBy from 'components/sortBy';
import FilterData from 'components/filterBy';

const AllCategory = () => {
    return (
        <div classNameName='mb-8'>
            <Navbar />
            <div className="container mx-auto flex items-center justify-between my-5">
                <FilterData />
                <SortBy />
            </div>
            <CardDesign likeData={likeData} title="Category 1" />
            <CardDesign likeData={likeData} title="Category 2" />
            <CardDesign likeData={likeData} title="Category 3" />
            <CardDesign likeData={likeData} title="Category 4" />
            <Catelouge />
            <YouMayLike />
        </div>
    )
}

export default AllCategory;