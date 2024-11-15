import * as Icon from 'react-bootstrap-icons';
import '../components/search.css';


const SearchKeyword = ({ setSearch, searchItem }) => {
    return (  
      <div  className="main" >
             <form  onSubmit={(e)=> e.preventDefault()} className="SearchForm">
                    <input
                        type="text"
                        required
                        id="inputSearch"
                    placeholder="Search menu Items..."
                    value={searchItem}
                    onChange={(e)=>{setSearch(e.target.value)}}
                    />
                  <Icon.Search className="iconSearch"/>
            </form>
            </div>  
    );
}
 
export default SearchKeyword;