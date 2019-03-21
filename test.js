 //------------------------------- Методы жизненного цикла REACT COMPONENT ----------------------------------
  // Бывают этапы: ------- на каждом этапе есть функции жизненного цикла ----------------------
  // 1. MOUNTING ----- то когда компонент создается и первый раз отображается на странице
  // Процесс MOUNTING: сперва вызывается конструктор затем Реакт вызывает Рендер и затем componentDidMount()
  // constructor() => render() => componentDidMount()
  // componentDidMount() вызывается если компонент удачно отрисовался на странице в первый раз
  // удачный метод что бы делать запросы к АРI // инициализацию компонентов которые зависят от внешних источников данных лучше проводить в DidMount
  
  // 2. UPDATES  -- это тот этап когда компонент отобразился он работает и он может получать обновления
  // Каким образом происхлдят Updates(обновления)?:
  // или New Props - пришли новые св-ва 
                                                      // любое из этих 2х событий вызывает render() те мы получ новое дерево элем реакт и затем 
                                                      // componentDidUpdate()  - Реакт дает нам шанс сделать что нибудь как компонент обновился
  // или SetState - Компонент вызвал SetState благодаря какому нибудь событию

  // 3. UNMOUNTING -- это этап когда компоенент удаляется со страницы
  // Когда Компонент становится не нужен вызывается просто componentWillUnmount()

  // 4. ERROR -- это этап ошибки которае не была поймана раньше
  // componentDidCatch()
  //------------------------------- Методы жизненного цикла REACT COMPONENT ----------------------------------

/*
state = {
    swapiService: new  SwapiService(),
----------------------------------------
onChangeContext = ( ) => {
this.setState(({swapiService})=> {
  const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
  console.log('swapi is', Service.name);  

  return {
    swapiService: new Service()
  }
  })
}
--------------------------------------------
 <SwapiSeviceProvider value={this.state.swapiService}>
 =================== Route ========================================
 ---------------------------------------------
 <Route path="/people/:id?" component={PeoplePage}/>
 <Route path="/starships" exact component={StarshipPage} />
 ----------------------------------------------
 <Route path="/starships/:id" render={ ({ match }) =>  {
          console.log(match)
          const { id } = match.params
          return <StarshipDetails itemId = {id}/>
         }} />
------------------------------------------------
<Route path="/login" render={() => (
          <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
        )} />
        <Route path="/secret" render={() => (
          <SecretPage isLoggedIn={isLoggedIn} />
        )} />
-------------------------------------------------
{ НЕ один route не сработал то
        // {/* Или redirect импользовать на другую страницу 
        // <Route render={() => <h2>Page not found</h2>} />
</Switch>
Header
import { Link } from 'react-router-dom'
<Link to="/people/">People</Link>
<Link to="/"</Link>
=================== Route ========================================
---------------------------------------------------------
const Record = ( {item, field, label} ) => {
  return (
<li className="list-group-item">
  <span className="term">{label}</span>
  <span>{item[field]}</span>
</li>
  );
};
-------------------------------------------------------        
componentDidUpdate(prevProps) { // если компонент обновляется мы получаем prevProps
// нужо проверить что изменилось именно то свовйсво за которым я сслежу
if(this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData
  || this.props.getImageUrl !== prevProps.getImageUrl) { // сравнить предыдущее состояние с текущим и решить нужно что то делать или нет
// внутри писать логику которая влияет на изменение св-в и стейта компонента
this.updateItem();
this.setState({
  loading: true
    })
  }
}
----------------------------------------------------------
getData(itemId)
.then((item) => {
this.setState( {
  item,
  image: getImageUrl(item),
  loading: false
    });
  });  
}
-----------------------------------------------------------
React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child, { item } ) // добавится новое св-во в child элемент при создании
                })
                }
                </ul>
                </div> 
                : null
----------------------------------------------------------
import ItemDetails, { Record } from './item-details'
import withSwapiService  from '../sw-components/with-swapi-service'

const PersonDetails = (props) => { 
    // const {getPerson, getImagePersons} = swapiService
    return (
    <ItemDetails {...props} >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="EyeColor" />
    </ItemDetails>
     )
}

   const mapContentToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getImagePersons
    }
};

export default withSwapiService(mapContentToProps)(PersonDetails) 
---------------------------------------------------------------
const {data, onItemSelected, children: renderLabel } = props
  
  const items =  data.map((item) => {
  const { id } = item
  // const label = this.props.children(item)
  const label = renderLabel(item)
----------------------------------------------------------------
ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object), // data массив обьектов
  children: PropTypes.func.isRequired
}
static defaultPropTypes
-----------------------------------------------------------
import  { PersonList } from '../sw-components/item-lists'
import PersonDetails from '../item-details/person-details'
import { withRouter } from 'react-router-dom'
// import './people-page.css'
import Row from './../row-item';
const PeoplePage = ({ match, history}) => {

        const { id } = match.params
        return(
            <Row left={<PersonList onItemSelected={(id) => history.push(id)} /> } 
                 right={<PersonDetails itemId={id} /> } />
    )
}
------------------------------------------------------
            <h1>This Page is full of Secret!!!</h1>
            </div>    
            )
    }
    // return <p>You should not see this!!!</p>
    return <Redirect to="/login" />
    -------------------------------------------------


export default withRouter(PeoplePage)
-------------------------------------------------------------
render() {  
        const itemList = (
            <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}>
            {({name, gender, birthYear}) => `${name} ${gender}  ${birthYear}` }
           </ItemList>
        )
-------------------------------------------------
 static defaultProps = {
    updateInterval: 10000
  };
  static propTypes = {
    updateInterval: PropTypes.number
  }
  componentDidMount() {
    const { updateInterval } = this.props
    this.interval = setInterval(this.updatePlanet, updateInterval);
}
updatePlanet = () => { // отрифакторили код updatePlanet он читает ся теперь легче
  const id = Math.floor(Math.random() * 19 + 3); // Math.floor округлить число до ближаешего целого
  this.swapiService
  .getPlanets(id)
  .then(this.onLoadedPlanet) // асинхронное событие
  .catch(this.onError)
}
const { planet, loading, error } = this.state
        
      const hasData = !(loading || error) // когда у нас нет не загрузки не ошибки

      const errorMessage = error ? <ErrorIndicator /> : null
      const spinner = loading ? <Spinner /> : null;
      const content = hasData ? <PlanetView planet={planet} /> : null
---------------------------------------------------------------------------
============================================================================
import React from 'react'
import WithData from '../../hoc/with-data'
import ItemList from '../item-list/item-list'
import withSwapiService from './with-swapi-service'
import  compose from '../../hoc/compose'

// const swapiService = new SwapService()
// const { getAllPeople, getAllPlanets, getAllStarships } = swapiService

const WrapperFuncItem = (fc) => (Wrapper) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fc}
            </Wrapper>
        )
    }
}

const add = (a) => (b) => a + b
add(1)(2)
// наш первый вызов создает функцию которая принимает часть аргументов и она возвращае анонимную функцию которая принимает остальные аргументы
и выполняет нужные нам действия
// так можно разделить аргументы на две группы например в первой гр-ппе будут все аргументы которые исп-тся для конфигурации компонента 
hoc withSwapiService(toPropsPlanets) , а во второй только сам компонент который мы оборачиваем


// const Wr = WrapperFuncItem(ItemList, renderName)
// композиция функций
// 3 функции каждая из которых работает с результатом вызова предыдущей функции 
// - withSwapiService(WithData (WrapperFuncItem(ItemList, renderName)), toPropsPeople)


композиция функций
const compose = (...funsc) => (comp) => {
    ...
}
compose(a,b,c)(value)
-
// всеравно что a(b(c(value)));

const PersonList = compose(
    withSwapiService(toPropsPeople),
    WithData,                
    WrapperFuncItem(renderName)
    )(ItemList);
    
const PlanetList = compose(
    withSwapiService(toPropsPlanets),
    WithData,
    WrapperFuncItem(renderName)
    )(ItemList);
 
    const StarshipList = withSwapiService(toPropsStarships)(
                        WithData (
                            WrapperFuncItem(renderItemStarship)(
                                ItemList)))





// const PersonList = withSwapiService(toPropsPeople)(  // и так далее пока мы не закончим цепочку
//     WithData( // рузультат этой функции передали функцие выше
//         WrapperFuncItem(renderName)( // вызвали функцию -> рузультат этой функции передали функцие выше
//         ItemList))) // получили аргумент


// const PlanetList = withSwapiService(WithData (WrapperFuncItem(ItemList, renderName)), toPropsPlanets)
 
// const PersonList = () => WithData (ItemList, getAllPeople) так недопустимо Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
export {
    PersonList,
    PlanetList,
    StarshipList
}
====================================================================================
import React from 'react'
import PropTypes from 'prop-types'

const Row = ( {left, right} ) => {
 return( 
 <div className="row mb2">
        <div className="col-md-6">
            {left}
    </div>
    <div className="col-md-6">
            {right}
    </div>
  </div>
 )
}

Row.propTypes = {
left: PropTypes.node, // компонент который рендерится
right: PropTypes.node
}

export default Row ------------------------------
============================================================================

*/

