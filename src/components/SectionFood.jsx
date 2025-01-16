import resto10 from '../restos/resto10.jpg';
import '../components/zeus.css';

const SectionFood = () => {
  return (
      <>
      <section className="wrapperzeus">
        <div className='sectionfood'>
          <div className='zeusresume'>
          <h2>Zeus Restos</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi tempora voluptate, fugiat asperiores facilis ducimus at, veniam ea reiciendis accusamus libero. Sint nobis doloribus voluptatem corporis rem enim delectus similique.
                  Id fuga saepe soluta expedita deserunt ut tempore quos a pariatur voluptates porro quisquam impedit repellat asperiores ratione labore iusto, corrupti eveniet? Optio doloribus esse officiis labore ducimus, tempora distinctio.
                  Minus debitis incidunt obcaecati aut beatae amet magni iure, ratione commodi quos ullam illum voluptatibus deserunt est natus blanditiis id voluptate! Dolores quaerat ipsam corrupti id quos aut aliquid omnis!
                  facilis culpa dolorem modi voluptate autem asperiores odit veritatis maiores!</p>
          </div>
          <div className="zeus">
            <img src={resto10} alt="zeus picture"/>
          </div>
        </div>
      </section>    
      <hr className='zeushoriz'></hr> 
      </>    
       
          
    );
}
 
export default SectionFood;