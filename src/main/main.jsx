import astro from '../img/user-astronaut-solid.svg'
function Main(){
  return <main>
    <div className="card">
      <div className='astro-div'>
        <img src={astro} alt="" />
        <div className='profile-div'>
          <h1>Nika</h1>
          <h1>Axalkaci</h1>
          <a target='_blank' href="https://github.com/Nika-Axalkaci">Github</a>
        </div>
        </div>
    </div>
  </main>
}
export default Main