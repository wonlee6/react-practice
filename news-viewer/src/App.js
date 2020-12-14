import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './component/NewsList';
import Categories from './component/Categories';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {

  // NewsPage.js 에서 기능 수행
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);


  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://newsapi.org/v2/top-headlines?country=kr&apiKey=0535ad9d7107451db75d8dba29ce4579');
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  return <Route path="/:category?" component={NewsPage} /> // /:category? = 선택적이다. 있을수도있고 없을수도있다

  // (
  //   <ㄱ>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </ㄱ>
  // )


  // <div>
  //   <div>
  //     <button onClick={onClick}>불러오기</button>
  //   </div>
  //   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  // </div>


};

export default App;