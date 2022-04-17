import './App.css';
import ListTabNews from './components/ListTabNews';
import TabsSearch from './components/TabsSearch';
import OtherLinks from './components/OtherLinks';

function App() {
  return (
    <>
      <ListTabNews/>
      <TabsSearch/>
      <img className='img-forsazh' src='' alt='img-forsazh'/>

      <div className='container'>
        <div className='row'>

        <div className='col offset-1'>
          <OtherLinks  title={'Погода'}>
            <div className='content'>
            <div className='weather temp'> +17</div>
            <div className='weather'><span className='span-weather'>Утром +17</span>
                <span className='span-weather two'>Утром +20</span>
            </div>
            </div>

            <OtherLinks  title={'Посещаемое'}>
              <ul>
                <li><strong>Недвижимость </strong> - о сталинках</li>
                <li><strong>Маркет </strong> - люстры и светильники</li>
                <li><strong>Авто.ру </strong> - привод 4х4 до 500 000</li>
              </ul>
            </OtherLinks>
          </OtherLinks>
        </div>
        <div className='col offset-1'>
          <OtherLinks title={'Карта Германии'}>
            <p>Расписания</p>
            <OtherLinks title={'Телепрограмма'}>
                <ul>
                  <li>02:00 THT.Best</li>
                  <li>02:15 Джинглики</li>
                  <li>02:25 Наедине со всеми</li>
                </ul>
            </OtherLinks>
          </OtherLinks>
        </div>

        <div className='col offset-1'>
          <OtherLinks title={'Эфир'}>
            <div className='content'>
              <ul>
                <li>Управление как исскуство</li>
                <li>Ночь. Мир в это время  </li>
                <li>Андрей Возн... </li>
              </ul>
            </div>
          </OtherLinks>
        </div>

        </div>
      </div>
    </>
  )
}

export default App;
