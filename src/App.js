
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import StarRating from './StarRating';
/* import of routes , route */
import {Routes,Route} from 'react-router-dom'
import Details from './Details';


// root component and insert the serie with using hook 
function App() {
      const[movie,setMovie] = useState([{
        id:1,
        title:'ÜÇ KİZ KARDEŞ',
        description :'The story of three sisters and the obstacles they must overcome will be told. With Turkan s marriage, dark clouds will begin to hover over the family and nothing will be the same again.',
        rating :2.5,
        poster:'i2.jpeg',
        trailer:'https://www.youtube.com/watch?v=eAms5Xm-qpk'
      },
    {
      id:2,
      title:'AILE',
      description :'Aile is the story of Aslan, son of a large family, who runs a nightclub. An extremely cunning man. The psychologist Devin will enter the life of this difficult man and it becomes intense.',
      rating :4,
      poster:'i1.jpg',
      trailer :'https://www.youtube.com/watch?v=5s_s1anHDOY'
    },
    {
      id:3,
      title:'TEŞKILAT',
      description :'The plot is based on a story about Turkish secret service agents who allegedly died in a plane crash during operations against "Western enemies".',
      rating :5,
      poster:'i6.jpg',
      trailer:'https://www.youtube.com/watch?v=AtsToFrmQ44'
    },
    {
      id:4,
      title:'SADAKATSIZ',
      description :'Doctor Asya lives a peaceful and happy life in Tekirdağ with her husband Volkan (Caner Cindoruk) and their son Ali. This situation changes when she learns that her husband has been having an affair with a young woman named Derin for two years. Asya must choose between saving her marriage or taking revenge on her unfaithful husband.',
      rating :3.5,
      poster:'i8.jpg',
      trailer:'https://www.youtube.com/watch?v=zQO1oono-ps'
    },
    {
      id:5,
      title:'BAHT OYUNU',
      description :'Ada is a young girl who believes that if she is abandoned by her first love, she will be unhappy forever like the women on her mother s side. While trying to escape her family s fate, Ada falls in love with Rüzgar, an Albanian student at the same university facing expulsion. Believing that Rüzgar is his first love.',
      rating :2.5,
      poster:'i11.jpg',
      trailer:'https://www.youtube.com/watch?v=XWG-Y926X64'
    },
    {
      id:6,
      title:'MUCIZE DOCTOR',
      description :'Ali has Savant syndrome, making it hard for him to communicate with other people, even though he is a phenomenal doctor.',
      rating :4,
      poster:'i10.jpg',
      trailer:'https://www.youtube.com/watch?v=xLpNrVFQmsU'
    },
    {
      id:7,
      title:'SAKLA BENI',
      description :'Mete and Naz, born into affluent and influential families, are bound together by a promise made during their childhood. This promise stems from a tragic incident where Naz s innocence was compromised, and Mete s family offered unwavering support',
      rating :4,
      poster:'i4.jpg',
      trailer:'https://www.youtube.com/watch?v=wirWyJlWy3w'
    },
    {
      id:8,
      title:'RUHUM DUYMAZ ',
      description :'An agent who sees nothing but his job with the eyes of honor; Ece,is a dazzling professional thief with a thousand and one skills.',
      rating :3,
      poster:'i3.png',
      trailer:'https://www.youtube.com/watch?v=mzMji85GyJQ'
    },
    {
      id:9,
      title:'KIZILCIK ŞERBETI ',
      description :'Kizilcik Şerbeti series is about two families that are not at all alike and have different perspectives on life. It tells about the fact that the children of the two families in question have to be together for their marriage and happiness, and the difficulties that this brings. In the series of Kızılcık Şerbeti; families with two different worldviews have to unite their lives for their children; that is, they will be told to drink cranberry sherbet for their children.',
      rating :2,
      poster:'i5.png',
      trailer:'https://www.youtube.com/watch?v=hP79rOed0iU'
    },
    {
      id:10,
      title:'KASABA DOKTORU',
      description :'Based on the KDrama, Dr. Romantic. The series follows an eccentric, triple board-certified virtuoso surgeon who leaves a top job in a top city hospital and ends up at a provincial hospital, where he mentors young doctors',
      rating : 1.5,
      poster:'i.png',
      trailer:'https://www.youtube.com/watch?v=qw0B8VFAdc0'
    },
    {
      id:11,
      title:'HUDUTSUZ SEVDA',
      description :'The series followed Halil Ibrahim as he seeks revenge for the death of the love of his life. His plans are derailed when he meets Zeynep from the Leto family.',
      rating : 3,
      poster:'i7.jpg',
      trailer:'https://www.youtube.com/watch?v=3UJNcU45I4k'
    }

    ])
    /* use hooks for filer serie  with title and rating */
    const[filterTitle,setFilterTitle]= useState("")
    const[filterRating,setFilterRating]=useState(1)
  
    /* function for the button add to ad a movie*/
    const handleAdd = (newMovie) => {
      setMovie([...movie,newMovie]);
      }
      /* function for filter with title*/
      const filterData =(filtered)=>{
        setFilterTitle(filtered)
      }
      /* function for filter with  rating*/
      const filterRate =(filtRate) =>{
        setFilterRating(filtRate)
      }
      /* root component and navigate to the router path in component details*/
      /* insert two path : movie list component and details componenet*/
  return (
    <div className="App " >
      <div className="title container-title">
          <h2 >TURKISH SERIES</h2>
          <input type="text" placeholder="Write the name of serie" onChange={(e) => filterData(e.target.value)}/> 
          <AddMovie handleAdd={handleAdd}/>
      </div>
      <div className='star'> <StarRating filterData={filterData} filterRate={filterRate}/></div>
  <Routes>
    <Route path='/' element={<MovieList movie={movie.filter((movie) => movie.rating >= filterRating && movie.title.toLocaleLowerCase().includes(filterTitle.trim().toLowerCase()))}/>}/>
    <Route path='/details/:id' element={<Details movie={movie} />}/>
  </Routes>
    </div>
  );
}

export default App;
